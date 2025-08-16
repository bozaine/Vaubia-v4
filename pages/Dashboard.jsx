// src/pages/Dashboard.jsx
import React, { useMemo, useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import KpiCard from '../components/KpiCard.jsx';
import TrendLine from '../components/TrendLine.jsx';
import { generateEvents } from '../mocks/events.js';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [seed, setSeed] = useState(1);
  const data = useMemo(() => generateEvents(seed), [seed]);

  const totals = useMemo(() => ({
    score: data.score,
    blocked: data.blocked,
    attempts: data.attempts,
    leaks: data.leaks
  }), [data]);

  const refresh = () => setSeed(s => s + 1);

  return (
    <div className="dash-root">
      <Sidebar />
      <main className="dash-main">
        <header className="dash-header">
          <div>
            <h1>Tableau de bord</h1>
            <p className="muted">Vue générale des comptes, détection & conformité.</p>
          </div>
          <div className="dash-actions">
            <select aria-label="Plage de dates" defaultValue="7d">
              <option value="24h">24 h</option>
              <option value="7d">7 jours</option>
              <option value="30d">30 jours</option>
              <option value="90d">90 jours</option>
            </select>
            <button className="btn ghost" onClick={refresh}>Rafraîchir</button>
          </div>
        </header>

        {/* KPIs */}
        <section className="grid kpis">
          <KpiCard title="Score de sécurité" value={`${totals.score}`} unit="/100" trend={data.trendScore} good />
          <KpiCard title="Tentatives bloquées" value={totals.blocked} trend={data.trendBlocked} />
          <KpiCard title="Tentatives détectées" value={totals.attempts} trend={data.trendAttempts} />
          <KpiCard title="Fuites potentielles" value={totals.leaks} trend={data.trendLeaks} warn />
        </section>

        {/* Graphique principal + carte / liste */}
        <section className="grid two-cols">
          <div className="card chart">
            <div className="card-head">
              <h3>Tendances (7 jours)</h3>
              <span className="badge">temps réel (mock)</span>
            </div>
            <TrendLine series={data.series} height={160} />
            <div className="legend">
              <span className="dot d1"></span> Bloquées
              <span className="dot d2"></span> Détectées
              <span className="dot d3"></span> Score
            </div>
          </div>

          <div className="card alerts">
            <div className="card-head">
              <h3>Alertes récentes</h3>
              <button className="btn tiny ghost" onClick={refresh}>Simuler</button>
            </div>
            <ul className="list">
              {data.alerts.map((a, i) => (
                <li key={i} className={`alert ${a.severity}`}>
                  <span className="pill">{a.severity.toUpperCase()}</span>
                  <div className="a-main">
                    <strong>{a.title}</strong>
                    <p className="muted">{a.time} • {a.account}</p>
                  </div>
                  <button className="btn tiny">Voir</button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Table Activité */}
        <section className="card">
          <div className="card-head">
            <h3>Activité</h3>
            <span className="muted">{data.activity.length} événements</span>
          </div>
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Heure</th>
                  <th>Compte</th>
                  <th>Type</th>
                  <th>Origine</th>
                  <th>État</th>
                </tr>
              </thead>
              <tbody>
                {data.activity.map((row, i) => (
                  <tr key={i}>
                    <td>{row.time}</td>
                    <td>{row.account}</td>
                    <td>{row.type}</td>
                    <td>{row.source}</td>
                    <td><span className={`badge ${row.state}`}>{row.state}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
