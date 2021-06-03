import "../scripts/toggleMenu.js"
import { grab } from "../utils.js";
import * as fakeApi from "../src/store-items.js"
import { formatPrice } from "../utils.js"

const singleProductImage = grab('.single-product-image-container img');
const singleProductName = grab('.single-product-name');
const singleProductCompany = grab('.single-product-company');
const singleProductPrice = grab('.single-product-price span');
const colorAvailable1 = grab('.color-available1');
const colorAvailable2 = grab('.color-available2');

window.addEventListener('DOMContentLoaded', function () {
    const data = fakeApi.default;
    const URLid = window.location.search;

    const singleProduct = data.filter(itm => {
        return itm.id == URLid.slice(4, URLid.length)
    });

    const { colors, company, image, name, price } = singleProduct[0].fields;
    const img = image[0].url;

    singleProductImage.src = img;
    singleProductImage.alt = name;
    singleProductName.textContent = name;
    singleProductCompany.textContent = company;
    singleProductPrice.textContent = formatPrice(price);

    let colorList = [];
    const colorsAvail = colors.map((clr) => {
        colorList.push(clr);
    });
    colorAvailable1.style.backgroundColor = colorList[0];
    colorAvailable2.style.backgroundColor = colorList[1];

})