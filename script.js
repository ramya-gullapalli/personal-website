/*
This JavaScript code listens for clicks on links that are internal 
(those that link to an id on the page), prevents the default jump-to action, 
and instead smoothly scrolls to the section.
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
