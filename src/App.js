import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import DropDownNaviBar from './components/navigation_bar/NavigationBar';

import Home from './pages/home/Home'
import BlogGrid from './pages/blog/BlogGrid';
import BlogPost from './pages/blog/BlogPost';
import Projects from './pages/projects/Projects';
import AboutMe from './pages/about_me/AboutMe';
import CoolPage from './pages/cool_page/coolpage';

// class App extends Component {
//   render() {
export default function App() {
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

              {/*About Me routes*/}
              <Route path="aboutme" element={<AboutMe />} />

              {/*Socials dropdown routes*/}

              {/*Cool page*/}
              <Route path="coolpage" element={<CoolPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}