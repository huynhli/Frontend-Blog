import './Home.css';

import React, { useState, useEffect } from 'react';
import BlogPost from '../blog/BlogPost';
import { Link } from 'react-router-dom';

export default function Home(){

   //Helper for button click routing
   const goToBlogGrid = () => {
      window.location.href = '/bloggrid'
   }

   //Still counting
   const [loading, setLoading] = useState(true);

   //helper for calc post nums -> can't reuse for static site!
   const [fileCount, setFileCount] = useState(0);
   useEffect(() => {
      const checkFiles = async () => {
         let count = 0;
         while (true) {
            try {
               const response = await fetch(`/assets/BlogPost${count + 1}.txt`);

               //not necessary for this website type but error handling -> server issues, etc. 
               if (!response.ok) {
                  break;
               }
               
               //response.status is always 200, even for files that don't exist
               //therefore checks for line that only empty files have
               if ((await response.text()).includes("<!doctype html>")) {
                  break;
               }
               
               count++;
            } catch (error) {
               //in case fetch throws an error
               console.error('Error fetching file:', error);
               break;
            }
         }
         setFileCount(count);
         setLoading(false);
      };
      checkFiles();
   }, []);
   

   //loading page
   if(loading){
      return <div className='Loading'>Loading...</div>;
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

            </div>

            <div className="blog-stuff">
               <div className="articles">
                  <div className="blog-block">
                  {/* TODO fix links here to be dynamic (?) */}
                     <p><Link to={`/blogposts/blogpost?fileNum=${fileCount}`} className="article-heading">
                     <BlogPost renderIntro={true} fileNum={fileCount}/>
                     </Link></p>
                  </div>
                  <div className="blog-block">
                     <p><Link to={`/blogposts/blogpost?fileNum=${fileCount-1}`} className="article-heading">
                     <BlogPost renderIntro={true} fileNum={fileCount-1}/>
                     </Link></p>
                  </div>
                  <div className="blog-block">
                     <p><Link to={`/blogposts/blogpost?fileNum=${fileCount-2}`} className="article-heading">
                     <BlogPost renderIntro={true} fileNum={fileCount-2}/>
                     </Link></p>
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