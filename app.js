const menu = document.getElementById('menu');
const navBar = document.querySelector('.nav_bar ul');
const navLinks = document.querySelectorAll('#nav-menu a');
const exploreBtn = document.getElementById('explore-btn');
const galleryBtn = document.getElementById('gallery-btn');
const signInLink = document.getElementById('sign-in');
const authSection = document.getElementById('sign_in');
const authForm = document.getElementById('auth-form');
const logoLink = document.querySelector('.logo-link');

const toggleNav = () => {
    if (!navBar) return;
    navBar.classList.toggle('open');
};

const closeNav = () => {
    if (!navBar) return;
    navBar.classList.remove('open');
};

if (menu) {
    menu.addEventListener('click', toggleNav);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});

if (logoLink) {
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeNav();
        window.location.href = '/';
    });
}

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        window.location.href = '/explore';
    });
}

if (galleryBtn) {
    galleryBtn.addEventListener('click', () => {
        window.location.href = '/gallery';
    });
}

if (signInLink && authSection) {
    signInLink.addEventListener('click', (event) => {
        event.preventDefault();
        authSection.style.display = 'flex';
        authSection.scrollIntoView({ behavior: 'smooth' });
    });
}

if (authForm) {
    authForm.addEventListener('submit', (event) => {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm_password');
        const agreeTerms = document.getElementById('agree_terms');

        if (agreeTerms && !agreeTerms.checked) {
            event.preventDefault();
            alert('Please agree to the terms and conditions before submitting.');
            return;
        }

        if (password && confirmPassword && password.value !== confirmPassword.value) {
            event.preventDefault();
            alert('Passwords do not match. Please check them and try again.');
            return;
        }

        if (authSection) {
            authSection.style.display = 'none';
        }

        alert('Thanks for signing in!');
        authForm.reset();
    });
}

exploreBtn.addEventListener('click', () => {
    window.location.href = '/explore';
});

galleryBtn.addEventListener('click', () => {
    window.location.href = '/gallery';
});