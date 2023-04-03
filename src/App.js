import logo from "./logo.svg";
import "./App.css";

import { Brand, Navbar, Project } from "./components";
import { About, Footer, Header, Projects } from "./containers";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
