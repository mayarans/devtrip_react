import google from "./assets/logo-google.png"
import facebook from "./assets/logo-facebook.webp"

export default function PopUp () {
  return (
    <div className="login-with">
      <div className="login-google">
        <img
          src={google}
          alt="logo do google"
          
        />
      </div>

      <div className="login-facebook">
        <img src={facebook} alt="logo do facebook" />
      </div>
    </div>
  )
}