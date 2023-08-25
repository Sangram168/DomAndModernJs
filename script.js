// Dom - Document object model
// It is like tree like structure
// It convert html code into js object

// Access Element
// getElementByid() - the method return an element with specified id
// it returns a single object

console.log(document.getElementById('heading1'));
console.log(document.getElementById('')); // return null


//getElementsByClassName() method returns a collection of elements with a specified class name(s).
// It return array like object

console.log(document.getElementsByClassName('para'));

// getElementsByTagName

console.log(document.getElementsByTagName('p'));


// The querySelectorAll() method returns all elements that matches a CSS selector(s).

console.log(document.querySelector('.para'));
console.log(document.querySelectorAll('.para'));


console.log(document.querySelector('#ita'));
console.log(document.querySelectorAll('#ita'));


console.log(document.querySelector('p'));
console.log(document.querySelectorAll('p'));

// updating Existing Content

// innerHTML - It show you the content/element inside an element

let con = document.querySelector('.para');
console.log(con);

console.log(con.innerHTML); // get element/content inside an element

con.innerHTML = ' '; // set element/content inside an element
console.log(con);

// text content - get/set textual content

let co =document.querySelector('.para');
console.log(co.textContent = 'text content is set');
console.log(co);

console.log(co.textContent)

// innerText - It also set/get textual content but it not show text if any case display is hidden

let con2 = document.querySelector('.heading2');
console.log(con2);
con2.innerText = 'Adding heading2'
console.log(con2.innerText);

// outerHtml - The outerHTML property sets or returns the HTML element,
// including attributes, start tag, and end tag.

let tx = document.querySelector('small');
console.log(tx);

console.log(tx.outerHTML);


// Adding New Element/Content

let itm = document.querySelector('.item');
console.log(itm);

let newItm = document.createElement('p');
console.log(newItm);

itm.appendChild(newItm);
console.log(itm); // paragraph added at the end

// Creating TextNode

let newPara = document.createElement('p');
let textPara = document.createTextNode('I am the text');
newPara.appendChild(textPara);
console.log(newPara);

// 2nd method

let newPara1 = document.createElement('p');
newPara1.textContent = 'I am the text';
newPara.appendChild(newPara1);
console.log(newPara);

// The insertAdjacentHTML() method inserts HTML code into a specified position
// you can put beforeend, afterend, beforebegin, afterend
let hd = document.querySelector('.hh');
console.log(hd);

let hd1 = document.createElement('h4');
hd1.textContent = 'ABCD';

console.log(hd1);

hd.insertAdjacentElement("beforeend", hd1);
console.log(hd); // element add at the just before the end


// removeChild() - opposite to append child
// Need to know child element to remove
// Need to know parent element


let hed = document.querySelector('.hd1');
console.log(hed);

 let chd = document.querySelector('.pr1');
// console.log(chd);

let sp = hed.removeChild(chd);
console.log(sp);

// how to find child element parent

let bo = document.querySelector('.b1');
console.log(bo);

console.log(bo.parentElement); // italic element its parent

// style page content

let con3 = document.querySelector('#heading1');
console.log(con3);

con3.style.color = 'red';

con3.style.backgroundColor = 'green';

// cssText - set multiple property to content

con3.style.cssText = 'color:green; background-color:yellow; font:4em;'

// set Attribute - It not only add style to content but also help to add attribute to the element/content

con3.setAttribute('style', 'color:blue');
con3.setAttribute("class", "h1");

// className -  The className property sets or returns an element's class attribute

let com = document.querySelector('.first.second.third');
console.log(com);

let v2 = com.className += " tyh"; // add new class(string)
console.log(v2);

let sp1 = v2.split(' '); // covert into string into array
console.log(sp1);

let sp2 = v2.toString(); // array convert into array
console.log(sp2);

// classList - It return the array of list

let ar = com.classList;
console.log(ar);

ar.add('fourth'); // add element
ar.remove('fourth'); // remove element
ar.toggle('fourth'); // if element present then it will remove but if not present then add

let pe = ar.contains('first'); // check element present or not
console.log(pe);



// Event Listener - Event Listener in JavaScript is a procedure or method executed when any event
// occurs like a click event. An event is something that occurs in HTML elements.

// addEventListener() - The JavaScript addEventListener() method allows you to set up functions to be 
// called when a specified event happens, such as when a user clicks a button
let co2 = document.querySelector('.hh');
console.log(co2);

let co3 = co2.addEventListener('click', function(){ // it change background color
    co2.style.background = 'red'; 
});

//
let co5 = document.querySelector('h3');
console.log(co2);

co5.addEventListener('click', function(){
    co5.style.background = 'green';
});

// on click message print

document.addEventListener('click', function(){
    console.log('I have clicked on the document');
});


// removeEventListener() - The removeEventListener() method of the EventTarget interface removes an event listener previously 
// registered with EventTarget.addEventListener() from the target.
// Note - In js function are object
// It needs same target, same type and same function

// document.addEventListener('click', function(){
//     console.log('Clicked');
// });

// document.removeEventListener('click', function(){
//     console.log('Clicked'); // not work removeEventListener() because these are two different object on different location
// });

function print(){
    console.log('Hi');
}

document.addEventListener('alert', print);

document.removeEventListener('alert', print);


// EventObject - When event occurs addEventListener() function receive an event object and object has lot of information about event

let wq = document.querySelector('.it');

wq.addEventListener('click', function(event){

    console.log(event);
});

// preventDefault() - It prevent the default action of an event 

let links = document.querySelectorAll('a');
console.log(links);
let lin = links[1];
console.log(lin);

lin.addEventListener('click', function(event){
    event.preventDefault();
    console.log('hello world');
})


// Avoid to many event

let myDiv = document.createElement('div');
for(let i = 1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    newElement.addEventListener('click', function(event){
        console.log('I have clicked a para');
    });

    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);


// More optimize
// target - The target property returns the element where the event occured
let myDiv2 = document.createElement('div');
  function paraStatus(event){
     console.log('Para' + event.target.textContent);
 }
for(let i = 1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    newElement.addEventListener('click', paraStatus);

    myDiv2.appendChild(newElement);
}

document.body.appendChild(myDiv);


//
let element = document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName === 'SPAN'){
        console.log('span pr click kia hai' + event.target.textContent);

    }
    
});



















