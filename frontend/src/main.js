import { renderBookmarks } from "./dom-helpers.js";
import { getBookmarks, createBookmark, deleteBookmark } from "./fetch-helpers.js";

////////////////////////////////////////////////
// Event Handlers
////////////////////////////////////////////////

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const form = event.target
  const title = form.title.value;
  const url = form.url.value;

  // Post the bookmark
  await createBookmark(title, url);

  // Get the updated set of bookmarks and rerender
  const updated = await getBookmarks();
  renderBookmarks(updated);

  form.reset();
};

const handleDeleteBookmarkClick = async (event) => {
  const clickedBtn = event.target.closest('.delete-btn');
  if (!clickedBtn) return;

  await deleteBookmark(clickedBtn.dataset.bookmarkId);
  const updated = await getBookmarks();
  renderBookmarks(updated);
};

////////////////////////////////////////////////
// Main Logic
////////////////////////////////////////////////

const main = async () => {
  // Fetch and render bookmarks on page load
  const bookmarks = await getBookmarks();
  renderBookmarks(bookmarks);

  // On form submission, post a new bookmark
  document.querySelector('#bookmark-form')
    .addEventListener('submit', handleFormSubmit);

  // Event delegation to handle bookmark deletion
  document.querySelector('#bookmarks-list')
    .addEventListener('click', handleDeleteBookmarkClick);
};

main();
