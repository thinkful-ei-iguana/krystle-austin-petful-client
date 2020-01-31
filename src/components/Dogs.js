import React from 'react';
import config from '../config';


class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {}
    }
  }

  componentDidMount() {
    this.getCurrentDog();
  }

  getCurrentDog = () => {
    return fetch(`${config.API_URL}/dog`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(dogs => this.setCurrentDog(dogs[0]));
  }

  setCurrentDog = (dog) => {
    this.setState({
      dogs: dog
    })
  }

  handleAdoption = (ev) => {
    ev.preventDefault();
    this.adoptDog();
    this.getCurrentDog();
  }

  adoptDog = () => {
    return fetch(`${config.API_URL}/dog`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  render() {
    return(
      <div className="Dogs">
        <h3>{this.state.dogs.name}</h3>
        <img src={this.state.dogs.imageURL} alt={this.state.dogs.imageDescription}/>
        <p>Sex: {this.state.dogs.sex}</p>
        <p>Age: {this.state.dogs.age}</p>
        <p>Breed: {this.state.dogs.breed}</p>
        <p>My Story: <br /><br /> 
        {this.state.dogs.story}</p>
        <button onClick={this.handleAdoption}>Adopt Me</button>
      </div>
    )
  }
}

export default Dogs;