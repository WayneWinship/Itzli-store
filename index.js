import "./scripts/toggleMenu.js"
import { grab, fetchData } from "./utils.js";
import { setupStore, store } from "./scripts/store.js";
import "../scripts/cart/setupCart.js"
import "./scripts/cart/setupCart.js";
// import "./scripts/cart/cartToggle.js"
// import addToCartHTML from "./scripts/cart/addToCartHTML.js"

/****************************************
  Notes: 
    Needs a categories sections below the featured that redirects to the 
    products page that uses address to check for said category, if they exist
    sort by (couched, tables, etc) and if not then display the page normally.
******************************************/

const init = async () => {
    const data = await fetchData();
    if (data) {
        setupStore(data);
    }
    const featured = await store.filter((itm) => itm.featured === true);
    displayFeatured(featured);
}


const displayFeatured = (featured) => {

    const panels = grab('.panels');



    panels.innerHTML = featured.map((itm, index) => {
        let { id, name, img } = itm;

        let position = 'next';

        if (index === 0) {
            position = 'active';
        };
        if (index === featured.length - 1) {
            position = 'last';
        };
        //href should be product.html + product.id
        // after you make product single page
        return `
            <div class="panel ${position}">
                <a class="a-panel" href="product.html?id=${id}">
                    <img class="panel-img"
                        src="${img}"
                        alt="${name}">
                </a>
            </div>
        `
    }).join('')

    const leftBtn = grab('.hero-button-left');
    const rightBtn = grab('.hero-button-right');
    //  
    const panelFunctionality = (type) => {
        const active = grab('.active');
        const last = grab('.last');

        let next = active.nextElementSibling;

        if (!next) {
            next = panels.firstElementChild;
        }

        active.classList.remove(['active']);
        last.classList.remove(['last']);
        next.classList.remove(['next']);

        active.classList.add(['last']);
        last.classList.add(['next']);
        next.classList.add(['active']);

        console.log(active, last, next);


    }

    leftBtn.addEventListener('click', () => {
        panelFunctionality();
    });
    rightBtn.addEventListener('click', () => {
        panelFunctionality();
    });



}



window.addEventListener('DOMContentLoaded', init);

// Needs display data