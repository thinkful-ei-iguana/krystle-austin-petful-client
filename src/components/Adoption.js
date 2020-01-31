import React from 'react';
import Cats from './Cats';
import Dogs from './Dogs';
import config from '../config';


class Adoption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCat: {},
      currentDog: {}
    }
  }

  componentDidMount() {
    return fetch(`${config.API_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({name: 'You'}) 
    });
  }

  render() {
    return(
      <div className="adoptionContainer">
        <Cats />
        <Dogs />
      </div>
    )
  }
}

export default Adoption;