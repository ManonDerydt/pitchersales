
import {Card, CardContent, CardMedia} from '@material-ui/core';

const Cardlist = ({cards}) => {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                />
            ))}
        </div>
    );
}

export default Cardlist;