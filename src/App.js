import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import MisVis from './components/MisVis';
import Footer from './components/Footer';
import BotpressChat from "./BotpressChat";
import Brand from './components/Brand';
import AboutUs from './components/AboutUs'
import About from './pages/About';
import Blog from './pages/Blog';
import Products from './pages/Products';
import AskQuestion from './components/AskQuestion';
import Step from './components/Step';
import Blogc from './components/Blogc';



function App() {
  return (
    <div className="App bg-sec">
      <BrowserRouter>
      <Routes>
          <Route
            index
            element={
              <div>
                <Home />
                <Hero />
                <Brand />
                <MisVis />
                <Step />
                <Blogc />
                <AboutUs />

                
                <Footer />
                <AskQuestion />
                <BotpressChat />
                
              </div>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 