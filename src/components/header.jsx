import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Header( {cartItems} ){
    return(
        <header>
             
                <div className="newsletter-div">
                    <div className="newsletter-div-wrapper">
                        <p>Sign up <a>now</a> and get 20% off on your first order!</p></div>
                    </div>
                <nav>
                    <div className="nav-wrapper">
                        <h1><Link to="home" className="nav-link">SportsWorld</Link></h1>
                        <div className="nav-controls">
                            <NavLink to="home" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            >Home</NavLink>
                            <NavLink to="shop" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            >Shop</NavLink>
                           <NavLink to="cart" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            ><FontAwesomeIcon icon={faCartShopping}/><span data-testid="cart-count">{getTotalCartItemsQuantity(cartItems)}</span> </NavLink> 
                        </div>
                    </div>
                </nav>
           
        </header>
       
    )
    
}
function getTotalCartItemsQuantity(cartItems){
    let quantity = 0;
   if(cartItems.length!=0){
        for(let i = 0;i< cartItems.length;i++){
            quantity = quantity + cartItems[i][1];
        }
    }
    return quantity;
}