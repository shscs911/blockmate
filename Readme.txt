
- Open Project folder

- cd server

- npm install

- npm start


1. Open webpage at 127.0.0.1:4200 to view the website

2. When executing the project for the first time, we have to manually enter the username and password in mongoDB

	a. Click the Sign in button. (It displays an error alert, dismiss it)

	b. Open Command Prompt (cmd) 

	c. mongo

	d. use blockmate

	e. db.user.insertOne({ name: 'admin', username: 'admin@blockmate.com', password: 'admin#1' });
	
	f. If successful, it shows an acknowledgement

3. Now we can enter the website with the provided username and password.

4. The page has options to 
				
			    -> Add a new Post
			    
		            -> Edit an existing Post

			    -> Delete an existing Post

			    -> Logout