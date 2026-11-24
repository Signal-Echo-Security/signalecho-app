import { useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { locales, resolveLocale } from "@signalecho/contracts";
import { catalogs } from "./catalogs";
import { Community } from "./community";
import { navigationCatalogs } from "./navigation-catalogs";
import { PrivateReport } from "./report";
import { prototypeCatalogs, spanishExample } from "./prototype-catalogs";
import { reportCatalogs } from "./report-catalogs";
import heroPhoto from "./assets/helping-together.jpg";
import logo from "./assets/signal-echo.png";
import "./style.css";

function App() {
  const [locale, setLocale] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return resolveLocale(requested ? [requested, ...navigator.languages] : navigator.languages);
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const info = locales.find(({ code }) => code === locale);
  const { language, headline, bank, delivery, guidance } = catalogs[locale];
  const report = reportCatalogs[locale];
  const prototype = prototypeCatalogs[locale];
  const copy = navigationCatalogs[locale];
  const links = [
    ["message-check", prototype.check],
    ["private-report", report.caseTitle],
    ["community-alerts", report.alerts],
    ["community-submit", report.community],
    ["reporting-channels", report.channels],
  ] as const;

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = info?.dir ?? "ltr";
  }, [info, locale]);

  function changeLocale(value: string): void {
    const next = resolveLocale([value]);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(null, "", url);
    setLocale(next);
  }

  return (
    <>
      <header className="site-header screen" onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButton.current?.focus();
        }
      }}>
        <div className="site-shell header-inner">
          <a className="brand" href="#top" lang="en">
            <img src={logo} alt="" width="42" height="42" />
            <bdi>Signal Echo</bdi>
          </a>
          <div className="header-actions flex items-center gap-2 sm:gap-3">
            <label className="locale-control">
              <span className="sr-only">{language}</span>
              <select value={locale} onChange={(event) => changeLocale(event.target.value)}>
                {locales.map(({ code, dir, label }) => (
                  <option key={code} value={code} lang={code} dir={dir}>{label}</option>
                ))}
              </select>
            </label>
            <button className="menu-toggle" type="button" ref={menuButton} aria-expanded={menuOpen}
              aria-controls="workflow-menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
              <span>{copy.menu}</span>
            </button>
          </div>
          <nav className="menu-panel" id="workflow-menu" aria-label={copy.menu} hidden={!menuOpen}>
            {links.map(([id, label]) => (
              <a key={id} href={"#" + id} onClick={() => {
                setMenuOpen(false);
                requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
              }}>
                {label}<span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-shell" id="top">
        <section className="hero screen" aria-labelledby="headline">
          <div className="hero-copy">
            <p className="prototype-note">{prototype.prototype}</p>
            <h1 id="headline">{headline}</h1>
            <p className="hero-intro">{copy.intro}</p>
            <div className="hero-actions flex flex-wrap gap-3">
              <a className="action-primary" href="#message-check">{prototype.check}</a>
              <a className="action-secondary" href="#private-report">{report.caseTitle}</a>
            </div>
          </div>
          <div className="hero-media">
            <img src={heroPhoto} alt="" fetchPriority="high" />
          </div>
        </section>

        <div className="utility-links screen grid gap-3 md:grid-cols-2">
          <a href="#community-alerts">{report.alerts}<span aria-hidden="true">↗</span></a>
          <a href="#reporting-channels">{report.channels}<span aria-hidden="true">↗</span></a>
        </div>

        <div className="flow-grid">
          <section className="panel screen" aria-labelledby="message-check">
            <h2 id="message-check" tabIndex={-1}>{prototype.check}</h2>
            <p className="panel-lead">{prototype.example}</p>
            <blockquote lang="es" dir="ltr">{spanishExample}</blockquote>
            <details className="disclosure">
              <summary>{prototype.reveal}</summary>
              <p>{prototype.advice}</p>
            </details>
          </section>
          <section className="panel screen" aria-labelledby="reporting-channels">
            <h2 id="reporting-channels" tabIndex={-1}>{report.channels}</h2>
            <ul className="channel-list">
              <li><a href="https://denuncias.policia.es/" target="_blank" rel="noreferrer">Policía Nacional<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://web.guardiacivil.es/es/tramites/denuncias/index.html" target="_blank" rel="noreferrer">Guardia Civil<span aria-hidden="true">↗</span></a></li>
              <li><a href="https://www.incibe.es/ciudadania" target="_blank" rel="noreferrer" title={guidance}>INCIBE<span aria-hidden="true">↗</span></a></li>
            </ul>
          </section>
        </div>
        <PrivateReport messages={report} />
        <Community messages={report} prototype={prototype} names={{ bank, delivery, other: report.other }} locale={locale} />
      </main>
    </>
  );
}

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
