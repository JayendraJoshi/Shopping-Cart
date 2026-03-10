import styles from './item-page.module.css';
import { useOutletContext, useParams } from "react-router";
import { useState } from "react";

export default function ItemPage(){
    const { id } = useParams();
    const [itemQuantity,setItemQuantity] = useState(1);
    const contextArray = useOutletContext();
    const items = contextArray[0];
    const setCartItems = contextArray[1];
    const currentItem = items.find(item=>item.id == id);

    if(!items.length){
        return <p className="loading-message">Loading items...</p>
    }

    return(
        <section className={styles["item-page"]}>
            <img src={currentItem.images[0]}></img>
            <div className={styles["item-overview"]}>
                <h2 className={styles.name}>{currentItem.title}</h2>
                <p className={styles.price}>{currentItem.price+" €"}</p>
                <p className={styles.description}>{currentItem.description}</p>
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
                    <button className={styles["cart-button"]} onClick={()=>{addItemToCartItems(currentItem.id,setCartItems,itemQuantity),setItemQuantity(1)}}>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

function addItemToCartItems(idOfCurrentItem,setCartItems, itemQuantity){

    setCartItems(prev=>{
       let newArray = [...prev];
       console.log(newArray);
        for(let i = 0;i<newArray.length;i++){
            if(newArray[i][0] == idOfCurrentItem){
                newArray[i] = [newArray[i][0],newArray[i][1] + itemQuantity];
                return newArray;
            }
        }
        newArray.push([idOfCurrentItem,itemQuantity]);
        return newArray;
    })

}

//compare params with ids of all items
//if there is a match, get data of that item and display it's data here