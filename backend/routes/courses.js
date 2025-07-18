const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to verify JWT
function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token is not valid' });
  }
}

// Get all courses
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Mark course as complete
router.post('/complete/:courseId', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user.completedCourses.includes(req.params.courseId)) {
    user.completedCourses.push(req.params.courseId);
    await user.save();
  }
  res.json({ message: 'Course marked as complete' });
});

// Get user's completed courses
router.get('/completed', auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate('completedCourses');
  res.json(user.completedCourses);
});

module.exports = router; 