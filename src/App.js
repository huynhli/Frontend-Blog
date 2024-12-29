import React, { Component } from 'react';
import './App.css';

{/*TODO fix import order*/}
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects';
import SongStripper from './pages/SongStripper';
import GuitarThing from './pages/GuitarThing';
import Games from './pages/CreatedGames';
import Mods from './pages/Mods';
import BlogGrid from './pages/BlogGrid';
import BlogPost from './pages/BlogPost';
import Socials from './pages/Socials'

import Header from './components/Header'
import Footer from './components/Footer';
import DropDownNaviBar from './components/NavigationBar';
import CoolPage from './pages/coolpage';
import DigitalCameraDiary from './pages/DigitalCameraDiary';
import AboutMe from './pages/AboutMe';

// import logo from './assets/images/favicon.ico' --> instead of importing we can require it
// cannot access files in public, but CAN access files if using app.css



// class App extends Component {
//   render() {
function App() {
  // helper for formatting all pages with components
  const Layout = () => {
    return (
      <div>
        <Header/>
        <DropDownNaviBar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }
  
  return (  // every time there's a return, it needs a fragment set  (emcompassed by div or just <>)
  // including a component <function_name />
  // including a variable {var}
  
    <div>
      {/*Setting routes for all pages*/}
      <BrowserRouter>
        <Routes>
        {/*Nests every page in Layout helper aka header, navigation, page, then footer*/}
          <Route path="/" element={<Layout />}>

              {/*Home route*/}
              <Route path="/" element={<Home />} />

              {/*Blog routes*/}
              <Route path="bloggrid" element={<BlogGrid />} />

              {/*Blog posts*/}
              <Route path="blogposts/blogpost" element={<BlogPost />} />

              {/*Projects routes*/}
              <Route path="projects" element={<Projects />} />
              <Route path="songstripper" element={<SongStripper />} />
              <Route path="guitarthing" element={<GuitarThing />} />
              <Route path="games" element={<Games />} />
              <Route path="mods" element={<Mods />} />

              {/*About Me routes*/}
              <Route path="aboutme" element={<AboutMe />} />
              <Route path="digitalcameradiary" element={<DigitalCameraDiary />} />

              {/*Socials dropdown routes*/}
              <Route path="socials" element={<Socials />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
