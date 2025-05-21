// This script initializes the theme to always use dark mode
(function() {
  // Always use dark mode
  document.documentElement.setAttribute('data-theme', 'dark');
  
  // Store the preference
  localStorage.setItem('theme', 'dark');
})();
