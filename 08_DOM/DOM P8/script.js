// 8.1 assignment

const div = document.querySelector(".new");

div.style.overflow="auto";
div.setAttribute("onmouseover","my(this)");
div.setAttribute("onmouseout","myo(this)")
function my(x){
  x.style.border = "2px solid red"
}
function myo(x){
x.style.border ="none"
}
const hr = document.querySelectorAll('.hr-line');
const hrNew = hr[0].cloneNode(true);
div.appendChild(hrNew);

const newHead = document.querySelectorAll('.new-head');
const headNew = newHead[0].cloneNode(true);
div.appendChild(headNew);

const newP = document.querySelectorAll('.new-p')
const pNew = newP[0].cloneNode(true);
div.appendChild(pNew);

// 8.2 assignment
const bgi = document.querySelector("body");
console.log(bgi)

bgi.style.backgroundImage= 'none';

// 8.3 assignment
let coll = document.querySelector(".collapse")
const navbar = document.querySelector(".navbar-toggler")
navbar.addEventListener("click",() => {
 coll.classList.toggle("collapse")
});
