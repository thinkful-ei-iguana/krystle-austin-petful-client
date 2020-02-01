import React from 'react';
import Context from './Context';


class Dogs extends React.Component {
  static contextType = Context;
  render() {
    return(
      <div className="Dogs">
        <div className="adoptMeSection">
          <h3>{this.context.dogs.name}</h3>
          <button className="adoptMeButton"onClick={this.props.handleAdoption}>Adopt Me!</button>
        </div>
        <img src={this.context.dogs.imageURL} alt={this.context.dogs.imageDescription}/>
        <p>Sex: {this.context.dogs.sex}</p>
        <p>Age: {this.context.dogs.age}</p>
        <p>Breed: {this.context.dogs.breed}</p>
        <p>My Story: {this.context.dogs.story}</p>
      </div>
    )
  }
}

export default Dogs;