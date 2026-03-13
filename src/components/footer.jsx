import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer>
            <div className="footer-wrapper">
                <div className="profile">
                    <div className="name-and-description">
                        <h3>SportsWorld</h3>
                        <p>The Nr.1 place for sport accessoires.</p>
                    </div>
                    <div className="socials">
                        <FontAwesomeIcon icon={faXTwitter} />
                       <FontAwesomeIcon icon={faInstagram} />
                       <FontAwesomeIcon icon={faFacebookF} />
                       <FontAwesomeIcon icon={faYoutube} />
        
                    </div>
                </div>
                <div className="Company">
                    <h3>Company</h3>
                    <p>About</p>
                    <p>News</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="Help">
                    <h3>Help</h3>
                    <p>Customer Support</p>
                    <p>FAQ</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="Resources">
                    <h3>Resources</h3>
                    <p>Tips & Tricks</p>
                    <p>Sports Guides</p>
                    <p>Product Guides</p>
                    <p>Extra</p>
                </div>
            </div>
        </footer>

    )

}