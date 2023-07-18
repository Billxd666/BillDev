import {Outlet, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Portafolio from './pages/Portafolio';
import About from './pages/About';
import './App.css';
import Content_Homepage from "./components/Content_homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Homepage />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portafolio" element={<Portafolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content_Homepage/>}/>
      </Route>
    </Routes>
  );
}

function Layout () {
  return (
    <div>
      <Navbar/>

      <Outlet/>

      <Footer/>
    </div>
  ) 
}

export default App;
