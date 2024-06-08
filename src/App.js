import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"
import './App.css'
import Project from "./components/Project/Project"
import Contact from "./components/Contact/Contact"

export default function App() {
  return (
    <div className="background flex flex-col">
      <Header></Header>
      <Intro></Intro>
      <Project></Project>
      <Contact></Contact>
    </div>
  )
}