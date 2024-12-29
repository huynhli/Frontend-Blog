import './Projects.css';

import React from 'react';

export default function Projects (){
   return (
      <div className="ProjectsPage"> 
         <div className="banners-background">
            <div className="banners-content">

               <div className="banner-one-before-hovering">
                  <h1>
                     <a className="banners-header-hyperlink" href="/">Frontend Website/Blog</a>
                  </h1> 
                     <div className="banner-one-while-hovering">
                        <img src="" alt="There should be a timeline image here"></img>
                        <p className="banners-body-paragraph">This is the current website you are looking at. It is a backend-less SPA (single page application) that works using React and Express for routing.</p>
                     </div>
               </div>
            </div>
         </div>
      </div>
   )
}