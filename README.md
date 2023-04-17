# Sequelize Node BlogsAPI
The Sequelize Node BlogsAPI is a RESTful API for a blogging platform that allows users to create, publish and manage their blog posts. It is built using Node.js and the Sequelize ORM.

## Objectives
The main objectives of this project are:
- Provide an easy-to-use API for creating, publishing and managing blog posts
- Implement the Sequelize ORM for handling database operations
- Demonstrate best practices in RESTful API design

## Stack
The following technologies and stacks were used in the project:
- Node.js
- Express.js
- Sequelize ORM
- MySQL database
- Nodemon library

## Installation
Clone the repository using the following command:
git clone https://github.com/sahdibernardi/sequelize-node-blogsAPI.git

Navigate to the project directory using the following command:
cd sequelize-node-blogsAPI

Install the dependencies using the following command:
npm install

Start the project using the following command:
npm run dev (with nodemon) or npm start

## Usage
The API endpoints are defined in the routes directory. The API supports the following endpoints:
- GET /posts - Get all blog posts
- GET /posts/:id - Get a single blog post by ID
- POST /posts - Create a new blog post
- PUT /posts/:id - Update an existing blog post
- DELETE /posts/:id - Delete a blog post
- To interact with the API, you can use tools like Postman or cURL.

### Contributing
Contributions are welcome. You can contribute to the project by submitting pull requests or issues.

### License
This project is licensed under the MIT License. See the LICENSE file for more information.
