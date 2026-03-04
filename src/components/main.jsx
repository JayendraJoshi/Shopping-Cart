import HomePage from './home-page/home-page'
import ShopPage from './shop-page/shop-page'
import CartPage from './cart-page/cart-page'
import ItemPage from './item-page/item-page'

export default function Main(){

    return(
        <main>
            <div className="main-wrapper">
                <ItemPage/>
            </div>
        </main>
        
    )
}