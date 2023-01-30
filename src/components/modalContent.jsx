import LocationModal from "./locationModal"
import SignUpModal from "./signUpModal"
import LoginModal from "./loginModal"

export default function ModalContent() {
  return (
    <section class="modal-content">
      <LocationModal />
      <SignUpModal />
      <LoginModal />
    </section>
  )
}
