const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");
const inputEl = document.querySelector(".input");

magnifierEl.addEventListener("click",()=>{
    searchBarContainerEl.classList.toggle("active")
});


function clickedSearchBar() {
    searchBarContainerEl.className.add("active");
}