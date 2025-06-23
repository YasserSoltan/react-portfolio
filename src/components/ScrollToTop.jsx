import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ThemeButton from "./ThemeButton";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={handleClick}
          className="fixed bottom-10 right-30 w-14 h-14 flex items-center justify-center text-2xl font-bold rounded-full border-none bg-gray-800 text-white cursor-pointer z-50 shadow-lg hover:bg-gray-900 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
