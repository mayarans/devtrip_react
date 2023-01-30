import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function LocationModalCity ({city}) {
  return (
    <li>
      <FontAwesomeIcon icon={faLocationDot} className="fa-solid fa-location-dot"/>
      {city}
    </li>
  )
}