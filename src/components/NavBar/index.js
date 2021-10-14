import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const NavBar = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {activeTab} = props
  const activeHome = activeTab === 'Home' ? 'active' : ''
  const activeCart = activeTab === 'Cart' ? 'active' : ''

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-mobile-view">
          <Link to="/" className="nav-link">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/chandu626/image/upload/v1633073146/website-logo_oa49xd.png"
                alt="nav heading"
                className="website logo"
              />
              <h1 className="logo-heading">Tasty Kitchens</h1>
            </div>
          </Link>
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="nav-mobile-btn"
                data-testid="hamburgerIconButton"
              >
                <GiHamburgerMenu className="hamburger-icon" />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <button
                  className="button-close"
                  type="button"
                  data-testid="closeButton"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" color="#616e7c" />
                </button>
                <ul className="nav-items-popup">
                  <Link to="/">
                    <li className="nav-item-type" onClick={() => close()}>
                      Home
                    </li>
                  </Link>
                  <Link to="/cart">
                    <li className="nav-item-type" onClick={() => close()}>
                      cart
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </Popup>
        </div>
        <div className="nav-large-container">
          <Link to="/" className="nav-link">
            <div className="logo-large-container">
              <img
                src="https://res.cloudinary.com/chandu626/image/upload/v1633073146/website-logo_oa49xd.png"
                alt="nav heading"
                className="website logo"
              />
              <h1 className="logo-heading">Tasty Kitchens</h1>
            </div>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className={`nav-link ${activeHome}`}>
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className={`nav-link ${activeCart}`}>
                Cart
              </Link>
            </li>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={onClickLogOut}
              data-testid="logOutButton"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(NavBar)
