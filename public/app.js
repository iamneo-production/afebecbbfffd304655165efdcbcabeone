// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result-container .result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    if(cells[index]===''&& isGameActive()){
        cells[index]=currentPlayer;
        element.textContent=currentPlayer;
        if(checkWin(currentPlayer)){
            result.textContent=`Player ${currentPlayer} Wins!`;
            disableButtons();
        }
        else if(isBoardFull()){
            result.textContent="It's a Draw!";
            disableButtons();
        }
        else{
        currentPlayer=(currentPlayer==='X')?'0':'X';
        result.textContent=`Player ${currentPlayer}'s Turn`;
        }
    }
};

    const isGameActive=()=>{
        return result.textContent==='';
    };
    const checkWin=(player)=>{
        for(let condition of conditions){
            const[a,b,c]=condition;
            if(cells[a]===player && cells[b]===player && cells[c]===player){
                return true;
            }

        }
        return false;
    };
    const isBoardFull=()=>{
        return cells.every(cell=>cell !=='');
    };
    const disableButtons=()=>{
        btns.forEach(btn=>btn.disabled=true);
    };
    // Function to reset the game
    const resetGame = () => {
        cells = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        btns.forEach(btn => btn.textContent = '');
        result.textContent = `Player ${currentPlayer}'s Turn`;
        btns.forEach(btn => btn.disabled = false);
    };
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => ticTacToe(btn, i));
    });
    document.querySelector('#reset-button').addEventListener('click', resetGame);

    // Your game logic here

    /*
    **Part 1: Winning Conditions (Add your code here)**
    
    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    
    for(const condition of conditions){
        const[a,b,c]=condition;
        if(cells[a] && cells[a]===cells[b] && cells[a]===cells[c]){
            result.textContent='${currentPlayer} wins!';
            btns.forEach(btn=>btn.disabled=true);
            return;
        }
    }
    if(cells.every(cell=>cell !=='')){
        result.textContent="It's a draw!";
        return;

    }
    currentPlayer=currentPlayer==='X'?'0':'X';
    result.textContent='Current Player: ${currentPlayer}';

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...


    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer='X';

    // Your code to update the 'result' element
    result.textContent='Current Player: ${currentPlayer'

    // Your code to re-enable buttons
    btns.forEach((btn,i)=>{
        btn.textContent='';
        btn.disabled=false;
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame); */
