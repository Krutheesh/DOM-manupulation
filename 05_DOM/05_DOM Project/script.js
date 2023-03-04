const recipe = document.querySelector(".recipe-gallery");

const div = document.createElement("div");
div.setAttribute("class","card");
const a = document.createElement("a");
a.setAttribute("class","recipe-text");
a.href="#";
const img = document.createElement("img");
img.setAttribute("class","recipe-img");
img.src="./img/Hyderabad-biriyani.jpeg";
const h5 = document.createElement("h5");
h5.setAttribute("class","recipe-name");
const content = document.createTextNode("Hyderabad-biriyani");
h5.appendChild(content);
const p = document.createElement("p");
p.setAttribute("class","recipe-disp");
p.textContent="Prep : 20min | Cook : 45min";

a.appendChild(img);
a.appendChild(h5);
a.appendChild(p);
div.appendChild(a);
recipe.appendChild(div);


// const m = document.querySelectorAll(".card");
// const clone = m[0].cloneNode(true);
// const recipe = document.querySelector(".recipe-gallery");
// recipe.appendChild(clone);
// const n =document.querySelectorAll(".recipe-name");
// n[5].innerHTML="mutton";


// console.log(m)
