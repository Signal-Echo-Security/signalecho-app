import { useState } from "react";
import { parseCommunitySubmission, scamKinds } from "@signalecho/contracts";
import type { Locale, ScamKind } from "@signalecho/contracts";
import type { PrototypeMessages } from "./prototype-catalogs";
import type { ReportMessages } from "./report-catalogs";

const sampleId = "example-delivery-alert";

function sampleLink(locale: Locale): string {
  const url = new URL(window.location.pathname, window.location.origin);
  url.searchParams.set("lang", locale);
  url.hash = sampleId;
  return url.toString();
}

export function Community({ messages: t, prototype, names, locale }: {
  messages: ReportMessages;
  prototype: PrototypeMessages;
  names: Record<ScamKind, string>;
  locale: Locale;
}) {
  const [kind, setKind] = useState<ScamKind>("bank");
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<"idle" | "received" | "failed">("idle");

  function simulateSubmission(): void {
    try {
      parseCommunitySubmission({ id: crypto.randomUUID(), kind, summary });
      setSummary("");
      setStatus("received");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div className="screen">
      <section className="panel" aria-labelledby="community-submit">
        <h2 id="community-submit" tabIndex={-1}>{t.community}</h2>
        <form onSubmit={(event) => { event.preventDefault(); simulateSubmission(); }}>
          <label>
            {t.community}
            <select value={kind} onChange={(event) => {
              const choice = scamKinds.find((item) => item === event.target.value);
              if (choice) setKind(choice);
            }}>
              {scamKinds.map((item) => <option key={item} value={item}>{names[item]}</option>)}
            </select>
          </label>
          <label>
            {t.publicHint}
            <textarea value={summary} onChange={(event) => {
              setSummary(event.target.value);
              setStatus("idle");
            }} required minLength={20} maxLength={500} rows={4} dir="auto" />
          </label>
          <button type="submit">{t.send}</button>
        </form>
        <p role="status">{status === "received" ? prototype.simulated : status === "failed" ? t.failure : ""}</p>
      </section>
      <section className="panel" aria-labelledby="community-alerts">
        <h2 id="community-alerts" tabIndex={-1}>{t.alerts}</h2>
        <article className="community-alert" id={sampleId}>
          <h3>{prototype.sample}</h3>
          <p><strong>{names.delivery}</strong></p>
          <p>{prototype.advice}</p>
          <details>
            <summary>{t.share}</summary>
            <p dir="ltr"><code>{sampleLink(locale)}</code></p>
          </details>
        </article>
      </section>
    </div>
  );
}
