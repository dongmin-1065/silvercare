document.addEventListener('DOMContentLoaded', () => {
    /* ---------------------------------------------------
       1. Mobile Menu Toggle
    --------------------------------------------------- */
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const gnb = document.getElementById('gnb');
    const navLinks = document.querySelectorAll('.gnb a');

    if (mobileMenuBtn && gnb) {
        mobileMenuBtn.addEventListener('click', () => {
            gnb.classList.toggle('active');
            const isActive = gnb.classList.contains('active');
            mobileMenuBtn.innerHTML = isActive ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                gnb.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    /* ---------------------------------------------------
       2. Sticky Header
    --------------------------------------------------- */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ---------------------------------------------------
       3. Intersection Observer (Scroll Animations)
    --------------------------------------------------- */
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    /* ---------------------------------------------------
       4. Contact Form Validation (Security & UX)
    --------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission for demo
            
            const userName = document.getElementById('userName').value.trim();
            const userPhone = document.getElementById('userPhone').value.trim();
            const agreeTerms = document.getElementById('agreeTerms').checked;
            
            // Basic Regex for XSS prevention (rejecting <, >, etc)
            const xssRegex = /[<>]/;
            
            if (xssRegex.test(userName) || xssRegex.test(document.getElementById('message').value)) {
                alert('이름이나 내용에 허용되지 않는 특수문자(<, >)가 포함되어 있습니다.');
                return;
            }
            
            // Basic Phone Regex (Korean numbers)
            const phoneRegex = /^[0-9-]{9,13}$/;
            if (!phoneRegex.test(userPhone)) {
                alert('올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)');
                return;
            }
            
            if (!agreeTerms) {
                alert('개인정보 수집 및 이용에 동의해주셔야 상담 예약이 가능합니다.');
                return;
            }
            
            // If validation passes
            alert(`감사합니다, ${userName}님. 성공적으로 상담 예약이 접수되었습니다.\n담당 매니저가 곧 연락드리겠습니다.`);
            contactForm.reset();
        });
    }
});
