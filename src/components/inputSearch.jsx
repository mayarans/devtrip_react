import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchField() {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass" id="icon-search"/>
      <input
        type="text"
        className="input-search"
        placeholder="Pesquisar eventos, shows, teatros, cursos..."
      />
    </div>
  )
}
