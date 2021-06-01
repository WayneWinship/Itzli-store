import "../scripts/toggleMenu.js";
import { grab, formatPrice, getStorageItem, fetchData } from "../utils.js";
import { setupStore, store } from "../scripts/store.js";
import displayItems from "../scripts/displayItems.js";
import paginate from "../scripts/paginate.js"
import displayButtons from "../scripts/displayButtons.js";

const btnContainer = grab('.button-container')

let index = 0;
let newStoreList = [];

const init = async () => {
    if (store.length === 0) {
        const data = await fetchData();
        if (data) {
            setupStore(data);
        }
    }
}

const displayPage = () => {
    displayItems(newStoreList[index], grab('.products-container'));
    displayButtons(btnContainer, newStoreList, index);
};

newStoreList = paginate(store);
displayPage();

btnContainer.addEventListener('click', function (e) {
    console.log(index);
    if (e.target.classList.contains('button-container')) return

    if (e.target.classList.contains('page-btn')) {
        index = parseInt(e.target.dataset.index);
    }

    if (e.target.classList.contains('next-btn')) {
        index++;
        if (index > newStoreList.length - 1) {
            index = 0;
        }
    }

    if (e.target.classList.contains('prev-btn')) {
        index--;
        if (index < newStoreList.length - 1) {
            index = newStoreList.length - 1;
        }
    }
    console.log(index);
    displayPage()
})



// const vaseItms = store.filter(itm => itm.type === 'vase')





window.addEventListener('DOMContentLoaded', init);
