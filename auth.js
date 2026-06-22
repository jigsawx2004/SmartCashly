const searchButton = document.querySelector('.search-bar button[aria-label="Search"]');

if (searchButton) {
  searchButton.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9.5 3a6.5 6.5 0 1 0 3.98 11.64l4.44 4.44a1 1 0 0 0 1.42-1.42l-4.44-4.44A6.5 6.5 0 0 0 9.5 3Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"></path>
    </svg>
  `;
}
