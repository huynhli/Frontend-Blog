import './Home.css';
import BlogPost from '../blog/BlogPost';

export default function Home(){

   //Helper for button click routing
   const goToBlogGrid = () => {
      window.location.href = '/bloggrid'
   }


   return (
      <div className="HomePage">
         <div className="main-items">
            <div className="bio">
               <div className="square-pic-in-center">
                  <img className="center-portrait" src={require('../../assets/IMG_2547.jpg')} />   
               </div>
               <h1 className="text">Hi! My name is Liam. I am learning to be a:</h1>
               <ul className="text-like-heading-list">
                  <li>game designer</li>
                  <li>game developer</li>
                  <li>game tester</li>
               </ul>
               <p className="text-like-heading">This website is a small frontend-only website I made to familiarize myself with front end development, as well display some articles I have written about game development (see the blog section in the dropdown, or to the right). Thanks for stopping by! </p>
            </div>

            <div className="line-divider">
               {/* <h1>hi</h1> */}
            </div>

            <div className="blog-stuff">
               <div className="articles">
                  <div className="blog-block">
                  {/* TODO fix links here to be dynamic (?) */}
                     <p><a href="/blogposts/blogpost?fileNum=1" className="article-heading">
                     <BlogPost renderIntro={true} fileNum={1}/>
                     </a></p>
                  </div>
                  <div className="blog-block">
                     <p><a href="/blogposts/blogpost?fileNum=2" className="article-heading">
                     <BlogPost renderIntro={true} fileNum={2}/>
                     </a></p>
                  </div>
                  <div className="blog-block">
                     <p><a href="/blogposts/blogpost?fileNum=3" className="article-heading">
                     <BlogPost renderIntro={true} fileNum={3}/>
                     </a></p>
                  </div>
               </div>
               <div className="view-all-button">
                  <button className="button-size" onClick={goToBlogGrid}>View all blog posts here!</button>
               </div>
            </div>
         </div>
      </div>
   
   )
}