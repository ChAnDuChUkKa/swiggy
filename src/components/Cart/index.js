import CartContext from '../../context/CartContext'
import NavBar from '../NavBar'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'
import Footer from '../Footer'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const isEmpty = cartList.length === 0

      return (
        <>
          <NavBar activeTab="Cart" />
          <>
            {isEmpty ? (
              <EmptyCartView />
            ) : (
              <div className="cart-container">
                <CartListView />
                <hr className="horizontal-line-view" />
                <CartSummary />
              </div>
            )}
          </>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
