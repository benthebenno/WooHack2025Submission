from google import genai
from dotenv import load_dotenv
import os
import glob

#load API key from environment file
load_dotenv()

api_key = os.getenv("API_KEY")
processed_dir = "Processed_Sound/"

client = genai.Client(api_key=api_key)

prompt_text = "This is audio from Air Traffic Control. Consider the average person at an aiport. They dont want to learn all the jargon to understand the incoming audio signals, and just want someone to do it for them in a short, concise manner. Please give information that is relevant to the average person at the airport and be as informative as possible. List all events that you can parse out, and how it might be relevant to the user. Produce a feed that could show up on an app for those trying to figure out whats going on the airport (imagine an app for this purpose). List each event as something that would be understandable to an average user. Since this is for an app, please start each event with a [event] and end it with a $ so the app can process this data."


file_paths = glob.glob(os.path.join(processed_dir, "*.mp3"))

if not file_paths:
    print(" No audio files found in Processed_Sound/")
    exit(1)

# we loop through each .mp3 file and process seperately (seperate API calls)
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

    print(f"{filename}:")
    print(response.text)
    print("-" * 50)  

print("🎉 All files processed successfully!")
