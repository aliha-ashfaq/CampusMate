const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/api', require('./api'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
