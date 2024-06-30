var input = document.querySelector('#input');
var itemslist = document.querySelector('#itemsList');
var form = document.querySelector('#form');
var clearall = document.querySelector('.clear');
var pending = document.querySelector('#pending');
var completed = document.querySelector('#completed');
var all = document.querySelector('#all');

form.addEventListener('submit', additem);
itemslist.addEventListener('click', removeitem);
clearall.addEventListener('click', clear);
pending.addEventListener('click', pendingtask);
completed.addEventListener('click', completedtask);
all.addEventListener('click', display);


// add item
function additem(e){
    e.preventDefault();

    // checkbox
    var check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'check';
    check.classList = ('checkbox');

    // input text
    var p = document.createElement('p');
    var inputtext = document.createTextNode(`${input.value}`);
    p.appendChild(inputtext);

    // div
    var div = document.createElement('div');
    div.classList = ('check');
    div.appendChild(check);
    div.appendChild(p);

    button
    var button = document.createElement('button');
    button.innerText = 'X';
    button.classList = ('delete');

    // li
    var li = document.createElement('li');
    li.classList = ('todoitem');
    li.appendChild(div);
    li.appendChild(button);

    itemslist.appendChild(li);
    input.value = '';
    savdata();

}

// remove item
function removeitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm("Confirm Remove Item")){
            var li = e.target.parentElement;
            itemslist.removeChild(li);
        }
    }else if(e.target.classList.contains('checkbox')){
        var li = e.target.parentElement.parentElement;
        var liChild = e.target.parentElement;
        li.classList.toggle('strike');
        liChild.classList.toggle('strike2');
        console.log(li);
    }
    savdata();
}

// clear all items
function clear(e){
 e.preventDefault();
 if(e.target.classList.contains('clear')){
    if(confirm("Confirm Clear All items..")){
        while(itemslist.firstChild){
            itemslist.removeChild(itemslist.firstChild);
        }
    }
 }
 savdata();
}

// display all items
function displayall(){
    var li = document.querySelectorAll('.todoitem');
    li.forEach((item)=>{
        item.style.display = 'flex';
    });
}

function display(e){
    e.preventDefault();
    if(e.target.classList.contains('all')){
        displayall();
    }
    savdata();
}

// display completed items
function displaycompletedtask(){
    var li = document.querySelectorAll('.todoitem');
    li.forEach((item)=>{
        if(item.classList.contains('strike')){
            item.style.display = 'flex';
        }else{
            item.style.display = 'none'; 
        }
    });

}

function completedtask(e){
    e.preventDefault();
    if(e.target.classList.contains('completed')){
        displaycompletedtask();
    }
    savdata();
}

// display pending items
function displaypendingtask(){
    var li = document.querySelectorAll('.todoitem');
    li.forEach((item)=>{ 
        if(item.classList.contains('strike')){
            item.style.display = 'none';
        }else{
            item.style.display = 'flex';
        }
    });
}

function pendingtask(e){
    e.preventDefault();
    if(e.target.classList.contains('pending')){
        displaypendingtask(); 
    }
    savdata();
}

function savdata(){
    localStorage.setItem("data", itemslist.innerHTML);
}

function show(){
   itemslist.innerHTML = localStorage.getItem("data");
}

show();





