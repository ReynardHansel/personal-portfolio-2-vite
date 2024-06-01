import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  const sections = [
    // { id: "welcome-section", name: "Welcome" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <>
    <Navbar sections={sections} />
    <Hero />
    </>
  );
}

export default App;
