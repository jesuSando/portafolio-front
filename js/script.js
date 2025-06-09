document.addEventListener('DOMContentLoaded', function() {


    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stats-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    }

    //see more
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenContent = document.querySelector('.hidden-content');
    let isMoreExpanded = false;
    
    seeMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
    
        hiddenContent.classList.toggle('expanded');
        isMoreExpanded = !isMoreExpanded;
        seeMoreBtn.textContent = isMoreExpanded ? 'See less' : 'See more';
    });


    //see more projects
    const moreProjects = document.getElementById('moreProjects');
    const hiddenProjects = document.querySelector('.hidden-projects');
    let isProjectsExpanded = false;

    moreProjects.addEventListener('click', function (e) {
        e.preventDefault();
    
        hiddenProjects.classList.toggle('expanded');
        isProjectsExpanded = !isProjectsExpanded;
        moreProjects.textContent = isProjectsExpanded ? 'See less' : 'More Projects';
    });


    //see more contributions
    const contributions = document.getElementById('contributions');
    const hiddenContributions = document.querySelector('.hidden-contributions');
    let isContributionsExpanded = false;

    contributions.addEventListener('click', function (e) {
        e.preventDefault();
    
        hiddenContributions.classList.toggle('expanded');
        isContributionsExpanded = !isContributionsExpanded;
        contributions.textContent = isContributionsExpanded ? 'See less' : 'Contributions';
    });
    
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('about-stats')) {
                    animateStats();
                }
                
                if (entry.target.classList.contains('skills-container')) {
                    animateSkills();
                }
                
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sectionsToAnimate = document.querySelectorAll('.about-stats, .skills-container, .section-title, .project-card, .blog-card, .timeline-item, .contact-item, .skills-category');
    
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
