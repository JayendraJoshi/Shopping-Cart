import styles from './item-page.module.css';
import { useOutletContext, useParams } from "react-router";
import { useState } from "react";

export default function ItemPage(){
    const { id } = useParams();
    const [itemQuantity,setItemQuantity] = useState(1);
    const contextArray = useOutletContext();
    const items = contextArray[0];
    const setCartQuantity = contextArray[3];
    const itemToDisplay = items.find(item=>item.id == id);

    if(!items.length){
        return <p className="loading-message">Loading items...</p>
    }

    return(
        <section className={styles["item-page"]}>
            <img src={itemToDisplay.images[0]}></img>
            <div className={styles["item-overview"]}>
                <h2 className={styles.name}>{itemToDisplay.title}</h2>
                <p className={styles.price}>{itemToDisplay.price+" €"}</p>
                <p className={styles.description}>{itemToDisplay.description}</p>
                <div className={styles["item-controls"]}>
                    <div className={styles["quantity-controls"]}>
                        <button onClick={()=>setItemQuantity(prev=>{
                            let newNumber;
                            if(prev-1>=1){
                                newNumber = prev -1;
                            }else{
                                newNumber = 1;
                            }
                            return newNumber;
                        })}>-</button>
                        <p className={styles["quantity-value"]}>{itemQuantity}</p>
                        <button onClick={()=>setItemQuantity(prev=>{
                            let newNumber = prev +1;
                            return newNumber;
                        })}>+</button>
                    </div>
                    <button className={styles["cart-button"]} onClick={()=>{setCartQuantity(prev=>{ let newNumber = prev + itemQuantity; console.log(newNumber);return newNumber;}),setItemQuantity(1)}}>Add to Cart</button>
                </div>
            </div>
        </section>
    )

}

//compare params with ids of all items
//if there is a match, get data of that item and display it's data here