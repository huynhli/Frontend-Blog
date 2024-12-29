import './Blog.css';

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function BlogPost1 ({ fileNum, renderIntro, renderTitle }){

   //takes query params
   const location = useLocation();

   //params is a dict of key value pairs
   const params = new URLSearchParams(location.search);

   //set each value based on dict or if props were passed
   const effectiveFileNum = params.get("fileNum") || fileNum;
   const effectiveRenderIntro = params.get("renderIntro") !== null ? params.get("renderIntro") === "true" : renderIntro;
   const effectiveRenderTitle = params.get("renderTitle") !== null ? params.get("renderTitle") === "true" : renderTitle;

   const [lines, setLines] = useState([]);
   
   //parses .txt to array of lines
   useEffect(() => {
      fetch(`/assets/BlogPost${effectiveFileNum}.txt`) 
         // Read the file as plain text
         .then((response) => {
            if (!response.ok) {
               throw new Error('Response is not ok');
            }
            return response.text();
         }) 
         //split and store content into lines
         .then((data) => {
            const linesArray = data.split('\n');
            setLines(linesArray);
         })
      //error handling
      .catch((error) => console.error('Error fetching the text file:', error));
   }, []);

   //only title + intro is needed
   if (effectiveRenderIntro) {
      return (
         <div className="blog-page">
            <h4>{lines[0]}</h4>
            <p className="intro-pass"><i>{lines[2]}</i></p>
         </div>
      )
   }

   //only title is needed
   else if (effectiveRenderTitle) {
      return (
         <div className="blog-page">
            <h4>{lines[0]}</h4>
         </div>
      )
   }

   //whole page rendered
   return (
      <div className="blog-page">
         <h1>{lines[0]}</h1>
         <p>{lines[2]}</p>
         <p>{lines[4]}</p>
      </div>
   )
}