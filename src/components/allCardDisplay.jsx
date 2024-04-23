import { cardData } from '../data/data';
import { useEffect, useState } from 'react';

import '../cards.css'

function AllCardsDisplay () {
const [cards, setCards] = useState([{}])

function getAllCards () {
    const cards = cardData.cards;
    setCards(cards)
}
useEffect(getAllCards, [])


    return (
        <div className='cards'>
            <h1>Cards</h1>
            {cards.map(card => 
                <div className='card' key={card.code}> 
                    <img src={card.image} alt={card.value + card.suid} /> 
                </div>
            )}
        </div>
    )
};

export default AllCardsDisplay;