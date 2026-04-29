const heroPoints = [
  "All sessions are conducted exclusively by Angrej Singh",
  "Morning and evening batches follow the same teaching plan",
  "Students can join the alternate batch if a session is missed",
  "Recordings are available for revision and reinforcement"
];

const pathwayLinks = [
  {
    label: "RN pathway",
    href: "https://theangrejsinghnclex.com/course-details/nclex-rn",
    cta: "View RN"
  },
  {
    label: "RPN pathway",
    href: "https://theangrejsinghnclex.com/course-details/nclex-pn-rpn",
    cta: "View RPN"
  }
];

const trustCards = [
  {
    number: "01",
    title: "One teacher for every live class.",
    body:
      "The current FAQ says morning and evening sessions are conducted exclusively by Angrej Singh, so students do not have to adjust to different teaching styles.",
    className: "feature-card compact-feature"
  },
  {
    number: "02",
    title: "Flexible timing without losing the plan.",
    body:
      "The live site says both batches follow the same syllabus and teaching plan, which makes the choice about schedule rather than course quality.",
    className: "feature-card compact-feature"
  },
  {
    number: "03",
    title: "Support continues if life gets busy.",
    body:
      "Students can join the alternate batch on the same day if they miss class, and recordings are available for revision and reinforcement.",
    className: "feature-card compact-feature"
  }
];

const offerHighlights = [
  "Every live class is taught by Angrej Singh according to the current support FAQ.",
  "Morning and evening batches follow the same teaching plan, so timing stays flexible without changing the structure.",
  "Students can join the alternate batch if a class is missed, and recordings are provided for revision.",
  "The live RN and RPN course pages both currently show $ 1200.00 with 120 Days Access."
];

const pathwayCards = [
  {
    label: "RN pathway",
    title: "NCLEX-RN",
    summary: "Expert-Led NCLEX-RN Training with Practice Tests & Clinical Case Scenarios",
    highlights: [
      "Covers full NCLEX-RN exam content",
      "3000+ NCLEX-style practice questions",
      "Personalized coaching and test-taking strategies"
    ],
    href: "https://theangrejsinghnclex.com/course-details/nclex-rn",
    primaryCta: "Open RN course page",
    className: "pathway-card pathway-rn"
  },
  {
    label: "RPN pathway",
    title: "NCLEX-PN (RPN)",
    summary: "Comprehensive Online RPN Training for International Practical Nurse",
    highlights: [
      "NCLEX-PN syllabus explained in easy language",
      "Practice tests with rationales",
      "Time management and clinical reasoning skills"
    ],
    href: "https://theangrejsinghnclex.com/course-details/nclex-pn-rpn",
    primaryCta: "Open RPN course page",
    className: "pathway-card pathway-rpn"
  }
];

