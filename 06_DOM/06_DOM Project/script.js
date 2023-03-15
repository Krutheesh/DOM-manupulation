const newLogo = document.querySelector(".logo");
newLogo.src="./assets/ineuron-logo.png";
const price = document.querySelector(".app_price>span");
price.innerHTML="$10";

const div = document.createElement("div");
div.setAttribute("class","footer_social_ico")
const i = document.createElement("i");
i.setAttribute("class","fa-brands fa-linkedin");

div.appendChild(i);

const linkdin = document.querySelector(".footer_social");
linkdin.appendChild(div);