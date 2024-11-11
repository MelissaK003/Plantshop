import React,{useEffect,useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

//Fetching data from the database
  useEffect (() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plants => setPlants(plants))
    .catch(error => console.error('Error fetching data:' ,error))
  },[])

//Adding a new plant on the form
  const addPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
    .then(response => response.json())
    .then(addedPlant => {setPlants((prevPlants) => [...prevPlants, addedPlant])})
    .catch(error => console.error('Error adding plant:', error));
  };

// Filter plants on search 
   const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

// Delete plant 
  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      setPlants((prevPlants) => prevPlants.filter(plant => plant.id !== id));
    })
    .catch(error => console.error('Error deleting plant:', error));
  };

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={handleSearch} searchTerm={searchQuery}/>
      <PlantList plants={filteredPlants} onDelete={deletePlant} />
    </main>
  );
}

export default PlantPage;
