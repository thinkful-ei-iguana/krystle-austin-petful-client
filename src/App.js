import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import API from './Api';
import Error from '../Error/Error';
import Landing from '../LandingPage/LandingPage';
import Adopt from '../AdoptionPage/AdoptionPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: 'Thinkful',
      dog: [],
      cat: [],
      users: [],
      adDog: null,
      adCat: null,
      queue: null,
      ready: false
    };
  }

  onLandingClick = async() => {
    await API.apiGetCat()
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let able;
        data.map(pet => {
          if (pet.user_name === this.state.user) {
            able = pet;
          }
        });
        this.setState({
          cat: data,
          adCat: data[0]
        });
      });

    await API.apiGetDog()
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let able = null;
        data.map(pet => {
          if (pet.user_name === this.state.user) {
            able = pet;
          }
        });
        this.setState({
          dog: data,
          adDog: data[0],
          ready: true
        });
        // console.log(data)
      });

    await API.apiGetUsers()
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          users: data
        });
        // console.log(data)
      });
  };

  handleAdoptPet = name => {
    if (this.state.dog.length > 1) {
      try {
        this.setState(
          {
            dog: this.state.dog.filter(obj => {
              return obj.name !== name;
            })
          },
          () => {
            this.setState({ adDog: this.state.dog[0] });
            console.log('dog', this.state.dog);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }

    if (this.state.cat.length > 1) {
      try {
        this.setState(
          {
            cat: this.state.cat.filter(obj => {
              return obj.name !== name;
            })
          },
          () => {
            this.setState({ adCat: this.state.cat[0] });
            console.log('cat', this.state.cat);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const landingPage = props => {
      return <Landing handleClick={this.onLandingClick} />;
    };

    const adoptionPage = props => {
      return (
        <Adopt
          ready={this.state.ready}
          cats={this.state.cat}
          dogs={this.state.dog}
          adDog={this.state.adDog}
          adCat={this.state.adCat}
          handleAdoptPet={this.handleAdoptPet}
        />
      );
    };
 console.log(this.state.cat)
    return (
     
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={landingPage} />
            <Route exact path='/adoption' component={adoptionPage} />
            <Route exact path='/404' component={Error} />
            <Redirect to='/404' />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;