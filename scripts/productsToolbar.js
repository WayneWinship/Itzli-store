import { grab } from "../utils.js";
import displayItems from "../scripts/displayItems.js";
import paginate from "../scripts/paginate.js";
import displayButtons from "../scripts/displayButtons.js";
import addBtnEvtListener from './addBtnEvtListener.js';
import { store } from '../scripts/store.js';

const btnContainer = grab('.button-container');

const searchFunctionality = () => {
    const searchForm = grab('.search-form');
    const searchInput = grab('.search-input');
    searchForm.addEventListener('keyup', function (e) {
        let value = searchInput.value;
        if (value) {
            const newStore = store.filter((itm) => {
                value = value.toLowerCase();
                let { name } = itm;
                if (name.toLowerCase().includes(value)) {
                    return itm
                }
            });

            if (newStore.length < 1) {
                const products = grab('.products-container');
                products.innerHTML = `
                <div class="error-container">
                    <h3 class="filter-error">
                    sorry, no products match your search :(
                    </h3>
                </div>
                    `
            } else {
                if (newStore.length > 1) {
                    const storeWithPages = paginate(newStore);
                    console.log(storeWithPages);
                    displayItems(storeWithPages[0], grab('.products-container'));
                    displayButtons(btnContainer, storeWithPages, 0);
                    addBtnEvtListener(0, storeWithPages);
                } else {
                    displayItems(newStore, grab('.products-container'));
                    displayButtons(btnContainer, newStore, 0);
                    addBtnEvtListener(0, newStore);
                }

            }


        } else {
            const storeWithPages = paginate(store);
            displayItems(storeWithPages[0], grab('.products-container'));
            displayButtons(btnContainer, storeWithPages, 0);
            addBtnEvtListener(0, storeWithPages);
        }
    })
}

const companiesSortMenu = (store) => {
    let companies = ['all', ...new Set(store.map((itm) => itm.company))];

    const listContainer = grab('.company-list-container');

    listContainer.innerHTML = companies.map((company) => {
        return `
            <button class="company-btn">${company}</button>
        `
    }).join('')

    listContainer.addEventListener('click', function (e) {
        const element = e.target;
        if (element.classList.contains('company-btn')) {
            let newStore = [];
            if (element.textContent === 'all') {
                newStore = paginate([...store]);
            } else {
                newStore = paginate(store.filter((itm) => itm.company === e.target.textContent))
            }

            displayItems(newStore[0], grab('.products-container'))
            displayButtons(grab('.button-container'), newStore, 0)
            addBtnEvtListener(0, newStore);
        }
    })
}


export { searchFunctionality, companiesSortMenu }