import './deck.scss';

class Deck {
    cards = [];
    constructor(cards = [], componentContainer) {
        this.cards = cards;
        this.componentContainer = componentContainer;
        this.availableCards = 52;
        this.REMOVE_LENGH = 5;
    }
    init = () => {
        this.cardCointainer = document.createElement('div');
        this.buttonContainer = document.createElement('div');
        this.component = document.createElement('div');
        this.cardCointainer.className = 'cardContainer';
        this.buttonContainer.className = 'buttonContainer';
        this.component.className='component';
        this.addButtons();
        this.render();
    }
    addButtons = () => {
        const drawCardsButton = document.createElement('button');
        drawCardsButton.onclick = this.onDrawCards;
        drawCardsButton.textContent = "Draw Cards";
        this.buttonContainer.appendChild(drawCardsButton);
        this.component.appendChild(this.buttonContainer);
    }
    render = () => {
        let cardsHTML = "<div>";
        for (let cardType in this.cards) {
            cardsHTML += this.individualDeck(this.cards[cardType], cardType);
        }
        cardsHTML += '</div>'
        this.cardCointainer.innerHTML = cardsHTML;
        this.component.appendChild(this.cardCointainer);
        this.componentContainer.appendChild(this.component);

    };
    individualDeck = (inputDeckCardType, cardType) => { 
        let outputDeckHTML = `<div class="cardIndividualDeck ${cardType}">`;
        for(let card in inputDeckCardType) {
            if(this.cards[cardType][card].available)
            outputDeckHTML += `<div class="card">${card}</div>`;
        }
        outputDeckHTML += '</div>';
        return outputDeckHTML;
    };
    onDrawCards = (evt) => {
        if(this.availableCards<5) {
            alert('No more cards left');
            console.log(this.cards);
        } else {
            for(let i =0; i< this.REMOVE_LENGH; i++) {
                const randomSuite = this.randomKey(this.cards);
                let randomCard = this.randomKey(this.cards[randomSuite]);
                if(randomCard && randomSuite && this.cards[randomSuite][randomCard])
                    this.removeCard(randomSuite,randomCard);
                else
                    console.log('CARD removal error');
            }
            console.log('-----');
        }
    }
    randomKey = (obj)  => {
        let key = Object.keys(obj);
        const random = Math.floor(Math.random() * key.length);
        return (key[random]);
    }
    removeCard = (suite, card)=> {
        this.availableCards -= 1;
        console.log('Card removed', suite, card, this.availableCards)
        delete this.cards[suite][card];
        if(Object.keys(this.cards[suite]).length===0) {
            delete this.cards[suite];
        }
        this.render();
    }
}
export default Deck;