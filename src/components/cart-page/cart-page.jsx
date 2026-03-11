import styles from './cart-page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router";


export default function CartPage(){
    const contextArray = useOutletContext();
    const items = contextArray[0];
    const  cartItems = contextArray[1];
    const setCartItems = contextArray[2];
    return (
        <section className={styles["cart-page"]}>
            <h2>Shopping Cart</h2>
            <div className={styles["checkout-overview"]}>
                <div className={styles["cart-items"]}>
                    <div className={styles["cart-item"]}>
                        {getCartItemPreviews(cartItems,setCartItems,items)}
                    </div>
                </div>
                <div className={styles["order-summary"]}>
                    <h3>Order Summary</h3>
                    <div className={styles["subtotal-container"]}>
                        <p>Subtotal</p>
                        <p className={styles["subtotal-value"]}>0</p>
                    </div>
                    <div className={styles["shipping-container"]}>
                        <p>Shipping</p>
                        <p className={styles["shipping-value"]}>0</p>
                    </div>
                    <div className={styles["tax-container"]}>
                        <p>Tax</p>
                        <p className={styles["tax-value"]}>0</p>
                    </div>
                    <div className={styles["total-container"]}>
                        <p>Total</p>
                        <p className={styles["total-value"]}>0</p>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </section>
    )
}
function getCartItemPreviews(cartItems,setCartItems,items){
    if(cartItems.length==0) return <p>Empty in here...</p>
    return cartItems.map(cartItem=>{
        const fullItemObject = items.find((item)=>item.id == cartItem[0]);
        return(
            <div className="cart-item" key={fullItemObject.id}>
                <div className="item-description">
                    <p>{fullItemObject.title}</p>
                    <p>{`${fullItemObject.price}€ each (Subtotal: ${fullItemObject.price*cartItem[1]}€)`}</p>
                </div>    
                <div className={styles["item-controls"]}>
                    <div className={styles["quantity-control"]}>
                        <button onClick={()=>{reduceQuantityOfCartItem(setCartItems,fullItemObject.id)}}>-</button>
                         <p className={styles["quantitiy-value"]}>{cartItem[1]}</p> 
                        <button onClick={()=>increaseQuantityOfCartItem(setCartItems,fullItemObject.id)}>+</button>
                    </div>
                    <button className={styles["delete-button"]} onClick={()=> deleteCartItem(setCartItems,fullItemObject.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        )                      
    })
}
function reduceQuantityOfCartItem(setCartItems,itemID){
    setCartItems(prev=>{
        const newArray = [...prev];
        for(let i =0;i<newArray.length;i++){
            if(newArray[i][0]==itemID){
                if(newArray[i][1]-1<1)
                newArray[i] = [newArray[i][0],newArray[i][1]-1]
            }
        }
        return newArray;
    })
}

function increaseQuantityOfCartItem(setCartItems,itemID){
     setCartItems(prev=>{
        const newArray = [...prev];
        for(let i =0;i<newArray.length;i++){
            if(newArray[i][0]==itemID){
                newArray[i] = [newArray[i][0],newArray[i][1]+1]
            }
        }
        return newArray;
    })
}

function deleteCartItem(setCartItems,itemID){
    setCartItems(prev=>{
        return prev.filter(itemArray => itemArray[0]!==itemID)
    }
    )
}

//loop through cartItems array and create divs for each cart items and render them
// get total from all cartItems and display them on order summary
// display some sort of confirmation when the user clicks "order"