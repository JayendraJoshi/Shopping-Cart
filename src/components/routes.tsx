import { Navigate } from "react-router";
import App from "../App.js";
import MainLayout from "./main-layout.js";
import HomePage from "./home-page/home-page.js";
import ShopPage from "./shop-page/shop-page.js";
import CartPage from "./cart-page/cart-page.js";
import ItemPage from "./item-page/item-page.js";

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
  },
];

export default routes;
