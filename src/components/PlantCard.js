import React from "react";

function PlantCard({plants}) { 
  return (
    <>
      {plants.map((plant) => ( 
        <li key={plant.id} className="card" data-testid="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: {plant.price}</p>
          {plant.inStock ? ( 
            <button className="primary">In Stock</button>
          ) : (
            <button disabled>Sold Out</button>
          )}
        </li>
      ))}
    </>
  );
}

export default PlantCard;