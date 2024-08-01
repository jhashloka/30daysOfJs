//Activity-1 Selecting and Manipulating Objects

//Task-1
let toChange = document.getElementById('change');
toChange.innerHTML = "Text Changed";
//Task-2
let toChangeBg = document.querySelector(".bg-change");
toChangeBg.addEventListener('click', () => {
    toChangeBg.style.backgroundColor = 'lightblue'; // Corrected property name
});

//Activity-2 - Creating and appending elements

//Task-3
let div = document.createElement('div')
div.innerHTML="This is a new div"
document.body.append(div)

//Task 4: Create a new li element and add it to an existing ul list.
let newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.querySelector('ul').appendChild(newLi);

// Activity 3 Removing Elements

//Task 5 Select an HTML element and remove it from dom
let wish=document.getElementById('wish');
document.body.removeChild(wish);


//Task 6: Remove the last child of a specific HTML element.
let parentElement = document.getElementById('parentElementId');
parentElement.removeChild(parentElement.lastChild);

//Activity 4: Modifying Attributes and Classes
//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document.querySelector('img').setAttribute('src', 'newImageSource.jpg');

//Task 8: Add and remove a CSS class to/from an HTML element.
let element = document.getElementById('elementId');
element.classList.add('newClass');
element.classList.remove('oldClass');

//Activity 5 Event Handling

//Task 9 Add a click event listener to a button that changes the text content of a paragraph
let c=document.getElementById('change');
document.getElementById('button1').addEventListener('click',function(){c.innerHTML='Changed'});

//Task 10 Add a mouseover event listener to an element that changes its border color
document.getElementById('change2').addEventListener('mouseover',function(){
    this.style.border='2px solid blue';
})