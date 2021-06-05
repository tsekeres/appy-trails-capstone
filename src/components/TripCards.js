import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

const TripCards = ({ trip }) => (
  <Card className="trip-card">
    <CardImg top width="90%" src={trip.image} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{trip.parkName}</CardTitle>
      <CardText>{trip.trailName}</CardText>
    </CardBody>
  </Card>
);

TripCards.propTypes = {
  trip: PropTypes.object,
};

export default TripCards;
