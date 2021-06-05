import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTrips = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/tripPlan.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const addProject = (obj) =>
//   new Promise((resolve, reject) => {
//     axios
//       .post(`${dbURL}/projects.json`, obj)
//       .then((response) => {
//         const proj = { firebaseKey: response.data.name };
//         axios
//           .patch(`${dbURL}/projects/${response.data.name}.json`, proj)
//           .then(() => {
//             getProjects().then((projectsArray) => resolve(projectsArray));
//           });
//       })
//       .catch((error) => reject(error));
//   });

// const updateProject = (project) =>
//   new Promise((resolve, reject) => {
//     axios
//       .patch(`${dbURL}/projects/${project.firebaseKey}.json`, project)
//       .then(() => getProjects().then(resolve))
//       .catch((error) => reject(error));
//   });

// const deleteProject = (firebaseKey) =>
//   new Promise((resolve, reject) => {
//     axios
//       .delete(`${dbURL}/projects/${firebaseKey}.json`)
//       .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
//       .catch((error) => reject(error));
//   });

export default getTrips;
