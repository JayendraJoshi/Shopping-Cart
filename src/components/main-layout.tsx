import { Outlet, useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Item } from "./items-preview.js";

export default function MainLayout() {
  const [items, setItems] = useState<Item[]>([]);
  const contextArray: any = useOutletContext();
  const cartItems = contextArray[0];
  const setCartItems = contextArray[1];

  useEffect(() => {
    getItemsData(setItems);
  }, []);

  return (
    <main>
      <div className="main-wrapper">
        <Outlet context={[items, cartItems, setCartItems]}></Outlet>
      </div>
    </main>
  );
}

function getItemsData(setItems: Dispatch<SetStateAction<Item[]>>) {
  fetch("https://dummyjson.com/products?limit=0")
    .then((res) => res.json())
    .then((json) => getAllItems(json))
    .then((productsArray) => getSummerItems(productsArray))
    .then((summerItemsArray) => setItems(summerItemsArray));
}
function getAllItems(json: any) {
  return json.products;
}
function getSummerItems(itemsArray: Item[]) {
  const summerItemsArray = [];
  for (const item of itemsArray) {
    if (item.category == "sports-accessories") {
      summerItemsArray.push(item);
    }
  }
  console.log(summerItemsArray);
  return summerItemsArray;
}
