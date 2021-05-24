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

toggleMenu();
closeMenu();
