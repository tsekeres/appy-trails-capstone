import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTrips = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/tripPlan.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getUserTrips = (userId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/tripPlan.json?orderBy="userId"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addTrip = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/tripPlan.json`, obj)
    .then((response) => {
      const tripplan = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/tripPlan/${response.data.name}.json`, tripplan)
        .then(() => {
          getTrips().then((tripsArray) => resolve(tripsArray));
        });
    })
    .catch((error) => reject(error));
});

const addUserTrip = (obj, userId) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/tripPlan.json`, obj)
    .then((response) => {
      const tripplan = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/tripPlan/${response.data.name}.json`, tripplan)
        .then(() => {
          getUserTrips(userId).then((tripsArray) => resolve(tripsArray));
        });
    })
    .catch((error) => reject(error));
});

const updateTrip = (trip) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/tripPlan/${trip.firebaseKey}.json`, trip)
    .then(() => getTrips().then((TripsArray) => resolve(TripsArray)))
    .catch((error) => reject(error));
});

const updateUserTrip = (trip, userId) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/tripPlan/${trip.firebaseKey}.json`, trip)
    .then(() => getUserTrips(userId).then((TripsArray) => resolve(TripsArray)))
    .catch((error) => reject(error));
});

const deleteTrip = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/tripPlan/${firebaseKey}.json`)
    .then(() => getTrips().then((TripsArray) => resolve(TripsArray)))
    .catch((error) => reject(error));
});

const deleteUserTrip = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/tripPlan/${firebaseKey}.json`)
    .then(() => getUserTrips(userId).then((TripsArray) => resolve(TripsArray)))
    .catch((error) => reject(error));
});

const getSingleTrip = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/tripPlan/${firebaseKey}.json`)
    .then((trip) => resolve(trip.data))
    .catch((error) => reject(error));
});

const searchParkList = (firebaseKey) => new Promise((resolve, reject) => {
  getTrips().then((tripsArray) => {
    const searchItems = tripsArray.filter((parkName) => parkName.firebaseKey.includes(firebaseKey));
    resolve(searchItems);
  }).catch((error) => reject(error));
});

const searchTripList = (searchValue) => new Promise((resolve, reject) => {
  getTrips().then((tripsArray) => {
    const searchItems = tripsArray.filter((keyword) => keyword.trailName.toLowerCase().includes(searchValue.toLowerCase()));
    resolve(searchItems);
  }).catch((error) => reject(error));
});

export {
  getTrips,
  getUserTrips,
  addTrip,
  addUserTrip,
  updateTrip,
  updateUserTrip,
  deleteTrip,
  deleteUserTrip,
  getSingleTrip,
  searchParkList,
  searchTripList
};
