import displayItems from "../scripts/displayItems.js";
import displayButtons from "../scripts/displayButtons.js";
import { grab } from '../utils.js';


const addBtnEvtListener = (index, newStoreList) => {
    let i = index;
    const btnContainer = grab('.button-container');
    btnContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('button-container')) return

        if (e.target.classList.contains('page-btn')) {
            // console.log(e.target.dataset.index);
            i = parseInt(e.target.dataset.index);
        }

        if (e.target.classList.contains('next-btn')) {
            i++;
            // console.log(index);
            if (i > newStoreList.length - 1) {
                i = 0;
            }
        }

        if (e.target.classList.contains('prev-btn')) {
            i--;
            if (i < 0) {
                i = newStoreList.length - 1;
            }
        }
        // displayPage()
        displayItems(newStoreList[i], grab('.products-container'));
        displayButtons(btnContainer, newStoreList, i);
        // console.log(i);
    })
}

export default addBtnEvtListener