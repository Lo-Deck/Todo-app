const imgThemeMode = document.querySelector('.image-theme-mode');
const btnThemeMode = document.querySelector('.button-theme-mode');
const input = document.querySelector('.input-todo');
const check = document.querySelectorAll('.check');


let numberItem = 0;


/*FONCTION*/

const addBorder = (element) => {
    element.previousElementSibling.style.display = 'inline-block';
};

const removeBorder = (element) => {
    element.previousElementSibling.style.display = 'none';
};

const displayCrossRemoveItem = (element) => {
    element.lastElementChild.style.visibility = 'visible';
};

const displayOutCrossRemoveItem = (element) => {
    element.lastElementChild.style.visibility = 'hidden';
};

const deleteItem = (element) => {
    element.parentElement.remove();
    numberItem--;
    document.querySelectorAll('.number-items').forEach( (element) => {

        element.textContent = numberItem;

    });

    obj = document.querySelectorAll('.check');

};

const completedTodoItem = (element) => {

    if(element.style.textDecoration === ''){
        element.style.textDecoration = 'line-through';
        element.style.filter = 'opacity(0.5)';
    } 
    else{
        element.style.textDecoration = '';
        element.style.filter = 'opacity(1)';
    }

};

const sortActive = (element) => {

    element.style.color = '#3A7CFD';

    document.querySelectorAll('.button-all').forEach( (item) => {
        item.style.color = 'inherit';
    });
    
    document.querySelectorAll('.button-completed').forEach( (item) => {
        item.style.color = 'inherit';
    });

    document.querySelectorAll('.check').forEach( (item) => {
        item.checked ? item.parentElement.style.display = 'flex' : item.parentElement.style.display = 'none';
    });

}

const sortAll = (element) => {

    element.style.color = '#3A7CFD';

    document.querySelectorAll('.button-active').forEach( (item) => {
        item.style.color = 'inherit';
    });
    
    document.querySelectorAll('.button-completed').forEach( (item) => {
        item.style.color = 'inherit';
    });

    document.querySelectorAll('.check').forEach( (item) => {
        item.parentElement.style.display = 'flex';
    });

}

const sortCompleted = (element) => {

    element.style.color = '#3A7CFD';

    document.querySelectorAll('.button-active').forEach( (item) => {
        item.style.color = 'inherit';
    });
    
    document.querySelectorAll('.button-all').forEach( (item) => {
        item.style.color = 'inherit';
    });

    document.querySelectorAll('.list span').forEach( (item) => {
        item.style.textDecoration === 'line-through' ? item.parentElement.style.display = 'flex' : item.parentElement.style.display = 'none';
    });

}


const sortCompletedAll = () => {

    document.querySelectorAll('.list span').forEach( (item) => {

        if(item.style.textDecoration === 'line-through'){
            item.parentElement.remove();
            numberItem--;
        } 

    });

    document.querySelectorAll('.number-items').forEach( (element) => {
        element.textContent = numberItem;
    });

    obj = document.querySelectorAll('.check');

}


/*KEEP STATE INPUT CHECKED*/

let obj = {};

const keepState = () => {
    obj = document.querySelectorAll('.check');
};


/*DARK-MODE*/

let isDarkMode = false;

if(window.matchMedia("(prefers-color-scheme: dark)").matches){

    isDarkMode = !isDarkMode;

    if(isDarkMode){
        imgThemeMode.src = './images/icon-sun.svg';
        document.getElementsByTagName('body')[0].classList.add('dark');
    }
    else{
        imgThemeMode.src = './images/icon-moon.svg';
        document.getElementsByTagName('body')[0].classList.remove('dark'); 
    }

};


btnThemeMode.addEventListener('click', () => {
   
    isDarkMode = !isDarkMode;

    if(isDarkMode){
        imgThemeMode.src = './images/icon-sun.svg';
        document.getElementsByTagName('body')[0].classList.add('dark'); 
    }
    else{
        imgThemeMode.src = './images/icon-moon.svg';
        document.getElementsByTagName('body')[0].classList.remove('dark'); 
    }

});


/*INPUT*/

input.addEventListener('keypress', (event) => {

    if(event.key === 'Enter'){
        const value = input.value;                                              //  ondrag="drag()" 
        document.querySelector('.list').innerHTML += `<li class="li-todo" ondragstart="dragStart(event)" ondragend="dragStop(event)" draggable="true" onmouseover="displayCrossRemoveItem(this)" onmouseout="displayOutCrossRemoveItem(this)"><div class="border-color"></div><input class="check" type="checkbox" onchange="keepState()" onmouseover="addBorder(this)" onmouseout="removeBorder(this)" title="Active">  
                        <span onclick="completedTodoItem(this)" title="Complete">${value}</span><button class="button button-delete-todo" onclick="deleteItem(this)">
                        <img class="image-cross" src="./images/icon-cross.svg" alt=""></button></li>`;

        numberItem++;

        document.querySelectorAll('.number-items').forEach( (element) => {

            element.textContent = numberItem;

        }); 

        input.value = '';

    }

    if(obj.length){
        document.querySelectorAll('.check').forEach( (item, index) => {
            item.checked = obj[index]?.checked;
        });

    }

});

document.querySelectorAll('.button-all').forEach( (item) => {
    item.style.color = '#3A7CFD';
});




/*DRAP&DROP*/

const dragStart = (event) => {
   event.target.classList.add('dragging');
   beingDragged = event.target;
};

const dragStop = (event) => {
   event.target.classList.remove('dragging');
};

const dragOver = (event) => {

    event.preventDefault();

    const draggable = document.querySelector('.dragging');
    const array = Array.from(document.querySelectorAll('.li-todo:not(.dragging)'));

    let sibling = array.find( (element, index) => {

        return event.clientY <= element.offsetTop + element.offsetHeight / 2 ;

    });

    document.querySelector('.list').insertBefore(draggable, sibling);

};


