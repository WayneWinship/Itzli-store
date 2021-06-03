import { grab } from "../../utils.js"


const closeCartBtn = grab('.close-cart-btn');
const cartToggle = grab('.cart-toggle');
const cart = grab('.cart');

cartToggle.addEventListener('click', () => {
    cart.style.display = 'inline-block';
    cart.style.right = 0;
});

closeCartBtn.addEventListener('click', () => {
    cart.style.display = 'none';
    cart.style.right = '-110%';
});


export const openCart = () => {
    cart.style.display = 'inline-block';
    cart.style.right = 0;
}