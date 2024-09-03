import { useState } from "react";

const Meals = () => {
  const [loadMeals, setLoadMeals] = useState([]);
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
    }

    const meals = response.json();
    setLoadMeals(meals);
  }

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <li key={meal.id}>
           {meal.name} 
        </li>
      ))}
    </ul>
  );
};

export default Meals;
