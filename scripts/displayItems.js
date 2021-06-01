// import { NumberFormat } from "../utils.js";
// needs cart functionality



var displayItems = (products, element) => {
    console.log(products, element.innerHTML);
    // let { fields, id } = products;
    element.innerHTML = products.map((product) => {
        let { id, company, img, name, price, type } = product;
        return `
    <article class="single-item">
        <div class="single-item-img-container" >
            <img src="${img}" alt="${name}" class="single-item-img"></br>
        </div>
        <p>${name}</br> price: $${price}</p>
    </article>
        `
    }).join('')

}


export default displayItems;


