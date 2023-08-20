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

