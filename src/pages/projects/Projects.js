import './Projects.css';

import React from 'react';
import websiteTimeline from '../../assets/Website Timeline Graphics.png';

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
                        <img src={websiteTimeline} alt="There should be a timeline image here"></img>
                        <p className="banners-body-paragraph">This is the current website you are looking at. It is a backend-less SPA 
                           (single page application) that was built using React and React Router for routing.</p>
                     </div>
               </div>
            </div>
         </div>
      </div>
   )
}