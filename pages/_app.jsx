import '../styles/globals.css';
import { useEffect } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

let vantaEffect = null;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!vantaEffect) {
      vantaEffect = NET({
        el: '#vanta-bg',
        THREE,
        mouseControls: true,
        touchControls: true,
        backgroundColor: 0x000000,
        color: 0x8b5cf6,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 15.0,
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      id="vanta-bg"
      className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] animate-[gradientAnimation_12s_ease_infinite]"
    >
      <Component {...pageProps} />
    </div>
  );
}
