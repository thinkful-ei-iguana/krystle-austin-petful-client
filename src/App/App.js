import React from 'react';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddPet from '../components/AddPet';
import About from '../components/About';
import AllPets from '../components/AllPets';
import config from '../config'
import Context from '../components/Context'
import { Route, BrowserRouter } from 'react-router-dom';
//import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: {},
      dogs: {},
      showDogs: false,
      showCats: false,
      currentCat: {},
      currentDog: {},
      users: {}
    }
  }

  selectCats = () => {
    this.setState({
      showDogs: false,
      showCats: true
    })
  }
  selectDogs = () => {
    this.setState({
      showDogs: true,
      showCats: false
    })
  }

  handleAdoption = (e) => {
    e.preventDefault();
    this.adoptCat();
    this.getCurrentCat();
    this.userCheckout();
    this.getCurrentUser();
    this.adoptDog();
    this.getCurrentDog();
  }

  componentDidMount() {
    this.getCurrentCat();
    this.getCurrentUser();
    this.getCurrentDog();
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

  adoptCat = () => {
    return fetch(`${config.API_URL}/cat`, {
      method: 'DELETE'
    })
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

  adoptDog = () => {
    return fetch(`${config.API_URL}/dog`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  getCurrentUser = () => {
    return fetch(`${config.API_URL}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(user => this.setCurrentUser(user[0]));
  }
  setCurrentUser = (user) => {
    this.setState({
      users: user
    })
  }

  userCheckout = () => {
    return fetch(`${config.API_URL}/users`, {
      method: 'DELETE',
      headers: {
        'content-type':'application/json'
      }
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
            <Route path='/adopt' render={ (routeProps) => {
              return <AllPets {...routeProps} 
                selectCats={this.selectCats} 
                selectDogs={this.selectDogs} 
                handleAdoption={this.handleAdoption}
            />}}/>
            <Route path='/add' component={AddPet} />
          </div>
        </BrowserRouter>
      </Context.Provider>
      
    );
  }
}

export default App