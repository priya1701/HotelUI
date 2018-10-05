1. Go to your file project
2. Run in terminal
      npm install
   Then run
      npm start


If you have an error something containing
  Module not found

Try
 npm install --g cross-env

and then try again starting the app. If this doesn't do the trick, than also change the start script inside package.json from
   "start": "react-scripts start",
to
   "start": "NODE_PATH=./src react-scripts start",


(Optional) You can create a new react application like this:
Run in terminal
   npm install -g create-react-app

Go to the folder where you want to create your app
Run in terminal
   create-react-app your-app-name

Navigate to your-app-name
Run in terminal
   npm start

Navigate to http://localhost:8000

You can change the port no. by modifying start script in package.json from
    "start": "react-scripts start",
to
    "start": "PORT=port_no react-scripts start",
