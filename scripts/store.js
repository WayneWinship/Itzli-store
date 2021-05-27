import { getStorageItem, setStorageItem } from "../utils.js"

let store = getStorageItem("store");

const setupStore = (items) => {
    store = items.map((itm) => {
        const { id, fields: { company, type, featured, price, name, image } } = itm;
        let img = image[0].url
        return { id, company, type, featured, price, name, img }
    })
    setStorageItem('store', store)
}

const findProduct = (id) => {
    let product = store.find((product) => product.id === id);
    return product
}

export { setupStore, store, findProduct }