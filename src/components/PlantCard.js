import React, { useState } from "react";

function PlantCard({ plants, onDelete }) {
  const [soldOutPlants, setSoldOutPlants] = useState({});
  const handleSoldOut = (plantId) => {
    setSoldOutPlants({...soldOutPlants,[plantId]: true});
  };

  return (
    <>
      {plants.map((plant) => (
        <li key={plant.id} className="card" data-testid="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: {plant.price}</p>
          {(!soldOutPlants[plant.id] ? (
            <button className="primary" onClick={() => handleSoldOut(plant.id)}>In Stock</button>
          ) : (
            <button disabled className="sold-out">Sold Out</button>
          ))}
          <button className="delete-button" onClick={() => onDelete(plant.id)}>Delete</button>
        </li>
      ))}
    </>
  );
}

export default PlantCard;