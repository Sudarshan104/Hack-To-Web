const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const announcementsRoute = require('./routes/announcements');
const contactRoute = require('./routes/contact');
const authRoute = require('./routes/auth');
const coursesRoute = require('./routes/courses');
const certificateRoute = require('./routes/certificate');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/announcements', announcementsRoute);
app.use('/api/contact', contactRoute);
app.use('/api/auth', authRoute);
app.use('/api/courses', coursesRoute);
app.use('/api/certificate', certificateRoute);

app.get('/', (req, res) => {
  res.send('KK Computers API');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.log(err)); 