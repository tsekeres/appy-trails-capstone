import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink,
} from 'reactstrap';

const SingleTripCard = ({ trip }) => (
  <>
    <Card className="single-trip-card">
      <CardImg top width="100%" src={trip.image} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h2">Trail Name: {trip.trailName}</CardTitle>
        <CardText>Park Name: {trip.parkName}</CardText>
        <hr></hr>
        <CardText>Created By: {trip.creator}</CardText>
      </CardBody>
    </Card>
    <Card className="single-trip-card">
      <CardBody>
        <CardTitle tag="h2">{trip.trailName} trip info:</CardTitle>
        <CardText>
          Trip Description:<br></br>
          {trip.description}
        </CardText>
        <CardText>Trail Distance: {trip.distance}</CardText>
        <CardText>Trail Difficulty: {trip.difficulty}</CardText>
        <CardText>Fees Required: {trip.fees}</CardText>
        <CardText>Camping Available: {trip.camping}</CardText>
        <CardText>Reservations Required: {trip.reservations}</CardText>
        <CardText>Nearest Hospital: {trip.nearestHospital}</CardText>
        <hr></hr>
        <CardLink href={trip.trailMap}>Trail Map</CardLink>
        <CardLink href={trip.parkWebLink}>Visit Park Website</CardLink>
      </CardBody>
    </Card>
    {/* <div className="single-trip-image">
      <img width="100%" src={trip.image} alt="Card image cap" />
    </div>
    <div className="single-trip-title-info">
      <p>Trail Name: {trip.trailName}</p>
      <p>Park Name: {trip.parkName}</p>
      <p>Created By: {trip.creator}</p>
    </div>
    <div className="single-trip-title-info">
      <p>Camping Available: {trip.camping}</p>
      <p>Reservations Required: {trip.reservations}</p>
      <p>Fees Required: {trip.fees}</p>
    </div>
    <div className="single-trip-title-info">
      <p>Nearest Hospital: {trip.nearestHospital}</p>
      <link href={trip.trailMap}>Trail Map</link>
      <p>Fees Required: {trip.fees}</p>
    </div> */}
  </>
);

SingleTripCard.propTypes = {
  trip: PropTypes.object,
};

export default SingleTripCard;
