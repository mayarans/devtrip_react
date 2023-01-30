import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export default function CloseModal() {
  return (
    <div className="close-modal">
      <FontAwesomeIcon icon={faXmark}/>
    </div>
  )
}
