import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import miaPhoto from "@/assets/mentors/mia.jpg";
import tanyaPhoto from "@/assets/mentors/tanya.jpg";
import miaAndTanyaPhoto from "@/assets/mentors/mia-and-tanya.jpg";
import { countryOptions, stateOptions } from "@/data/salesforceLeadOptions";

const expectations = [
  {
    title: "Mentor Matching",
    body: "We pair you with a mentor based on your goals and experience so conversations are relevant from session one.",
  },
  {
    title: "Structured Program",
    body: "A defined program length with clear milestones, so you always know what's coming next and what's expected of you.",
  },
  {
    title: "Regular Sessions",
    body: "Scheduled 1:1 check-ins to keep momentum, ask questions, and get honest feedback on your progress.",
  },
  {
    title: "Community Access",
    body: "Join a wider group of mentees and mentors to swap notes, share wins, and learn beyond your own mentor pairing.",
  },
];

const mentors = [
  {
    name: "Mia",
    photo: miaPhoto,
    bio: "One half of The Handover mentor duo — hands-on with Claude every day and focused on turning it into real, practical efficiency gains.",
  },
  {
    name: "Tanya",
    photo: tanyaPhoto,
    bio: "The other half of the duo — deeply experienced at making Claude work for real workflows, and loves helping others get there faster.",
  },
];

