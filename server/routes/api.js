const express = require('express');
const router = express.Router();
const universities = require('../data/universities.json');
const hostels = require('../data/hostels.json');

router.get('/universities', (req, res) => {
  res.json(universities);
});

router.get('/universities/:id', (req, res) => {
  const university = universities.find(u => u.id === req.params.id);
  if (!university) return res.status(404).send('University not found');

  const relatedHostels = hostels.filter(h => h.nearUniversity === req.params.id);
  res.json({ university, hostels: relatedHostels });
});

module.exports = router;
