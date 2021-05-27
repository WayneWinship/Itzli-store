import "./scripts/toggleMenu.js"

import { grab, fetchData } from "./utils.js";
import { setupStore, store } from "./scripts/store.js";

const init = async () => {
    const data = await fetchData();
    if (data) {
        setupStore(data);
    }
    const featured = store.filter((itm) => itm.featured === true)
    console.log(featured);
}

window.addEventListener('DOMContentLoaded', init);

// Needs display data