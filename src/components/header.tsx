import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";

type cartItems = [number, number][];

type HeaderProps = {
  readonly cartItems: cartItems;
};

export default function Header({ cartItems }: HeaderProps) {
  return (
    <header>
      <div className="newsletter-div">
        <div className="newsletter-div-wrapper">
          <p>
            Sign up <a>now</a> and get 20% off on your first order!
          </p>
        </div>
      </div>
      <nav>
        <div className="nav-wrapper">
          <h1>
            <Link to="home" className="nav-link">
              SportsWorld
            </Link>
          </h1>
          <div className="nav-controls">
            <NavLink
              to="home"
              className={({ isActive }) =>
                [isActive ? "active" : "", "nav-link"].join(" ")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="shop"
              className={({ isActive }) =>
                [isActive ? "active" : "", "nav-link"].join(" ")
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="cart"
              className={({ isActive }) =>
                [isActive ? "active" : "", "nav-link"].join(" ")
              }
            >
              <FontAwesomeIcon icon={faCartShopping} />
              <span data-testid="cart-count">
                {getTotalCartItemsQuantity(cartItems)}
              </span>{" "}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
function getTotalCartItemsQuantity(cartItems: cartItems): number {
  let quantity = 0;
  if (cartItems.length != 0) {
    for (const item of cartItems) {
      quantity += item[1];
    }
  }
  return quantity;
}
