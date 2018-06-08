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


const deck = document.querySelector('.deck');

// Flip Function //
    function Flip(card) {
        card.classList.add('open', 'show');
    }

//Check for Match Function//
    function checkMatch(cardA, cardB) {
        if (cardA.classlist == cardB.classlist) {
            console.log('match');
            cardA.classList.add('match');
            cardB.classList.add('match');
            cardA.classList.remove('open');
            cardB.classList.remove('open');
        }
        else {
            cardA.classList.remove('open',);
            cardB.classList.remove('open',);
        }
    }
// Click Flip and Check for Match on 2nd Flip //
    deck.addEventListener('click', function(event) {
        let openCards = document.querySelectorAll('.open');
        if (event.target.nodeName == 'LI' && openCards.length == 0) {
            console.log('first flip');
            Flip(event.target);
        }
        else if (event.target.nodeName == 'LI') {
            Flip(event.target);
            let openCards = document.querySelectorAll('.open');
            console.log('second flip');
            console.log(openCards[0]);
            console.log(openCards[1]);
            checkMatch(openCards[0], openCards[1]);
        }
    });





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
