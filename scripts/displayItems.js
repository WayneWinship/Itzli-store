import { formatPrice } from "../utils.js";
import { addToCart } from "./cart/setupCart.js";

var displayItems = (products, element) => {
    // console.log(products);
    element.innerHTML = products.map((product) => {
        let { id, company, img, name, price } = product;
        return `
    <article class="single-item">
        <a href="product.html?id=${id}" class="single-item-img-container" >
            <img src="${img}" alt="${name}" class="single-item-img"></br>
        </a>
        <a href="product.html?id=${id}" class="single-item-name-container" >
            <p class="single-item-name">${name}</p>
        </a>
        <p class="single-item-company">${company}</p>
        <p class="single-item-price">price: ${formatPrice(price)}
        <span class="single-item-cart" data-id=${id}><i class="fas fa-cart-plus"></i></span></p>
    </article>
        `
    }).join('')
    element.addEventListener('click', function (e) {
        const parent = e.target.parentElement;
        if (parent.classList.contains('single-item-cart')) {
            addToCart(parent.dataset.id);
        }
    })
}


export default displayItems;


