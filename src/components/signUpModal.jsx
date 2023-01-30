import CloseModal from "./closeModal"
import PopUp from "./popUp"
import ButtonModal from "./buttonModal"
import InputModal from "./inputModal"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faIdCard } from "@fortawesome/free-regular-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLock } from "@fortawesome/free-solid-svg-icons"

export default function SignUpModal() {
  return (
    <div class="sign-up-modal">
      <CloseModal />
      <div class="sign-up-modal-content">
        <section class="center">
          <h1 class="signup-title">Criar conta</h1>
          <form class="form">
            <InputModal
              inputFieldClass={"name"}
              iconName={faUser}
              placeHolder={"Primeiro nome"}
              errorMessage={"Campo obrigatório"}
            />

            <InputModal
              inputFieldClass={"last-name"}
              iconName={faIdCard}
              placeHolder={"Sobrenome"}
              errorMessage={"Campo obrigatório"}
            />

            <InputModal
              inputFieldClass={"email"}
              iconName={faEnvelope}
              placeHolder={"Email"}
              errorMessage={"Campo obrigatório"}
            />

            <InputModal
              inputFieldClass={"password"}
              iconName={faLock}
              placeHolder={"Senha"}
              errorMessage={"Sua senha deve conter no mínimo 8 caracteres"}
            />

            <ButtonModal buttonText={"CADASTRAR"} />
            <PopUp />
          </form>
        </section>
        <div id="login">
          Já possui uma conta?
          <span> Faça o login!</span>
        </div>
      </div>
    </div>
  )
}
