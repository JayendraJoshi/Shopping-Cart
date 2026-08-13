import styles from "./item-page.module.css";
import { useOutletContext, useParams } from "react-router";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Item } from "../items-preview.js";

export default function ItemPage() {
  const { id } = useParams();
  const [itemQuantity, setItemQuantity] = useState(1);
  const contextArray: any = useOutletContext();
  const items = contextArray[0];
  const setCartItems = contextArray[2];
  const currentItem = items.find((item: Item) => item.id === Number(id));

  if (!items.length) {
    return <p className="loading-message">Loading items...</p>;
  }

  return (
    <section className={styles["item-page"]}>
      <img src={currentItem.images[0]} alt={currentItem.title}></img>
      <div className={styles["item-overview"]}>
        <h2 className={styles.name}>{currentItem.title}</h2>
        <p>{currentItem.rating + " ★"}</p>
        <p className={styles.price}>{currentItem.price + " €"}</p>
        <p className={styles.description}>{currentItem.description}</p>
        <div className={styles["item-controls"]}>
          <div className={styles["quantity-controls"]}>
            <button
              type="button"
              onClick={() =>
                setItemQuantity((prev) => {
                  let newNumber;
                  if (prev - 1 >= 1) {
                    newNumber = prev - 1;
                  } else {
                    newNumber = 1;
                  }
                  return newNumber;
                })
              }
            >
              -
            </button>
            <p className={styles["quantity-value"]}>{itemQuantity}</p>
            <button
              type="button"
              onClick={() =>
                setItemQuantity((prev) => {
                  let newNumber = prev + 1;
                  return newNumber;
                })
              }
            >
              +
            </button>
          </div>
          <button
            type="button"
            className={styles["cart-button"]}
            onClick={() => {
              (addItemToCartItems(currentItem.id, setCartItems, itemQuantity),
                setItemQuantity(1));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

function addItemToCartItems(
  idOfCurrentItem: number,
  setCartItems: Dispatch<SetStateAction<[number, number][]>>,
  itemQuantity: number,
) {
  setCartItems((prev) => {
    const newArray: [number, number][] = prev.map((cartItem) => {
      if (cartItem[0] === idOfCurrentItem) {
        return [cartItem[0], cartItem[1] + itemQuantity];
      }
      return cartItem;
    });
    if (!newArray.some((cartItem) => cartItem[0] === idOfCurrentItem)) {
      newArray.push([idOfCurrentItem, itemQuantity]);
    }
    return newArray;
  });
}
