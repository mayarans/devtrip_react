import SearchField from "./search_field"
import logo from "./assets/logo.png"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar() {
  return (
    <section className="navbar">
      <div className="logo">
        <img src={logo} alt="" id="image-logo" />
      </div>

      {<SearchField />}

      <div className="location">
        <FontAwesomeIcon icon={faLocationDot} />
        <strong className="location-text"> Qualquer lugar </strong>
        <FontAwesomeIcon icon={faSortDown} className="sort-down" />
      </div>

      <div className="login-signup">
        <button className="login-button">ACESSE SUA CONTA</button>
        <button className="sign-up-button">CADASTRE-SE</button>
      </div>
    </section>
  )
}
