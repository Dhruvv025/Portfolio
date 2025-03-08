// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: 'smooth'
    });

    // Update active nav link
    document.querySelectorAll('nav a').forEach(a => a.removeAttribute('aria-current'));
    this.setAttribute('aria-current', 'page');
  });
});

// Handle navigation bar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add/remove scrolled class based on scroll position
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Log form submission (replace with actual form handling)
    console.log('Form submitted:', data);
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
  });
}

// Intersection Observer for section visibility
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentSection = entry.target;
      const sectionId = currentSection.getAttribute('id');
      
      // Update navigation
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});