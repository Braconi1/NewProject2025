const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme); 

  
function toggleTheme() {
    var moonIcon = document.getElementById('moon-icon');
    var sunIcon = document.getElementById('sun-icon');
  
    if (moonIcon.style.display === "none") {
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
    } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
    }
    
    let theme = document.body.classList.contains('dark') ? 'light' : 'dark';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); 
}