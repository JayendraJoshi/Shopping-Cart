import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Header(){
    return(
        <header>
             
                <div className="newsletter-div">
                    <div className="newsletter-div-wrapper">
                        <p>Sign up <a>now</a> and get 20% off on your first order!</p></div>
                    </div>
                <nav>
                    <div className="nav-wrapper">
                        <h1><Link to="home" className="nav-link">Tropical Trails</Link></h1>
                        <div className="nav-controls">
                            <NavLink to="home" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            >Home</NavLink>
                            <NavLink to="shop" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            >Shop</NavLink>
                           <NavLink to="cart" className={({isActive}) => [isActive ? "active" : "",
                                                                            "nav-link"].join(" ")}
                            ><FontAwesomeIcon icon={faCartShopping}/> </NavLink> 
                        </div>
                    </div>
                </nav>
           
        </header>
       
    )
    
}