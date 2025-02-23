from google import genai
from dotenv import load_dotenv
import os
import glob
from pydub import AudioSegment
import json

def extract_title_parts(text):
    start_tag = "[title]"
    start_idx = text.find(start_tag)
    
    if start_idx == -1:
        return [None, None]  # No [title] found
    
    start_idx += len(start_tag)
    end_idx = text.find('$', start_idx)
    
    if end_idx == -1:
        # Return text after [title] and None for the second part
        return [text[start_idx:], None]
    
    # Extract both parts
    part_between = text[start_idx:end_idx]
    part_after = text[end_idx+1:]
    
    return [part_between, part_after]

load_dotenv()

api_key = os.getenv("API_KEY")
processed_dir = "Processed_Sound/"

client = genai.Client(api_key=api_key)

prompt_text = "This is audio from Air Traffic Control. Consider the average person at an aiport. They dont want to learn all the jargon to understand the incoming audio signals, and just want someone to do it for them in a short, concise manner. Please give information that is relevant to the average person at the airport and be as informative as possible. Keep in mind this should be a brief synopsis overviewing whats going on and how the average airport go-er can expect this to effect their experience. In addition before writing anything please come up with a title for the interaction as a whole and preface it with [title] and end it with a $."


file_paths = glob.glob(os.path.join(processed_dir, "*.mp3"))

if not file_paths:
    print(" No audio files found in Processed_Sound/")
    exit(1)

# Loop through and process each file separately

with open('../app/data/data.json', 'r') as file:
    response_dict = json.load(file)


max_id = float('-inf')
stack = [response_dict]

while stack:
    current = stack.pop()
    if isinstance(current, dict):
        # Check if the current dictionary has an 'id' field
        if 'id' in current:
            current_id = current['id']
            if current_id > max_id:
                max_id = current_id
        # Add all values to the stack to check for nested structures
        stack.extend(current.values())

if max_id != float('-inf'):
    print(f"The largest id found is {max_id}")
else:
    max_id = -1

max_id = max_id + 1

for file_path in file_paths:
    filename = os.path.basename(file_path)
    print(f" Uploading {filename}...")

    uploaded_file = client.files.upload(file=file_path)
    print(f"Uploaded {filename}: {uploaded_file.uri}")

    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=[
            prompt_text,
            {"file_data": {"file_uri": uploaded_file.uri}}
        ]
    )

    if not response_dict:
        response_dict.append({})

    title_extract = extract_title_parts(response.text[0])
    response_dict[0]["title"] = title_extract[0]
    response_dict[0]["id"] = max_id
    response_dict[0]["text"] = title_extract[1]
    max_id = max_id + 1

    with open("../app/data/data.json", 'r') as f:
        entries = json.load(f)
    
    entries.append(response_dict)
    
    json_object = json.dumps(entries, indent=4)

    with open("../app/data/data.json", "w") as outfile:
        outfile.write(json_object)



