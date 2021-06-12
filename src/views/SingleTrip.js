import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTripCard from '../components/SingleTripCard';
import { getSingleTrip } from '../helpers/data/TripsData';

export default function SingleTrip() {
  const [trip, setTrip] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTrip(firebaseKey)
      .then(setTrip);
  }, []);

  return (
    <div>
      <SingleTripCard trip={trip} />
    </div>
  );
}
