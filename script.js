// Searching scripting
/*let btn = document.querySelector('#btn');
let search = document.querySelector('#search');


btn.addEventListener('click', ()=>{
  search.style.width = "150px";
  search.style.transition = "width 1s";
})*/

// Navbar Scripting

let ul = document.querySelector('ul');
let xBar = document.querySelector('#x-bar');
let bar = document.querySelector('#bar');
let allc = document.querySelector('.allc');
let ollc = document.querySelector('.ollc');

//console.log(ul,xBar,bar);

bar.addEventListener('click', ()=>{
  ul.style.left = '0';
  ul.style.transition = '1s';
  bar.style.transition = '2s';
});

xBar.addEventListener('click', ()=>{
  ul.style.left = '-100%';
  ul.style.transition = '1s';
  xBar.style.transition = '2s';
});

// footer script 

let hom = document.querySelector('#f1-icon');
let allco = document.querySelector('#f2-icon');
let conta = document.querySelector('#f3-icon');

let contact = document.querySelector('#contact');
let center = document.querySelector('#center');
 

conta.addEventListener('click', ()=>{
  center.style.display = 'none';
  contact.style.display = 'block';
});

hom.addEventListener('click', ()=>{
  center.style.display = 'block';
  contact.style.display = 'none';
});







