export const getBookmarks = async () => {
  try {
    const response = await fetch('/api/bookmarks');
    if (!response.ok) throw new Error('Failed to fetch bookmarks');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createBookmark = async (title, url) => {
  try {
    const response = await fetch('/api/bookmarks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url }),
    });
    if (!response.ok) throw new Error('Failed to create bookmark');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteBookmark = async (id) => {
  try {
    const response = await fetch(`/api/bookmarks/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete bookmark');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
