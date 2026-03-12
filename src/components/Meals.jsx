import { useState, useEffect } from "react"
import MealIteam from "./MealIteam.jsx"

export default function Meals(){
   const [loadMeals, setLoadMeals]  =useState([])
  
    useEffect(() => {
        async function fetchMeals(){
    const response = await fetch('http://localhost:3000/meals')
    if(!response.ok){
        
    }
    const meals = await response.json()
    setLoadMeals(meals)
        }
        
        fetchMeals()
    }, [])

    return <ul id="meals">{loadMeals.map((meal) =>
     <MealIteam key={meal.id} meal={meal}/>
)}
    </ul>
}