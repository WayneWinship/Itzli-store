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
    const checkboxSidebar = grab('#checkbox-sidebar');
    checkbox.dafaultChecked = 'true'
    checkboxSidebar.dafaultChecked = 'true'


    // const inputs = [...document.querySelectorAll("input")];

    // const input = inputs.map((n) => {

    //     console.log(n);
    // })
    // console.log(input);




    checkbox.addEventListener('change', function () {
        if (this.checked) {
            darkenElements();
        } else {
            location.reload();
        }
    });

    checkboxSidebar.addEventListener('change', function () {
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

        sidebar.style.backgroundColor = 'var(--clr-grey-2)'
        nav.style.backgroundColor = 'black'
        background.style.backgroundColor = 'black'
        logoTop.src = "./src/Itzli-store-logo-dark.svg"
    }
}

toggleMenu();
closeMenu();
toggleDarkMode();
