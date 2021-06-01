import { grab } from "../utils.js";
import displayItems from "../scripts/displayItems.js";
import paginate from "../scripts/paginate.js";
import displayButtons from "../scripts/displayButtons.js";

const btnContainer = grab('.button-container');

const searchFunctionality = (store) => {
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
                const storeWithPages = paginate(newStore);
                console.log(storeWithPages);
                displayItems(storeWithPages[0], grab('.products-container'));
                displayButtons(btnContainer, storeWithPages, 0)
            }

        }
    })
}


export { searchFunctionality }