import styles from './shop-page.module.css';
import ItemsPreview from '../items-preview';
import { useOutletContext } from "react-router";

export default function ShopPage(){

    const contextArray = useOutletContext();
    const items = contextArray[0];
    return(
        <section className={styles["shop-page"]}>
            <h2>All Products</h2>   
                <ul>
                    <ItemsPreview items={items}></ItemsPreview>
               </ul>
        </section>
    )
}

// get items state through outlet props
// give all items as prop to item preview to get previews
// display all previews 