// src/pages/Pricing.jsx
import React, { useMemo, useRef, useEffect, useState } from 'react';
import '../styles/pricing.css';

const PLANS = [
  {
    id: 'starter',
    title: 'Starter',
    priceMonthly: 29,
    priceYearly: 24,         // prix / mois facturé annuellement
    tagline: 'Pour démarrer sereinement',
    cta: 'Essayer',
    popular: false,
    features: [
      'Scan de surface (5 domaines)',
      'Alertes e-mail',
      'Rapport PDF mensuel',
      'Support communautaire'
    ],
  },
  {
    id: 'growth',
    title: 'Growth',
    priceMonthly: 79,
    priceYearly: 65,
    tagline: 'Le meilleur pour la majorité',
    cta: 'Souscrire',
    popular: true,           // badge “Populaire”
    features: [
      'Scan avancé (20 domaines)',
      'Détection fuites & phishing',
      'Rapports hebdo + API',
      'SLA 99,9% & support prioritaire'
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    priceMonthly: 199,
    priceYearly: 165,
    tagline: 'Sécurité & conformité à l’échelle',
    cta: 'Contacter les ventes',
    popular: false,
    features: [
      'Illimité + SSO/SAML',
      'Playbooks d’automatisation',
      'Journal d’audit & RGPD',
      'Manager dédié'
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);      // true = Annuel (-17%)
  const [ready, setReady] = useState(false);

  // Duplique les items pour l’effet “infini”
  const items = useMemo(() => [...PLANS, ...PLANS, ...PLANS], []);
  const midStartIndex = PLANS.length;               // point de départ au “milieu”

  const railRef = useRef(null);

  // Place le scroll au “milieu” au premier render
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('.price-card');
    if (!card) return;
    el.scrollLeft = card.offsetWidth * midStartIndex + 16 * midStartIndex; // inclure le gap
    setReady(true);
  }, []);

  // Boucle infinie: si on dépasse les bornes, on “recolle” au milieu
  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth;
    const x = el.scrollLeft;
    const view = el.clientWidth;

    if (x < view * 0.25) {
      el.scrollLeft += (max / 3); // recolle à droite
    } else if (x + view > max - view * 0.25) {
      el.scrollLeft -= (max / 3); // recolle à gauche
    }
  };

  return (
    <main className="pricing">
      {/* Bandeau / hero */}
      <section className="pricing-hero container">
        <h1>Des options qui évoluent avec vous</h1>
        <p>Choisissez un plan. Modifiez à tout moment. Annuel = <strong>-17%</strong>.</p>

        {/* Toggle annuel / mensuel */}
        <div className="billing-toggle" role="group" aria-label="Facturation">
          <button
            className={`toggle-btn ${annual ? 'active' : ''}`}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annuel <span className="pill">-17%</span>
          </button>
          <button
            className={`toggle-btn ${!annual ? 'active' : ''}`}
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
          >
            Mensuel
          </button>
        </div>
      </section>

      {/* Carrousel swipe infini */}
      <section className="pricing-rail-wrap">
        <div
          ref={railRef}
          className={`pricing-rail ${ready ? 'ready' : ''}`}
          onScroll={onScroll}
        >
          {items.map((plan, idx) => {
            const price = annual ? plan.priceYearly : plan.priceMonthly;
            const saving = Math.round((plan.priceMonthly - plan.priceYearly) / plan.priceMonthly * 100);

            return (
              <article className={`price-card ${plan.popular ? 'popular' : ''}`} key={`${plan.id}-${idx}`}>
                {/* Top brand / badge */}
                <header className="price-head">
                  <div className="brand-dot" aria-hidden />
                  <div className="brand-dot" aria-hidden />
                  <div className="brand-dot" aria-hidden />
                  {plan.popular && <span className="badge">Populaire</span>}
                </header>

                {/* Montant */}
                <div className="price-figure">
                  <div className="currency">€</div>
                  <div className="amount">
                    {price}
                    <span className="per">/mo</span>
                  </div>
                </div>

                <p className="tagline">{plan.tagline}</p>

                {/* CTA */}
                <a className="cta" href="/login">{plan.cta}</a>

                <hr className="sep" />

                {/* Avantages */}
                <h3 className="section-title">Ce qui est inclus</h3>
                <ul className="features">
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Ruban -17% quand Annuel */}
                {annual && (
                  <div className="ribbon">
                    −{saving || 17}% en annuel
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* tips UX */}
        <p className="swipe-hint">Glisse horizontalement pour parcourir les offres ⟷</p>
      </section>
    </main>
  );
}
