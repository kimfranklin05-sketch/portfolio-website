// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // 1. Theme Toggle Logic
  // Check local storage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  
  // Set initial theme
  if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
    document.body.setAttribute('data-theme', 'light');
  } else {
    document.body.removeAttribute('data-theme');
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  // 2. Active Section Highlighting on Scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Trigger a bit before the section reaches the top of the viewport
      if (window.scrollY >= (sectionTop - 150)) {
        // If it's a section, get its ID. For header/hero, default to home or about.
        if (section.id) {
          currentSectionId = section.id;
        } else if (section.classList.contains('hero')) {
          currentSectionId = 'about'; // default highlight to first section
        }
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
});
