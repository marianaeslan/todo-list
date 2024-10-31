const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


//Inserting Element on the List
function addTask() {
    if(inputBox.value === ""){
        alert("You must insert a task!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"  //unicode for x
        li.appendChild(span)
    }
    inputBox.value = "" //clean input box
    saveData()
}

inputBox.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        addTask()
    }
})

listContainer.addEventListener("click", function(clickEvent){
    if(clickEvent.target.tagName === "LI") { // verify if the click was an <li> item
        clickEvent.target.classList.toggle("checked")
        saveData()
    } else if (clickEvent.target.tagName === "SPAN"){ // verify if the click was on the "x"
        clickEvent.target.parentElement.remove() // remove the item
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML) // save the data on localstorage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()