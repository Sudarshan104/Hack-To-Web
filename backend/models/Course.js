const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Course', CourseSchema); 