import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';
import { deleteTrip, deleteUserTrip } from '../helpers/data/TripsData';
import TripForm from './TripForm';

const UpdateTripCards = ({
  user, setUser, admin, setAdmin, trip, setTrips, setUserTrips,
}) => {
  const [updating, setUpdating] = useState(false);

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        if (admin) {
          deleteTrip(trip.firebaseKey).then((response) => {
            setTrips(response);
            history.push('/trip-planner');
          });
        } else {
          deleteUserTrip(trip.firebaseKey, user.userId).then((response) => {
            setUserTrips(response);
            history.push('/trip-planner');
          });
        }
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card className='update-trip-card'>
      <CardImg top width='100%' src={trip.image} alt='Card image cap' />
      <CardBody>
        <CardTitle tag='h5'>
          Trail Name:<br></br>
          {trip.trailName}
        </CardTitle>
        <CardText>Created By: {trip.creator}</CardText>
        <CardText>
          Park Name:<br></br>
          {trip.parkName}
        </CardText>
        <div className='trip-button'>
          <Button
            color='danger'
            size='sm'
            onClick={() => handleClick('delete')}
          >
            Delete Trip
          </Button>
          <Button color='info' size='sm' onClick={() => handleClick('update')}>
            {updating ? 'Close Form' : 'Update Trip'}
          </Button>
        </div>
        {updating && (
          <TripForm
            formTitle='Update Trip'
            user={user}
            setUser={setUser}
            admin={admin}
            setAdmin={setAdmin}
            setTrips={setTrips}
            setUserTrips={setUserTrips}
            firebaseKey={trip.firebaseKey}
            camping={trip.camping}
            creator={trip.creator}
            description={trip.description}
            difficulty={trip.difficulty}
            distance={trip.distance}
            fees={trip.fees}
            image={trip.image}
            nearestHospital={trip.nearestHospital}
            parkName={trip.parkName}
            parkWebLink={trip.parkWebLink}
            reservations={trip.reservations}
            trailName={trip.trailName}
            trailMap={trip.trailMap}
          />
        )}
      </CardBody>
    </Card>
  );
};

UpdateTripCards.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func,
  trip: PropTypes.object,
  setTrips: PropTypes.func,
  setUserTrips: PropTypes.func,
};

export default UpdateTripCards;
