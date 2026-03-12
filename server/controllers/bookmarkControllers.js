const bookmarkModel = require('../models/bookmarkModel');

module.exports.listBookmarks = (req, res) => {
  const bookmarks = bookmarkModel.list();
  res.send(bookmarks);
};

module.exports.getBookmark = (req, res) => {
  const { id } = req.params;
  const bookmark = bookmarkModel.find(Number(id));
  if (!bookmark) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.send(bookmark);
};

// INTENTIONAL DESIGN INCONSISTENCY: This controller formats the data before sending
// the response. It adds a "createdAt" field that should be the model's
// responsibility (the model should handle data structure, not the controller).
module.exports.createBookmark = (req, res) => {
  const { title, url } = req.body;
  if (!title || !url) {
    return res.status(400).send({ message: 'Title and URL are required' });
  }
  const newBookmark = bookmarkModel.create(title, url);
  newBookmark.createdAt = new Date().toISOString();
  res.status(201).send(newBookmark);
};

module.exports.updateBookmark = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ message: 'Title is required' });
  }
  const updated = bookmarkModel.update(Number(id), title);
  if (!updated) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.send(updated);
};

module.exports.deleteBookmark = (req, res) => {
  const { id } = req.params;
  const didDelete = bookmarkModel.destroy(Number(id));
  if (!didDelete) {
    return res.status(404).send({ message: `Bookmark with id ${id} not found` });
  }
  res.sendStatus(204);
};
