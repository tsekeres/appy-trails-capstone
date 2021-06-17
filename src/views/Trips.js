import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TripCards from '../components/TripCards';
import { getTrips } from '../helpers/data/TripsData';
import SearchBar from '../components/Search';

const filterTripSearch = (trips, query) => {
  if (!query) {
    return trips;
  }

  return trips.filter((tripSearch) => {
    const parkName = tripSearch.parkName.toLowerCase();
    return parkName.includes(query);
  });
};
function Trips({ user, admin }) {
  const [trips, setTrips] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredTripSearch = filterTripSearch(trips, searchQuery);

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  return (
    <>
      <div className="trips-header">
        <h1>Trip Plans</h1>
      </div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
        {filteredTripSearch?.map((tripSearch) => (
          <li key={tripSearch.firebaseKey}>{tripSearch.parkName}</li>
        ))}
      </ul>
      <div className="card-container trips-view">
        {trips?.map((tripInfo) => (
          <TripCards
            key={tripInfo.firebaseKey}
            trip={tripInfo}
            setTrips={setTrips}
            user={user}
            admin={admin}
          />
        ))}
      </div>
    </>
  );
}

Trips.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default Trips;
