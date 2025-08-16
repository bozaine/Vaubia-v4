// src/components/KpiCard.jsx
import React from 'react';
import TrendLine from './TrendLine.jsx';

export default function KpiCard({ title, value, unit='', trend, good=false, warn=false }) {
  return (
    <div className={`card kpi ${good ? 'good' : ''} ${warn ? 'warn' : ''}`}>
      <div className="kpi-top">
        <p className="muted">{title}</p>
        <h2 className="kpi-value">{value}<span className="unit">{unit}</span></h2>
      </div>
      <TrendLine series={trend} height={56} mini />
    </div>
  );
}
