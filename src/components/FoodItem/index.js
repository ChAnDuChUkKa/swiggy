import {Component} from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

class FoodItem extends Component {
  state = {quantity: 0, isAddButtonClicked: false}

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {
            addItem,
            decreaseCartItemQuantity,
            increaseCartItemQuantity,
          } = value
          const {foodDetails} = this.props
          const {id, cost, foodImageUrl, name, rating} = foodDetails
          const {quantity, isAddButtonClicked} = this.state

          const addItemToCart = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addItem({...foodDetails, quantity: 1}),
            )
            this.setState({isAddButtonClicked: true})
          }

          const onDecrement = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decreaseCartItemQuantity(id)
          }

          const onIncrement = () => {
            this.setState(prevState => ({
              quantity: prevState.quantity + 1,
            }))
            increaseCartItemQuantity(id)
          }

          return (
            <li className="food-container">
              <img src={foodImageUrl} alt="food" className="food-image" />
              <div className="food-details">
                <h1 className="food-name">{name}</h1>
                <p className="cost">{cost}.00</p>
                <div className="rating-item-container">
                  <AiOutlineStar className="star-image" />
                  <p className="rating">{rating}</p>
                </div>
                {isAddButtonClicked ? (
                  <div className="quantity-buttons">
                    <button
                      type="button"
                      onClick={onDecrement}
                      className="button"
                      data-testid="decrement-count"
                    >
                      -
                    </button>
                    <div data-testid="active-count">{quantity}</div>
                    <button
                      type="button"
                      onClick={onIncrement}
                      className="button"
                      data-testid="increment-count"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-button"
                    onClick={addItemToCart}
                    type="button"
                    data-testid="add-button"
                  >
                    Add
                  </button>
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default FoodItem
