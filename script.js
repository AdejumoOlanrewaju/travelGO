const hamburger = document.querySelector(".hamburger")
const header = document.querySelector("header")

const selects = document.querySelectorAll(".select")
const optionsLists = document.querySelectorAll(".options-list")
const options = document.querySelectorAll(".option")

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


window.addEventListener("click", (e) => {
    if(e.target.closest(".select") == null && e.target.closest(".option") == null){
        optionsLists.forEach(optionsList => optionsList.classList.remove("show-options"))
    }
})