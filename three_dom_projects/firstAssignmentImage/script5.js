const a=document.querySelectorAll('a');
a[2].innerHTML="projects";
const button=document.createElement("button");
button.textContent="Support Me"
// another method
// const content=document.createTextNode("Support Me");
// button.appendChild(content)



const b=document.querySelector(".hero-right-section-btns")
b.appendChild(button)