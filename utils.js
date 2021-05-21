const grab = (element) => {
    const object = document.querySelector(element);
    if (object) {
        return object;
    } else {
        return new Error(`The element ${element} does not exist!!`)
    }
}

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
const addTime = () => {
    const element = grab('.time');
    let time = new Date();
    element.textContent = time.getFullYear();
}
toggleMenu();
closeMenu();
addTime();
export { grab }