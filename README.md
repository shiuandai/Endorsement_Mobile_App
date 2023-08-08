<h2 align="center">Endorsement_Mobile_App</h2>

<p align="center">
  <em> The Endorsement Mobile App is my first project of the Scrimba Front-End course, in this course, I build App designs from scratch and structure the code to finish the layout design.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. What is Firebase?](#1---design-requirements)**
	* [1.1 How to get started?](#11---grid-system)
	* [1.2 Setup in JavaScript](#12---colors)
	* [1.3 Extract the Data from the Object](#13---fonts-and-texts)
	* [1.4 How to use onValue()](#14---publish-files)
* **[2. Other techniques](#2---pre-work-phases)**
	* [2.1 user-select property](#21---refine-the-project-using-CSS)
* **[3. Web App manifest](#3---before-production)**

---

> The **Endorsement Mobile App** is my fifth project in which I learned to use the Firebases and library to store/ push/ delete data.

I start the Scrimba Module 2 course- Web dev basics and learn how to use a basic Firebase database. At the end of the course, I follow the Figma template to finish my first mobile app project, you can push the text on the comment, take a look at the → [Endorsement_Mobile_App](https://shiuandai.github.io/Endorsement_Mobile_App/).

## How I start the project?

* Build from Scratch. → [Figma Template from Scrimba](https://www.figma.com/file/SgWlM7qkqTQa7fiGEcLKew/We-are-the-Champions?type=design&node-id=0-1&mode=design&t=5ELFpz5A5AhpKoqk-0)
* Follow the Design.
* Firebase Realtime Database.
* Update in Realtime.

---

## 1. - What is Firebase?

Google Firebase is a set of cloud-based development tools that helps mobile app developers build, deploy and scale their apps. → [Why use Firebase?](https://www.techtarget.com/searchmobilecomputing/definition/Google-Firebase)

### 1.1 - How to get started?

* [ ] **First, you have to register an account** 1. Create a project 2. On the left side select realtime database 3. Create a database/pick a location that is close to you 4. Choose "test mode" 5. Copy the URL

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
  </div>
</div>
```

**[⬆ back to top](#table-of-contents)**

### 1.2 - Setup in JavaScript

```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
//從url輸入initializeApp function
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
//import前面這兩項的差別在於一個是import app一個是import database


const appSettings = {
    databaseURL: "https://playground-c5b18-default-rtdb.europe-west1.firebasedatabase.app"
} //url從自己的firebase帳戶得到url
const app = initializeApp(appSettings) //取得initializeApp function的argument
const database = getDatabase(app) //取得database的值
//what is ref which is any location inside the database
const moviesInDB = ref(database, "movies")//選取database的來源，隨意命名

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue) //把inputValue的值加入到了moviesInDB的database
    console.log(`${inputValue} added to database`)
})
```

**[⬆ back to top](#table-of-contents)**

### 1.3 - Extract the Data from the Object

Learn how to use **.values .keys .entries**

```js example
let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}
console.log(Object.values(scrimbaUsers))
```

  __Resources:__
	* 📖 [See more example here | W3School](https://www.w3schools.com/python/ref_dictionary_values.asp)

**[⬆ back to top](#table-of-contents)**


### 1.4 - How to use onValue()
To **read data** at a path and listen for changes, use onValue() to observe events. 

```js example
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
//onValue記得填寫
const appSettings = {
    databaseURL: "https://playground-c5b18-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

onValue(booksInDB, function(snapshot) {    //先輸入element再用逗點隔開輸入function()
    let booksArray = Object.values(snapshot.val()) //以array的方式輸出
		clearBooksListEl()
    for (let i = 0; i < booksArray.length; i++) {
        let currentBook = booksArray[i]
        
        // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging
        appendBookToBooksListEl(currentBook)
    }
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}
```
* [ ]  → [Official onValue() Documentation](https://firebase.google.com/docs/database/web/read-and-write) 

## 2. - Other techniques

### 2.1 - user-select property

specifies **whether** the text of an element can be selected.

```js example
div {
  user-select: none; //set to "none" means you cannot select the element
}
```

## 3. - Web App manifest

* [ ]  → [Good Explaination of Web App Manifest | MDN](https://developer.mozilla.org/zh-TW/docs/Web/Manifest) 
```js example
{
    "name": "Cat App",
    "short_name": "Cat App",
    "icons":
        [
            {"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}
        ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
}
```

**[⬆ back to top](#table-of-contents)**

---

## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
