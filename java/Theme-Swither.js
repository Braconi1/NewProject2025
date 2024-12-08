const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme); 

  
function toggleTheme() {
    let theme = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); 
}