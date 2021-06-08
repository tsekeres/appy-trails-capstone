import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import TripCards from '../components/TripCards';
import { getTrips } from '../helpers/data/TripsData';

function Trips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <Container>
      <div className='card-container trips-view'>
        {trips?.map((tripInfo) => (
          <TripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
          />
        ))}
      </div>
    </Container>
  );
}

export default Trips;
