import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import config from '../config';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.currentAdopter();
  }
  currentAdopter = () => {
    return fetch(`${config.API_URL}/users`, {
      method: 'GET',
      headers: {
        'content-type':'application/json'
      }
    })
    .then(res => res.json())
    .then(user => this.setUser(user[0]));
  }

  setUser = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    return(
      <div className="header">
        <BrowserRouter>
        <Link className="link" to='/'>
          <h1>Petful</h1>
        </Link>
        <div className="adoptionQueue">{this.state.user.name} is currently adopting</div>
        <div className="links">
          <Link className="link" to='/about'><p>About Adoption</p></Link>
          <Link className="link" to='/animals'><p>Our Pets</p></Link>
          <Link className="link" to='/adopt'><p>Adopt</p></Link>
          <Link className="link" to='/add'><p>Add Pet</p></Link>
        </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default Header;