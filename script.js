//OPEN IN NEW TAB
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.currentTarget.getAttribute('href');
        window.open(targetUrl, '_blank');
    });
});
document.querySelectorAll('.project-button').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = e.currentTarget.getAttribute('href');
        window.open(targetUrl, '_blank');
    });
});

//SMOOTH SCROLL FOR NAVIGATION LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//TRAVEL GALLERY SCOLL FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function() {
    const backArrow = document.getElementById('backArrow');
    const frontArrow = document.getElementById('frontArrow');
    const gallery = document.querySelector('.gallery');
    
    let scrollAmount = gallery.clientWidth / 3;
    let scrollPosition = 0;

    const updateScrollPosition = (amount) => {
        scrollPosition += amount;
        scrollPosition = Math.max(0, Math.min(scrollPosition, gallery.scrollWidth - gallery.clientWidth));
        gallery.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    frontArrow.addEventListener('click', () => updateScrollPosition(scrollAmount));
    backArrow.addEventListener('click', () => updateScrollPosition(-scrollAmount));

    window.addEventListener('resize', () => {
        scrollAmount = gallery.clientWidth / 3;
        scrollPosition = Math.max(0, Math.min(scrollPosition, gallery.scrollWidth - gallery.clientWidth));
        gallery.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});

    //ANIMATE SKILLS BARS
    function animateSkillsBars() {
        const skillsBars = document.querySelectorAll('.skills-bar');

        
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        
        function handleScroll() {
            skillsBars.forEach(skill => {
                if (isInViewport(skill)) {
                    const percentage = skill.querySelector('p:nth-child(2)').textContent.trim().replace('%', '');
                    const progressBar = skill.querySelector('.bar span');
                    progressBar.style.width = percentage + '%';
                }
            });
        }

        
        window.addEventListener('scroll', handleScroll);

        
        handleScroll();
    }

    document.addEventListener('DOMContentLoaded', animateSkillsBars);
 

