import React,{useState} from "react";
import data from './files/data'
import Navbar from "./files/navbar";
import Projects from "./files/projects";
//import logo from './logo.svg'; // with import


function App() {
  const [projects, setProjects] = useState(data);
  return (
    <>
    <Navbar />

    <main>
    <section className="container">
      
      <h1>Manolfs first steps</h1>
      <div>
      <img className="icon" src={require('./files/images/M1.png')} />
      <img className="icon" src={require('./logo.svg')} />
      </div>
  <h2>total of {projects.length} Projects</h2>
  <div className = "projectContainer">
      <Projects projects={projects} />
      </div>
  
      
      

    </section>
    </main>
    </>
  );
}

export default App;
