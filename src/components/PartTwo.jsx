import { useEffect, useState } from 'react';
import AllCardsDisplay from "./allCardDisplay"

import { cardData } from '../data/data';

function PartTwo() {
  const [cards, setCards] = useState([])

  function getAllCards () {
      const cards = cardData.cards;
      setCards(cards)
  }
  useEffect(getAllCards, [])

  return (
    <div>
      <h2>Part Two</h2>
      <AllCardsDisplay props={cards}/>
    </div>
  );
}

export default PartTwo;
