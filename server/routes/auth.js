const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const userFile = path.join(__dirname, '..', 'data', 'user.json');
const faqFile = path.join(__dirname, '..', 'data', 'faqs.json');

const loadUsers = () => {
  try {
    const data = fs.readFileSync(userFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const loadFaqs = () => {
  try {
    const data = fs.readFileSync(faqFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

router.use(express.json()); 
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  if (users.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  users.push({ username, password, role: "user" });
  fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
  res.json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user: { username: user.username, role: user.role } });
});

router.post('/add-faq', (req, res) => {
  const { username, question, answer } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.username === username);

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }

  if (!question || !answer) {
    return res.status(400).json({ message: 'Question and answer are required' });
  }

  const faqs = loadFaqs();
  faqs.push({ question, answer });
  fs.writeFileSync(faqFile, JSON.stringify(faqs, null, 2));

  res.json({ message: 'FAQ added successfully' });
});

module.exports = router;
