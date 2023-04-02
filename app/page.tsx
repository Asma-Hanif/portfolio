import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Whatido from "./components/Whatido";
import Work from "./components/Work";

export default function Home() {
  return (
    <><Header /><Hero /><About /> <Whatido/> <Skill/> <Work/> <Contact/> <Footer/> </>
  )
}