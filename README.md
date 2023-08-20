# JWT Authentication Project using Node.js

![Project Logo](project-logo.png) <!-- Add your project logo here -->

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

Welcome to the JWT Authentication Project built using Node.js! This project serves as a template for implementing JWT (JSON Web Token) based authentication in your Node.js applications. JWT is a compact, URL-safe means of representing claims to be transferred between two parties.

This README.md provides a comprehensive guide on setting up, configuring, and utilizing this authentication system.

## Features

- User registration with encrypted password storage
- User login with JWT generation
- JWT authentication for protected routes
- Error handling and validation
- Testing setup with example test cases

## Technologies Used

- Node.js
- Express.js
- cors
- nodemailer
- JSON Web Tokens (JWT)
- Bcrypt.js for password hashing
- MongoDB (can be swapped with other databases)
- Mongoose ODM for MongoDB interaction
- Jest and Supertest for testing

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/jwt-authentication-node.git`
2. Navigate to the project directory: `cd jwt-authentication-node`
3. Install dependencies: `npm install`

### Configuration

1. Rename `config.example.js` to `config.js`.
2. Edit `config.js` and set your configuration options such as database URL, JWT secret, etc.

### Usage

1. Start the server: `npm start`
2. The server will run at `http://localhost:3000`.

## API Endpoints

- **POST /register:** User registration.
- **POST /login:** User login and JWT generation.
- **POST /send-reset-password-email:** Send reset password link in Email (public route).
- **POST /reset-password/:id/:token:** Reset password in Web Page (public route).
- **POST /changepassword:** Change password using Old Password (protected route).
- **POST /loggeduser:** Get logged user (protected route).

## Authentication Flow

1. User registers with email and password.
2. Password is hashed and stored in the database.
3. User logs in with email and password.
4. Entered password is compared with hashed password in the database.
5. Upon successful login, a JWT is generated and sent to the client.
6. Client includes the JWT in headers for accessing protected routes.
7. The server validates the JWT and grants access to protected resources.

## Error Handling

Detailed error handling is implemented to provide informative responses for various scenarios, such as invalid input, duplicate email during registration, incorrect credentials during login, and unauthorized access attempts.

## Testing

1. Run tests: `npm test`
2. Testing is set up using Jest and Supertest.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to contact us at fakharkhan2520@email.com.

---

Happy coding! 🚀
