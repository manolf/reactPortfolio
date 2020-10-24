import React from 'react';



const projects = ({projects}) => {
    return (
    <>
      {projects.map((project) => {
        const { id, name, category, screenshot } = project;
        
        return (
          <article key={id} className='project'>
            <div>
            <h2>{name}</h2>
            <img src={screenshot} alt={name} />
            {/* <img src={require({screenshot})} alt=""/> */}
            
              
              <p>used technologies: {category}</p>
              {/* <img src={require('./images/travel.JPG')} alt=""/> */}
              <button className='btn' type='button' onClick={()=>{project=''}}>show me </button>
              <button className='btn' type='button' onClick={()=>{project=''}}>Github </button>
            </div>
            
          </article>
        );
      })}
        </>
    );
};

export default projects
