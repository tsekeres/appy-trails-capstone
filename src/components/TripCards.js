import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from 'reactstrap';

const TripCards = ({ firebaseKey, trip }) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'view':
        history.push(`/trips/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card className="trip-card">
      <CardImg top width="90%" src={trip.image} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{trip.parkName}</CardTitle>
        <CardText>{trip.trailName}</CardText>
        <Button color='success' onClick={() => handleClick('view')}>View All Trip Details</Button>
      </CardBody>
    </Card>
  );
};

TripCards.propTypes = {
  trip: PropTypes.object,
  firebaseKey: PropTypes.string,
};

export default TripCards;
