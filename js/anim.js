document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const scrollItems = document.querySelectorAll('.scrollItem');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight) + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 2;
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            };
        });
    };

    scrollAnimation();

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let mainCenter = main.offsetHeight / 2;
        scrollAnimation();


    });
    
});