const faqs = [
  {
    question: "Is there a cost to join?",
    answer:
      "No — The Handover mentorship program is completely free.",
  },
  {
    question: "How big is each cohort?",
    answer:
      "Small and personal. Each session is you plus two or three other mentees, working directly with both Mia and Tanya.",
  },
  {
    question: "How often do we meet, and for how long?",
    answer: "Once a week, for an hour, for the length of the program.",
  },
  {
    question: "What timezone are sessions run in?",
    answer:
      "Sessions are scheduled in the Sydney/Melbourne timezone, after standard work hours — so bring your evening self.",
  },
  {
    question: "Who are the mentors?",
    answer:
      "Mia and Tanya — both very experienced at making Claude work for them and building more efficient ways of working with it, and keen to help you do the same.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold text-foreground">
            The Handover
          </span>
          <a
            href="#apply"
            className="rounded-full bg-pbc-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-pbc-orange-dark"
          >
            Register Interest
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 pt-12 pb-16 text-center">
          <Reveal>
            <Logo className="mx-auto h-auto w-full max-w-xl drop-shadow-xl sm:max-w-2xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/70">
              A mentorship program for Salesforce professionals, connecting you with experienced
              mentors to help you grow. Register your interest below to be considered for the
              next intake.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="#apply"
              className="mt-8 inline-block rounded-full bg-pbc-orange px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-pbc-orange-dark"
            >
              Register Your Interest
            </a>
          </Reveal>
        </section>

        <section id="what-to-expect" className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-blue-dark">
                What to Expect
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {expectations.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div
                    className={`h-full rounded-2xl border p-6 shadow-sm ${
                      i % 2 === 0
                        ? "border-pbc-blue/20 bg-pbc-blue/5"
                        : "border-pbc-orange/20 bg-pbc-orange/5"
                    }`}
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-foreground/70">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="mentors" className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-blue-dark">
                Meet Your Mentors
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>

            <Reveal delay={0.1} className="mt-10">
              <Image
                src={miaAndTanyaPhoto}
                alt="Mia and Tanya, The Handover mentors"
                className="mx-auto rounded-3xl shadow-md"
                sizes="(min-width: 768px) 700px, 100vw"
                priority={false}
              />
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {mentors.map((mentor, i) => (
                <Reveal key={mentor.name} delay={0.15 + i * 0.1}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-black/5 bg-white/80 p-6 text-center shadow-sm">
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      className="h-28 w-28 rounded-full object-cover shadow-sm"
                    />
                    <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                      {mentor.name}
                    </h3>
                    <p className="mt-2 text-foreground/70">{mentor.bio}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-orange-dark">
                Frequently Asked Questions
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-pbc-gold-champagne to-pbc-gold-bronze" />
            </Reveal>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.question} delay={i * 0.06}>
                  <details className="group rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-foreground">
                      {faq.question}
                      <span className="ml-4 text-pbc-orange transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-foreground/70">{faq.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="px-6 py-16">
          <div className="mx-auto max-w-xl">
            <Reveal className="text-center">
              <h2 className="font-display text-3xl font-semibold text-pbc-orange-dark">
                Register Your Interest
              </h2>
              <p className="mt-3 text-foreground/70">
                Fill in the form below and we&apos;ll be in touch about next steps.
              </p>
            </Reveal>

            {/*
              Salesforce Web-to-Lead form, matching the HTML generated from
              Setup -> Web-to-Lead for The Handover org (oid
              00DQE00000FXBNR). Field set, maxlengths, and the lead_source
              value ("Web") are copied verbatim from that generated form —
              lead_source in particular must stay "Web" since LeadSource is a
              restricted picklist in Salesforce and any other value would
              cause the submission to fail.
            */}
            <Reveal delay={0.1}>
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DQE00000FXBNR"
                method="POST"
                className="mt-10 space-y-5 rounded-2xl border border-black/5 bg-white/90 p-8 shadow-sm"
              >
                <input type="hidden" name="oid" value="00DQE00000FXBNR" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://the-handover.github.io/Site/thank-you/"
                />
                <input type="hidden" name="lead_source" value="Web" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    name="first_name"
                    autoComplete="given-name"
                    maxLength={40}
                    required
                  />
                  <Field
                    label="Last Name"
                    name="last_name"
                    autoComplete="family-name"
                    maxLength={80}
                    required
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={80}
                  required
                />
                <Field label="City" name="city" autoComplete="address-level2" maxLength={40} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select label="State/Province" name="state_code" options={stateOptions} />
                  <Select label="Country" name="country_code" options={countryOptions} />
                </div>
                <Field
                  label="What's your LinkedIn profile URL?"
                  name="00NQE00000bzmH1"
                  type="url"
                  autoComplete="url"
                  maxLength={255}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Select
                    label="How have you used Claude before?"
                    name="00NQE00000bzmSD"
                    options={[
                      { value: "Used for work", label: "Used for work" },
                      { value: "Used personally", label: "Used personally" },
                      { value: "Have not tried yet", label: "Have not tried yet" },
                    ]}
                  />
                  <Select
                    label="Have you used Claude Code?"
                    name="00NQE00000bzmTp"
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" },
                      { value: "Not sure", label: "Not sure" },
                    ]}
                  />
                </div>
                <Checkbox
                  label="Are you currently employed within the Salesforce ecosystem?"
                  name="00NQE00000bzmLm"
                />
                <div>
                  <label htmlFor="00NQE00000bzirf" className="block text-sm font-medium text-foreground">
                    Tell us about your current role
                  </label>
                  <textarea
                    id="00NQE00000bzirf"
                    name="00NQE00000bzirf"
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground">
                    Why are you interested?
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pbc-orange px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-pbc-orange-dark"
                >
                  Submit
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-8 text-center text-sm text-foreground/50">
        The Handover — {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  maxLength,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-pbc-orange-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required={required}
        className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: ReadonlyArray<{ value: string; label: string }>;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1 w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-foreground focus:border-pbc-blue focus:outline-none focus:ring-2 focus:ring-pbc-blue/30"
      >
        {options.map((opt) => (
          <option key={`${opt.value}-${opt.label}`} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <label htmlFor={name} className="flex items-center gap-2 text-sm font-medium text-foreground">
      <input
        id={name}
        name={name}
        type="checkbox"
        value="1"
        className="h-4 w-4 rounded border-black/20 text-pbc-orange focus:ring-pbc-blue/30"
      />
      {label}
    </label>
  );
}
