import { useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { locales, resolveLocale } from "@signalecho/contracts";
import { catalogs } from "./catalogs";
import { Community } from "./community";
import { PrivateReport } from "./report";
import { prototypeCatalogs, spanishExample } from "./prototype-catalogs";
import { reportCatalogs } from "./report-catalogs";
import logo from "./assets/signal-echo.png";
import "./style.css";

function App() {
  const [locale, setLocale] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return resolveLocale(requested ? [requested, ...navigator.languages] : navigator.languages);
  });
  const info = locales.find(({ code }) => code === locale);
  const { language, headline, bank, delivery, guidance } = catalogs[locale];
  const report = reportCatalogs[locale];
  const prototype = prototypeCatalogs[locale];

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = info?.dir ?? "ltr";
  }, [info, locale]);

  return (
    <main>
      <header className="screen">
        <span className="brand" lang="en">
          <img src={logo} alt="" width="36" height="36" />
          <bdi>Signal Echo</bdi>
        </span>
        <label>
          {language}
          <select value={locale} onChange={(event) => setLocale(resolveLocale([event.target.value]))}>
            {locales.map(({ code, dir, label }) => (
              <option key={code} value={code} lang={code} dir={dir}>{label}</option>
            ))}
          </select>
        </label>
      </header>
      <nav className="workflow-nav screen">
        <a href="#message-check">{prototype.check}</a>
        <a href="#private-report">{report.caseTitle}</a>
        <a href="#community-alerts">{report.alerts}</a>
        <a href="#community-submit">{report.community}</a>
        <a href="#reporting-channels">{report.channels}</a>
      </nav>
      <section className="hero screen" aria-labelledby="headline">
        <p className="prototype-note">{prototype.prototype}</p>
        <h1 id="headline">{headline}</h1>
        <ul>
          <li>{bank}</li>
          <li>{delivery}</li>
        </ul>
        <a className="guide" href="https://www.incibe.es/ciudadania" target="_blank" rel="noreferrer">{guidance}</a>
      </section>
      <section className="panel screen" aria-labelledby="message-check">
        <h2 id="message-check">{prototype.check}</h2>
        <p>{prototype.example}</p>
        <blockquote lang="es" dir="ltr">{spanishExample}</blockquote>
        <details>
          <summary>{prototype.reveal}</summary>
          <p>{prototype.advice}</p>
        </details>
      </section>
      <PrivateReport messages={report} />
      <section className="panel screen" aria-labelledby="reporting-channels">
        <h2 id="reporting-channels">{report.channels}</h2>
        <ul className="channel-list">
          <li><a href="https://denuncias.policia.es/" target="_blank" rel="noreferrer">Policía Nacional</a></li>
          <li><a href="https://web.guardiacivil.es/es/tramites/denuncias/index.html" target="_blank" rel="noreferrer">Guardia Civil</a></li>
          <li><a href="https://www.incibe.es/ciudadania" target="_blank" rel="noreferrer">INCIBE</a></li>
        </ul>
      </section>
      <Community messages={report} prototype={prototype} names={{ bank, delivery, other: report.other }} locale={locale} />
    </main>
  );
}

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
