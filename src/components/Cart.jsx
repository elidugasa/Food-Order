import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./UI/Modal.jsx";
import { CurrencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/userProgressContext";
import CartItem from "./CartItem.jsx";

export default function Cart(){
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)


     const cartTotal = cartCtx.items.reduce((totalPrice, item) =>{
        return totalPrice + item.price * item.quantity

     }, 0)
     function handleCloseCart(){
        userProgressCtx.hideCart()
     }

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
        <h2>your cart</h2>
        <ul>
            {cartCtx.items.map((item) => <CartItem key={item.id} name={item.name} 
            qty={item.quantity}
             price= {item.price} 
             onDecrease={() => cartCtx.removeItem(item.id)}
             onIncrease={() => cartCtx.addItem(item)}
             /> )}

        </ul>
        <p className="cart-total">{CurrencyFormatter.format(cartTotal)} </p>
        <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}> cancel</Button>
        {cartCtx.items.length > 0 &&  <Button> go to checkout</Button> }
            
        </p>
    </Modal>
}