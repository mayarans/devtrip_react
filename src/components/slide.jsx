export default function Slide({ Class, SlideImage, EventDetails }) {
  return (
    <div className={Class}>
      <img src={SlideImage} alt="imagem" />
      <div className="slide-information">
        <div className="event-details">
          <span className="event-details-date">{EventDetails["date"]}</span>
          <h1 className="event-details-title">{EventDetails["title"]}</h1>
          <span className="event-details-local">{EventDetails["local"]}</span>
        </div>
        <button className="event-details-button">VER DETALHES</button>
      </div>
    </div>
  )
}
