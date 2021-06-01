import "../scripts/toggleMenu.js";
import { grab, formatPrice, getStorageItem, fetchData } from "../utils.js";
import { setupStore, store } from "../scripts/store.js";
import displayItems from "../scripts/displayItems.js";

displayItems(store, grab('.products-container'))

// const products = getStorageItem('store');
// console.log('main');