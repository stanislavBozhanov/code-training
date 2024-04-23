import { Link } from 'react-router-dom';

function CardDisplay ({ card }) {
    return (
        <div className='card' key={card.code}> 
            <img src={card.image}  alt={`${card.value} of ${card.suit}`} />
            <div className='card-link' key={card.code}><Link to={`card/${card.code}`}>View More</Link></div>
        </div>
    )
};

export default CardDisplay;