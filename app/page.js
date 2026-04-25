const heroPoints = [
  "Every batch is taught by Angrej Singh",
  "Morning and evening batches follow the same plan",
  "Miss a class and join the alternate batch the same day",
  "Recordings stay available for revision"
];

const proofCards = [
  {
    label: "Format",
    value: "Live teaching + revision recordings"
  },
  {
    label: "Audience",
    value: "RN and RPN aspirants"
  },
  {
    label: "Support",
    value: "Batch flexibility built in"
  }
];

const trustCards = [
  {
    number: "01",
    title: "One teacher leads every live session.",
    body:
      "You do not have to adjust to different teaching styles across batches. The guidance stays consistent all the way through.",
    className: "feature-card large-card"
  },
  {
    number: "02",
    title: "Morning and evening stay aligned.",
    body:
      "The syllabus and teaching plan stay the same, so you can choose your timing without worrying about missing content quality.",
    className: "feature-card"
  },
  {
    number: "03",
    title: "Missed class does not break your progress.",
    body:
      "Alternate batch access and recordings help you stay connected to the plan instead of falling behind after one missed session.",
    className: "feature-card"
  },
  {
    number: "04",
    title: "RN and RPN paths stay clear from the start.",
    body:
      "You can move directly toward the class that matches your goal and reach the support team quickly when you are ready.",
    className: "feature-card accent-card"
  }
];

const steps = [
  {
    step: "Step 1",
    title: "Choose the batch that fits your routine",
    body:
      "Morning and evening follow the same syllabus and teaching plan, so the decision is about schedule, not quality."
  },
  {
    step: "Step 2",
    title: "Learn directly from Angrej Singh",
    body:
      "Every live session keeps the teaching style, pace, and guidance consistent from start to finish."
  },
  {
    step: "Step 3",
    title: "Use the alternate batch when needed",
    body:
      "If you miss your scheduled session, you can join the other batch the same day and stay aligned with the plan."
  },
  {
    step: "Step 4",
    title: "Revisit recordings for reinforcement",
    body:
      "Recordings support revision and recovery, while the live classes stay the center of the learning experience."
  }
];

const programs = [
  {
    path: "RN path",
    highlight: "Live coaching",
    title: "RN classes",
    description:
      "For students who want a structured NCLEX RN study system with live teaching, revision support, and a fixed plan.",
    items: [
      "Direct teaching by Angrej Singh",
      "Morning or evening batch selection",
      "Recordings for concept revision",
      "Alternate batch support if you miss class"
    ],
    href: "https://theangrejsinghnclex.com/subcategory/courses/RN-CLASSES",
    cta: "View RN classes",
    className: "program-card program-rn"
  },
  {
    path: "RPN path",
    highlight: "Same teaching system",
    title: "RPN classes",
    description:
      "For students preparing with the same consistent structure, clear session flow, and revision-first support model.",
    items: [
      "Same syllabus logic across batches",
      "Class recordings included",
      "Schedule-friendly batch flexibility",
      "Direct route into the current course page"
    ],
    href: "https://theangrejsinghnclex.com/subcategory/courses/RPN-CLASSES",
    cta: "View RPN classes",
    className: "program-card program-rpn"
  }
];

