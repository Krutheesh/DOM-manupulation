const aChange=document.querySelectorAll('a');
aChange[2].innerHTML="projects";
const li=document.createElement("li");
const a=document.createElement('a');
const content=document.createTextNode("Hire Me");
a.appendChild(content);
li.appendChild(a)
const element =document.querySelector("ul");
element.appendChild(li);


// The appendChild() method appends a node (element) as the last child of an element.
// element.appendChild(node)
// The createTextNode() method creates a text node.
// element.createTextNode(string)

// HTML Elements are Nodes

// All HTML elements are nodes.
// Elements are nodes. Attributes are nodes. Texts are nodes.
// Some elements contain other nodes.
// Some elements contain text nodes.
// Some elements consain attribute nodes.