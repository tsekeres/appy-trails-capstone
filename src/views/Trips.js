import React from 'react';
import PropTypes from 'prop-types';
import TripCards from '../components/TripCards';

function Trips({ trips, setTrips }) {
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

Trips.propTypes = {
  trips: PropTypes.array,
  setTrips: PropTypes.func,
};

export default Trips;
