import React from 'react';
import config from '../config';
import './Cats.css'


class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: {}
    }
  }
  componentDidMount() {
    this.getCurrentCat();
  }

  getCurrentCat = () => {
    return fetch(`${config.API_URL}/cat`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(cats => this.setCurrentCat(cats[0]));
  }
  setCurrentCat = (cat) => {
    this.setState({
      cats: cat
    })
  }

  handleAdoption = (ev) => {
    ev.preventDefault();
    this.adoptCat();
    this.getCurrentCat();
  }

  adoptCat = () => {
    return fetch(`${config.API_URL}/cat`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  render() {
    return(
      <div className="Cats">
        <h3>{this.state.cats.name}</h3>
         <img src={this.state.cats.imageURL} alt={this.state.cats.imageDescription}/>
        <p>Sex: {this.state.cats.sex}</p>
        <p>Age: {this.state.cats.age}</p>
        <p>Breed: {this.state.cats.breed}</p>
        <p>My Story: <br /><br /> 
        {this.state.cats.story}</p>
        <button onClick={this.handleAdoption}>Adopt Me</button>
      </div>
    )
  }
}

export default Cats;