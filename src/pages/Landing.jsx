import { useState, useEffect } from 'react';
import './Landing.css';

import img1 from '../assets/C1.jpg';
import img2 from '../assets/C2.jpg';
import img3 from '../assets/C3.jpg';

import Logo from '../assets/VelocityLogo.png';
import transitionAudio from '../assets/CarAudio.mp3';

function Landing() {
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    `url(${img1})`,
    `url(${img2})`,
    `url(${img3})`
  ];

  const heroTexts = [
    "",
    "We Are Velocity",
    "Your Trusted Repair Service"
  ];

  const intervals = [3000, 6000, 10000];

  useEffect(() => {

    const audio = new Audio(transitionAudio);
    audio.preload = 'auto';

    audio.addEventListener('canplaythrough', () => {
      if (bgIndex === 0) {
        audio.play();
      }
    });

    // Trigger image background change
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, intervals[bgIndex]);

    return () => {
      clearInterval(interval);
      audio.removeEventListener('canplaythrough', () => {});
    };
  }, [bgIndex]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Velocity Logo" />
        </div>

        <div className="nav-bar">
          <ul>
            <li><a>HOME</a></li>
            <li><a>REPAIR SERVICES</a></li>
            <li><a>ABOUT</a></li>
            <li><a>CONTACT US</a></li>
          </ul>
        </div>
      </div>

      <div
        className="img-container"
        style={{ backgroundImage: backgrounds[bgIndex] }}
      >


        <div className="hero-text">
          {heroTexts[bgIndex]} {/* Displays the corresponding hero text */}
        </div>
      </div>
    </>
  );
}

export default Landing;
