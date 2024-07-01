const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const metricRoutes = require('./routes/metrics_routes');
const { metricsDbConnection, usersDbConnection } = require('./db.js');

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api', metricRoutes);

const users = {
  'user@example.com': {
    password: 'password123',
    name: 'John Doe',
  },
};
  

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (user && user.password === password) {
    res.json({ success: true, message: 'Login successful', user: { name: user.name, email } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.post('/signup', (req, res) => {
  const { email, password, name } = req.body;
  if (users[email]) {
    res.status(400).json({ success: false, message: 'Email already exists' });
  } else {
    users[email] = { password, name };
    res.json({ success: true, message: 'Signup successful', user: { name, email } });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = { metricsDbConnection, usersDbConnection };

