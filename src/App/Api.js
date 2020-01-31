import { Component } from 'react';
const localURL = 'http://localhost:8080/';
const apiUrl = 'https://fierce-bayou-88462.herokuapp.com/';
export default class API extends Component {
  static apiGetDog() {
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog';
    // const queryString = this.formatQueryParams(data);
    const url = `${apiUrl}api/dog`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(url, options);
  }

  static apiGetUsers() {
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/users';
    // const queryString = this.formatQueryParams(data);
    const url = `${apiUrl}api/users`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(url, options);
  }

  static apiGetCat() {
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/cat';
    // const queryString = this.formatQueryParams(data);
    const url = `${apiUrl}api/cat`;

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return fetch(url, options);
  }

  static apiDeleteDog(trail) {
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/dog';
    const url = `${apiUrl}api/dog`;
    const options = {
      method: 'DELETE',
      body: JSON.stringify(trail),
      headers: {
        'content-type': 'application/json'
      }
    };
    // console.log(options.body)
    return fetch(url, options);
  }

  static apiDeleteCat(trail) {
    const apiURL = 'https://fierce-bayou-88462.herokuapp.com/api/cat';
    const url = `${apiUrl}api/cat`;

    const options = {
      method: 'DELETE',
      body: JSON.stringify(trail),
      headers: {
        'content-type': 'application/json'
      }
    };
    // console.log(options.body)
    return fetch(url, options);
  }
}