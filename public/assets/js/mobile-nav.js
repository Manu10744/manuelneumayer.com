const mobileNavToggler = document.querySelector(".mobile-nav-toggler");
const navigation = document.querySelector("nav");

mobileNavToggler.addEventListener("click", activateMobileNavigation)

function activateMobileNavigation() {
    mobileNavToggler.classList.toggle("mobile-nav-active");

    if (navigation.style.display == '' || navigation.style.display == 'none') {
        navigation.style.touchAction = 'none';            
        fadeNavigationIn();
    } else { 
        fadeNavigationOut();
        navigation.style.touchAction = 'auto';
    }
    
}

function fadeNavigationIn() {
    anime.timeline({ easing: 'easeInQuad' })
        .add({
            targets: 'nav',
            opacity: [0, 1],
            duration: 400,
            begin: () => { 
                document.querySelector("nav").style.display = 'block'; 
            }
        })
        .add({
            targets: 'nav ul li',
            translateX: ['-100%', '0%'],
            delay: anime.stagger(100),
            duration: 300
        });
}

function fadeNavigationOut() {
    anime.timeline({ easing: 'easeOutQuad' })
        .add({
            targets: 'nav ul li',
            translateX: ['0%', '-100%'],
            delay: anime.stagger(100),
            duration: 300
        })
        .add({
            targets: 'nav',
            opacity: [1, 0],
            complete: () => { 
                document.querySelector("nav").style.display = 'none'; 
            }
        })
}