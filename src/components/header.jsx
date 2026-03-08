import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router";

export default function Header(){
    return(
        <header>
             
                <div className="newsletter-div">
                    <div className="newsletter-div-wrapper">
                        <p>Sign up <a>now</a> and get 20% off on your first order!</p></div>
                    </div>
                <nav>
                    <div className="nav-wrapper">
                    <h1><Link to="/" className="nav-link">Tropical Trails</Link></h1>
                    <div className="nav-controls">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="shop" className="nav-link">Shop</Link>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    </div>
                </nav>
           
        </header>
       
    )
    
}