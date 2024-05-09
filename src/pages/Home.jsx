import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import Personalization from "../components/Personalization/Personalization"
import Playful from "../components/Playful/Playful"


export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Playful />
        <Personalization />
    </div>
  )
}
