To-Do App
Project Description:
This is a simple To-Do application built using Express.js and MongoDB that includes features like user authentication, token management, CRUD operations for managing to-do items, rate limiting, and CORS setup for secure and efficient operation. The app demonstrates a real-world backend project with essential functionalities and is structured for scalability and maintainability.

Features:

User Authentication:

Users can sign up and log in using JWT (JSON Web Token) for secure access.
JWT tokens are stored in cookies and used for API authentication.

Token Management:

Access tokens expire after 5 minutes.
Refresh tokens are used to issue new access tokens without requiring re-authentication.

To-Do CRUD Operations:

Users can create, read, update, and delete to-do items.
Each user's to-dos are private and cannot be accessed by others.

Rate Limiting:

Prevents abuse by limiting the number of to-do items a user can create to 10 every 15 minutes.
After reaching the limit, users must wait 3 minutes before adding another batch of 10 items.

CORS Setup:

Configured to allow requests from specific domains:
http://localhost:2395
http://localhost:8275
http://localhost:6290

Data Storage:

User and to-do data are stored in MongoDB, ensuring reliable and scalable storage.

Project Setup:

Prerequisites:
Node.js installed on your system.
MongoDB installed and running locally or accessible via a cloud provider.

Git installed to clone the repository.

Installation Steps:
Clone the Repository
cd todo-app


Install Dependencies:

npm install
Configure Environment Variables:


Create a .env file in the root directory with the following content:

env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoApp
JWT_SECRET=your_jwt_secret


Run the Application:
npm start
