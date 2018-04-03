// =========================================
// Import Functions  -----------------------

// Active dark mode ----------------------
import darkmode from './components/darkmode';

// Search StarWars Pearsons --------------
import search from './components/search';

// =========================================
// Init Events  ----------------------------
const loadInteractions = () => {
  darkmode();
  search();
};

document.addEventListener('DOMContentLoaded', loadInteractions, false);
