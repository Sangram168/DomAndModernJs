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













