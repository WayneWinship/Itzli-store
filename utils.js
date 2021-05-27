import * as URL from "./src/store-items.js";

const fetchData = () => URL.default;

const grab = (element) => {
    const object = document.querySelector(element);
    if (object) {
        return object;
    } else {
        return new Error(`The element ${element} does not exist!!`)
    }
}


const addTime = () => {
    const element = grab('.time');
    let time = new Date();
    element.textContent = time.getFullYear();
}

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2));
    return formattedPrice
}



const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item);
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
    } else {
        storageItem = [];
    }
    return storageItem;

}

const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item));
}



addTime();
export { grab, formatPrice, fetchData, getStorageItem, setStorageItem }