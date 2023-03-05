
const skills = document.createElement("div");
// skills added
skills.setAttribute("class","accordian");
const h3 = document.createElement('h3');
h3.textContent="Skills";
const p = document.createElement('p');
p.textContent="I possess a good command over fullstack development technologies like mern which can be seen in my work over github";
skills.appendChild(h3);
skills.appendChild(p);
const s = document.querySelector(".accordian-wrapper");
s.appendChild(skills)

// projects added

const project=document.querySelectorAll("ul>li>a");
project[2].innerHTML="Projects";


let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

