import { grab } from "../utils.js";

const toggleMenu = () => {
    const menu = grab('.nav-toggle');
    const sidebar = grab('.sidebar');
    menu.addEventListener('click', () => {
        sidebar.style.left = 0;
    })
}
const closeMenu = () => {
    const exitBtn = grab('.sidebar-exit-btn');
    const sidebar = grab('.sidebar');
    exitBtn.addEventListener('click', () => {
        sidebar.style.left = '-100%';
    })
}
const toggleDarkMode = () => {
    const checkbox = grab('#checkbox');
    // checkbox.checked = 'false'
    checkbox.value = 'off'
    // console.log(checkbox);

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            darkenElements();
        } else {
            location.reload();
        }
    });

    const darkenElements = () => {
        const nav = grab('nav');
        const background = grab('body');
        const logoTop = grab('.logo-top');
        const sidebar = grab('.sidebar');
        const navToggle = grab('.nav-toggle');
        const sidebarExitBtn = grab('.sidebar-exit-btn');
        const footer = grab('footer');
        const cartToggle = grab('.cart-toggle');
        const singleItems = [...document.querySelectorAll('.single-item p')].map((single) => {
            // single.style.backgroundColor = 'var(--clr-white)';
            console.log(single);
            single.style.color = 'var(--clr-white)';
        })

        cartToggle.style.backgroundColor = 'black';
        cartToggle.style.color = 'var(--clr-white)';
        footer.style["box-shadow"] = '0 -2px 7px 0.5px var(--clr-white)';
        sidebarExitBtn.style.color = 'var(--clr-white)';
        nav.style["box-shadow"] = '0 2px 5px 0.5px var(--clr-white)';
        navToggle.style.color = 'white';
        navToggle.style.backgroundColor = 'black';
        nav.style.backgroundColor = 'black';
        background.style.backgroundColor = 'black';
        logoTop.src = "./src/Itzli-store-logo-dark.svg";


    }
    if (checkbox.checked) {
        darkenElements()
    }
}
const closeCart = () => {
    const closeCartBtn = grab('.close-cart-btn');
    const cartToggle = grab('.cart-toggle');
    const cart = grab('.cart');

    cartToggle.addEventListener('click', () => {
        cart.style.right = 0;
    });

    closeCartBtn.addEventListener('click', () => {
        cart.style.right = '-110%';
    });



}

closeCart();
toggleMenu();
closeMenu();
toggleDarkMode();
