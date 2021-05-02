import React from "react"
import { Navbar1, Navbar2 } from "./Components/Navbar"
import ImageSlider from "./Components/ImageSlider"
import ExploreFeature from "./Components/Explore"

const App = () => {
  return (
    <div className="App">
      <Navbar1 />
      <ImageSlider />
      <Navbar2 />
      <ExploreFeature />
    </div>
  )
}

export default App
