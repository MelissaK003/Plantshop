import React, { useState } from "react"

function NewPlantForm({onAddPlant}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  // const [submitform, setSubmitform] = useState([]);

  //Prevent Default form submission 
  const handleSubmit = (event) => {event.preventDefault();
  
  const newPlant = {name,image,price}

  onAddPlant(newPlant);
    
   // Resetting the form after submission
   setName("");
   setImage("");
   setPrice("");
 };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
