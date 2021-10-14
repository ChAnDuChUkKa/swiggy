import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import './index.css'

const Payment = () => (
  <>
    <NavBar />
    <div className="success-container">
      <img
        src="https://res.cloudinary.com/chandu626/image/upload/v1634097721/Vector_ynz4tx.png"
        alt="success"
        className="success-image"
      />
      <h1 className="success-head">Payment Successfull</h1>
      <p className="description">
        Thank you for ordering. Your Payment is successfully completed.
      </p>
      <Link to="/">
        <button className="button" type="button" data-testid="go-home">
          Go TO Home Page
        </button>
      </Link>
    </div>
  </>
)
export default Payment
