import beachImg from '../../assets/images/beach.jpg';
import sportBannerImg from '../../assets/images/sport-banner.jpg';
import styles from './home-page.module.css';
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router";
import ItemsPreview from "../items-preview";


export default function HomePage(){
    let navigate = useNavigate();
    const contextArray = useOutletContext();
    const items = contextArray[0];
    const bestsellerItems = getBestsellerItems(items,10);
    return(
        <section className="home-page">
            <BannerSection navigate={navigate}/>
            <BestsellerSection navigate={navigate} bestsellerItems={bestsellerItems}></BestsellerSection>
        </section>          
    )
}

function BannerSection({navigate}){
    return(
        <section className={styles.banner}>
            <div className={styles['banner-wrapper']}>

           
            <div className={styles['banner-text']}>
                <h2>Sportsgear for everyone.</h2>
                <p>We offer affordable and sustainable sports accessoires of the highest quality, sourced locally from certified partners. Get yours now!</p>
                <button onClick={()=>navigate("/shop")}>Shop Now </button>
            </div>
            <img className={styles['banner-image']} src={sportBannerImg}></img>
             </div>
        </section>
    )
}

function BestsellerSection({navigate, bestsellerItems}){
    return(
        <section className={styles['bestsellers']}>   
            <h2>Bestsellers</h2>
            <div className={styles['bestsellers-items-container']}>
                <ItemsPreview items={bestsellerItems}></ItemsPreview>
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