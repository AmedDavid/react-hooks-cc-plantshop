import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants }) {
  // console.log("Plant IDs:", plants.map((plant) => plant.id));
  return (
    <ul className="cards">
      {plants.map((plant, index) => (
        <PlantCard
          key={plant.id ?? `${plant.name}-${index}`} // Fallback to name-index if id is undefined
          plant={plant}
          setPlants={setPlants}
        />
      ))}
    </ul>
  );
}

export default PlantList;