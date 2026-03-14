import { useState, useEffect } from "react"
import MealIteam from "./MealIteam.jsx"
import useHttp from "../hooks/useHttp.jsx"

const RequestConfig ={}

export default function Meals(){
    const {data: loadMeals, isLoading, error} = useHttp('http://localhost:3000/meals', RequestConfig, [])

    if(isLoading){
        return <p className="center">Loading...</p>
    }
    
    
   
  
    // useEffect(() => {
    //     async function fetchMeals(){
    // const response = await fetch('http://localhost:3000/meals')
    // if(!response.ok){
        
    // }
    // const meals = await response.json()
    // setLoadMeals(meals)
    //     }
        
    //     fetchMeals()
    // }, [])

    return <ul id="meals">{loadMeals.map((meal) =>
     <MealIteam key={meal.id} meal={meal}/>
)}
    </ul>
}