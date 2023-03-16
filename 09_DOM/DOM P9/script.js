//task 1

const red = document.querySelector(".caption>.title");
console.log(red)
red.style.color = "#cc2900";


//task 2
const hover = document.querySelector(".add-to-cart")
hover.addEventListener("mouseover",() => {
  document.querySelector(".add-to-cart").style.backgroundColor = "#cc2900";
});
hover.addEventListener("mouseout",(e) => {
  document.querySelector(".add-to-cart").style.backgroundColor = "";
})
