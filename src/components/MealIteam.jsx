import { CurrencyFormatter } from "../util/formatting"
import Button from "./UI/Button"

export default function MealIteam({meal}){
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div className="meal-info">
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{CurrencyFormatter.format(meal.price)} </p>
                <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button >Add to cart</Button>
                </p>
        </article>

    </li>
}