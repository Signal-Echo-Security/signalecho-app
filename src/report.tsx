import { useState } from "react";
import { spanishPoliceDraft as print } from "./report-catalogs";
import type { ReportMessages } from "./report-catalogs";

export function PrivateReport({ messages: t }: { messages: ReportMessages }) {
  const [when, setWhen] = useState("");
  const [facts, setFacts] = useState("");
  const [evidence, setEvidence] = useState("");
  const ready = Boolean(facts.trim());

  return (
    <section className="panel" aria-labelledby="private-report">
      <div className="screen">
        <h2 id="private-report">{t.caseTitle}</h2>
        <p>{t.local}</p>
        <form onSubmit={(event) => { event.preventDefault(); if (ready) window.print(); }} autoComplete="off">
          <label>
            {t.when}
            <input value={when} onChange={(event) => setWhen(event.target.value)} maxLength={160} dir="auto" />
          </label>
          <label>
            {t.facts}
            <textarea required value={facts} onChange={(event) => setFacts(event.target.value)} maxLength={4000} rows={5} dir="auto" />
          </label>
          <label>
            {t.evidence}
            <textarea value={evidence} onChange={(event) => setEvidence(event.target.value)} maxLength={2000} rows={3} dir="auto" />
          </label>
          <button type="submit" disabled={!ready}>{t.print}</button>
        </form>
      </div>
      {ready && (
        <article className="print-draft" lang="es" dir="ltr">
          <h1>{print.title}</h1>
          <p>{print.draft}</p>
          {when.trim() && <><h2>{print.when}</h2><p dir="auto">{when.trim()}</p></>}
          <h2>{print.facts}</h2>
          <p dir="auto">{facts.trim()}</p>
          {evidence.trim() && <><h2>{print.evidence}</h2><p dir="auto">{evidence.trim()}</p></>}
        </article>
      )}
    </section>
  );
}
