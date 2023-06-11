import "./App.css";

import { Navbar, Skills } from "./components";
import { Header, Projects, Contact } from "./containers";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient-bg">
          <Navbar />
          <Skills />
          <Header />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
