// var list=document.querySelector('#items')
// console.log(list.parentNode)
// list.parentNode.style.backgroundColor='yellow'
// console.log(list.parentNode.parentNode)

//parent element    //parentnode and parent element are the same property
// var list=document.querySelector('#items')
// console.log(list.parentElement)
// list.parentElement.style.backgroundColor='yellow'
// console.log(list.parentElement.parentElement)

//childnode
// var list=document.querySelector('#items')
// //console.log(list.childNodes)
// console.log(list.children)
// list.children[0].style.backgroundColor='yellow'

//first child
//var list=document.querySelector('#items')
//console.log(list.firstChild)//its show text because in items and list its has a space so its a text
//first  Element children
// var list=document.querySelector('#items')
// console.log(list.firstElementChild)
// list.firstElementChild.textContent='hello'

//last child
// var list=document.querySelector('#items')
// console.log(list.lastChild)//its show text 
// //last Element child
// console.log(list.lastElementChild)
// list.lastElementChild.textContent='hello4'

//next sibling
// var list=document.querySelector('#items')
// console.log(list.nextSibling)//its show text because the next sibling is space so its text
// console.log(list.nextElementSibling)//its show null because item ka next sibling koi nahi hai so null print

//previous sibling
// var list=document.querySelector('#items')
// console.log(list.previousSibling)// its show text
// console.log(list.previousElementSibling)
// list.previousElementSibling.style.color='green'

//creat element
var newDiv=document.createElement('div')

//create class
newDiv.className='hello'
//create id
newDiv.id='hello1'
//add attribute
newDiv.setAttribute('title','helloWord')
//create text node
var createText=document.createTextNode('hellocountry')
//add text to div
newDiv.appendChild(createText)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
console.log(newDiv)
container.insertBefore(newDiv,h1)

var list=document.getElementById('items')
list.innerHTML='<li>hello world</li>'+list.innerHTML