import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import {
  addTrip, addUserTrip, updateTrip, updateUserTrip
} from '../helpers/data/TripsData';

const TripForm = ({
  user,
  admin,
  setTrips,
  setUserTrips,
  formTitle,
  camping,
  difficulty,
  distance,
  equipmentList,
  fees,
  image,
  nearestHospital,
  parkName,
  parkWebLink,
  reservations,
  trailName,
  firebaseKey,
}) => {
  const [trip, setTrip] = useState({
    camping: camping || '',
    distance: distance || '',
    difficulty: difficulty || '',
    equipmentList: equipmentList || '',
    fees: fees || '',
    image: image || '',
    nearestHospital: nearestHospital || '',
    parkName: parkName || '',
    parkWebLink: parkWebLink || '',
    reservations: reservations || '',
    trailName: trailName || '',
    userId: user.userId || admin.userId,
    firebaseKey: firebaseKey || null,
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setTrip((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trip.firebaseKey) {
      if (admin) {
        updateTrip(trip).then((response) => {
          setTrips(response);
        }).then(() => {
          history.push('/trip-planner');
        });
      } else {
        updateUserTrip(trip, user.userId)
          .then((response) => {
            setUserTrips(response);
          })
          .then(() => {
            history.push('/trip-planner');
          });
      }
    } else {
      if (admin) {
        addTrip(trip)
          .then((response) => {
            setTrips(response);
            history.push('/trip-planner');
          });
      } else {
        addUserTrip(trip, user.userId)
          .then((response) => {
            setUserTrips(response);
            history.push('/trip-planner');
          });
      }

      setTrip({
        camping: '',
        distance: '',
        difficulty: '',
        equipmentList: '',
        fees: '',
        image: '',
        nearestHospital: '',
        parkName: '',
        parkWebLink: '',
        reservations: '',
        trailName: '',
      });
    }
  };

  return (
    <div className="trip-form">
      <Form id="addtripForm" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="trailName">Trail Name:</Label>
          <Input
            name="trailName"
            id="trailName"
            value={trip.trailName}
            type="text"
            placeholder="Enter a Trail Name"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="parkName">Park Name: </Label>
          <Input
            name="parkName"
            id="parkName"
            value={trip.parkName}
            type="text"
            placeholder="Enter a Park Name"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image from Trail: </Label>
          <Input
            name="image"
            id="iamge"
            value={trip.image}
            type="url"
            placeholder="Enter an Image of the Trail"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="distance">Trail Distance: </Label>
          <Input
            name="distance"
            id="distance"
            value={trip.distance}
            type="text"
            placeholder="Enter a Distance for the Trail"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="difficulty">Trail Difficulty: </Label>
          <Input
            type="select"
            name="difficulty"
            id="difficulty"
            value={trip.difficulty}
            onChange={handleInputChange}
          >
            <option>Pick a Difficulty option</option>
            <option>Easy</option>
            <option>Moderate</option>
            <option>Moderately Strenuous</option>
            <option>Strenuous</option>
            <option>Very Strenuous</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="fees">Fees Required: </Label>
          <Input
            type="select"
            name="fees"
            id="fees"
            value={trip.fees}
            onChange={handleInputChange}
          >
            <option>Pick a Fees option</option>
            <option>Yes</option>
            <option>No</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="camping">Camping Available: </Label>
          <Input
            type="select"
            name="camping"
            id="camping"
            value={trip.camping}
            onChange={handleInputChange}
          >
            <option>Pick a Camping option</option>
            <option>No</option>
            <option>Campground Only</option>
            <option>Campground and Backcountry Camping</option>
            <option>Backcountry Camping Only</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="reservations">Reservations Required: </Label>
          <Input
            type="select"
            name="reservations"
            id="reservations"
            value={trip.reservations}
            onChange={handleInputChange}
          >
            <option>Pick a Reservations option</option>
            <option>Yes</option>
            <option>No</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="equipmentList">Equipment List: </Label>
          <Input
            name="equipmentList"
            id="equipmentList"
            value={trip.equipmentList}
            type="select"
            onChange={handleInputChange}
          >
            <option>Pick an Equipment List option</option>
            <option>Summer list</option>
            <option>Winter list</option>
            <option>Shoulder Season list</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="nearestHospital">Nearest Hospital: </Label>
          <Input
            name="nearestHospital"
            id="nearestHospital"
            value={trip.nearestHospital}
            type="text"
            placeholder="Enter the Nearest Hospital"
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="parkWebLink">Park Link: </Label>
          <Input
            name="parkWebLink"
            id="parkWebLink"
            value={trip.parkWebLink}
            type="url"
            placeholder="Enter the Park URL"
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

TripForm.propTypes = {
  admin: PropTypes.any,
  user: PropTypes.any,
  setTrips: PropTypes.func,
  setUserTrips: PropTypes.func,
  formTitle: PropTypes.string.isRequired,
  camping: PropTypes.string,
  distance: PropTypes.string,
  difficulty: PropTypes.string,
  equipmentList: PropTypes.string,
  fees: PropTypes.string,
  image: PropTypes.string,
  nearestHospital: PropTypes.string,
  parkName: PropTypes.string,
  parkWebLink: PropTypes.string,
  reservations: PropTypes.string,
  trailName: PropTypes.string,
  userId: PropTypes.string,
  firebaseKey: PropTypes.string,
};

export default TripForm;
