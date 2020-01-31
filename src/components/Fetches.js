import config from '../config';

const Utilities = {


  fetchDog:  () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(dog => dog);
  },


  fetchCat: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json());
  },
  adoptCat: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  },

  fetchAdopters: () => {
    return fetch(`${config.REACT_APP_API_ADDRESS}/adopters`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(person => console.log(person));
  }

}

export default Utilities;