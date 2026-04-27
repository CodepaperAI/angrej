const heroPoints = [
  "All sessions are conducted exclusively by Angrej Singh",
  "Morning and evening batches follow the same teaching plan",
  "Students can join the alternate batch if a session is missed",
  "Recordings are available for revision and reinforcement"
];

const quickOffers = [
  {
    label: "RN pathway",
    title: "NCLEX-RN",
    price: "$ 1200.00",
    access: "120 Days Access",
    href: "https://theangrejsinghnclex.com/course-details/nclex-rn",
    cta: "Buy RN"
  },
  {
    label: "RPN pathway",
    title: "NCLEX-PN (RPN)",
    price: "$ 1200.00",
    access: "120 Days Access",
    href: "https://theangrejsinghnclex.com/course-details/nclex-pn-rpn",
    cta: "Buy RPN"
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

const featuredCourses = [
  {
    label: "RN pathway",
    title: "NCLEX-RN",
    summary: "Expert-Led NCLEX-RN Training with Practice Tests & Clinical Case Scenarios",
    price: "$ 1200.00",
    access: "120 Days Access",
    href: "https://theangrejsinghnclex.com/course-details/nclex-rn",
    secondaryHref: "https://theangrejsinghnclex.com/subcategory/courses/RN-CLASSES",
    primaryCta: "Buy NCLEX-RN",
    secondaryCta: "View RN classes",
    className: "offer-card offer-rn"
  },
  {
    label: "RPN pathway",
    title: "NCLEX-PN (RPN)",
    summary: "Comprehensive Online RPN Training for International Practical Nurse",
    price: "$ 1200.00",
    access: "120 Days Access",
    href: "https://theangrejsinghnclex.com/course-details/nclex-pn-rpn",
    secondaryHref: "https://theangrejsinghnclex.com/subcategory/courses/RPN-CLASSES",
    primaryCta: "Buy NCLEX-PN",
    secondaryCta: "View RPN classes",
    className: "offer-card offer-rpn"
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
          <span>NCLEX-RN listed at $ 1200.00</span>
          <span>NCLEX-PN (RPN) listed at $ 1200.00</span>
          <span>120 Days Access on current course pages</span>
          <span>Every live class taught by Angrej Singh</span>
          <span>Recordings included for revision</span>
          <span>NCLEX-RN listed at $ 1200.00</span>
          <span>NCLEX-PN (RPN) listed at $ 1200.00</span>
          <span>120 Days Access on current course pages</span>
          <span>Every live class taught by Angrej Singh</span>
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
            <a href="#offers">Pricing</a>
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
              <h1>Choose RN or RPN. See the price. Start with confidence.</h1>
              <p className="hero-summary">
                The current Angrej Singh website lists two active courses, NCLEX-RN
                and NCLEX-PN (RPN), each priced at $ 1200.00 with 120 Days Access,
                plus live teaching, recordings, and batch support.
              </p>

              <div className="hero-actions">
                <a className="button button-accent" href="#offers">
                  See Current Offers
                </a>
                <a className="button button-ghost" href="https://theangrejsinghnclex.com/contact-us">
                  Contact Support
                </a>
              </div>

              <div className="hero-offer-grid" aria-label="Quick course offers">
                {quickOffers.map((offer) => (
                  <article className="hero-offer-card" key={offer.title}>
                    <span className="hero-offer-label">{offer.label}</span>
                    <h3>{offer.title}</h3>
                    <strong>{offer.price}</strong>
                    <span className="hero-offer-access">{offer.access}</span>
                    <a className="button button-dark hero-offer-button" href={offer.href}>
                      {offer.cta}
                    </a>
                  </article>
                ))}
              </div>

              <ul className="hero-points" aria-label="Key class benefits">
                {heroPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual animate-in">
              <div className="visual-panel">
                <div className="visual-meta">
                  <span className="meta-pill">NCLEX-RN</span>
                  <span className="meta-pill">NCLEX-PN (RPN)</span>
                </div>

                <div className="coach-card">
                  <div className="coach-card-copy">
                    <p className="coach-kicker">Verified from current course pages.</p>
                    <h2>Why the current offer feels easier to trust.</h2>
                    <p>
                      The current Angrej Singh website makes the offer clearer when
                      students can quickly understand who teaches, how batches work,
                      and what support exists after enrollment.
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
                <h2>Choose the course that matches your exam and go straight to the current offer page.</h2>
                <p>
                  The current website lists two clear pathways. This section keeps
                  the current price, access period, and main action visible so the
                  buying decision feels simple.
                </p>
              </div>
            </div>

            <div className="offer-grid">
              {featuredCourses.map((course) => (
                <article className={course.className} key={course.title}>
                  <div className="offer-card-header">
                    <div className="offer-copy">
                      <span className="program-tag">{course.label}</span>
                      <h3>{course.title}</h3>
                      <p>{course.summary}</p>
                    </div>

                    <div className="offer-price-box">
                      <span className="offer-price-label">Current website price</span>
                      <strong className="offer-price">{course.price}</strong>
                      <span className="offer-access">{course.access}</span>
                    </div>
                  </div>

                  <div className="offer-actions">
                    <a className="button button-dark" href={course.href}>
                      {course.primaryCta}
                    </a>
                    <a className="button button-ghost" href={course.secondaryHref}>
                      {course.secondaryCta}
                    </a>
                  </div>
                </article>
              ))}

              <aside className="offer-side-panel">
                <SectionEyebrow>Before you join</SectionEyebrow>
                <h3>Everything important is already clear on the current site.</h3>
                <p>
                  Students usually want to know who teaches, what happens if a
                  class is missed, whether recordings are included, and what the
                  refund policy is before they buy.
                </p>

                <ul className="offer-side-list">
                  <li>Refund policy: all course fees are final and non-refundable.</li>
                  <li>Missed session support: students may join the alternate batch on the same day.</li>
                  <li>Revision support: recordings are provided to enrolled students.</li>
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
              <h2>Ready to review the live offer and move into the right course page?</h2>
              <p>
                Use the pricing section to pick RN or RPN, then go straight to the
                current course page or contact support before purchasing.
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
