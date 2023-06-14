import "./Styles/main.css";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import MainPage from "./component/MainPage";
import Projects from "./component/MiniProjects";

function App() {
  return (
    <div className="app-container">
      <MainPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
