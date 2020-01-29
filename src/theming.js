const savedTheme = localStorage.getItem('THEME') || 'light';

export function getCurrentTheme() {
  return savedTheme;
}

export function setCurrentTheme(theme) {
  localStorage.setItem('THEME', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.remove('theme-dark');
  }
}

export function initializeTheme() {
  setCurrentTheme(getCurrentTheme());
}
