import { faUser, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Profile() {
  return (
    <div className="profile">
      <FontAwesomeIcon icon={faUser} />
      <strong className="location-text"> Perfil </strong>
      <FontAwesomeIcon icon={faSortDown} className="profile-sort-down" />
    </div>
  )
}
