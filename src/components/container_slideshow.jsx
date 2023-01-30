import Slide from "./slide"
import curso from "./assets/curso.png"
import show from "./assets/show.png"
import show2 from "./assets/show2.png"
import rave from "./assets/rave.png"

export default function ContainerSlideShow() {
  return (
    <section className="container-slideshow">
      <div className="container-slideshow-title">
        <h2 className="slideshow-title">Eventos em destaque na DevTrip</h2>
      </div>

      <div className="slideshow">
        <div className="radio-buttons">
          <input type="radio" className="radio-btn" id="radio1" />
          <input type="radio" className="radio-btn" id="radio2" />
          <input type="radio" className="radio-btn" id="radio3" />
          <input type="radio" className="radio-btn" id="radio4" />
        </div>

        <div className="slides">
          <div className="container-slides">
            <Slide
              Class={"first slide"}
              SlideImage={show}
              EventDetails={{
                date: "SEX, 03/02 - 22H",
                title: "Samara Almeida live session",
                local: "Ao vivo na Twitch",
              }}
            />

            <Slide
              Class={"slide"}
              SlideImage={show2}
              EventDetails={{
                date: "DOM, 12/02 - 20H",
                title: "Sertanejo acústico",
                local: "Bar do Raimundo, Serra Talhada - Pernambuco",
              }}
            />

            <Slide
              Class={"slide"}
              SlideImage={rave}
              EventDetails={{
                date: "QUI, 23/03 - 22H",
                title: "Rave Funk",
                local: "Estação das Docas, Belém - Pará",
              }}
            />

            <Slide
              Class={"slide"}
              SlideImage={curso}
              EventDetails={{
                date: "SAB, 21/01 - 16H",
                title: "Barnardo Carvalho - Workshop de Violão",
                local: "Zepellin MIX Gourmeteria, Vitória - Espírito Santo",
              }}
            />
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </section>
  )
}
