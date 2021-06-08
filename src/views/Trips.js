import React, { useEffect, useState } from 'react';
import TripCards from '../components/TripCards';
import { getTrips } from '../helpers/data/TripsData';

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <>
      <div className='card-container trips-view'>
        {trips?.map((tripInfo) => (
          <TripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
          />
        ))}
      </div>
    </>
  );
}

export default Trips;
