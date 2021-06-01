import { formatPrice } from "../utils.js";

var displayItems = (products, element) => {
    // console.log(products);
    element.innerHTML = products.map((product) => {
        let { id, company, img, name, price, type } = product;
        return `
    <article class="single-item">
        <div class="single-item-img-container" >
            <img src="${img}" alt="${name}" class="single-item-img"></br>
        </div>
        <p class="single-item-name">${name}</p>
        <p class="single-item-company">${company}</p>
        <p class="single-item-price">price: ${formatPrice(price)}
        <span class="single-item-cart"><i class="fas fa-cart-plus"></i></span></p>
    </article>
        `
    }).join('')

}


export default displayItems;


