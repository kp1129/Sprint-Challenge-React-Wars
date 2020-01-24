import React from 'react';
import './StarWarsCard.css';
import { Card, CardTitle, CardText } from 'reactstrap';

const StarWarsCard = props => {
  return (
    <div>
      <Card body>
        <CardTitle>{ props.personData.name }</CardTitle>
        <CardText>
          Birth year: { props.personData.birth_year }
        </CardText>
        <CardText>
          Gender: { props.personData.gender }
        </CardText>
        <CardText>
          Eye color: { props.personData.eye_color }
        </CardText>
        <CardText>
          Hair color: { props.personData.hair_color }
        </CardText>
        <CardText>
          Height: { props.personData.height }
        </CardText>
      </Card>      
    </div>
  );
};

export default StarWarsCard;
