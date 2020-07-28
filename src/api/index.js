export async function getCards() {
    const PRODURL = 'https://deck-of-cards-app.firebaseio.com/cards.json';
    const DEVURL = 'http://localhost:3000/cards'
    let APIURL;
    if (process.env.NODE_ENV === 'development') {
        APIURL = DEVURL;
    } else {
        APIURL = PRODURL;
    }
    const response = await fetch(APIURL);
    const json = await response.json();
    return json;
}