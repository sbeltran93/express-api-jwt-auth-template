const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const profilesRouter = require('./controllers/profiles');
const cors = require('cors');




mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(cors())

// Routes go here
const testJWTRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

app.use('/test-jwt', testJWTRouter);
app.use('/users', usersRouter);
app.use('/profiles', profilesRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});


