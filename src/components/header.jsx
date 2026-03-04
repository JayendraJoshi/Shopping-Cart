import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Header(){
    return(
        <header>
             
                <div className="newsletter-div">
                    <div className="newsletter-div-wrapper">
                        <p>Sign up <a>now</a> and get 20% off on your first order!</p></div>
                    </div>
                <nav>
                    <div className="nav-wrapper">
                    <h1>Tropical Trails</h1>
                    <div className="nav-controls">
                        <a>Home</a>
                        <a>Shop</a>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    </div>
                </nav>
           
        </header>
       
    )
    
}