import beachBottleImg from '../../assets/images/beach-bottle.jpg';
import styles from './item-page.module.css';

export default function ItemPage(){
    return(
        <section className={styles["item-page"]}>
            <img src={beachBottleImg}></img>
            <div className={styles["item-overview"]}>
                <h2 className={styles.name}>Beach Premium Bottle</h2>
                <p className={styles.price}>22.00€</p>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <div className={styles["item-controls"]}>
                    <div className={styles["quantity-controls"]}>
                        <button>-</button>
                        <p className={styles["quantity-value"]}>1</p>
                        <button>+</button>
                    </div>
                    <button className={styles["cart-button"]}>Add to Cart</button>
                </div>
            </div>
        </section>
    )

}