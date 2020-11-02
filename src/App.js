import React, { useState, useEffect } from "react";
import data from "./files/data";
import Navbar from "./files/Navbar";
import Projects from "./files/Projects";
//import logo from './logo.svg'; // with import

function App() {
  const [projects, setProjects] = useState(data);
  const [isMainpage, setIsMainpage] = useState(false);

  useEffect(() => {
    setProjects(data);
    console.log("projects/data: " + projects);
  }, []);

  if (isMainpage) {
    return (
      <main>
        <Projects projects={projects} />
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="title">
          <h1>Manus first steps</h1>
          <div>
            <img src={require("./files/images/M1.png")} />
          </div>

          <button onClick={() => setIsMainpage(true)} className="btn">
            Click here to see my projects
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
