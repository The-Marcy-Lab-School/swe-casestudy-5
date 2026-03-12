let id = 1;
const getId = () => id++;

// Restrict access to our mock "database" to just this Model file
const bookmarks = [
  { id: getId(), title: 'Marcy Lab School', url: 'https://www.marcylabschool.org' },
  { id: getId(), title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
  { id: getId(), title: 'Express Docs', url: 'https://expressjs.com' },
];

module.exports.create = (title, url) => {
  const newBookmark = { id: getId(), title, url };
  bookmarks.push(newBookmark);
  return { ...newBookmark };
};

module.exports.list = () => {
  return [...bookmarks];
};

module.exports.find = (id) => {
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
  if (!bookmark) return null;
  return { ...bookmark };
};

module.exports.update = (id, title) => {
  const bookmark = bookmarks.find((bookmark) => bookmark.id === id);
  if (!bookmark) return null;
  bookmark.title = title;
  return { ...bookmark };
};

module.exports.destroy = (id) => {
  const index = bookmarks.findIndex((bookmark) => bookmark.id === id);
  if (index < 0) return false;
  bookmarks.splice(index, 1);
  return true;
};
