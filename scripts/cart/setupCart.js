import { getStorageItem, setStorageItem, formatPrice, grab } from "../../utils.js"

import { openCart } from "./cartToggle.js";
import { findProduct } from "../store.js";
import addToCartHTML from "./addToCartHTML.js"
import displayButtons from "../displayButtons.js";


const openCartButtonAmount = grab('.toggle-amount-container');
const cartItemContainer = grab('.cart-items');
const totalItemsCart = grab('.total-items span');
const totalPriceCart = grab('.total-cost span');

let cart = getStorageItem('cart');
// console.log(cart);

export const addToCart = (id) => {
    let item = cart.find((cartItem) => cartItem.id === id);
    if (!item) {
        let product = findProduct(id);
        product = { ...product, amount: 1 };
        cart = [...cart, product];
        addToCartHTML(product);
    } else {
        const amount = increaseAmount(id);
        const items = [...cartItemContainer.querySelectorAll('.item-amount')];
        const newAmount = items.find((value) => value.dataset.id === id);
        newAmount.textContent = amount;
        console.log(cart);
    }


    displayCartTotal();

    displayCartItemCount();

    setStorageItem('cart', cart);

    openCart();
}











// inlaid functions
const displayCartItemsHTML = () => {
    cart.forEach((itm) => {
        addToCartHTML(itm);
    })
}

const displayCartItemCount = () => {
    const amount = cart.reduce((total, itm) => {
        return total += itm.amount
    }, 0)
    openCartButtonAmount.textContent = amount;
    totalItemsCart.textContent = amount;
}

const displayCartTotal = () => {
    let total = cart.reduce((amount, itm) => {
        return amount += itm.price * itm.amount;
    }, 0)
    totalPriceCart.textContent = formatPrice(total);
}

const increaseAmount = (id) => {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount + 1;
            cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem
    });
    return newAmount;
};

const decreaseAmount = (id) => {
    let newAmount;
    cart = cart.map((cartItem) => {
        if (cartItem.id === id) {
            newAmount = cartItem.amount - 1;
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem
    });
    return newAmount;
};

const removeItem = (id) => {
    cart = cart.filter((itm) => itm.id !== id);
}


// remove, increase, and decrease in cart
const setupCartFunctionality = () => {
    cartItemContainer.addEventListener('click', function (e) {
        const element = e.target.parentElement;


        if (element.classList.contains('increase-itm-count-btn')) {
            const newElement = increaseAmount(element.dataset.id);
            element.parentElement.nextElementSibling.textContent = newElement;
        }

        if (element.classList.contains('decrease-itm-count-btn')) {
            const newElement = decreaseAmount(element.dataset.id);
            if (newElement === 0) {
                removeItem(element.dataset.id);
                element.parentElement.parentElement.parentElement.remove();
            } else {
                element.parentElement.previousElementSibling.textContent = newElement;
            }
        }

        if (e.target.classList.contains('remove-item')) {
            const newElement = removeItem(e.target.dataset.id)
            element.remove();
        }



        displayCartItemCount();
        displayCartTotal();
        setStorageItem('cart', cart);
    })
}


// init functionality
const init = () => {
    displayCartItemCount();
    displayCartTotal();
    displayCartItemsHTML();
    setupCartFunctionality();
}

init();