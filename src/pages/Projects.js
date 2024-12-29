import React, { Component } from 'react';

import Home from './Home'
import SongStripper from './SongStripper';
import GuitarThing from './GuitarThing';
import Games from './CreatedGames';
import Mods from './Mods';
import BlogGrid from './BlogGrid';

function Projects (){
   return (
      <div className="ProjectsPage"> 

         <div className="banners-background">
            <div className="banners-content">

               <div className="banner-one-before-hovering">
                  <h1>
                     <a className="banners-header-hyperlink" href="/">Website/Blog</a>
                  </h1> 
                     <div className="banner-one-while-hovering">
                        <img src="" alt="There should be a timeline image here"></img>
                        <p className="banners-body-paragraph">This is the current website you are looking at. It is a backend-less SPA (single page application) that works using React.js for the frontend, Node.js for the backend, and Express.js for frontend routing. This is my first project learning, implementing, and deploying code in HTML, CSS, and JavaScript. React does great in making it easy - I can reuse components across websites to save time, and using JSX makes sorting things a bit easier, especially without a backend. Overall, this website is a personal project of sorts that lets me learn, have fun learning, and also be functional in a personal homepage with projects or links that are fun and useful to me. Thanks for reading this.</p>
                     </div>
               </div>

               <div className="banner-two-before-hovering">
                  <h1>
                     <a className="banners-header-hyperlink" href="/SongStripper">Song Instrument Isolator</a>
                  </h1>
                     <div className="banner-two-while-hovering">
                        <img src="" alt="There should be a timeline image here"></img>
                        <p className="banners-body-paragraph">Music instruments are a hobby of mine - I enjoy reading, writing, and playing music. However, practicing has always been hard, because it was never fun to practice solely to a metronome. I would love to learn and play along to songs, but it would just make me better at my instrument - not a better musician who can play on beat. This project <b>would be</b> a tool that:</p>
                        <ul className="banners-list-description">
                           <li>Takes a song (or even a playlist eventually, with a built-in player)</li>
                           <li>Adds a seperate metronome track that can be volume controlled (and LOUD!!! especially for drummers)</li>
                           <li>Also has the ability to control the volumes of seperate instruments in the mix (there was a cool app that did this called MOISES)</li>
                        </ul>
                     </div>
               </div>

               <div className="banner-three-before-hovering">
                  <h1>
                     <a className="banners-header-hyperlink" href="/GuitarThing">Guitar Project</a>
                  </h1>
                     <div className="banner-three-while-hovering">
                        <img src="" alt="There should be a timeline image here"></img>
                        <p className="banners-body-paragraph">This is a long-term project. Conceptually:</p>
                        <ul className="banners-list-description">
                           <li>Input a song link (Spotify, Youtube, Apple Music) or upload a song file (mp4, wav maybe)</li>
                           <li>Find out the name i.e. Script for each different streaming service, or run it through Shazam API</li>
                           <li>Return links to UltimateGuitar results, accompanied by their ratings (number), type of tab (chords or tabs)</li>
                           <li>Then VERY WIP would be an algorithm that creates a guitar tab to the song using an algorithm. ofc its never 100% accurate, but it'd be cool to code. probably would need have AI recognize chords in standard (machine learning maybe), and singular notes. Might be good to explore folk music too.</li>
                        </ul>
                     </div>
                  </div>
               
               <h1 className="temp-banner">WIP Banner</h1>

               <h1 className="temp-banner">WIP Banner</h1>

            </div>
         </div>
      </div>
   )
}
export default Projects