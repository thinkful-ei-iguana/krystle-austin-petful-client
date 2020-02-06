import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Context from './Context'

class Header extends React.Component {
  static contextType = Context;

  render() {
    return(
      <div className="header">
        <BrowserRouter>
        <Link className="link" to='/'>
          <h1>Petful</h1>
        </Link>
        <div className="adoptionQueue">{this.context.users.name} is currently adopting</div>
        <div className="adoptionQueue">
          In Queue: {this.context.allUsers.map((user, i)=> (
          <li className="inLine" key={i}>{user.name}</li>
        ))}
        </div>
        <div className="links">
          <Link className="link" to='/about'><p>About</p></Link>
          {/* <Link className="link" to='/animals'><p>Our Pets</p></Link> */}
          <Link className="link" to='/adopt'><p>Adopt</p></Link>
          {/* <Link className="link" to='/add'><p>Add Pet</p></Link> */}
        </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default Header;