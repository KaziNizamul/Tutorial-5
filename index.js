const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectDB();

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on @ ${port}`);
});
