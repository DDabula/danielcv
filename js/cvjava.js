function homeclick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  function linkedinclick() {
    window.open("https://www.linkedin.com/in/danieldabula/");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var containers = document.querySelectorAll('.container');
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
  
    function handleScroll() {
      containers.forEach(function(container) {
        if (isInViewport(container)) {
          container.classList.add('visible');
        } else {
          container.classList.remove('visible');
        }
      });
    }
  
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
  
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (let anchor of smoothScrollLinks) {
      anchor.addEventListener('click', function(e) {
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
  
  document.addEventListener('click', function(event) {
    if (!navlist.contains(event.target) && !menu.contains(event.target)) {
      navlist.classList.remove('active');
      menu.classList.remove('ri-close-fill');
      menu.classList.add('ri-align-justify');
    }
  });
  