const faqs = [
  {
    question: "Who will be teaching the classes?",
    answer:
      "The current FAQ says that all sessions, whether in the morning or evening batch, are conducted exclusively by Angrej Singh."
  },
  {
    question: "What is the difference between the morning and evening batches?",
    answer:
      "The live site says both morning and evening batches follow the same syllabus and teaching plan, with the only difference being class timing."
  },
  {
    question: "If I miss my scheduled class, what can I do?",
    answer:
      "Students who miss their scheduled session may join the alternate batch on the same day so they can stay aligned with the syllabus."
  },
  {
    question: "Are recordings of classes available?",
    answer:
      "Yes. The FAQ says class recordings are provided for revision and reinforcement, though live attendance is still strongly recommended."
  },
  {
    question: "Can I switch between batches permanently?",
    answer:
      "The current website says students may request a permanent transfer between batches, subject to seat availability."
  },
  {
    question: "What is the refund policy?",
    answer:
      "The current site states that all course fees are final and non-refundable."
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
          <span>One NCLEX coaching system led by Angrej Singh</span>
          <span>Current website price is $ 1200.00</span>
          <span>120 Days Access on current course pages</span>
          <span>Every live class taught by Angrej Singh</span>
          <span>Choose RN or RPN pathway after that</span>
          <span>Recordings included for revision</span>
          <span>One NCLEX coaching system led by Angrej Singh</span>
          <span>Current website price is $ 1200.00</span>
          <span>120 Days Access on current course pages</span>
          <span>Every live class taught by Angrej Singh</span>
          <span>Choose RN or RPN pathway after that</span>
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
            <a href="#offers">Offer</a>
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
              <SectionEyebrow>Current NCLEX enrollment</SectionEyebrow>
              <h1>A simpler path to NCLEX success starts here.</h1>
              <p className="hero-summary">
                The current Angrej Singh website presents one coaching format led
                by Angrej Singh. Students first join the system, then choose the
                RN or RPN pathway that matches their exam, with the current live
                offer listed at $ 1200.00 for 120 Days Access.
              </p>

              <div className="hero-actions">
                <a className="button button-accent" href="#offers">
                  See Current Offers
                </a>
                <a className="button button-ghost" href="https://theangrejsinghnclex.com/contact-us">
                  Contact Support
                </a>
              </div>

              <article className="hero-service-card" aria-label="Current NCLEX offer">
                <span className="hero-offer-label">Current live offer</span>
                <h3>NCLEX coaching by Angrej Singh</h3>
                <strong className="hero-service-price">$ 1200.00</strong>
                <span className="hero-offer-access">120 Days Access</span>
                <p>
                  One teaching format, one teacher, and two clear pathway
                  options depending on the exam you plan to take.
                </p>

                <div className="hero-pathway-row">
                  {pathwayLinks.map((pathway) => (
                    <a className="pathway-link" href={pathway.href} key={pathway.label}>
                      <span>{pathway.label}</span>
                      <strong>{pathway.cta}</strong>
                    </a>
                  ))}
                </div>
              </article>

              <ul className="hero-points" aria-label="Key class benefits">
                {heroPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual animate-in">
              <div className="visual-panel">
                <div className="visual-meta">
                  <span className="meta-pill">One teacher</span>
                  <span className="meta-pill">RN or RPN pathway</span>
                </div>

                <div className="coach-card">
                  <div className="coach-card-copy">
                    <p className="coach-kicker">Verified from current course pages.</p>
                    <h2>One clear offer before the pathway decision.</h2>
                    <p>
                      The strongest message here is clarity. Students are not
                      being asked to compare multiple services. They are shown
                      one NCLEX coaching format and then guided to the pathway
                      that fits their exam.
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
              </div>
            </div>
          </div>
        </section>

        <section className="program-section offer-section" id="offers">
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow>Current courses and pricing</SectionEyebrow>
              <span className="source-note">Verified from the current Angrej Singh website</span>
              <div className="heading-row">
                <h2>Lead with one offer, then help the student choose the right route.</h2>
                <p>
                  The current website works best when it is framed as one
                  coaching service. The pathway choice matters, but it should
                  come after the student understands the format, price, and
                  support clearly.
                </p>
              </div>
            </div>

            <div className="offer-grid">
              <article className="offer-main-panel">
                <div className="offer-main-top">
                  <div className="offer-main-copy">
                    <span className="program-tag">Core offer</span>
                    <h3>Join one NCLEX coaching system with a clear structure.</h3>
                    <p>
                      The current live site positions the strongest value in the
                      teaching format itself: direct instruction by Angrej Singh,
                      consistent batches, recovery support, and recordings for
                      revision.
                    </p>
                  </div>

                  <div className="offer-price-box">
                    <span className="offer-price-label">Current website price</span>
                    <strong className="offer-price">$ 1200.00</strong>
                    <span className="offer-access">120 Days Access</span>
                  </div>
                </div>

                <ul className="offer-core-list">
                  {offerHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="offer-actions">
                  <a className="button button-dark" href="https://theangrejsinghnclex.com/category/courses/NCLEX-CLASSES">
                    Open current NCLEX offers
                  </a>
                  <a className="button button-ghost" href="https://theangrejsinghnclex.com/contact-us">
                    Talk before you join
                  </a>
                </div>
              </article>

              <aside className="offer-side-panel">
                <SectionEyebrow>Need help choosing?</SectionEyebrow>
                <h3>Pick the page that matches your exam, not a different service tier.</h3>
                <p>
                  Start with the exam you are preparing for. The teaching format,
                  listed price, and access period are already aligned across the
                  current RN and RPN pages.
                </p>

                <ul className="offer-side-list">
                  <li>Choose the RN page if your goal is the NCLEX-RN exam.</li>
                  <li>Choose the RPN page if your goal is the NCLEX-PN (RPN) exam.</li>
                  <li>If you still have questions, contact support before purchasing.</li>
                </ul>

                <div className="support-actions">
                  <a className="button button-accent" href="https://theangrejsinghnclex.com/contact-us">
                    Contact support
                  </a>
                  <a className="button button-light" href="https://theangrejsinghnclex.com/student/my-learning">
                    My Learning
                  </a>
                </div>

                <div className="offer-side-links">
                  <a href="https://theangrejsinghnclex.com/support-ticket-faq">Open support FAQ</a>
                  <a href="https://theangrejsinghnclex.com/category/courses/NCLEX-CLASSES">
                    Browse all NCLEX courses
                  </a>
                </div>
              </aside>
            </div>

            <div className="pathway-grid">
              {pathwayCards.map((course) => (
                <article className={course.className} key={course.title}>
                  <div className="pathway-card-copy">
                    <span className="program-tag">{course.label}</span>
                    <h3>{course.title}</h3>
                    <p>{course.summary}</p>
                  </div>

                  <ul className="pathway-points">
                    {course.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <a className="button button-dark" href={course.href}>
                    {course.primaryCta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="insight-section" id="why-it-works">
          <div className="container">
            <div className="section-heading">
              <SectionEyebrow>Why students trust this format</SectionEyebrow>
              <div className="heading-row">
                <h2>The value is simple: one teacher, one plan, and better continuity.</h2>
                <p>
                  The strongest selling points on the current Angrej Singh site
                  are consistency, clarity, and revision support. Those are the
                  points that should help students feel ready to enroll.
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

        <section className="faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <h2>The questions students usually ask before joining.</h2>
              <p>
                These answers are aligned to the current Angrej Singh website so
                the landing page removes friction instead of adding new claims.
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
              <SectionEyebrow>Next step</SectionEyebrow>
              <h2>Ready to review the live offer and open the right pathway?</h2>
              <p>
                Start from the current offer, then continue to the RN or RPN
                course page that matches your exam. If you need help first,
                contact support before purchasing.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button button-dark" href="#offers">
                See Current Offers
              </a>
              <a className="button button-light" href="https://theangrejsinghnclex.com/contact-us">
                Contact Us
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
