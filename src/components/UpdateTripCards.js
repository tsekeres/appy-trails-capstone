import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink,
} from 'reactstrap';
import { deleteTrip } from '../helpers/data/TripsData';
import TripForm from './TripForm';

const UpdateTripCards = ({ trip, setTrips }) => {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteTrip(trip.firebaseKey).then(setTrips);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
      <Card>
        <CardImg top width='100%' src={trip.image} alt='Card image cap' />
        <CardBody>
          <CardTitle tag='h2'>{trip.trailName}</CardTitle>
          <CardText>{trip.parkName}</CardText>
          <hr></hr>
          <CardText>{trip.distance}</CardText>
          <CardText>{trip.difficulty}</CardText>
          <CardText>{trip.fees}</CardText>
          <CardText>{trip.camping}</CardText>
          <CardText>{trip.reservations}</CardText>
          <CardText>{trip.nearestHospital}</CardText>
          <hr></hr>
          <CardText>{trip.equipmentList}</CardText>
          <CardLink href={trip.parkWebLink}>Visit Park Website</CardLink>
          <Button color='danger' onClick={() => handleClick('delete')}>
            Delete Trip
          </Button>
          <Button color='info' onClick={() => handleClick('update')}>
            {updating ? 'Close Form' : 'Update Trip'}
          </Button>
          {updating && (
            <TripForm
              formTitle='Update Trip'
              setTrips={setTrips}
              firebaseKey={trip.firebaseKey}
              camping={trip.camping}
              difficulty={trip.difficulty}
              distance={trip.distance}
              equipmentList={trip.equipmentList}
              fees={trip.fees}
              image={trip.image}
              nearestHospital={trip.nearestHospital}
              parkName={trip.parkName}
              parkWebLink={trip.parkWebLink}
              reservations={trip.reservations}
              trailName={trip.trailName}
            />
          )}
        </CardBody>
      </Card>
  );
};

UpdateTripCards.propTypes = {
  trip: PropTypes.object,
  setTrips: PropTypes.func,
};

export default UpdateTripCards;
