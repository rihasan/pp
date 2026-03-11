import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CV from "./pages/CV";

function App() {
  return (
    /* HashRouter doesn't need basename because everything 
       after the '#' is handled internally by React */
    <HashRouter>
      <Navbar />
      <Routes>
        {/* Matches https://rihasan.github.io/pp/#/ */}
        <Route path="/" element={<Home />} />

        {/* Matches https://rihasan.github.io/pp/#/cv */}
        <Route path="/cv" element={<CV />} />

        {/* Catch-all: Redirects any unknown route back to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
