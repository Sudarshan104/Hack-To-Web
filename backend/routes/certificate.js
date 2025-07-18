const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const jwt = require('jsonwebtoken');
const PDFDocument = require('pdfkit');

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

// Generate certificate PDF for a completed course
router.get('/:courseId', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  const course = await Course.findById(req.params.courseId);
  if (!user.completedCourses.includes(req.params.courseId)) {
    return res.status(403).json({ error: 'Course not completed' });
  }
  // Generate PDF
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=certificate-${course.title}.pdf`);
  doc.fontSize(24).text('Certificate of Completion', { align: 'center' });
  doc.moveDown();
  doc.fontSize(18).text(`This certifies that`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(user.name, { align: 'center', underline: true });
  doc.moveDown();
  doc.fontSize(18).text(`has successfully completed the course`, { align: 'center' });
  doc.moveDown();
  doc.fontSize(20).text(course.title, { align: 'center', underline: true });
  doc.moveDown();
  doc.fontSize(16).text(`Date: ${new Date().toLocaleDateString()}`, { align: 'center' });
  doc.end();
  doc.pipe(res);
});

module.exports = router; 