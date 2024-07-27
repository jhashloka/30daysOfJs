
    // Activity 1: Selecting and Manipulating Elements
    // Task 1: Change text content by ID
    document.getElementById('id1').innerHTML = 'Text has been changed!';

    // Task 2: Change background color by class
    document.querySelector('.background_color').style.backgroundColor = 'lightblue';

    // Activity 2: Creating and Appending Elements
    // Task 3: Create and append a new div
    const newdiv = document.createElement('div');
    newdiv.textContent = 'I am a new div';
    document.body.append(newdiv);

    // Task 4: Create and add a new list item
    const newlist = document.createElement('li');
    newlist.textContent = 'Item 3';
    document.getElementById('list').appendChild(newlist);

    // Activity 3: Removing Elements
    // Task 5: Remove an element by ID
    document.getElementById('to-remove').remove();

    // Task 6: Remove the last child of a list
    const list_remove = document.getElementById('list');
    list_remove.lastElementChild.remove();

    // Activity 4: Modifying Attributes and Classes
    // Task 7: Change an attribute
    document.getElementById('image').src = 'https/penguin.com';

    // Task 8: Add and remove a CSS class
    const textContent = document.getElementById('text-content');
    textContent.classList.add('highlight');
      document.getElementsById("text_button").addEventListener('click',() => {
        textContent.classList.remove('highlight');
      });
 
    // Activity 5: Event Handling
    // Task 9: Add click event listener to a button
    document.getElementById('text_button').addEventListener('click', () => {
        document.getElementById('text_change').textContent = 'Text has been changed by button ';
    });

    // Task 10: Add mouseover event listener to an element
    const mouse= document.getElementById('mouse_click');
    mouse.addEventListener('mouseover', () => mouse_click.classList.add('new_list'));
  

