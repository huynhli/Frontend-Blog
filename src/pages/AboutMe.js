export default function AboutMe (){
   return (
      <div className='AboutMe'>

         {/* Center column */}
         <div className='center-big-box'>

            {/* Photo box */}
            <div className='top-box'>
               <img className='each-image' src={require('../assets/me.jpg')} />
               <img className='each-image' src={require('../assets/me3.jpg')} />
            </div>
            
            {/* About Me Description + Hobbies List */}
            <div className='bottom-box'>
               <p className='header-no-bold'>Hi! My name is Liam. I have a fascination with game design and creation. A few of my other hobbies include: </p>
               <ul className='list-style'>
                  <li>Playing video games</li>
                  <li>App development</li>
                  <li>Game design</li>
                  <li>Playing guitar and drums <a class='better-link' href='https://www.instagram.com/inframings/'>(See my band here!)</a></li>
               </ul>
            </div>
            
         </div>

      </div>
   )
} 
