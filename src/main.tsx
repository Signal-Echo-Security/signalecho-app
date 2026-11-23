import { useLayoutEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { locales, resolveLocale } from "@signalecho/contracts";
import { catalogs } from "./catalogs";
import logo from "./assets/signal-echo.png";
import "./style.css";

function App() {
  const [locale, setLocale] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return resolveLocale(requested ? [requested, ...navigator.languages] : navigator.languages);
  });
  const info = locales.find(({ code }) => code === locale);
  const { language, headline, bank, delivery, guidance } = catalogs[locale];

  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = info?.dir ?? "ltr";
  }, [info, locale]);

  return (
    <main>
      <header>
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
      <section className="hero" aria-labelledby="headline">
        <h1 id="headline">{headline}</h1>
        <ul>
          <li>{bank}</li>
          <li>{delivery}</li>
        </ul>
        <a className="guide" href="https://www.incibe.es/ciudadania" target="_blank" rel="noreferrer">{guidance}</a>
      </section>
    </main>
  );
}

const root = document.getElementById("root");
if (root) createRoot(root).render(<App />);
