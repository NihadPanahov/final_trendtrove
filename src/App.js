import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Aboutus from "../src/pages/Aboutus";
import Contactus from "./pages/Contactus";
import Blog from "./pages/Blog";
import BackToTopButton from "./components/BackToTopButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BlogPage from './components/BlogPage';
import NavbarMobile from "./components/navbar/NavbarMobile";
import Navbarr from "./components/Navbarr";


function App() {
  return (
    <div>
      <Router>
        <NavbarMobile />
        <Navbarr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path='/products/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
        <BackToTopButton />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
