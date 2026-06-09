(function() {
    const STORAGE_KEY = 'theme';
    const THEME_ATTR = 'data-theme';
    
    function getTheme() {
        return localStorage.getItem(STORAGE_KEY) || 'light';
    }
    
    function setTheme(theme) {
        document.documentElement.setAttribute(THEME_ATTR, theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateIcons(theme);
    }
    
    function updateIcons(theme) {
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(function(toggle) {
            const sun = toggle.querySelector('.sun-icon');
            const moon = toggle.querySelector('.moon-icon');
            if (sun && moon) {
                if (theme === 'dark') {
                    sun.classList.remove('active');
                    moon.classList.add('active');
                } else {
                    sun.classList.add('active');
                    moon.classList.remove('active');
                }
            }
        });
    }
    
    function toggleTheme() {
        const current = getTheme();
        const next = current === 'light' ? 'dark' : 'light';
        setTheme(next);
    }
    
    // Apply theme immediately before page renders
    const savedTheme = getTheme();
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute(THEME_ATTR, 'dark');
    }
    
    // Initialize toggles after DOM loads
    document.addEventListener('DOMContentLoaded', function() {
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', toggleTheme);
        });
        updateIcons(savedTheme);
    });
})();
