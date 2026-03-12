export const renderBookmarks = (bookmarks) => {
  const list = document.querySelector('#bookmarks-list');
  const count = document.querySelector('#bookmark-count');

  list.innerHTML = '';
  count.textContent = bookmarks.length;

  bookmarks.forEach((bookmark) => {
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = bookmark.url;
    link.textContent = bookmark.title;
    link.target = '_blank'; // open the link in a new tab

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.dataset.bookmarkId = bookmark.id;

    li.append(link, deleteBtn);
    list.append(li);
  });
};
