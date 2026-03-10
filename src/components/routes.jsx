import { Navigate } from "react-router";
import App from "../App";
import MainLayout from "./main-layout";
import HomePage from "./home-page/home-page";
import ShopPage from "./shop-page/shop-page";
import CartPage from "./cart-page/cart-page";
import ItemPage from "./item-page/item-page";

const routes = [
  
{
  path: "/",
  element: <App />, 
  children: [
    {
      element: <MainLayout />, 
      children: [
        { index: true, element: <Navigate to="/home" replace /> },
        { path: "home", element: <HomePage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "shop/item/:id", element: <ItemPage /> },
        { path: "cart", element: <CartPage /> },
      ],
    },
  ],
}
];

export default routes;
