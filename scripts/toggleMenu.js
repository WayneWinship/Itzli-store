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
    console.log(checkbox);
    checkbox.dafaultChecked = 'true'

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

toggleDarkMode();
toggleMenu();
closeMenu();
