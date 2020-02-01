import React from 'react';
import Cats from './Cats';
import Dogs from './Dogs';
import Context from './Context'

class AllPets extends React.Component {
  static contextType = Context;

  render(){
    return(
      <div className="allAnimals">
        <div className="types">
          <button onClick={this.props.selectCats}>Cats</button>
          <button onClick={this.props.selectDogs}>Dogs</button>
        </div>
        {this.context.showCats && <Cats handleAdoption={this.props.handleAdoption}/>}
        {this.context.showDogs && <Dogs handleAdoption={this.props.handleAdoption}/>}
      </div>
    )
  }
}

export default AllPets;