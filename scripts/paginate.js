const paginate = (store) => {
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(store.length / itemsPerPage);

    const newStore = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;

        return store.slice(start, start + itemsPerPage)
    });
    return newStore
}

export default paginate