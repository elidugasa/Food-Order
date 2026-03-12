import { useContext } from "react"

import { CurrencyFormatter } from "../util/formatting"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"

export default function MealIteam({meal}){
    const cartCtx = useContext(CartContext)
    function handleAddItemToCart(){
        cartCtx.addItem(meal)

    }
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div className="meal-info">
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{CurrencyFormatter.format(meal.price)} </p>
                <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddItemToCart} >Add to cart</Button>
                </p>
        </article>

    </li>
}