export default function DropDownNaviBar(){
   
   {/*Helpers for button click routing*/}
   const goToAboutMe = () => {
      window.location.href = '/AboutMe'
   } 
   const goToProjects = () => {
      window.location.href = '/Projects'
   }
   const goToBlog = () => {
      window.location.href = '/BlogGrid'
   }

   const goToSocials = () => {
      window.location.href= '/Socials'
   }

   return(
      <nav className='DropDownNaviBar'>

         {/*Entire navigation bar*/}
         <div className="entire-dropdown">
            
            {/*Blog dropdown*/}
            <div className="dropdown">
               <button className="my-btn" onClick={goToBlog}>Blog</button>
            </div>

            {/*Projects dropdown*/}
            <div className="dropdown">
               <button className="my-btn" onClick={goToProjects}>Projects</button>
                  <div className="dropdown-content">
                     <a href="/">Website/Blog!</a>
                     <a href="/SongStripper">Song instrument thing</a>
                     <a href="/GuitarThing">Guitar program</a>
                     <a href="/Games">Games</a>
                     <a href="/Mods">Mods</a>
                  </div>
            </div>

            {/*About Me*/}
            <div className="dropdown">
               <button className="about-me-btn" onClick={goToAboutMe}>About Me!</button>
               <div className="dropdown-content">
                  {/*Nested dropdown for Music*/}
                  <div className='seperate-dropdown'>
                     <button className="websites-button">Favourite Music</button>
                        <div className='websites-content'>
                           <a href="https://open.spotify.com/track/6LSkjULcHSSfzVe7NY5iZJ?si=a7fe842387674d95">Current favourite song</a>
                           <a href="https://open.spotify.com/track/6LSkjULcHSSfzVe7NY5iZJ?si=a7fe842387674d95">Current Playlist on Repeat</a>
                        </div>
                  </div>
               </div>
            </div>
            
            {/*Empty Space*/}
            <div className="dropdown">
               <button className="empty-space"></button>
            </div>

            {/*Socials*/}  
            <div className="dropdown">
               <button className="my-btn">Socials</button>
               <div className="dropdown-content">
                     <a href="https://www.instagram.com/liam.__.h/">Instagram</a>
                     <a href="https://www.linkedin.com/in/liam-huynh-91aa1a1a1/">LinkedIn</a>
                     <a href="https://open.spotify.com/user/trachscor">Spotify</a>
                     <a href="https://letterboxd.com/liamh121/">Letterboxd</a>
                     <a href="https://www.goodreads.com/user/show/137412243-liam">Goodreads</a>

                     
                     <a href="/digitalcameradiary">Digital Camera Diary</a>
               </div>
            </div>

            
         </div>
      </nav>
   )
}
