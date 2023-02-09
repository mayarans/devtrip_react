import React from "react"
import NavBar from "../components/navbar"
import CollectionCards from "../components/collectionCards"
import ContainerSlideShow from "../components/containerSlideshow"
import Footer from "../components/footer"
import ModalContent from "../components/modalContent"

const Home = () => {
  return (
    <div>
      <NavBar />
      <ModalContent />
      <CollectionCards />
      <ContainerSlideShow />
      <Footer />
    </div>
  )
}
export default Home
