# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Todo-app/blob/main/screenshot/Todo%20app-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/Todo-app/blob/main/screenshot/Todo%20app-desktop.png).
![screenshot desktop-light](https://github.com/Lo-Deck/Todo-app/blob/main/screenshot/Todo%20app-desktop-light.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Todo-app).
- Live Site URL: [Website](https://lo-deck.github.io/Todo-app/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned


I learned how to do a todo-list with an `input` and add some value and tag to a `list` using `ul` for the container and `li` for the item to add:
```js
if(event.key === 'Enter'){
        const value = input.value;                                             
        document.querySelector('.list').innerHTML += `<li class="li-todo" ondragstart="dragStart(event)" ondragend="dragStop(event)" draggable="true" onmouseover="displayCrossRemoveItem(this)" onmouseout="displayOutCrossRemoveItem(this)"><div class="border-color"></div><input class="check" type="checkbox" onchange="keepState()" onmouseover="addBorder(this)" onmouseout="removeBorder(this)" title="Active">  
                        <span onclick="completedTodoItem(this)" title="Complete">${value}</span><button class="button button-delete-todo" onclick="deleteItem(this)">
                        <img class="image-cross" src="./images/icon-cross.svg" alt=""></button></li>`;

       numberItem++;

       document.querySelectorAll('.number-items').forEach( (element) => {

       element.textContent = numberItem;

    }); 

   input.value = '';

}


```

I learned how to make a `drag and drop` to change a `list`, using some listener `ondragstart="dragStart(event)"`, `ondragend="dragStop(event)"`, `ondragover='dragOver(event)'` 


```js
const dragOver = (event) => {

    event.preventDefault();

    const draggable = document.querySelector('.dragging');
    const array = Array.from(document.querySelectorAll('.li-todo:not(.dragging)'));

    let sibling = array.find( (element, index) => {

        return event.clientY <= element.offsetTop + element.offsetHeight / 2 ;

    });

    document.querySelector('.list').insertBefore(draggable, sibling);

};

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
