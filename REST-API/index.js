const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for users
let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com"
  }
];

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
  res.status(200).json(users);
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ error: `User with ID ${id} not found` });
  }

  users.splice(userIndex, 1);
  res.status(200).json({ message: `User with ID ${id} deleted successfully` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});