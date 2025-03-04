app.get('/cv.pdf', (req, res) => {
  res.setHeader('Content-Disposition', 'inline');  // Force inline viewing
  res.setHeader('Content-Type', 'application/pdf');
  // Add security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store');
  // Send file
  res.sendFile(path.join(__dirname, 'public', 'cv.pdf'));
}); 