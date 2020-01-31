import React from 'react';

import PetComponent from '../PetComponent/PetComponent';
// import './AdoptionPage.css';


export default function Adopt(props) {
  let dogsArray = props.dogs.map(dog => {
    return (
      <li key={dog.id}>
        <img
          className='pet-array'
          src={dog.imageURL}
          alt={dog.imageDescription}
        />
        <span>{dog.name}</span>
      </li>
    );
  });


let catsArray = props.cats.map(cat => {
    return (
        <li key={cat.id}>
            <img 
             className='pet-array'
             src={cat.imageURL}
             alt={cat.imageDescription}
             />
             <span>{cat.name}</span>
           </li>
         );
       });
     
       let catPort = !props.ready ? (
         false
       ) : (
         <PetComponent
           age={props.adCat.age}
           breed={props.adCat.breed}
           imgURL={props.adCat.imageURL}
           imgAlt={props.adCat.imageDescription}
           name={props.adCat.name}
           sex={props.adCat.sex}
           story={props.adCat.story}
           able={props.adCat.user_name}
           adoptPet={props.handleAdoptPet}
         />
       );
     
       let dogPort = !props.ready ? (
         false
       ) : (
         <PetComponent
           age={props.adDog.age}
           breed={props.adDog.breed}
           imgAlt={props.adDog.imageDescription}
           imgURL={props.adDog.imageURL}
           name={props.adDog.name}
           sex={props.adDog.sex}
           story={props.adDog.story}
           able={props.adDog.user_name}
           adoptPet={props.handleAdoptPet}
         />
       );
     
       return (
         <>
           <ul className='pets-list'>
             {dogsArray}
             {catsArray}
           </ul>
           <div className='AdoptionPage'>
             {/* <PetComponent 
                     age={props.adCat.age}
                     breed={props.adCat.breed}
                     imgAlt={props.adCat.imgAlt}
                     name={props.adCat.name}
                     sex={props.adCat.sex}
                     story={props.adCat.story}
                     able={props.adCat.user_name.able}
                 />
                 <PetComponent 
                 age={props.adCat.age}
                 breed={props.adCat.breed}
                 imgAlt={props.adCat.imgAlt}
                 name={props.adCat.name}
                 sex={props.adCat.sex}
                 story={props.adCat.story}
                 able={props.adCat.user_name.able}
                 /> */}
     
             {catPort}
             {dogPort}
           </div>
         </>
)};