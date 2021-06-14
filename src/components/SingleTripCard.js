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
  <Card>
    <CardImg top width="100%" src={trip.image} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h2">
        Trail Name:<br></br>
        {trip.trailName}
      </CardTitle>
      <CardText>
        Park Name:<br></br>
        {trip.parkName}
      </CardText>
      <hr></hr>
      <CardText>
        Trail Distance:<br></br>
        {trip.distance}
      </CardText>
      <CardText>
        Trail Difficulty:<br></br>
        {trip.difficulty}
      </CardText>
      <CardText>
        Fees Required:<br></br>
        {trip.fees}
      </CardText>
      <CardText>
        Camping Available:<br></br>
        {trip.camping}
      </CardText>
      <CardText>
        Reservations Required:<br></br>
        {trip.reservations}
      </CardText>
      <CardText>
        Nearest Hospital:<br></br>
        {trip.nearestHospital}
      </CardText>
      <hr></hr>
      <CardText>
        Equipment List:<br></br>
        {trip.equipmentList}
      </CardText>
      <CardLink href={trip.trailMap}>Trail Map</CardLink>
      <CardLink href={trip.parkWebLink}>Visit Park Website</CardLink>
    </CardBody>
  </Card>
);

SingleTripCard.propTypes = {
  trip: PropTypes.object
};

export default SingleTripCard;
