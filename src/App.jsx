import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <main className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}


export default App;
