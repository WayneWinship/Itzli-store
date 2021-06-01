const displayButtons = (container, pages, activeIndex) => {
    // console.log(container, pages, activeIndex);
    let btns = pages.map((_, pageIndex) => {
        // If active page is equal to any iterated page object add active
        // else add null
        return `
    <button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">
             ${pageIndex + 1}
         </button>
            `
    })

    // add two items to array prev and next btns
    btns.push('<button class="next-btn">next</button>')
    btns.unshift('<button class="prev-btn">prev</button>')
    container.innerHTML = btns.join("");
}

export default displayButtons