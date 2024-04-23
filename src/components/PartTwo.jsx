import { useEffect, useState } from 'react';
import AllCardsDisplay from "./allCardDisplay"


function PartTwo() {
  const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  const [deckId, setDeckId] = useState('');
  const [cards, setCards] = useState([]);
  const [isDataFatching, setIsDataFatching] = useState(false);

  const getDeckHandler = async () => {
    const response = await fetch(url);
    const result = await response.json();

    const id = result.deck_id;
    setDeckId(id);
  }

  const fetchCardsHandler = async () => {
    try{
      setIsDataFatching(true);
      const response = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=8`);
      const result = await response.json();
      setCards(result.cards);
    } catch (error) {
        console.log('Fetching error');
    } finally {
      setIsDataFatching(false);
    }
    
  }

  return (
    <div>
      <h2>Part Two</h2>
      {cards.length
        ? <AllCardsDisplay props={cards}/>
        : <h3>NO CARDS FOUND</h3>
      }
      <button onClick={getDeckHandler}>Get Deck</button>
      { deckId ? <button onClick={fetchCardsHandler} disabled={isDataFatching}>Fetch cards</button> : ''}
    </div>
  );
}

export default PartTwo;
