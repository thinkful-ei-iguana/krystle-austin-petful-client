import React from 'react';
import Context from './Context';
import './Cats.css'

class Cats extends React.Component {
  static contextType = Context;
  render() {
    return(
      <div className="Cats">
        <div className="adoptMeSection">
          <h3>{this.context.cats.name}</h3>
          <button className="adoptMeButton"onClick={this.props.handleAdoption}>Adopt Me!</button>
        </div>
        <br/>
        <img src={this.context.cats.imageURL} alt={this.context.cats.imageDescription}/>
        <p>Sex: {this.context.cats.sex}</p>
        <p>Age: {this.context.cats.age}</p>
        <p>Breed: {this.context.cats.breed}</p>
        <p>My Story: {this.context.cats.story}</p>
      </div>
    )
  }
}

export default Cats;