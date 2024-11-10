import WelcomeMessage from "./components/welcome";
import Presentation from "./components/presentation";
import Hobbies from "./components/hobbies";
import Objectives from "./components/objectives";
import Capabilities from "./components/capabilities";
import Achievements from "./components/achievements";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <main>
      <title>Juan Di Donato</title>
      {/* Home message */}
      <div id="welcome" >
        <WelcomeMessage />
      </div>
      {/* Presentation*/}
      <div id="presentation">
        <Presentation />
      </div>
      {/* Hobbies */}
      <div id='hobbies'>
        <Hobbies />
      </div>
      {/* Objectives */}
      <div id="obj">
        <Objectives />
      </div>
      {/* Aptitudes */}
      <div id="apt">
        <Capabilities />
      </div>
      {/* Aptitudes */}
      <div id="arc">
        <Achievements />
      </div>
      {/* Skills */}
      <div id="skl">
        <Skills />
      </div>
      {/* Footer */}
      <div id="ftr">
        <Footer />
      </div>

    </main>
  )
}

export default App;
