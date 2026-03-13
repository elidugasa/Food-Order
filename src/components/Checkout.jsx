import { useContext } from "react";
import { CurrencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
export default function Checkout(){
    const cartCtx = useContext(CartContext)
 const cartTotal = cartCtx.items.reduce((totalPrice, item) =>{
        return totalPrice + item.price * item.quantity

     }, 0)
    return <Modal> 
        <h2>checkout </h2>
        <p>Total amount: { CurrencyFormatter.format(cartTotal)}</p>
    </Modal>
}