// Dom - Document object model
// It is like tree like structure
// It convert html code into js object

// getElementByid() - the method return an element with specified id
// it returns a single object

console.log(document.getElementById('heading1'));
console.log(document.getElementById('')); // return null


//getElementsByClassName() method returns a collection of elements with a specified class name(s).
// It return array like object

console.log(document.getElementsByClassName('para'));

// getElementsByTagName

console.log(document.getElementsByTagName('p'));
