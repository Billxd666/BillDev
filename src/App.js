import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import Portafolio from './pages/Portafolio';
import About from './pages/About';
import './App.css';
import Content_Homepage from "./components/Content_homepage";
import Card from "./components/card";

function App() {
  return (
    <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portafolio" element={<Portafolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content" element={<Content_Homepage/>}/>
        <Route path="/card" element={<Card/>}/>

    </Routes>
  );
}

export default App;
