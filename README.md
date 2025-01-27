# Basic-REST-API

## Project Description
This project is a simple RESTful API for managing users. The API allows you to:
- Retrieve a list of all users stored in the system.
- Add new users.
- Delete users by their unique ID.

The API is built with Node.js and Express, providing an efficient way to manage user data.

---

## Endpoints and Their Details

### 1. GET /users
**Purpose**: Retrieve a list of all users stored in the system.

**Request**:
- **Method**: GET
- **URL**: `http://localhost:3000/users`

**Expected Response**:
- **HTTP Status Code**: `200 OK`
- **Response Body (Example)**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
  ]
  ```

---

### 2. POST /users
**Purpose**: Add a new user to the system.

**Request**:
- **Method**: POST
- **URL**: `http://localhost:3000/users`
- **Headers**:
  - `Content-Type`: `application/json`
- **Request Body (Example)**:
  ```json
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  }
  ```

**Expected Response**:
- **HTTP Status Code**: `201 Created`
- **Response Body (Example)**:
  ```json
  {
    "id": 3,
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com"
  }
  ```

---

### 3. DELETE /users/:id
**Purpose**: Delete a user by their unique ID.

**Request**:
- **Method**: DELETE
- **URL**: `http://localhost:3000/users/:id`
  - Replace `:id` with the user ID (e.g., `http://localhost:3000/users/1`).

**Expected Response**:

**Success**:
- **HTTP Status Code**: `200 OK`
- **Response Body (Example)**:
  ```json
  {
    "message": "User with ID 1 deleted successfully"
  }
  ```

**Error**:
- **HTTP Status Code**: `404 Not Found`
- **Response Body (Example)**:
  ```json
  {
    "error": "User with ID 1 not found"
  }
  ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

- Access the API at `http://localhost:3000`.
- Test the endpoints using tools like Postman or the VS Code REST Client extension.

---

## Features
- Retrieve all users with `GET /users`.
- Add a new user with `POST /users`.
- Delete a user by ID with `DELETE /users/:id`.



