import Header from "./components/Header/Header"
import Intro from "./components/Intro/Intro"
import './App.css'

export default function App() {
  return (
    <div className="background flex flex-col">
      <Header></Header>
      <Intro></Intro>
    </div>
  )
}