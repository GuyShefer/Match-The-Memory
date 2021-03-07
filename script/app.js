(function () {

    const easyBtn = document.querySelector('.easy');
    const mediumBtn = document.querySelector('.medium');
    const hardBtn = document.querySelector('.hard');
    const main = document.querySelector('.main');
    const gameBoard = document.querySelector('.game-board');
    let diffLevel;
    let wrongGuesses = 0;

    const cardsPack = [];

    const startGame = () => {
        main.style.display = 'none';
        createNewPack(diffLevel);
        setBoardStyle();
        // here have to shuffle
        addCardToTheBoard();
        
    }

    const createNewPack = (diffLevel) => {
        for(let i = 1 ; i <= diffLevel/2 ; i++){
            cardsPack.push(i,i);
        }
        console.log(cardsPack);
    }

    const setBoardStyle = () => {
        diffLevel === 12 ? 
        gameBoard.style.gridTemplateColumns = `repeat(4, auto)` :
        gameBoard.style.gridTemplateColumns = `repeat(6, auto)` 
    }

    const addCardToTheBoard = () => {
        cardsPack.forEach(cardValue => {
            let card = document.createElement('div');
            card.classList.add('card');
            card.textContent = cardValue;
            gameBoard.appendChild(card);
        });
    }

    easyBtn.addEventListener('click', () => {
        diffLevel = 12;
        startGame();
    });
    mediumBtn.addEventListener('click', () => {
        diffLevel = 18;
        startGame();
    });
    hardBtn.addEventListener('click', () => {
        diffLevel = 24;
        startGame();
    });


})();




