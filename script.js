// Theme toggle logic
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
​if (themeToggleBtn) {
themeToggleBtn.addEventListener('click', () => {
if (htmlElement.classList.contains('dark')) {
htmlElement.classList.remove('dark');
themeIcon.textContent = '🌙';
themeText.textContent = 'Dark Mode';
} else {
htmlElement.classList.add('dark');
themeIcon.textContent = '☀️';
themeText.textContent = 'Light Mode';
}
});
}
