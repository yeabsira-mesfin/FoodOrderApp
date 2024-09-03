import React from 'react'

const Meals = () => {
    async function fetchMeals(){
        const response = await  fetch('http://localhost:3000/meals');

        if(!response.ok){

        }

        response.json()
    }
   
  return (
    <ul id="meals">

    </ul>
  )
}

export default Meals
