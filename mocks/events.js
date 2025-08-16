// src/mocks/events.js
const ACCOUNTS = ['marketing@vaubia.com','ops@vaubia.com','finance@vaubia.com','admin@vaubia.com'];
const TYPES = ['Connexion', 'Phishing', 'Anomalie', 'Fuite'];
const SOURCES = ['France','Irlande','USA','Allemagne','Maroc'];

function rand(seed) { // simple LCG
  let s = seed % 2147483647; if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

export function generateEvents(seed=1) {
  const r = rand(seed);
  const attempts = Math.floor(r()*500+400);
  const blocked = Math.floor(attempts*(0.62 + r()*0.2));
  const leaks = Math.floor(r()*6);
  const score = Math.floor(78 + r()*20);

  const series = Array.from({length:24}, (_,i)=> Math.floor(40 + 20*Math.sin(i/3) + r()*30));
  const trendScore = series.map(v => Math.max(10, Math.min(100, (v/2))));
  const trendAttempts = series.map(v => Math.floor(v*1.2 + r()*8));
  const trendBlocked = series.map(v => Math.floor(v*0.9));
  const trendLeaks = series.map(()=> Math.floor(r()*5));

  const severities = ['low','med','high'];
  const alerts = Array.from({length:6},()=> ({
    severity: severities[Math.floor(r()*severities.length)],
    title: TYPES[Math.floor(r()*TYPES.length)] + ' suspect',
    account: ACCOUNTS[Math.floor(r()*ACCOUNTS.length)],
    time: new Date(Date.now() - Math.floor(r()*86_400_000)).toLocaleString()
  }));

  const activity = Array.from({length:12},()=> ({
    time: new Date(Date.now() - Math.floor(r()*86_400_000)).toLocaleString(),
    account: ACCOUNTS[Math.floor(r()*ACCOUNTS.length)],
    type: TYPES[Math.floor(r()*TYPES.length)],
    source: SOURCES[Math.floor(r()*SOURCES.length)],
    state: r()>0.5 ? 'bloqué' : 'ouvert'
  }));

  return {
    attempts, blocked, leaks, score,
    series,
    trendScore, trendAttempts, trendBlocked, trendLeaks,
    alerts, activity
  };
}
