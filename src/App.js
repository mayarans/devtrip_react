import "./App.css"
import "./index"
import NavBar from "./components/navbar"
import React, { useEffect } from "react"
import CollectionCards from "./components/collectionCards"
import Footer from "./components/footer"
import ContainerSlideShow from "./components/containerSlideshow"
import ModalContent from "./components/modalContent"

function App() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `${process.env.PUBLIC_URL}/behavior.js`
    script.async = true
    document.body.appendChild(script)
  })
  return (
    <div className="App">
      {/* NAVBAR COMPONENT */}
      <NavBar />
      <main>
        <ModalContent />
        <CollectionCards />
        <ContainerSlideShow />
      </main>

      <Footer />
    </div>
  )
}

export default App
