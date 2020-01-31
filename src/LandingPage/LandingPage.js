import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Landing.css';

// import PropTypes from 'prop-types';
// import ErrorBoundary from '../ErrorBoundaries/ErrorBoundary'

export default function Landing(props) {
  return (
    <div className='LandingPage'>
      <div className='splash'>Petful</div>
      <section className='guide'>
        <div className='guide1 slide'>
          <h1>First in first out</h1>
          <h2> Click on ADOPT below to get your pet.</h2>
        </div>
        <div className='guide2 slide'>
          <h2>How we Adopt</h2>
          <p>The adoption process works strictly on a "First-In, First-Out" basis. The FIFO is based on the animals that came to the shelter first. People can adopt a cat, or a dog, or both, but they may only adopt the animal that came to the shelter first is the one to be adopted first. In addition, people who wants to adopt are also put in a Queue so they can adopt when its their turn.</p>
          <h3>Click ADOPT below</h3>
        </div>
        <div className='end-Guide slide'>
          <NavLink
            onClick={props.handleClick}
            className='NavToStats'
            to={`/adopt`}
          >
            ADOPT!
          </NavLink>
        </div>
      </section>
    </div>
  );
}
