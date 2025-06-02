"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import   "./Nav.css"; // Optional: Move your CSS into a module for cleaner integration
import './nava.js'
export default function SplitScreenMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <>
<div className="fixed-menu">
  <div className="top-section">
    <button className="menu-button">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  </div>
  <div className="middle-section">
    <h2 className="menu-title">Forest &amp; Fungi</h2>
  </div>
  <div className="bottom-section">
    <p>2025</p>
  </div>
</div>

<div className="menu-overlay">
  <nav className="overlay-content">
    <ul>
      <li><a href="#">OVERVIEW</a></li>
      <li><a href="#">RECLAIMED</a></li>
      <li><a href="#">EXPANSIONS</a></li>
      <li><a href="#">TIMELINE</a></li>
    </ul>
  </nav>
</div>

<div className="container">
  <div className="image-side"></div>
  <div className="text-side">
    <span>About</span>
    <h1>Winter Forest Silence</h1>
    <p>
      There is a profound silence in winter forests, where snow-laden branches hang in
      static contemplation. The forest seems suspended in time, with each frost-covered
      pine needle holding its breath against the cold. This tranquil state reveals natures
      patience—a deep hibernation where life continues beneath the surface.
    </p>
    <p>
      In these quiet moments, we find a different kind of vitality. The frozen landscape
      preserves rather than decays, creating a sanctuary of stillness where sound itself
      crystallizes in the cold air. As fog weaves between the trees, boundaries dissolve
      between the visible and invisible, reminding us that even in apparent dormancy,
      the forest holds wisdom in its silent moments of rest.
    </p>
  </div>
</div>
    </>
  );
}
