let button = document.getElementById("buttonh");
function homeclick(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
document.addEventListener("DOMContentLoaded", function() {
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

    // Function to handle scroll and show containers
    function handleScroll() {
        containers.forEach(function(container) {
            if (isInViewport(container)) {
                container.classList.add('visible');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
});
document.addEventListener('DOMContentLoaded', function () {
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