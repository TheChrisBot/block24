import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";
import "./index.css"

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  return (
    <div className="App">
      <h1>Puppy Pals!</h1>
      {puppies.map((puppy) => {
        return (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Breed: {featuredPup.breed}</li>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Owner: {featuredPup.ownerId}</li>     
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
