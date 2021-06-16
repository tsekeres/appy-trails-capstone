import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SingleTripCard from '../components/SingleTripCard';
import { getSingleTrip } from '../helpers/data/TripsData';

function SingleTrip({ user, admin }) {
  const [trip, setTrip] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTrip(firebaseKey)
      .then(setTrip);
  }, []);

  return (
    <div className="card-container-b trip-view">
      <SingleTripCard trip={trip} user={user} admin={admin} />
    </div>
  );
}

SingleTrip.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default SingleTrip;
