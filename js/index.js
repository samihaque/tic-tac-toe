/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
};
    //calling the init function!
init();

let squares = document.getElementsByClassName('square');
console.log(squares)

// let board = document.getElementById('board')
console.log(board)

let handleClick = () =>{
    // do stuff
    console.log('clicked!');
}

board.addEventListener('click', handleClick);