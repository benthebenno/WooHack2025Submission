# WooHack2025Submission

## Our App hopes to solve the issues of transparency and safety of the aviation industry

The app delivers translated information directly to users, providing them with clear, real-time updates about their flight, including safety status, delays, and any critical incidents.

## How to get SkyWatch up and running

### Frontend

The frontend runs on node.js so if you don't already have it installed go [here](https://nodejs.org/en/download) to download node. 

Once you've got node up and running navigate to the app directory in your terminal and run the following command:

```npm install```

Before actually starting the frontend, to view the app in development you must install Expo Go from the android or apple app store on your phone. 

Once you have Expo GO installed switch back to your terminal and run npm start. You should be prompted to pick a display option or scan a qr code. Scan the QR code with your phone and you should be redirected the the expo go app where the app will appear.

### Backend

Note: The backend has been set up to mimic how this app would work given the proper permissions, however due to legal restrictions on what data we can scrape without first requesting access (which we did not hear back on given the tight deadline over the weekend) the current data being used is not live and live data cannot be pulled until we hear back. 

To start you need to create a .env file in the backend directory. To do this please navigate to the backend directory and use the following command:


`touch .env`

Next make your way [here](https://ai.google.dev/gemini-api/docs/api-key) to get a Gemini API key. Once you've got your key paste the following into your .env file:

API_KEY = Whatever_Your_API_Key_Is

Once thats all set up we need to create a python virtual environment. First make sure youre in the backend directory. Next run the following command: 

```python -m venv ./venv```

Next we need to activate the virtual environment. The instructions for these differ for linux/mac and windows.

#### Linux/Mac

Run the following command:

```source venv/bin/activate```

#### Windows 

Run the following command: 

```venv\Scripts\activate.bat```


Once youre in your python virtual environment install the dependencies with the following command:

```pip install -r requirements.txt```

Your backend should be all ready to go now! :)

At the moment the backend and front end work independently of each other, in the future we would integrate the two into a live update system.

