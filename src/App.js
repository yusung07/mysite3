import './App.css';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
//import GaLLeryPage from './pages/gallery/GallertPage';
//import BlogPage from './pages/blog/BlogPage';
import AboutMePage from './pages/aboutMe/AboutMePage';
import Home from './components/home/Home';
//import MyStoryPage from './pages/MyStory/MyStoryPage';

function App() {
  return (
    <BrowserRouter basename="/mysite3">
      <div className="App">
        <header className="app-header">
          <Header />  
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/about-me" element={<AboutMePage />} />
         {/*<Route path="/gallery" eLement={<GaLLeryPage />} />
            <Route path="/blog" eLement={<BlogPage />} />
            <Route path="/my-story" eLement={<MyStoryPage />} />  */}
          </Routes>
          <footer className="app-footer">
             <Footer /> 
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
