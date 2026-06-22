const searchButton = document.querySelector('.search-bar button[aria-label="Search"]');

if (searchButton) {
  searchButton.textContent = '🔍';
  searchButton.style.fontSize = '1rem';
  searchButton.style.lineHeight = '1';
}
