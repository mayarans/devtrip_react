import logoBranca from "./assets/logo-branca.png"
import google from "./assets/google-play.png"
import apple from "./assets/app-store.png"

export default function Footer() {
  return (
    <footer>
      <div className="container-footer-top">
        <div className="footer-title">
          <img src={logoBranca} alt="logo" />
        </div>
        <div className="footer-pay">
          COMPRE PELO APP
          <a href="https://play.google.com/store/games" target="_blank">
            <img src={google} alt="" />
          </a>
          <a href="https://www.apple.com/br/app-store/" target="_blank">
            <img src={apple} alt="" />
          </a>
        </div>
      </div>
      <div className="container-footer-bottom">
        Copyright © 2023 - Mayara Nascimento
      </div>
    </footer>
  )
}
