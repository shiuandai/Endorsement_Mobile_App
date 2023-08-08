<h2 align="center">Endorsement_Mobile_App</h2>

<p align="center">
  <em> The Endorsement Mobile App is my first project of the Scrimba Front-End course, in this course, I build App designs from scratch and structure the code to finish the layout design.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. Design requirements](#1---design-requirements)**
	* [1.1 Structure Design](#11---grid-system)
	* [1.2 Colors](#12---colors)
	* [1.3 Fonts and texts](#13---fonts-and-texts)
	* [1.4 Publish files](#14---publish-files)
* **[2. Pre-work phases](#2---pre-work-phases)**
	* [2.1 Refine the project using CSS](#21---refine-the-project-using-CSS)
* **[3. Before production](#3---before-production)**

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


### 1.4 - Publish files

* [ ] How to host your website, there are several ways. 1. **Netlify** provides next-generation web hosting and automation that's very affordable. Is can be integrated with Github for publishing the web easily. The alternative is using Github Page, my way is to use Github Page. → [Comparison of Github Page and Netlify](https://www.freecodecamp.org/news/publish-your-website-netlify-github/) 

## 2. - Pre-work phases

### 2.1 - Refine the project using CSS

It is recommended to master the **flex-box** concept, it usually combines with different **Property** like **flex-direction: column; align-items: center;** .

Define what condition to use the flex-box, it influences how the content displayed.

⚠️ *When using the flex-box, it is good to use the property of "gap" rather than "margin" to generate the gap.*

## 3. - Before production

Before launching your website, be sure to review all your code and make sure the text layout and comment it's easy to read for another programmer.

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
