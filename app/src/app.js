// =========================================
// Import Functions  -----------------------

// Active dark mode ----------------------
import darkmode from './components/darkmode';

// =========================================
// Init Events  ----------------------------
const loadInteractions = () => {
  darkmode();
};

document.addEventListener('DOMContentLoaded', loadInteractions, false);
