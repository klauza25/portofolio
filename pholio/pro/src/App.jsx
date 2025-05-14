import { useState, useEffect } from "react";
import Typed from "typed.js";
import klausImg from "./assets/img/klaus.jpg";
import "./App.css";
import Project from "./components/Project";
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const typed = new Typed("#element", {
      strings: ["Développeur Frontend.", "Créatif.", "Passionné."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ease-in-out ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar */}
      <div className="navbar flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold italic">Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              À propos
            </a>
          </li>
          <li>
            <a href="#comp" className="hover:text-blue-500 transition">
              Compétences
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Projets
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer transition-all duration-300 shadow-md"
          aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
        >
          {darkMode ? (
            <svg className="h-8 w-8 text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          ) : (
            <svg className="h-8 w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          )}
        </button>
        <div className="dropdown dropdown-end md:hidden">
          <button
            className="btn border-none bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-blue-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                className="transition-all duration-300"
              />
            </svg>
          </button>
          {menuOpen && (
            <ul className={`dropdown-content menu shadow-lg rounded-md w-52 p-2 absolute right-0 mt-2 transition-all duration-300 ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-black border border-gray-200"}`}>
              <li><a href="#" className="hover:text-blue-400 py-2" onClick={() => setMenuOpen(false)}>À propos</a></li>
              <li><a href="#comp" className="hover:text-blue-400 py-2" onClick={() => setMenuOpen(false)}>Compétences</a></li>
              <li><a href="#projects" className="hover:text-blue-400 py-2" onClick={() => setMenuOpen(false)}>Projets</a></li>
              <li><a href="#" className="hover:text-blue-400 py-2" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </div>
      {/* Section de présentation */}
      <div className="h-screen flex flex-row items-center justify-center gap-10 p-10 pt-24">
        <div className="text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bonjour, je suis <span className="text-blue-600 dark:text-blue-400 transition-colors duration-300">Samba Klaus Gloire Japhet</span>
          </h1>
          <div className="h-12 mb-4">
            <span id="element" className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 transition-colors duration-300"></span>
          </div>
          <p className="text-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Étudiant en Licence 3 Génie Informatique et développeur web passionné.
            Je développe actuellement ImmoPlus, une plateforme de recherche immobilière avec Django.
            Passionné par la technologie, l'enseignement et le développement web.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
              Me Contacter
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300">
              Voir mes Projets
            </a>
          </div>
        </div>
      
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 dark:opacity-20 transition-opacity duration-300"></div>
          <img
            src={klausImg}
            alt="Portrait de Samba Klaus Gloire Japhet"
            className="relative rounded-full h-[300px] w-[300px] border-4 border-blue-700 dark:border-blue-500 object-cover transition-colors duration-300"
          />
        </div>
      </div>
      {/* <Section /> */}
      <Experience />
      <Projec