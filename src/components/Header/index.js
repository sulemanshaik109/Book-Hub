import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-bar-mobile-logo-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1707908969/Group_7732_dw8wrb.png"
            className="header-logo"
            alt="website logo"
          />
        </Link>
        <GiHamburgerMenu size={16} color="#475569" />
      </div>
      <div className="nav-bar-large-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1707908969/Group_7732_dw8wrb.png"
            className="header-logo"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/shelf" className="nav-link">
              Bookshelves
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
