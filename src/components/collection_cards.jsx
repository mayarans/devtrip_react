import Card from "./card"
import carnaval from "./assets/carnaval.png"
import festa from "./assets/festa.png"
import esporte from "./assets/esporte.png"
import infantil from "./assets/infantil.png"
import gastronomia from "./assets/gastronomia.png"
import palestra from "./assets/palestra.png"
import teatro from "./assets/teatro.png"
import standup from "./assets/standup.png"
import workshop from "./assets/workshop.png"
import passeio from "./assets/passeio.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export default function CollectionCards() {
  return (
    <section className="container-collection-card">
      <div className="container-collection-card-title-icons">
        <h2 className="container-collection-card-title">
          Aqui você DEV aproveitar!
        </h2>
        <div className="container-collection-card-icons">
          <FontAwesomeIcon icon={faCircleChevronLeft} />
          <FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
      </div>

      <div className="container-move">
        <div className="container-card-and-text">
          <Card categoryImage={carnaval} categoryTitle={"Carnaval"} />
          <Card categoryImage={festa} categoryTitle={"Festas e shows"} />
          <Card categoryImage={teatro} categoryTitle={"Teatro e espetáculos"} />
          <Card categoryImage={infantil} categoryTitle={"Infantil"} />
          <Card categoryImage={standup} categoryTitle={"Stand Up Comedy"} />
          <Card categoryImage={passeio} categoryTitle={"Passeios e tours"} />
          <Card
            categoryImage={palestra}
            categoryTitle={"Congressos e palestras"}
          />
          <Card categoryImage={workshop} categoryTitle={"Cursos e workshops"} />
          <Card categoryImage={esporte} categoryTitle={"Esporte"} />
          <Card categoryImage={gastronomia} categoryTitle={"Gastronomia"} />
        </div>
      </div>
    </section>
  )
}
