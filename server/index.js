const express = require('express');
const path = require('path');
const {
  listBookmarks,
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} = require('./controllers/bookmarkControllers');

const app = express();
const pathToFrontend = path.join(__dirname, '../frontend');

// Middleware
const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

app.use(logRoutes);
app.use(express.json());
app.use(express.static(pathToFrontend));

// Endpoints
app.get('/api/bookmarks', listBookmarks);
app.get('/api/bookmarks/:id', getBookmark);
app.post('/api/bookmarks', createBookmark);
app.patch('/api/bookmarks/:id', updateBookmark);
app.delete('/api/bookmarks/:id', deleteBookmark);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
