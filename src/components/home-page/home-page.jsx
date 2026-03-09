import beachImg from '../../assets/images/beach.jpg';
import styles from './home-page.module.css';
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router";


export default function HomePage(){
    let navigate = useNavigate();
    const items = useOutletContext();
    return(
        <section className="home-page">
            <BannerSection navigate={navigate}/>
            <BestsellerSection navigate={navigate}></BestsellerSection>
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

function BestsellerSection({navigate}){
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
            <button onClick={()=>navigate("/shop")}>View All</button>
        </section>
    )
}

function getBestsellerItems(items,quantity){
    const bestsellerArray = [...items];
    bestsellerArray.sort((a,b)=>b.rating - a.rating);
    return bestsellerArray.slice(0,quantity);
}

//To-Do
//get items state through outlet props
// get bestseller items and give them to item-preview to get previews
// display them under bestseller section