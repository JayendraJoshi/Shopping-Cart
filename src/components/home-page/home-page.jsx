import beachImg from '../../assets/images/beach.jpg';
import styles from './home-page.module.css';
import { Link } from "react-router";
import { useNavigate } from "react-router";


export default function HomePage(){
    let navigate = useNavigate();
    return(
        <section className="home-page">
            <BannerSection navigate={navigate}/>
            <BestsellerSection></BestsellerSection>
        </section>          
    )
    
}

function BannerSection({navigate}){
    return(
        <section className={styles.banner}>
            <div className={styles['banner-text']}>
                <h1>Summer is on it's way</h1>
                <p>We offer affordable and sustainable beach accessoires of the highest quality, 100% handmade and sourced locally from certified partners. Get yours now!</p>
                <button onClick={()=>navigate("/shop")}>Shop Now </button>
            </div>
            <img className={styles['banner-image']} src={beachImg}></img>
            
        </section>
    )
}

function BestsellerSection(){
    return(
        <section className={styles['bestsellers']}>   
            <h2>Bestsellers</h2>
            <div className={styles['bestsellers-items-container']}>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
                <div>placeholder</div>
            </div>
            <button><Link to="/shop">View All </Link></button>
        </section>
    )
}

//To-Do
//get items state through outlet props
// get bestseller items and give them to item-preview to get previews
// display them under bestseller section