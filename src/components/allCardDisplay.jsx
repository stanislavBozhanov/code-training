import '../cards.css'
import CardDisplay from './CardDisplay';

function AllCardsDisplay ({ props }) {

    return (
        <div className='cards' key='cards'>
            <h1>Cards</h1>
            {props.map(card => 
                <CardDisplay card={card}/>
            )}
        </div>
    )
};

export default AllCardsDisplay;