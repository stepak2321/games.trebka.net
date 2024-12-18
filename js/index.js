const themeToggleButton = document.getElementById('theme-toggle');
document.body.classList.add('no-transition');

const savedTheme = localStorage.getItem('theme');
const icon = themeToggleButton.querySelector('div');


if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
} else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    icon.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.add('dark-mode');
}

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }
});