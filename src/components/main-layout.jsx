import { Outlet } from "react-router";
import { useOutletContext } from "react-router";
import {useEffect, useState} from "react";

export default function MainLayout({}){
    const [items,setItems] = useState([]);
    const contextArray = useOutletContext();
    const cartItems = contextArray[0];
    const setCartItems = contextArray[1];

    useEffect(()=>{
        getItemsData(setItems);
    },[])

    return(
        <main>
            <div className="main-wrapper">
               <Outlet context={[items,cartItems, setCartItems]}></Outlet>
            </div>
        </main>
        
    )
}

function getItemsData(setItems){
        fetch("https://dummyjson.com/products?limit=0")
        .then(res => res.json())
        .then(json => getProductsArray(json))
        .then(productsArray => getSummerItems(productsArray))
        .then(summerItemsArray => setItems(summerItemsArray));
       
}
function getProductsArray(json){
    return json.products;
}
function getSummerItems(productsArray){
    const summerItemsArray = [];
    for(let i = 0;i< productsArray.length;i++){
        if(productsArray[i].category =='tops' 
            || productsArray[i].category=='sunglasses'
            || productsArray[i].category =='sports-accessories'
            ){
            summerItemsArray.push(productsArray[i]);
        }
    }
    console.log(summerItemsArray);
    return summerItemsArray;
}

// use UseEffect to get fakeItem Data
// format itemData and store them in a state items, setItems
// give items as prop to Outlet