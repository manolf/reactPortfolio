import React, { useState } from "react";

const Project = ({ id, screenshot, name, category, info, url, github }) => {
  console.log("test");
  const [readMore, setReadMore] = useState(false);
  return (

    <>
      <article className="single-project">
        <img className="screenshot" src={screenshot} alt={name} />

        <footer>
          <div className="project-info">
            <h4>{name}</h4>
            <h4 className="project-cat">{category}</h4>
          </div>
          <p>
          {readMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " show less" : "show more"}
          </button>
  
        </p>
        <div className="project-link">
        <a type="button" className= "link-btn" href={url} target="blank">See Project</a>
        <a type="button" className= "github-btn" href={github} target="blank">Git-Hub</a>
        
        </div>
        </footer>
      </article>
    </>

  );
};

export default Project;
