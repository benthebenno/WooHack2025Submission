# WooHack2025Submission

## Our App hopes to solve the issues of transparency and safety of the aviation industry

The app delivers translated information directly to users, providing them with clear, real-time updates about their flight, including safety status, delays, and any critical incidents.

## How to get SkyWatch up and running

To get this app working in its demo form, you will need python and expo.

After installing those two programs, run npm -i (to install all expo dependencies), then run pip install -r ./requirements.txt while inside the backend folder (this will install all the backend dependencies)

To build the expo app, run npm start while in the app directory, then either run the program through an emulator or the expo app on your phone.

To start the backend you need to create a .env file in the backend directory. To do this please navigate to the backend directory and use the following command:

`touch .env`

Next make your way [here](https://ai.google.dev/gemini-api/docs/api-key) to get a Gemini API key. Once you've got your key paste the following into your .env file:

APIKEY = Whatever_Your_API_Key_Is

Once thats all set up gemini should be good to go! :)

At the moment the backend and front end work independently of each other, in the future we would integrate the two into a live update system.

## Future

In the future we hope SkyWatch will hopefully transform the aviation industry into a safer more transparent place. We hope to achieve this goal by enabling passengers to report safety concerns and incidents to create a community-driven safety network and expanding SkyWatch to work internationally, translating ATC communications across different languages and flight regions.
