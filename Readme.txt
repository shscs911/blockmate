Client
------

- Open Project folder

- cd client

- npm install

- npm start


Server
------

- Open Project folder

- cd server

- npm install

- nodemon app.js or node app.js


1. Open webpage at 127.0.0.1:4200 to view the website

2. When executing the project for the first time, we have to manually enter the username and password in mongoDB

	a. Click the Sign in button. (It displays an error alert, dismiss it)

	b. Open Command Prompt (cmd) 

	c. mongo

	d. use blockmate

	e. db.user.insertOne({ name: 'admin', username: 'admin@gmail.com', password: 'admin#1' });
	
	f. If successful, it shows an acknowledgement

3. Now we can enter the website with the provided username and password.

4. Enable CORS extension for optimal performance
	
	Chrome Web Store: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi