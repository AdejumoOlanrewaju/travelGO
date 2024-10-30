const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

const selects = document.querySelectorAll(".select")
const optionsLists = document.querySelectorAll(".options-list")
const options = document.querySelectorAll(".option")
const moreIcon = document.querySelectorAll(".more-icon-span")
const dropDown = document.querySelectorAll(".drop-down")

hamburger.addEventListener("click", () => {
    header.classList.toggle("active")
})

selects.forEach((select, index) => select.addEventListener("click", function(){
    removeOtherOption(index)
    this.parentElement.querySelector(".options-list").classList.toggle("show-options")
}))

function removeOtherOption(index){
    optionsLists.forEach((optionsList, i) => {
        if(i !== index){
            optionsList.classList.remove("show-options")
        }
    })
}

options.forEach((option) => {
    option.addEventListener("click", function() {
        let optionParent = this.parentElement
        let topOptionParent = optionParent.parentElement
        topOptionParent.querySelector(".selected-word").textContent = option.textContent
        optionParent.classList.toggle("show-options")
    })
})

moreIcon.forEach((icon, index) => {
    icon.addEventListener("click", function(){
        dropDown[index].classList.toggle("show-drop-down")
        revealDropFunc(".more-icon", dropDown[index], "show-drop-down")
    })
})

function revealDropFunc(highlightEl, dropEl, selectorStr){
    document.addEventListener("click", function(event){
        let parentEl = document.querySelector(highlightEl)
        if(event.target.closest(highlightEl) == null){
            dropEl.classList.remove(selectorStr)
        }
    })
}

window.addEventListener("click", (e) => {
    if(e.target.closest(".select") == null && e.target.closest(".option") == null){
        optionsLists.forEach(optionsList => optionsList.classList.remove("show-options"))
    }
})

const masonryGrid = document.querySelector('.gallery-img-container');
const gridItems = document.querySelectorAll('.gallery-img-container img');

const masonryLayout = () => {
    const columnCount = 3; // Number of columns
    let columnHeights = new Array(columnCount).fill(0);
    let gridItemWidth = masonryGrid.clientWidth / columnCount;

    gridItems.forEach((item, index) => {
        let minColumn = columnHeights.indexOf(Math.min(...columnHeights)); // Find the shortest column

        item.style.position = 'absolute';
        item.style.width = gridItemWidth + 'px';
        item.style.top = columnHeights[minColumn] + 'px';
        item.style.left = gridItemWidth * minColumn + 'px';

        columnHeights[minColumn] += item.offsetHeight + 10;
        // Update the column height
    });

    // Set the grid height to the tallest column
    masonryGrid.style.height = Math.max(...columnHeights) + 'px';
};

// Call the masonry layout function after images are loaded (if needed)
// window.addEventListener('resize', masonryLayout);
// masonryLayout();

  