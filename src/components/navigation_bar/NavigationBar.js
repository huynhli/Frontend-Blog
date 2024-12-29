import './NavigationBar.css';

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
            </div>

            {/*About Me*/}
            <div className="dropdown">
               <button className="about-me-btn" onClick={goToAboutMe}>About Me!</button>
               <div className="dropdown-content">
                  {/*Nested dropdown for Music*/}
                  <div className='seperate-dropdown'>
                     <button className="websites-button">Favourite Music</button>
                        <div className='websites-content'>
                           <a href="https://open.spotify.com/track/6LSkjULcHSSfzVe7NY5iZJ?si=a7fe842387674d95" target="_blank" rel="noopener noreferrer">Current Song on Repeat</a>
                           <a href="https://open.spotify.com/playlist/5SOtTSG7VzT0OartGxZKWt?si=578a2967a66a4668" target="_blank" rel="noopener noreferrer">Current Playlist on Repeat</a>
                           <a href="https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i?si=3fd31ef4c1fd4041" target="_blank" rel="noopener noreferrer">Current Album on Repeat</a>
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
                     <a href="https://www.instagram.com/liam.__.h/" target="_blank" rel="noopener noreferrer">Instagram</a>
                     <a href="https://www.linkedin.com/in/liam-huynh-91aa1a1a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                     <a href="https://open.spotify.com/user/trachscor" target="_blank" rel="noopener noreferrer">Spotify</a>
                     <a href="https://steamcommunity.com/id/trach_scor/" target="_blank" rel="noopener noreferrer">Steam</a>
                     <a href="https://github.com/huynhli" target="_blank" rel="noopener noreferrer">Github</a>
                     <a href="https://letterboxd.com/liamh121/" target="_blank" rel="noopener noreferrer">Letterboxd</a>
                     <a href="https://www.goodreads.com/user/show/137412243-liam" target="_blank" rel="noopener noreferrer">Goodreads</a>
               </div>
            </div>

            
         </div>
      </nav>
   )
}