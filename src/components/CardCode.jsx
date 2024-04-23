import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cardData } from '../data/data'; 

const CardCode = () => {
  const { cardCode } = useParams(); 
  const [selectedCard, setSelectedCard] = useState(null);

  function findCard() {
    setSelectedCard(cardData.cards.find((c) => c.code === cardCode));
  }

  useEffect(findCard, [cardCode]); 

  if (!selectedCard) {
    return <p>Card not found</p>; 
  }

  return (
    <div>
      <h2>Card Details</h2>
      <img src={selectedCard.image} alt={`Card ${selectedCard.value} of ${selectedCard.suit}`} />
      <p>
        Card: {selectedCard.value} of {selectedCard.suit}
      </p>
    </div>
  );
};

export default CardCode;