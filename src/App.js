import "./App.css"
import "./index"
import React, { useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Home from "./routes/Home"
import Details from "./routes/Details"
// import Perfil from "./routes/Perfil"

function App() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `${process.env.PUBLIC_URL}/behavior.js`
    script.async = true
    document.body.appendChild(script)
  })
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Details />} />
          {/* <Route path="/perfil" element={<Perfil />} /> */}
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
