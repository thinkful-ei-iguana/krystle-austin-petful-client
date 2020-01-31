import React from 'react';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Adoption from '../components/Adoption';
import AddPet from '../components/AddPet';
import About from '../components/About';
import AllPets from '../components/AllPets';
import { Route, BrowserRouter } from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
    <BrowserRouter>
        <Route path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/animals' component={AllPets} />
        <Route path='/adopt' component={Adoption} />
        <Route path='/add' component={AddPet} />
    </BrowserRouter>
    </div>
  );
}

export default App;