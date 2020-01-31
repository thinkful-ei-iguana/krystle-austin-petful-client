import React, { Component } from 'react';
import './PetComponent.css';

export default class PetComponent extends Component {
  // constructor(){

  // }

  render() {
    return (
      <>
        <div className='petCol'>
          <div className='pet-name'>{this.props.name}</div>
          <img
            className='pet-image'
            src={this.props.imgURL}
            alt={this.props.imgAlt}
          />

          <div className='pet-info'>
            <div className='pet-sex'>Sex: {this.props.sex}</div>
            <div className='pet-age'>Age: {this.props.age}</div>
            <div className='pet-breed'>Breed:{this.props.breed}</div>
            <div className='pet-story'>story: {this.props.story}</div>
          </div>

          <button
            onClick={() => this.props.adoptPet(this.props.name)}
            className='petCol-btn'
          >
            {this.props.able}
          </button>
        </div>
      </>
    );
  }
}