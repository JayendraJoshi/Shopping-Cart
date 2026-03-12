import styles from './cart-page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router";
import { Link } from "react-router";


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
                        {getCartItemPreviews(cartItems,setCartItems,items)}
                </div>
                <div className={styles["order-summary"]}>
                    <h3>Order Summary</h3>
                    <div className={styles["subtotal-container"]}>
                        <p>Subtotal</p>
                        <p className={styles["subtotal-value"]}>{getSubtotal(cartItems,items)+" €"}</p>
                    </div>
                    <div className={styles["shipping-container"]}>
                        <p>Shipping</p>
                        <p className={styles["shipping-value"]}>{getShipping(cartItems,items)+" €"}</p>
                    </div>
                    <div className={styles["tax-container"]}>
                        <p>Tax (19%)</p>
                        <p className={styles["tax-value"]}>{getTax(cartItems,items)+" €"}</p>
                    </div>
                    <div className={styles["total-container"]}>
                        <p>Total</p>
                        <p className={styles["total-value"]}>{getTotal(cartItems,items)+" €"}</p>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </section>
    )
}
function getCartItemPreviews(cartItems,setCartItems,items){
    if(cartItems.length==0) return <p className={styles["cart-item-placeholder"]}>It's pretty empty in here...</p>
    return cartItems.map(cartItem=>{
        const fullItemObject = items.find((item)=>item.id == cartItem[0]);
        return(
            <div className={styles["cart-item"]} key={fullItemObject.id}>
                <div className="item-description">
                    <Link to={`/shop/item/${fullItemObject.id}`} className={styles["title"]}>{fullItemObject.title}</Link>
                    <p>{`${fullItemObject.price} € each (Subtotal: ${getSubtotal(cartItems,items)} €)`}</p>
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
    let quantitySmallerThanOne = false
    setCartItems(prev=>{
        const newArray = [...prev];
        for(let i =0;i<newArray.length;i++){
            if(newArray[i][0]==itemID){
                if(newArray[i][1]-1<1) quantitySmallerThanOne = true;
                newArray[i] = [newArray[i][0],newArray[i][1]-1]
            }
        }
        if(quantitySmallerThanOne) return newArray.filter(cartItem => cartItem[0]!=itemID);
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

function getSubtotal(cartItems,items){
    if(cartItems.length<1) return "-";
    let cartItemsWithPrice =[];
    let price = 0;
    for(const cartItem of cartItems){
        let fullItem = items.find(item=>item.id == cartItem[0]);
        cartItemsWithPrice.push([cartItem[0],cartItem[1],fullItem.price * 100])

    }
    for(const cartItem of cartItemsWithPrice){
        price = price + (cartItem[1]*cartItem[2]);
    }
    console.log(cartItemsWithPrice)
    console.log(price);
    return price / 100;
}
function getShipping(cartItems,items){
    if(cartItems.length<1) return "-";
    let subtotal = getSubtotal(cartItems,items);
    if(subtotal>50)return 0;
    return 4.99;
}
function getTax(cartItems,items){
    if(cartItems.length<1) return "-";
    let subtotalCents  = getSubtotal(cartItems,items) * 100;
    let shippingCents = getShipping(cartItems,items) * 100;
    const taxCents = Math.round((subtotalCents + shippingCents) * 19 / 100);
    return taxCents / 100;
}
function getTotal(cartItems,items){
    if(cartItems.length<1) return "-";
    let subtotalCents  = getSubtotal(cartItems,items) * 100;
    let shippingCents = getShipping(cartItems,items) * 100;
    let taxCents = getTax(cartItems,items)*100;
    return (subtotalCents + shippingCents + taxCents) / 100;
}
function confirmOrder(){

}