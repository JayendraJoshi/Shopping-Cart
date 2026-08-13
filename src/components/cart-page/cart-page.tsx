import styles from "./cart-page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useOutletContext, Link } from "react-router";
import type { Dispatch, SetStateAction } from "react";
import type { Item } from "../items-preview.js";

type CartItem = [number, number];

export default function CartPage() {
  const contextArray: any = useOutletContext();
  const items = contextArray[0];
  const cartItems = contextArray[1];
  const setCartItems = contextArray[2];
  return (
    <section className={styles["cart-page"]}>
      <h2>Shopping Cart</h2>
      <div className={styles["checkout-overview"]}>
        <ul className={styles["cart-items"]}>
          {getCartItemPreviews(cartItems, setCartItems, items)}
        </ul>
        <aside className={styles["order-summary"]}>
          <h3>Order Summary</h3>
          <div className={styles["subtotal-container"]}>
            <p>Subtotal</p>
            <p className={styles["subtotal-value"]}>
              {getSubtotal(cartItems, items) + " €"}
            </p>
          </div>
          <div className={styles["shipping-container"]}>
            <p>Shipping</p>
            <p className={styles["shipping-value"]}>
              {getShipping(cartItems, items) + " €"}
            </p>
          </div>
          <div className={styles["tax-container"]}>
            <p>Tax (19%)</p>
            <p className={styles["tax-value"]}>
              {getTax(cartItems, items) + " €"}
            </p>
          </div>
          <div className={styles["total-container"]}>
            <p>Total</p>
            <p className={styles["total-value"]}>
              {getTotal(cartItems, items) + " €"}
            </p>
          </div>
          <button type="button">Proceed to Checkout</button>
        </aside>
      </div>
    </section>
  );
}
function getCartItemPreviews(
  cartItems: CartItem[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  items: Item[],
) {
  if (cartItems.length == 0)
    return (
      <p className={styles["cart-item-placeholder"]}>
        It's pretty empty in here...
      </p>
    );
  return cartItems.map((cartItem) => {
    const fullItemObject = items.find((item) => item.id == cartItem[0]);
    if (!fullItemObject) throw new Error("No item found!");
    return (
      <li className={styles["cart-item"]} key={fullItemObject.id}>
        <div className="item-description">
          <Link
            to={`/shop/item/${fullItemObject.id}`}
            className={styles["title"]}
          >
            {fullItemObject.title}
          </Link>
          <p>{`${fullItemObject.price} € each (Subtotal: ${getSubtotalOfOneItem(cartItem, items)} €)`}</p>
        </div>
        <div className={styles["item-controls"]}>
          <div className={styles["quantity-control"]}>
            <button
              type="button"
              onClick={() => {
                reduceQuantityOfCartItem(setCartItems, fullItemObject.id);
              }}
            >
              -
            </button>
            <p className={styles["quantitiy-value"]}>{cartItem[1]}</p>
            <button
              type="button"
              onClick={() =>
                increaseQuantityOfCartItem(setCartItems, fullItemObject.id)
              }
            >
              +
            </button>
          </div>
          <button
            className={styles["delete-button"]}
            type="button"
            onClick={() => deleteCartItem(setCartItems, fullItemObject.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    );
  });
}
function reduceQuantityOfCartItem(
  setCartItems: Dispatch<SetStateAction<[number, number][]>>,
  itemID: number,
) {
  setCartItems((prev) => {
    const newArray = prev
      .map((currentItem) => {
        if (currentItem[0] === itemID) {
          currentItem = [currentItem[0], currentItem[1] - 1];
        }
        return currentItem;
      })
      .filter((cartItem) => !(cartItem[0] === itemID && cartItem[1] < 1));
    return newArray;
  });
}

function increaseQuantityOfCartItem(
  setCartItems: Dispatch<SetStateAction<[number, number][]>>,
  itemID: number,
) {
  setCartItems((prev) => {
    const newArray = prev.map((currentItem) => {
      if (currentItem[0] === itemID) {
        currentItem = [currentItem[0], currentItem[1] + 1];
      }
      return currentItem;
    });
    return newArray;
  });
}

function deleteCartItem(
  setCartItems: Dispatch<SetStateAction<[number, number][]>>,
  itemID: number,
) {
  setCartItems((prev) => {
    return prev.filter((itemArray) => itemArray[0] !== itemID);
  });
}

function getSubtotal(cartItems: CartItem[], items: Item[]) {
  if (cartItems.length < 1) return 0;
  let cartItemsWithPrice: [number, number, number][] = [];
  let price = 0;
  for (const cartItem of cartItems) {
    let fullItem = items.find((item) => item.id == cartItem[0]);
    if (!fullItem) throw new Error("No item found!");
    cartItemsWithPrice.push([cartItem[0], cartItem[1], fullItem.price * 100]);
  }
  for (const cartItem of cartItemsWithPrice) {
    price = price + cartItem[1] * cartItem[2];
  }
  return price / 100;
}
function getShipping(cartItems: CartItem[], items: Item[]) {
  if (cartItems.length < 1) return 0;
  let subtotal = getSubtotal(cartItems, items);
  if (subtotal > 50) return 0;
  return 4.99;
}
function getTax(cartItems: CartItem[], items: Item[]) {
  if (cartItems.length < 1) return 0;
  let subtotalCents = getSubtotal(cartItems, items) * 100;
  let shippingCents = getShipping(cartItems, items) * 100;
  const taxCents = Math.round(((subtotalCents + shippingCents) * 19) / 100);
  return taxCents / 100;
}
function getTotal(cartItems: CartItem[], items: Item[]) {
  if (cartItems.length < 1) return 0;
  let subtotalCents = getSubtotal(cartItems, items) * 100;
  let shippingCents = getShipping(cartItems, items) * 100;
  let taxCents = getTax(cartItems, items) * 100;
  let totalCents = (subtotalCents + shippingCents + taxCents) / 100;
  return Math.round(totalCents * 100) / 100;
}
function getSubtotalOfOneItem(cartItem: CartItem, items: Item[]) {
  let fullItem = items.find((item) => item.id == cartItem[0]);
  if (!fullItem) throw new Error("Item not found");
  const priceCents = Math.round(fullItem.price * 100);
  return (priceCents * cartItem[1]) / 100;
}
