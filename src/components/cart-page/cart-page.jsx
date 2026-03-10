import styles from './cart-page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOutletContext } from "react-router";


export default function CartPage(){
    const contextArray = useOutletContext();
    const cartItems = contextArray[0];
    return (
        <section className={styles["cart-page"]}>
            <h2>Shopping Cart</h2>
            <div className={styles["checkout-overview"]}>
                <div className={styles["cart-items"]}>
                    <div className={styles["cart-item"]}>
                        <div className="item-description">
                            <p>Beach Bottle Premium</p>
                            <p>22.00€ each (Subtotal: 22.00€)</p>
                        </div>
                        <div className={styles["item-controls"]}>
                            <div className={styles["quantity-control"]}>
                                <button>-</button>
                                <p className={styles["quantitiy-value"]}>0</p>
                                <button>+</button>
                            </div>
                            <button className={styles["delete-button"]}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
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
function getCartItemPreviews(){

}

//loop through cartItems array and create divs for each cart items and render them
// get total from all cartItems and display them on order summary
// display some sort of confirmation when the user clicks "order"