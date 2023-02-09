import React from "react"
import logo from "../components/assets/logo.png"
import { Link, useParams } from "react-router-dom"
import data from "../events.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Footer from "../components/footer"

const Details = () => {
  function getEventDetails(id) {
    return data.filter(function (event) {
      return event.id == id
    })
  }
  const { id } = useParams()
  let event = getEventDetails(id)[0]
  return (
    <div>
      <Link to="/" target="_blank">
        <section className="header-logo">
          <img src={logo} alt="logo" />
        </section>
      </Link>

      <div className="event-banner-block">
        <div className="event-banner">
          <img src={process.env.PUBLIC_URL + event.url} alt="banner" />
        </div>
      </div>

      <div className="image-banner">
        <img src={event.url} alt="banner" />
      </div>

      <section className="banner-details">
        <div className="banner-information">
          <h1 className="banner-title">{event.title}</h1>
          <p>
            <FontAwesomeIcon icon={faClock} />
            <span className="banner-date">{event.date}</span>
            <br />
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="banner-local">{event.local}</span>
          </p>
        </div>
        <div className="banner-ticket">
          <div className="ticket-title">
            <h4>Ingressos</h4>
          </div>
          <ul className="tickets-types">
            {event["ticket-types"].map((element, i) => (
              <ul className="ticket-type">
                <li>{element.type}</li>
                <li>{element.value}</li>
              </ul>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default Details
