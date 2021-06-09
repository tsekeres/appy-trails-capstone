import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getResources = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/resources.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addResource = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/resources.json`, obj)
    .then((response) => {
      const reso = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/resources/${response.data.name}.json`, reso)
        .then(() => {
          getResources().then((resourcesArray) => resolve(resourcesArray));
        });
    })
    .catch((error) => reject(error));
});

const updateResource = (resource) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/resources/${resource.firebaseKey}.json`, resource)
    .then(() => getResources().then(resolve))
    .catch((error) => reject(error));
});

const deleteResource = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/resources/${firebaseKey}.json`)
    .then(() => getResources().then((resourcesArray) => resolve(resourcesArray)))
    .catch((error) => reject(error));
});

export {
  getResources,
  addResource,
  updateResource,
  deleteResource
};
