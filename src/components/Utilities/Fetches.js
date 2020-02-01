// import config from '../config';

// const Utilities = {


//   fetchDog:  () => {
//     return fetch(`${config.API_URL}/dog`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(dog => dog);
//   },


//   fetchCat: () => {
//     return fetch(`${config.API_URL}/cat`, {
//       method: 'GET',
//       headers: {
//         'content-type': 'application/json'
//       }
//     })
//     .then(res => res.json());
//   },
//   adoptCat: () => {
//     return fetch(`${config.API_URL}/cat`, {
//       method: 'DELETE',
//       headers: {
//         'content-type':'application/json'
//       }
//     })
//   },

//   fetchAdopters: () => {
//     return fetch(`${config.API_URL}/users`, {
//       method: 'GET',
//       headers: {
//         'content-type':'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(person => console.log(person));
//   }

// }

// export default Utilities;