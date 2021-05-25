import { grab } from "./utils.js";
import "./scripts/toggleMenu.js"
import storeAPI from "./src/store-items.js"

const heroCenter = grab('.hero-center');



var images = storeAPI.map((item) => {
    let { fields, id } = item;
    let { name, image, price } = fields;
    let img = image[0].url
    return `
    <article class="single-item">
        <div class="item-img" >
            <img src="${img}" alt="${name}" class="hero-img"></br>
        </div>
        <p>${name}</br> price: $${price}</p>
    </article>
        `
}).join("");

heroCenter.innerHTML = images;


