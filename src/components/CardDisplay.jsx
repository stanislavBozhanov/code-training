import { cardData } from '../data/data';
import { useEffect, useState } from 'react';

function CardDisplay () {
const [card, setCard] = useState({})

function getCard () {
    const card = cardData.cards[0];
    setCard(card)
}
useEffect(getCard, [])


    return (
        <div className='card'>
            <h1>Card</h1>
            <img src={card.image} alt="card image" />
        </div>
    )
};

export default CardDisplay;