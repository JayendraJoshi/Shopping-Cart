import beachImg from '../../assets/images/beach.jpg';
import styles from './home-page.module.css';

export default function HomePage(){
    return(
        <>
            <BannerSection/>
            <BestsellerSection></BestsellerSection>
            
        </>
    )
    
}

function BannerSection(){
    return(
        <section className={styles.banner}>
            <div className={styles['banner-text']}>
                <h1>Summer is on it's way</h1>
                <p>We offer affordable and sustainable beach accessoires of the highest quality, 100% handmade and sourced locally from certified partners. Get yours now!</p>
                <button>Shop Now</button>
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
            <button>View all</button>
        </section>
    )
}

//To-Do
// Add banner
// Add bestseller overview
// Figure out if the banner should cover the viewport or if you want to user to see the whole homepage on his viewport