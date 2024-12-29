import './Blog.css';

import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';

export default function BlogGrid (){
   
   //Helper for routing to relevant blog page
   const goBlog = (pageNum) => {
      return () => {
         window.location.href = `/BlogPosts/BlogPost?fileNum=${pageNum}`;
      };
   }

   //Still counting
   const [loading, setLoading] = useState(true);

   //helper for calc post nums
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
      <div className="BlogGrid">

         {/*3 Recent Blog Posts*/}
         <div className="main-section-box">
            <div className="flex-item">
               <h1 className="just-text"><p className="main-section-header"><BlogPost renderIntro={true} renderTitle={true} fileNum={fileCount}/></p></h1>
               <button className="main-section-button" onClick={goBlog(fileCount)}>Click here to read more!</button>
            </div>
            <div className="flex-item">
               <h1 className="just-text"><p className="main-section-header"><BlogPost renderIntro={true} renderTitle={true} fileNum={fileCount-1}/></p></h1>
               <button className="main-section-button" onClick={goBlog(fileCount-1)}>Click here to read more!</button>
            </div>
            <div className="flex-item">
               <h1 className="just-text"><p className="main-section-header"><BlogPost renderIntro={true} renderTitle={true} fileNum={fileCount-2}/></p></h1>
               <button className="main-section-button" onClick={goBlog(fileCount-2)}>Click here to read more!</button>
            </div>      
         </div>

         {/*List of blog posts*/}
         <div className="extra-sections">
            <h1>A comprehensive list of my articles includes:</h1>
               <ul>
                  {/*Loop for displaying article titles -> map so unique keys for each div + counter*/}
                  {Array.from({ length: fileCount }, (_, i) => i + 1).map((fileNum) => (
                     <div className="extra-sections-each-post" key={fileNum}>
                        <li className="extra-sections-list-item"><h2 className="article-title"><BlogPost fileNum={fileNum} renderTitle={true} /></h2></li>
                        <button className="extra-sections-button" onClick={goBlog(fileNum)}>Click to read more!</button>
                     </div>
                  ))}
               </ul>
         </div>
      </div>
   )
}