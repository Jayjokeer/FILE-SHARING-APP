# FLASH-FILE
A Node.js file sharing application that allows users to upload,set password for the file , download and share file with others.
The application provides a web-based interface that can be access through the web browser.

Application URL: https://flash-file.onrender.com

Getting started
. Node.js v10 or later installed on your machine.
. MongoDB installed and running.

Installation
1. Clone the repository:
  git clone https://github.com/Jayjokeer/FILE-SHARING-APP.git
2. Install the dependacies:
  npm install express,ejs,mongoose,multer,dotenv,bcrypt and morgan
3. Configure the environment variables.
4. Start the server:
  npm run start
  The server will start listening on:
  'http://localhost:5000'.
  
  Usage:
  1.Open the browser and navigate to 'http://localhost:5000'..
  2.To upload a file, click on the 'choose file' button and select the file you want to upload.
  3.A link will come up , you can share the link and the person can click on it, input the password you set and the click download 
    your file will download if your password is correct.
    
  Features:
  .Upload files. 
  .Download files with a single click.
  .Protect files with passwords.
  .Sharing files to others through a single link.
  
  Built with :
  .Nodejs
  .Express.js
  .MongoDB
  .Multer
  .EJS
