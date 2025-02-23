from google import genai
from dotenv import load_dotenv
import os

#load API key from environment file
load_dotenv()

api_key = os.getenv("API_KEY")

client = genai.Client(api_key=api_key)

jargonfile = client.files.upload(file='atc_audio.wav')
response = client.models.generate_content(
        model='gemini-2.0-flash',
        contents=['This is audio from Air Traffic Control. Consider the average person at an aiport. They dont want to learn all the jargon to understand the incoming audio signals, and just want someone to do it for them in a short, concise manner. Please give information that is relevant to the average person at the airport and be as informative as possible. List all events that you can parse out, and how it might be relevant to the user. Produce a feed that could show up on an app for those trying to figure out whats going on the airport (imagine an app for this purpose). List each event as something that would be understandable to an average user. Since this is for an app, please start each event with a [event] and end it with a $ so the app can process this data.',
                  jargonfile
                  ]
        )

print(response.text)


