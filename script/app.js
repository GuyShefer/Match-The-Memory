(function () {

    const easyBtn = document.querySelector('.easy');
    const mediumBtn = document.querySelector('.medium');
    const hardBtn = document.querySelector('.hard');
    const main = document.querySelector('.main');
    const gameBoard = document.querySelector('.game-board');
    let diffLevel;
    let wrongGuesses = 0;
    let correctGuesses = 0;
    let firstCard = null;
    let secondCard = null;

    let cardsPack = [];

    const startGame = () => {
        main.style.display = 'none';
        createNewPack(diffLevel);
        setBoardStyle();
        cardsPack = shuffleTheCards();
        addCardToTheBoard();

    }

    const createNewPack = (diffLevel) => {
        for (let i = 1; i <= diffLevel / 2; i++) {
            cardsPack.push(i, i);
        }
        console.log(cardsPack);
    }

    const setBoardStyle = () => {
        diffLevel === 12 ?
            gameBoard.style.gridTemplateColumns = `repeat(4, auto)` :
            gameBoard.style.gridTemplateColumns = `repeat(6, auto)`
    }

    const shuffleTheCards = () => {
        return cardsPack.map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
    }

    const addCardToTheBoard = () => {
        cardsPack.forEach(cardValue => {
            let card = document.createElement('div');
            card.classList.add('flip-card');
            card.style.transform = 'rotateY(-180deg)';
            card.setAttribute('id', cardValue);

            let innerCard = document.createElement('div');
            innerCard.classList.add('flip-card-inner');

            let front = document.createElement('div');
            front.classList.add('flip-card-front')

            let back = document.createElement('div');
            back.style.background = `url(/assets/${cardValue}.jpg) center center/cover`;
            back.classList.add('flip-card-back')

            card.addEventListener('click', () => {
                innerCard.style.transform = 'rotateY(-180deg)';
                console.log(card);
                if (firstCard === null) {
                    firstCard = card;
                } else if (secondCard === null) {
                    secondCard = card
                    if (firstCard.getAttribute('id') === secondCard.getAttribute('id')) {
                        firstCard.children[0].children[1].style.transform = 'rotateY(0)';
                        secondCard.children[0].children[1].style.transform = 'rotateY(0)';
                        firstCard = secondCard = null;
                        correctGuesses++
                        if (correctGuesses === cardsPack.length / 2) {
                            console.log('Win');
                        }
                    } else {
                        console.log('no');
                        wrongGuesses++;
                        firstCard = null;
                        secondCard = null;
                    }
                }
            });
            innerCard.appendChild(front);
            innerCard.appendChild(back);
            card.appendChild(innerCard);
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




