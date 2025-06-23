import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VideoEditing from "./pages/VideoEditing";
import MotionGraphics from "./pages/MotionGraphics";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <ThemeButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/motion-graphics" element={<MotionGraphics />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
