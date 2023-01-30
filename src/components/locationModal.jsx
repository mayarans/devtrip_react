import CloseModal from "./closeModal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import LocationModalCity from "./locationModalCity"

export default function LocationModal() {
  return (
    <div className="location-modal">
      <CloseModal />
      <div className="location-modal-content">
        <section className="center-location">
          <h1 className="location-title">Localização</h1>
          <div className="search-location">
            <input
              type="text"
              className="input-search-location"
              placeholder="Onde?"
            />
          </div>
        </section>
      </div>
      <div className="actual-location">
        <FontAwesomeIcon
          icon={faLocationArrow}
          className="icon-location fa-solid fa-location-arrow"
        />
        <span className="actual-location-text">
          Usar minha localização atual
        </span>
      </div>
      <div className="modal-location-cities">
        <ul>
          
          <LocationModalCity city={"Qualquer lugar"} />
          <LocationModalCity city={"Campina Grande"} />
          <LocationModalCity city={"João Pessoa"} />
          <LocationModalCity city={"Patos"} />
          <LocationModalCity city={"Queimadas"} />
          <LocationModalCity city={"Sousa"} />
          <LocationModalCity city={"Pilões"} />
          <LocationModalCity city={"Alagoa Grande"} />
          <LocationModalCity city={"Soledade"} />
          <LocationModalCity city={"Cabaceiras"} />
          <LocationModalCity city={"Cajazeiras"} />

        </ul>
      </div>
    </div>
  )
}