const faqs = [
  {
    question: "Who teaches the classes?",
    answer:
      "All sessions are conducted by Angrej Singh, so the teaching quality and guidance stay consistent across batches."
  },
  {
    question: "What is the difference between the morning and evening batches?",
    answer:
      "Both batches follow the same syllabus and teaching plan. The only difference is the class timing."
  },
  {
    question: "What happens if I miss my scheduled class?",
    answer:
      "You can join the alternate batch on the same day, which helps you keep pace with the class plan."
  },
  {
    question: "Are recordings available?",
    answer:
      "Yes. Recordings are available for revision and reinforcement, although live attendance is still encouraged."
  },
  {
    question: "Can I switch between batches permanently?",
    answer:
      "Students may request a permanent batch transfer based on availability and individual circumstances."
  },
  {
    question: "Is there a refund policy?",
    answer: "The current site states that course fees are final and non-refundable."
  }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rn.angrejsingh?igsh=dzl6NGl0eGV5d2Jz"
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@angrejsingh2588?si=HTFTGosWCXpPxvrv"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/17B8HxbcpP/?mibextid=wwXIfr"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@angrej272?_t=ZS-902D1fg04BN&_r=1"
  }
];

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement-bar" aria-hidden="true">
        <div className="announcement-track">
          <span>New NCLEX batch open</span>
          <span>RN and RPN pathways</span>
          <span>Every live class taught by Angrej Singh</span>
          <span>Alternate batch support if you miss a session</span>
          <span>Recordings included for revision</span>
          <span>New NCLEX batch open</span>
          <span>RN and RPN pathways</span>
          <span>Every live class taught by Angrej Singh</span>
          <span>Alternate batch support if you miss a session</span>
          <span>Recordings included for revision</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero" aria-label="Angrej Singh NCLEX landing page">
            <img
              className="brand-logo"
              src="https://ncx-s3.s3.us-east-2.amazonaws.com/setting/1758192836-wB6TDmevMQ.png"
              alt="Angrej Singh NCLEX logo"
            />
            <span className="brand-copy">
              <strong>Angrej Singh NCLEX</strong>
              <span>Learning hub for RN and RPN success</span>
            </span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#programs">Courses</a>
            <a href="#why-it-works">Why it works</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-dark header-button" href="tel:+16475073871">
            Call +1 (647) 507-3871
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="hero">
          <div className="container hero-grid">
            <div className="hero-copy animate-in">
              <SectionEyebrow>Angrej Singh learning hub</SectionEyebrow>
              <h1>Your success starts here with expert guidance for NCLEX.</h1>
              <p className="hero-summary">
                Live RN and RPN coaching with one consistent teacher, flexible batch
                support, and recordings that help you revise without losing momentum.
              </p>

              <div className="hero-actions">
                <a className="button button-accent" href="https://theangrejsinghnclex.com/courses">
                  Explore Courses
                </a>
                <a className="button button-ghost" href="https://theangrejsinghnclex.com/contact-us">
                  Contact Us
                </a>
              </div>

              <ul className="hero-points" aria-label="Key class benefits">
                {heroPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="hero-proof">
                {proofCards.map((card) => (
                  <div className="proof-card" key={card.label}>
                    <span className="proof-label">{card.label}</span>
                    <strong>{card.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual animate-in">
              <div className="offer-badge">
                <span>new batch</span>
                <strong>Open now</strong>
              </div>

              <div className="visual-panel">
                <div className="visual-meta">
                  <span className="meta-pill">RN classes</span>
                  <span className="meta-pill">RPN classes</span>
                </div>

                <div className="coach-card">
                  <div className="coach-card-copy">
                    <p className="coach-kicker">Direct teaching. Clear system.</p>
                    <h2>One teacher. One plan. Real accountability.</h2>
                    <p>
                      The same teaching approach runs across every batch, so students
                      get clarity, consistency, and a more reliable path through NCLEX prep.
                    </p>
                  </div>

                  <div className="coach-photo-frame">
                    <img
                      className="coach-photo"
                      src="https://theangrejsinghnclex.com/uploads_demo/home/hero-img.png"
                      alt="Angrej Singh portrait"
                    />
                  </div>
                </div>

                <div className="floating-notes">
                  <article className="note-card note-yellow">
                    <span className="note-label">Batch choice</span>
                    <strong>Morning or evening</strong>
                  </article>
                  <article className="note-card note-red">
                    <span className="note-label">If life gets busy</span>
                    <strong>Jump into the alternate batch</strong>
                  </article>
                  <article className="note-card note-teal">
                    <span className="note-label">Revision layer</span>
                    <strong>Replay recordings when needed</strong>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="insight-section" id="why-it-works">
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow>Why students trust this format</SectionEyebrow>
              <div className="heading-row">
                <h2>A clear study system is easier to trust and easier to follow.</h2>
                <p>
                  You know who teaches, how the batches work, what happens if you
                  miss class, and how revision support is handled before you even
                  reach the contact step.
                </p>
              </div>
            </div>

            <div className="feature-layout">
              {trustCards.map((card) => (
                <article className={card.className} key={card.number}>
                  <span className="card-number">{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="container">
            <div className="section-heading compact">
              <SectionEyebrow>How classes work</SectionEyebrow>
              <h2>A study flow that feels practical, not fragile.</h2>
            </div>

            <div className="timeline">
              {steps.map((step) => (
                <article className="timeline-card" key={step.step}>
                  <span className="timeline-step">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow>Programs</SectionEyebrow>
              <div className="heading-row">
                <h2>Two clear pathways, one consistent teaching system.</h2>
                <p>
                  Each program keeps the same live teaching approach and revision
                  support, with a direct path into the course page that fits your
                  exam goal.
                </p>
              </div>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className={program.className} key={program.title}>
                  <div className="program-topline">
                    <span className="program-tag">{program.path}</span>
                    <span className="program-highlight">{program.highlight}</span>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <ul>
                    {program.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="button button-dark" href={program.href}>
                    {program.cta}
                  </a>
                </article>
              ))}

              <aside className="support-panel">
                <SectionEyebrow>Need help choosing?</SectionEyebrow>
                <h3>Start with the conversation, not the confusion.</h3>
                <p>
                  Students usually need three things before enrolling: the right
                  program, the right batch, and clarity on how to stay on track.
                </p>

                <div className="support-actions">
                  <a className="button button-accent" href="https://theangrejsinghnclex.com/contact-us">
                    Contact support
                  </a>
                  <a className="button button-light" href="https://theangrejsinghnclex.com/student/my-learning">
                    My Learning
                  </a>
                </div>

                <div className="support-links">
                  <a href="https://theangrejsinghnclex.com/courses">Browse all courses</a>
                  <a href="https://theangrejsinghnclex.com/contact-us">Open contact page</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2>The questions students usually ask before joining.</h2>
              <p>
                Clear answers upfront help students decide faster and start with
                fewer surprises.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-panel">
            <div className="cta-copy">
              <SectionEyebrow>Contact</SectionEyebrow>
              <h2>Ready to choose your batch and start with a clear plan?</h2>
              <p>
                Reach out directly to ask about batch fit, course selection, and
                the best next step for your NCLEX prep.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button button-dark" href="https://theangrejsinghnclex.com/contact-us">
                Contact Us
              </a>
              <a className="button button-light" href="https://theangrejsinghnclex.com/login">
                Sign In
              </a>
            </div>

            <div className="social-links" aria-label="Social media links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; {currentYear} Angrej Singh NCLEX.</p>
          <div className="footer-links">
            <a href="https://theangrejsinghnclex.com/privacy-policy">Privacy policy</a>
            <a href="https://theangrejsinghnclex.com/terms-conditions">Terms</a>
            <a href="https://theangrejsinghnclex.com/refund-policy">Refund policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
