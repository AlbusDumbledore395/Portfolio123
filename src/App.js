import React from "react"
import Header from "./Component/Head/Header"
import Features from "./Component/Features/Features"
import Home from "./Component/Hero/Home"
import Portfolio from "./Component/Portfolio/Portfolio"
import Resume from "./Component/Resume/Resume"
import Blog from "./Component/Blog/Blog"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App