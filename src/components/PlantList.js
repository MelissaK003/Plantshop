import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  if (!plants) {
    return <p>Loading plants...</p>
  }
  return (
    <ul className="cards">  
      <PlantCard  plants={plants} /> 
    </ul>
  );
}

export default PlantList;
