import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { useOutletContext } from "react-router";
import { createMemoryRouter, RouterProvider, Navigate, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";
import ItemPage from "../item-page/item-page";

function HomePage(){
    return <h1>Home Page</h1>
}
function ShopPage(){
    return <h1>Shop Page</h1>
}
function CartPage(){
    return <h1>Cart Page</h1>
}

function MainLayout() {
  const items = [
    {
      id: 1,
      title: "One",
      category: "sports-accessories",
      price: 1.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 2,
      title: "Two",
      category: "sports-accessories",
      price: 2.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 3,
      title: "Three",
      category: "sports-accessories",
      price: 3.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 4,
      title: "Four",
      category: "sports-accessories",
      price: 4.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 5,
      title: "Five",
      category: "sports-accessories",
      price: 5.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 6,
      title: "Six",
      category: "sports-accessories",
      price: 6.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 7,
      title: "Seven",
      category: "sports-accessories",
      price: 7.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 8,
      title: "Eight",
      category: "sports-accessories",
      price: 8.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 9,
      title: "Nine",
      category: "sports-accessories",
      price: 9.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 10,
      title: "Ten",
      category: "sports-accessories",
      price: 10.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 11,
      title: "Eleven",
      category: "sports-accessories",
      price: 11.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 12,
      title: "Twelve",
      category: "sports-accessories",
      price: 12.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 13,
      title: "Thirteen",
      category: "sports-accessories",
      price: 13.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 14,
      title: "Fourteen",
      category: "sports-accessories",
      price: 14.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 15,
      title: "Fifteen",
      category: "sports-accessories",
      price: 15.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 16,
      title: "Sixteen",
      category: "sports-accessories",
      price: 16.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 17,
      title: "Seventeen",
      category: "sports-accessories",
      price: 17.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 18,
      title: "Eighteen",
      category: "sports-accessories",
      price: 18.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 19,
      title: "Nineteen",
      category: "sports-accessories",
      price: 19.99,
      rating: 4,
      images: ["mock-image"],
    },
    {
      id: 20,
      title: "Twenty",
      category: "sports-accessories",
      price: 20.99,
      rating: 4,
      images: ["mock-image"],
    },
  ];
  const contextArray = useOutletContext();
    const cartItems = contextArray[0];
    const setCartItems = contextArray[1];
  return (
    <main>
      <div className="main-wrapper">
        <Outlet context={[items, cartItems, setCartItems]}></Outlet>
      </div>
    </main>
  );
}
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Navigate to="/shop/item/1" replace /> },
          { path: "home", element: <HomePage /> },
          { path: "shop", element: <ShopPage /> },
          { path: "shop/item/:id", element: <ItemPage /> },
          { path: "cart", element: <CartPage /> },
        ],
      },
    ],
  },
];


describe("Item-page",()=>{
    beforeEach(()=>{
        const router = createMemoryRouter(routes);
        render(<RouterProvider router={router}></RouterProvider>)
    })
    it("Renders item-page",()=>{
        expect(screen.getByRole("heading",{name:/One/i}));
    })
    it("Quantity increases when + is clicked and starts at 1", async()=>{
        const plusButton = screen.getByRole("button",{name:"+"});
        const quantityP = plusButton.previousElementSibling;
        expect(quantityP).toHaveTextContent(1);
        const user = userEvent.setup();
        await user.click(plusButton);
        expect(quantityP).toHaveTextContent(2);
    })
    it("Quantity decreases when - is clicked but has a minimum of 1",async()=>{
        const plusButton = screen.getByRole("button",{name:"+"});
        const minusButton = screen.getByRole("button",{name:"-"});
        const quantityP = minusButton.nextElementSibling;
        const user = userEvent.setup();
        await user.click(plusButton);
        expect(quantityP).toHaveTextContent(2);
        await user.click(minusButton);
        expect(quantityP).toHaveTextContent(1);
        await user.click(minusButton);
        await user.click(minusButton);
        expect(quantityP).toHaveTextContent(1);
    })
    it("Clicking on AddToCart button increases number next to cart symbol in header",async ()=>{
        const quantitySpan = screen.getByTestId("cart-count");
        expect(quantitySpan).toHaveTextContent(0);
        const addToCartButton = screen.getByRole("button",{name:/Add to Cart/i});
        const user = userEvent.setup();
        await user.click(addToCartButton);
        expect(quantitySpan).toHaveTextContent(1);
    })
})