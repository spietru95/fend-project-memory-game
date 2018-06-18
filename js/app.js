/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Constants! //
const deck = document.querySelector('.deck');
const moves = document.querySelector('span');
let n = 0
const star1 = document.querySelector('.stars').firstElementChild;
const star2 = star1.nextElementSibling;
const star3 = star2.nextElementSibling;
const cards = document.querySelectorAll('.card');
const symbolsArray = ['fa-diamond', 'fa-diamond', 'fa-paper-plane', 'fa-paper-plane', 'fa-anchor', 'fa-anchor', 'fa-bolt', 'fa-bolt', 'fa-cube', 'fa-cube', 'fa-leaf', 'fa-leaf', 'fa-bicycle', 'fa-bicycle', 'fa-bomb', 'fa-bomb'];
const resetButton = document.querySelector('.fa-repeat');
//Randomize cards on page load //
window.onload = Reset();



// Flip Function //
    function Flip(card) {
        card.classList.add('open', 'show');
    }

// UnFlip Function //
    function unFlip(card) { 
        setTimeout(function() {
            card.classList.remove('open', 'show');
        }, 1000);
    }
// Match Function //
    function matchEm(cardA, cardB) {
        cardA.classList.remove('open');
        cardB.classList.remove('open');
        cardA.classList.add('match');
        cardB.classList.add('match');
    }

// Unmatch Function
    function unMatch(e) {
        e.classList.remove('show');
        e.classList.remove('match');
    }

// Decrement Stars Function //
    function checkStars() {
        if (moves.innerHTML < 12) {
            star1.id = '';
            star2.id = '';
            star3.id = '';
        }
        else if (moves.innerHTML < 20) {
            star1.id = 'hidden';
        }
        else if (moves.innerHTML < 28) {
            star2.id = 'hidden';
        }
        else {
            star3.id = 'hidden';
        }
    }
// Check for Win Function //
    function checkWin() {
        let matchedCards = document.querySelectorAll('.match');
        if (matchedCards.length == 16) {
            alert('Congratulations, you won in ' + moves.innerHTML + ' moves and earned ' + (3 - document.querySelectorAll('#hidden').length) + ' stars!  Click the reset button to play again.');
        }
    }

// Increase Number of Moves Function //
    function increaseMoves() {
        n = n + 1;;
        moves.innerHTML= n;
    }

//Check for Match or Unflip Function//
    function checkMatch(cardA, cardB) {
        if (cardA.children[0].classList[1] == cardB.children[0].classList[1]) {
            matchEm(cardA, cardB);
            
        }
        else {
            unFlip(cardA);
            unFlip(cardB);
        }
    }

// Click Flip and Check for Match on 2nd Flip //
    deck.addEventListener('click', function(event) {
        let openCards = document.querySelectorAll('.open');
        if (event.target.nodeName == 'LI' && openCards.length == 0) {
            Flip(event.target);
        }
        else if (event.target.nodeName == 'LI') {
            Flip(event.target);
            let openCards = document.querySelectorAll('.open');
            checkMatch(openCards[0], openCards[1]);
            increaseMoves();
            checkStars();
            checkWin();
        }
    });

    // Clear card Function //
    function clearCard(e) {
        e.firstElementChild.classList = 'fa';
     }

    // Fill card Function //
    function fillCards() {
        for (i = 0; i < 16; i++) {
            cards[i].firstElementChild.classList.add(symbolsArray[i]);
        }
    }

    // Reset shuffles, unflips cards, re-fills them, and resets moves and stars. //
    function Reset() {
        cards.forEach(unMatch);
        cards.forEach(clearCard);
        shuffle(symbolsArray);
        fillCards();
        n = 0;
        moves.innerHTML = n;
        checkStars();
    }

    // Reset button click event //
    resetButton.addEventListener('click', Reset);




/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
