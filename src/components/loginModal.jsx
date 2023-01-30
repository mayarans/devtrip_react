import CloseModal from "./closeModal"
import ButtonModal from "./buttonModal"
import PopUp from "./popUp"
import InputModal from "./inputModal"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"

export default function LoginModal() {
  return (
    <div className="login-modal">
      <CloseModal />
      <div className="login-modal-content">
        <section className="center">
          <h1 className="login-title">Login</h1>
          <form className="form">
            <InputModal
              inputFieldClass={"email"}
              iconName={faEnvelope}
              placeHolder={"Email"}
              errorMessage={"Email ou senha incorretos"}
            />

            <InputModal
              inputFieldClass={"password"}
              iconName={faLock}
              placeHolder={"Senha"}
              errorMessage={"Email ou senha incorretos"}
            />

            <ButtonModal buttonText={"LOGIN"} />
            <PopUp />
          </form>
        </section>

        <div id="signup">
          Não possui uma conta?
          <span> Faça o cadastro!</span>
        </div>
      </div>
    </div>
  )
}
