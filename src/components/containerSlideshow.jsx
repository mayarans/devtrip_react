import Slide from "./slide"
import data from "../events.json"

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
            {data.map((element, i) => (
              <Slide
                key={element.id}
                id={element.id}
                Class={element.id === "1" ? "first slide" : "slide"}
                SlideImage={process.env.PUBLIC_URL + element.url}
                EventDetails={{
                  date: element.date,
                  title: element.title,
                  local: element.local,
                }}
              />
            ))}
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
