// src/components/TrendLine.jsx
import React from 'react';

function pathFromSeries(series, w, h, maxY) {
  const dx = w / Math.max(series.length - 1, 1);
  const pts = series.map((y, i) => [i * dx, h - (y / maxY) * h]);
  return pts.reduce((p, [x,y], i) => p + (i ? ` L ${x},${y}` : `M ${x},${y}`), '');
}

export default function TrendLine({ series, height=120, mini=false }) {
  const w = 480;
  const h = height;
  const maxY = Math.max(10, ...series);
  const d = pathFromSeries(series, w, h, maxY);
  return (
    <svg className={`trend ${mini ? 'mini': ''}`} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="tendance">
      <path d={d} />
    </svg>
  );
}
