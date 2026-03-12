import {CurrencyFormatter} from "../util/formatting"


export default function CartItem({name, qty, price}){
    return <li className="cart-item">
        <p>
            {name} - {qty} X { CurrencyFormatter.format(price)} 
        </p>
        <P className="cart-item-actions">
            <button>-</button>
            <span>qty</span>
            <button>+</button>
        </P>

    </li>
}