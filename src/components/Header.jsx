import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  // --- LOGIKA (Hooks) HARUS DI SINI ---
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // ------------------------------------

  return (
    // Gunakan template literal (` `) untuk menggabungkan class CSS dengan state
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-container">
        <NavHashLink smooth to="/#home" className="nav-logo">
          <i className="bi bi-person-circle"></i>Agus Indra
          <h1 className="text-4xl text-blue-500 font-bold">
            Tailwind Berhasil
          </h1>
        </NavHashLink>

        {/* Tambahkan class 'active' jika state isActive bernilai true */}
        <ul className={`nav-menu ${isActive ? "active" : ""}`} id="nav-menu">
          <li className="nav-item">
            <NavHashLink
              smooth
              to="/#home"
              className="nav-link"
              onClick={() => setIsActive(false)}
            >
              Home
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              smooth
              to="/#about"
              className="nav-link"
              onClick={() => setIsActive(false)}
            >
              About
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              smooth
              to="/#skills"
              className="nav-link"
              onClick={() => setIsActive(false)}
            >
              Skills
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              smooth
              to="/#contacts"
              className="nav-link"
              onClick={() => setIsActive(false)}
            >
              Contact
            </NavHashLink>
          </li>
        </ul>

        {/* Tambahkan event onClick untuk mengubah state isActive */}
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          id="hamburger"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
