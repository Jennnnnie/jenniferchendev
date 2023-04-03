import logo from "./logo.svg";
import "./App.css";

import { Brand, Navbar, Project } from "./components";
import { About, Footer, Header, Projects, Contact } from "./containers";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient-bg">
          <Navbar />
          <Header />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
