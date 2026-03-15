import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import CartPage from "./cart-page";
import { createMemoryRouter, RouterProvider, Navigate, Outlet, useOutletContext } from "react-router";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import {useEffect} from "react";

function MainLayout() {

    useEffect(()=>{
         setCartItems([[items[0].id,2],[items[1].id,4],[items[2].id,5]]);
    },[])

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
function HomePage(){
    return <h1>Home Page</h1>
}
function ShopPage() {
  return <h1>Shop Page</h1>;
}
function ItemPage() {
  return <h1>Item Page</h1>;
}
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Navigate to="/cart" replace /> },
          { path: "home", element: <HomePage /> },
          { path: "shop", element: <ShopPage /> },
          { path: "shop/item/:id", element: <ItemPage /> },
          { path: "cart", element: <CartPage /> },
        ],
      },
    ],
  },
];

const router = createMemoryRouter(routes);

describe("Cart component",()=>{
    beforeEach(()=>{
        render(<RouterProvider router={router}></RouterProvider>)
    })
    it("Renders cart-page",()=>{
        expect(screen.getByRole("heading",{name:/Shopping cart/i}));
    })
    it("All cart items are displayed",()=>{
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
    })
    it("Clicking minus reduces item quantity",async()=>{
        const listItems = screen.getAllByRole("listitem");
        const minusButtonOfFirstItem = within(listItems[0]).getByRole("button",{name:"-"});
        const quantityP = minusButtonOfFirstItem.nextElementSibling;
        const user = userEvent.setup();
        expect(quantityP).toHaveTextContent(2);
        await user.click(minusButtonOfFirstItem);
        expect(quantityP).toHaveTextContent(1);  
    })
    it("Clicking minus when item quantity is 0 removes the item from the cart",async()=>{
         const listItems = screen.getAllByRole("listitem");
        const minusButtonOfFirstItem = within(listItems[0]).getByRole("button",{name:"-"});
        const quantityP = minusButtonOfFirstItem.nextElementSibling;
        const user = userEvent.setup();
        expect(quantityP).toHaveTextContent(2);
        await user.click(minusButtonOfFirstItem);
        await user.click(minusButtonOfFirstItem);
        const newListItems = screen.getAllByRole("listitem");
        expect(newListItems).toHaveLength(2);
    })
    it("Clicking plus increases item quantity",async ()=>{
        const listItems = screen.getAllByRole("listitem");
        const plusButtonOfFirstItem = within(listItems[0]).getByRole("button",{name:"+"});
        const quantityP = plusButtonOfFirstItem.previousElementSibling;
        const user = userEvent.setup();
        expect(quantityP).toHaveTextContent(2);
        await user.click(plusButtonOfFirstItem);
        expect(quantityP).toHaveTextContent(3);
    })
    it("Correctly calculates subtotal dynamically per Item",async()=>{
        const listItems = screen.getAllByRole("listitem");
        const priceLine = within(listItems[0]).getByText(/€ each \(Subtotal:/i).textContent;
        const plusButtonOfFirstItem = within(listItems[0]).getByRole("button",{name:"+"});
        const quantityP = plusButtonOfFirstItem.previousElementSibling;

        const match = priceLine.match(/([\d.]+)\s*€ each \(Subtotal:\s*([\d.]+)\s*€\)/);
        expect(match).toBeTruthy();

        const unitPrice = Number(match[1]);
        const subtotal = Number(match[2]);
        expect(quantityP.textContent * unitPrice).toBe(subtotal);

        //User increases quantity
        const user = userEvent.setup();
        await user.click(plusButtonOfFirstItem);

        const newPriceLine = within(listItems[0]).getByText(/€ each \(Subtotal:/i).textContent;
        const newMatch = newPriceLine.match(/([\d.]+)\s*€ each \(Subtotal:\s*([\d.]+)\s*€\)/);
        expect(newMatch).toBeTruthy();
        const newUnitPrice = Number(newMatch[1]);
        const newSubtotal = Number(newMatch[2]);
        expect(quantityP.textContent * newUnitPrice).toBe(newSubtotal);
    })
    it("Order summary correctly displays subtotal of all items",async ()=>{
        const orderSummary = screen.getByRole("complementary");
        const subtotalOfOrderP = within(orderSummary).getByText(/subtotal/i);
        const subtotalOfOrderPriceP = subtotalOfOrderP.nextElementSibling;
        const subtotalOfOrder = Number(subtotalOfOrderPriceP.textContent.replace(/\s*€/, ""));
        
        const listItems = screen.getAllByRole("listitem");
        let calculatedTotal= 0;
        for(let item of listItems){
            const priceLine = within(item).getByText(/€ each \(Subtotal:/i).textContent;
            const match = priceLine.match(/([\d.]+)\s*€ each \(Subtotal:\s*([\d.]+)\s*€\)/);
            const subtotal = Number(match[2]);
            calculatedTotal = calculatedTotal + subtotal;
        }
        expect(subtotalOfOrder).toBeCloseTo(calculatedTotal);

        //User increases quantity

        const plusButtonOfFirstItem = within(listItems[0]).getByRole("button",{name:"+"});
        const user = userEvent.setup();
        await user.click(plusButtonOfFirstItem);
        const newSubtotalOfOrder = Number(subtotalOfOrderPriceP.textContent.replace(/\s*€/, ""));
        let newCalculatedTotal= 0;
        for(let item of listItems){
            const priceLine = within(item).getByText(/€ each \(Subtotal:/i).textContent;
            const match = priceLine.match(/([\d.]+)\s*€ each \(Subtotal:\s*([\d.]+)\s*€\)/);
            const subtotal = Number(match[2]);
            newCalculatedTotal = newCalculatedTotal + subtotal;
        }
        expect(newSubtotalOfOrder).toBeCloseTo(newCalculatedTotal);    
    })
    it("Order summary displays 4.99 € shipping cost if the order is under 50,00 €",()=>{
        const orderSummary = screen.getByRole("complementary");
        const shippingOfOrderP = within(orderSummary).getByText(/Shipping/i);
        const shippingPriceInTextP = shippingOfOrderP.nextElementSibling;
        const shippingOfOrder = Number(shippingPriceInTextP.textContent.replace(/\s*€/, ""));
        const listItems = screen.getAllByRole("listitem");
         let calculatedTotal= 0;
        for(let item of listItems){
            const priceLine = within(item).getByText(/€ each \(Subtotal:/i).textContent;
            const match = priceLine.match(/([\d.]+)\s*€ each \(Subtotal:\s*([\d.]+)\s*€\)/);
            const subtotal = Number(match[2]);
            calculatedTotal = calculatedTotal + subtotal;
        }
        expect(calculatedTotal).toBeLessThan(50);
        expect(shippingOfOrder).toBe(4.99);
    })
    it("Order summary displays 19% tax correctly",()=>{
        const orderSummary = screen.getByRole("complementary");

        const subtotalOfOrderP = within(orderSummary).getByText(/subtotal/i);
        const subtotalOfOrderPriceP = subtotalOfOrderP.nextElementSibling;
        const subtotalOfOrder = Number(subtotalOfOrderPriceP.textContent.replace(/\s*€/, ""));

        const shippingOfOrderP = within(orderSummary).getByText(/Shipping/i);
        const shippingPriceInTextP = shippingOfOrderP.nextElementSibling;
        const shippingOfOrder = Number(shippingPriceInTextP.textContent.replace(/\s*€/, ""));

        const taxOfOrderP = within(orderSummary).getByText(/Tax/i);
        const taxPriceInTextP = taxOfOrderP.nextElementSibling;
        const taxOfOrder = Number(taxPriceInTextP.textContent.replace(/\s*€/, ""));

        expect(taxOfOrder).toBeCloseTo((subtotalOfOrder + shippingOfOrder)/100*19);
    })
    it("Order summary display total price correctly",()=>{
        const orderSummary = screen.getByRole("complementary");

        const subtotalOfOrderP = within(orderSummary).getByText(/subtotal/i);
        const subtotalOfOrderPriceP = subtotalOfOrderP.nextElementSibling;
        const subtotalOfOrder = Number(subtotalOfOrderPriceP.textContent.replace(/\s*€/, ""));

        const shippingOfOrderP = within(orderSummary).getByText(/Shipping/i);
        const shippingPriceInTextP = shippingOfOrderP.nextElementSibling;
        const shippingOfOrder = Number(shippingPriceInTextP.textContent.replace(/\s*€/, ""));

        const taxOfOrderP = within(orderSummary).getByText(/Tax/i);
        const taxPriceInTextP = taxOfOrderP.nextElementSibling;
        const taxOfOrder = Number(taxPriceInTextP.textContent.replace(/\s*€/, ""));

        const totalOfOrderP = within(orderSummary).getByText(/^total$/i);
        const totalPriceInTextP = totalOfOrderP.nextElementSibling;
        const totalOfOrder = Number(totalPriceInTextP.textContent.replace(/\s*€/, ""));

        expect(totalOfOrder).toBeCloseTo(subtotalOfOrder+shippingOfOrder+taxOfOrder);
    })
})