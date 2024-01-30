function homeclick() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function linkedinclick() {
    window.open("https://www.linkedin.com/in/danieldabula/");
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all containers
    var containers = document.querySelectorAll('.container');

    // Function to check if a container is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to handle scroll and show/hide containers
    function handleScroll() {
        containers.forEach(function (container) {
            if (isInViewport(container)) {
                container.classList.add('visible');
            } else {
                container.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchor of smoothScrollLinks) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.mobile-nav-button');
    var navList = document.querySelector('.navlist ul');

    button.addEventListener('click', function() {
      navList.classList.toggle('active');
    });
  });
  let menu = document.querySelector('#menu-icon');
  let navlist = document.querySelector('.navlist ul');
  
  menu.onclick = () => {
      if (menu.classList.contains('ri-align-justify')) {
          menu.classList.remove('ri-align-justify');
          menu.classList.add('ri-close-fill');
      } else {
          menu.classList.remove('ri-close-fill');
          menu.classList.add('ri-align-justify');
      }
      navlist.classList.toggle('active');
  };
  
  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!navlist.contains(event.target) && !menu.contains(event.target)) {
          navlist.classList.remove('active');
          menu.classList.remove('ri-close-fill');
          menu.classList.add('ri-align-justify');
      }
  });