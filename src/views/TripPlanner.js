import React from 'react';
import PropTypes from 'prop-types';
import TripForm from '../components/TripForm';
import UpdateTripCards from '../components/UpdateTripCards';

function TripPlanner({ trips, setTrips }) {
  return (
    <>
      <div className="form-container">
        <TripForm formTitle='Plan a Trip' setTrips={setTrips} />
      </div>
      <div className='card-container'>
        {trips?.map((tripInfo) => (
          <UpdateTripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
          />
        ))}
      </div>
    </>
  );
}

TripPlanner.propTypes = {
  trips: PropTypes.array,
  setTrips: PropTypes.func,
};

export default TripPlanner;
