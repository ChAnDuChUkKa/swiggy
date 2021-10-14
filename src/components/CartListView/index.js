import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <div className="cart-list-view-container">
          <div className="total-items">
            <p className="item-image">Item</p>
            <p className="item-image">Quantity</p>
            <p className="item-image">Price</p>
          </div>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
