import React, { useRef, useState, useEffect } from 'react';
import '../styles/pricing.css';

const plans = [
  { id: 'annual-save', title: 'Annuel -17%', price: '1490 € / an', sub: 'Soit 298€ d’économies !' },
  { id: 'annual', title: 'Annuel', price: '1790 € / an', sub: 'Engagement 12 mois' },
  { id: 'monthly', title: 'Mensuel', price: '169 € / mois', sub: 'Sans engagement' },
];

export default function PriceCarousel() {
  const track = useRef(null);
  const [index, setIndex] = useState(0);
  const len = plans.length;

  // dupliquer visuel pour effet infini
  const looped = [...plans, ...plans, ...plans];

  const go = (i) => setIndex((prev) => prev + i);

  useEffect(() => {
    // recenter quand trop loin
    if (index > len*2) setIndex(len + (index % len));
    if (index < len) setIndex(len + (index % len + len) % len);
  }, [index, len]);

  // swipe
  useEffect(() => {
    const el = track.current;
    let startX = 0; let dx = 0; let dragging = false;

    const onDown = (e) => { dragging = true; startX = (e.touches?e.touches[0].clientX:e.clientX); };
    const onMove = (e) => {
      if (!dragging) return;
      const x = (e.touches?e.touches[0].clientX:e.clientX);
      dx = x - startX;
    };
    const onUp = () => {
      if (!dragging) return;
      if (dx < -40) go(1);
      else if (dx > 40) go(-1);
      dx = 0; dragging = false;
    };

    el.addEventListener('mousedown', onDown);
    el.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    el.addEventListener('touchstart', onDown, {passive:true});
    el.addEventListener('touchmove', onMove, {passive:true});
    el.addEventListener('touchend', onUp);

    return () => {
      el.removeEventListener('mousedown', onDown);
      el.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      el.removeEventListener('touchstart', onDown);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onUp);
    };
  }, []);

  return (
    <div className="carousel">
      <div
        className="track"
        ref={track}
        style={{ transform:`translateX(calc(50% - ${(index+0.5)*340}px))` }}
        aria-live="polite"
      >
        {looped.map((p, i) => (
          <article className="card" key={`${p.id}-${i}`} aria-label={p.title}>
            <h4 className="logo">vaubia</h4>
            <div className="price">{p.price}</div>
            <div className="sub">{p.sub}</div>
            <button className="btn btn-primary">Souscrire</button>
            <ul className="bullets">
              <li>Multidiffusion & optimisation fiche</li>
              <li>Centralisation avis & messages</li>
              <li>Assistance 24/7</li>
            </ul>
          </article>
        ))}
      </div>

      <div className="controls">
        <button className="btn" onClick={()=>go(-1)} aria-label="Précédent">‹</button>
        <button className="btn" onClick={()=>go(1)} aria-label="Suivant">›</button>
      </div>
    </div>
  );
}
