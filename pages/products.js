import "../scripts/toggleMenu.js";
import { grab, formatPrice, getStorageItem, fetchData } from "../utils.js";
import { setupStore, store } from "../scripts/store.js";
import displayItems from "../scripts/displayItems.js";
import paginate from "../scripts/paginate.js"
import displayButtons from "../scripts/displayButtons.js";
import { searchFunctionality, companiesSortMenu } from "../scripts/productsToolbar.js";
import addBtnEvtListener from '../scripts/addBtnEvtListener.js';
import "../scripts/cart/setupCart.js"


/***********************************
 * Bug:
 *  The search function after a while leaves the prev/next button useless.
 *  Last fix was searchFunc in productsToolbar.js
 * 
 * *************************************/



const btnContainer = grab('.button-container');
const searchInput = grab('.search-input');
searchInput.value = "";

let index = 0;
let newStoreList = [];

const displayPage = () => {
    displayItems(newStoreList[index], grab('.products-container'));
    displayButtons(btnContainer, newStoreList, index);
};

if (store.length === 0) {
    const data = fetchData();
    if (data) {
        setupStore(data);
    }
    newStoreList = paginate(store);
    displayPage();
} else {
    newStoreList = paginate(store);
    displayPage();
}


addBtnEvtListener(index, newStoreList);
searchFunctionality();
companiesSortMenu(store);




// btnContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('button-container')) return

//     if (e.target.classList.contains('page-btn')) {
//         index = parseInt(e.target.dataset.index);
//     }

//     if (e.target.classList.contains('next-btn')) {
//         index++;
//         if (index > newStoreList.length - 1) {
//             index = 0;
//         }
//     }

//     if (e.target.classList.contains('prev-btn')) {
//         index--;
//         if (index < newStoreList.length - 1) {
//             index = newStoreList.length - 1;
//         }
//     }
//     displayPage()
// })




// const vaseItms = store.filter(itm => itm.type === 'vase')
// window.addEventListener('DOMContentLoaded', init);
