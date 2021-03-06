import React, { useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import TripCards from '../components/TripCards';
import {
  getTrips, searchDescriptionlist, searchParkList, searchTrailList
} from '../helpers/data/TripsData';

function Trips({ user, admin }) {
  const [trips, setTrips] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    getTrips().then(setTrips);
  }, []);

  const handleClick = (type) => {
    switch (type) {
      case 'parkSearch':
        searchParkList(searchWord).then((response) => setTrips(response));
        break;
      case 'trailSearch':
        searchTrailList(searchWord).then((response) => setTrips(response));
        break;
      case 'keywordSearch':
        searchDescriptionlist(searchWord).then((response) => setTrips(response));
        break;
      default:
        console.warn('error');
    }
  };

  return (
    <>
      <div className='trips-header'>
        <h1>Trip Plans</h1>
      </div>
      <div className='searchContainer'>
        <div>
          <Input
            type='select'
            placeholder='Search by Park Name'
            onChange={(e) => setSearchWord(e.target.value)}
          >
            <option value=''>Search by Park Name</option>
            {trips?.map((searchItem) => (
              <option
                value={searchItem.parkName}
                key={searchItem.parkName}>
                {searchItem.parkName}
              </option>
            ))}
          </Input>
          <Button id='searchBtn' onClick={() => handleClick('parkSearch')}>
            Search
          </Button>
        </div>
        <div>
          <Input
            type='select'
            placeholder='Search by Trail Name'
            onChange={(e) => setSearchWord(e.target.value)}
          >
            <option value=''>Search by Trail Name</option>
            {trips?.map((searchItem) => (
              <option value={searchItem.trailName} key={searchItem.trailName}>
                {searchItem.trailName}
              </option>
            ))}
          </Input>
          <Button id='searchBtn' onClick={() => handleClick('trailSearch')}>
            Search
          </Button>
        </div>
        <div>
          <Input
            type='text'
            placeholder='Keyword Search'
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <Button id='searchBtn' onClick={() => handleClick('keywordSearch')}>
            Search
          </Button>
        </div>
      </div>
      <div className='card-container trips-view'>
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
