const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

const dataDir = path.join(__dirname, 'data');

// Ensure data files exist
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const userFile = path.join(dataDir, 'users.json');
if (!fs.existsSync(userFile)) {
  fs.writeFileSync(userFile, JSON.stringify([{ username: "admin", password: "admin1", role: "admin" }], null, 2));
}

const faqFile = path.join(dataDir, 'faqs.json');
if (!fs.existsSync(faqFile)) {
  fs.writeFileSync(faqFile, JSON.stringify([], null, 2));
}

// Mount routes
app.use('/api', require('./api'));  // universities, hostels, faqs view
app.use('/auth', require('./auth')); // signup, login, add-faq (admin)

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
