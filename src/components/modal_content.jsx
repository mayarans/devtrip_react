import LocationModal from "./location_modal"
import SignUpModal from "./sign_up_modal"
import LoginModal from "./login_modal"

export default function ModalContent () {
  return (
     <section class="modal-content">
      <LocationModal/>
      <SignUpModal/>
      <LoginModal/>
     </section>
  )
}