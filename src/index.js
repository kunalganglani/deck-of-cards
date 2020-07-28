import 'main.scss';
import { getCards } from './api';
import Deck from './components/deck/deck';

const main = async () => {
    const cards =  await getCards();
    let deckContainer = document.createElement('div');
    document.body.appendChild(deckContainer);
    let deck = new Deck(cards, deckContainer);
    deck.init();
    let credits = document.createElement('div');
    credits.textContent= `Card Deck by Kunal Ganglani`;
    credits.className = 'creditsContainer';
    document.body.appendChild(credits);
}

main().then(() => console.log('Started'));
let metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);