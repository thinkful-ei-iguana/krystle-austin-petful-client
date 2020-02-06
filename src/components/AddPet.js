// import React from 'react';


// class AddPet extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       petInfo: {}
//     }
//   }

//   handleSelect() {
    
//   }

//   handleSubmit = () => {

//   }

//   render() {
//     return(
//       <div>
//         Need Help Finding Your Furry Friend A Home?
//         <form className="submissionForm" onSubmit={this.handleSubmit}>
//           <div className="inlineType">
//             <h4 className="petType">Type:</h4> 
//             <select onChange={this.handleSelect}>Animal Type
//               <option value="cat">Cat</option>
//               <option value="dog">Dog</option>
//             </select>
//           </div>
//           <label htmlFor='animalName'/>
//           <input id='animalName' value={this.setName} placeholder="Name" required></input>
//           <input id='animalSex' value={this.setSex} placeholder="Sex" required></input>
//           <input required id='animalBreed' placeholder='Breed'></input>
//           <input required id='animalColor' placeholder='Color'></input>
//           <br/>
//           <button className="addPet" type='Submit'>Place Pet for Adoption</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default AddPet;