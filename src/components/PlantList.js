import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,onDelete}) {
  if (!plants) {
    return <p>Loading plants...</p>
  }
  return (
    <ul className="cards">  
      <PlantCard  plants={plants} onDelete={onDelete} /> 
    </ul>
  );
}

export default PlantList;
