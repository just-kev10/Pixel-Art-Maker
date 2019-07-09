
// When size is submitted by the user, call makeGrid()
const table = document.querySelector('#pixelCanvas');
const colorPick = document.getElementById('colorPicker');
const form = document.querySelector('#sizePicker');
var maxFormHeight = document.querySelector('input#inputHeight');
var maxFormWidth = document.querySelector('input#inputWidth');

// this fuction creates the grid.
function makeGrid(width, height) {
    //the rows and cells are created here by the parameter that the users wants.
    for (let r = 1; r <= height; r++) {
        // rows are created here, then they are appended to the table.
        const newrow = document.createElement('tr');
        table.appendChild(newrow);
        // cell are created here, then they are appended to row.
        for (let c = 1; c <= width; c++) {
            const newcell = document.createElement('td')
            newrow.appendChild(newcell);
        }
    }
}

// A grid should appear when users submit width and height
function respondtoSubmit(event) {
    event.preventDefault();
    // This are the initial values of the table.
    table.style.backgroundColor = 'white';
    table.innerHTML = '';
    makeGrid(form.width.value, form.height.value);
}
// This function responds to the click event.
function respondtoclick(event) {
    /* if  the tagname of the event is not a table and a table row then
    the background of the event targeted will change it color to the one
    the user picked.*/
    if (event.target.tagName != 'TABLE' && event.target.tagName != 'TR') {
        event.target.style.backgroundColor = colorPick.value;
    }
}

maxFormWidth.setAttribute('max', Math.round((window.innerWidth / 23)));
maxFormHeight.setAttribute('max', 100);
window.addEventListener('resize', function () {
    maxFormWidth.setAttribute('max', Math.round((window.innerWidth / 23)));
    maxFormHeight.setAttribute('max', 100);
});

// event listener for the document to respond the submit event.
document.addEventListener('submit', respondtoSubmit);
// event listener for the table to respond clicking target inside it.
table.addEventListener('click', respondtoclick);
