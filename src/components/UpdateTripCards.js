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
  CardLink,
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
    <Card>
      <CardImg top width='100%' src={trip.image} alt='Card image cap' />
      <CardBody>
        <CardTitle tag='h2'>
          Trail Name:<br></br>
          {trip.trailName}
        </CardTitle>
        <CardText>
          Park Name:<br></br>
          {trip.parkName}
        </CardText>
        <hr></hr>
        <CardText>
          Trip Description:<br></br>
          {trip.description}
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
        <CardLink href={trip.trailMap}>Trail Map</CardLink>
        <br></br>
        <CardLink href={trip.parkWebLink}>Visit Park Website</CardLink>
        <hr></hr>
        <Button color='danger' size='sm' onClick={() => handleClick('delete')}>
          Delete Trip
        </Button>
        <Button color='info' size='sm' onClick={() => handleClick('update')}>
          {updating ? 'Close Form' : 'Update Trip'}
        </Button>
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
