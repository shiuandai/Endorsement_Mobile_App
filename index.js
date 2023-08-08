// javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase,ref,push,onValue,remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-9e7fc-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementInDB = ref(database, "endorsement_list")

const input_field_El=document.getElementById("input-field")
const add_button_El=document.getElementById("add-button")
const endorsementListEl= document.getElementById("endorsement_list")

add_button_El.addEventListener("click", function() {
    let inputValue=input_field_El.value
    push(endorsementInDB, inputValue)
    clearInputFieldEl()
})

onValue(endorsementInDB, function(snapshot) {
    // Challenge: Console log snapshot.val() to show all the items inside of shoppingList in the database
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        clearEndorsementListEl()
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            appendItemToEndorsementListEl(currentItem)
        }
    }else {
        endorsementListEl.innerHTML = ""
    }

})

function clearEndorsementListEl() {
    endorsementListEl.innerHTML=""
}

function clearInputFieldEl(){
    input_field_El.value=""
}

function appendItemToEndorsementListEl(item){
    let itemID = item[0]
    let itemValue = item[1]
    // endorsementListEl.innerHTML += `<li>${itemValue}</li>`
    let newEl = document.createElement("li")
    
    // Challenge: Make it so the item name shows instead of 'Something'
    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `endorsement_list/${itemID}`)
        // Challenge: Use the remove function to remove the item from the database
        remove(exactLocationOfItemInDB)
    })
    
    endorsementListEl.append(newEl)
}