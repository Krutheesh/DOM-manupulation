
let li = [];
let remove = document.querySelectorAll("a");

for(let i=0 ; i<remove.length; i++){
  console.log(remove[i].innerHTML)
  let temp = remove[i].innerHTML.slice(-3,);
  if(temp == "2.0"){
    let content = remove[i].innerHTML;
    
    li.push(content);
    remove[i].innerHTML=""
    

  }
  
}


let disableFalseSubmit = document.querySelector(".main__form-btn");
disableFalseSubmit.disabled = false;
let disableFalseinput = document.querySelector(".main__form-input");
disableFalseinput.disabled = false;
localStorage.setItem('name',"ineuron")


document.querySelector(".main__form-input").value=localStorage.getItem("name");


let removes = document.querySelectorAll("a");
let j=0
for(let i=0 ; i<removes.length; i++){
  let temp1 = removes[i].innerHTML;
  if(temp1 === ""){
    console.log(i,localStorage.getItem(`${i}`))
    removes[i].innerHTML=localStorage.getItem(`${i}`)
    

  }
   }

document.querySelector("form").addEventListener("click",function(e){
  
  


  let remove = document.querySelectorAll("a");
  console.log(remove)
  let k=0
for(let i=0 ; i<remove.length; i++){
  let temp = remove[i].innerHTML;
  if(temp === ""){
    
    localStorage.setItem(`${i}`,li[k])
    k=k+1;
    

  }}
})
