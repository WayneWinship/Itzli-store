import { store } from "../store.js";
import { formatPrice, grab } from "../../utils.js"

const item = store.filter(itm => itm.id == 'BBcATGL8Nt9an35V1');
item[0] = { ...item[0], amount: 22 };

const item2 = store.filter(itm => itm.id == 'dY4ibblUY8a7en5Ys');
item2[0] = { ...item2[0], amount: 22 };

const item3 = store.filter(itm => itm.id == 'ru7toaqPle13Ewnk5');
item3[0] = { ...item3[0], amount: 22 };

const addToCartHTML = ({ amount, company, img, name, price, id }) => {
    const cartContainer = grab('.cart-items');
    const product = document.createElement('div');
    product.setAttribute('class', 'product');
    product.setAttribute('data-id', id);
    product.innerHTML = `
        <div class="item-count-container">
            <span class="increase-item-count">
                <button data-id=${id} class="increase-itm-count-btn">
                    <i class="fas fa-plus"></i>
                </button>
            </span>
            <p class="item-amount" data-id=${id}>${amount}</p>
            <span class="decrease-item-count">
                <button data-id=${id} class="decrease-itm-count-btn">
                    <i class="fas fa-minus"></i>
                </button>
            </span>
        </div>
        <div class="cart-img-container">
            <img src="${img}"
                alt="${name}">
        </div>
        <div class="product-info">
            <p class="product-name">${name}</p>
            <p class="product-company">${company}</p>
        </div>
        <div class="product-price-container">
            <div class="product-price">${formatPrice(price)}</div>
        </div>
        <button class="remove-item" data-id=${id}>remove</button>
    `
    cartContainer.appendChild(product);

}
// addToCartHTML(item[0]);
// addToCartHTML(item2[0]);
// addToCartHTML(item3[0])

export default addToCartHTML