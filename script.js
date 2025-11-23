window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.classList.add('header--fosco');
    } else {
        header.classList.remove('header--fosco');
    }
})