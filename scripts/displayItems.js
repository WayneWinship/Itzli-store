import { NumberFormat } from "../utils";
// needs cart functionality



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

//AddYourDiv.innerHTML = images;


