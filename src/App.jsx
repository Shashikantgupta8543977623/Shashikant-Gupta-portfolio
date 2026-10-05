import { useEffect, useRef, useState } from "react";

const phrases = [
  "practical software.",
  "Python applications.",
  "automation tools.",
  "data-driven ideas.",
  "digital experiences.",
];

const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
];

const skills = [
  {
    number: "01",
    title: "Programming",
    description: "Application development and problem solving.",
    tags: ["Python", "JavaScript"],
  },
  {
    number: "02",
    title: "Web Development",
    description: "Responsive interfaces with clean modern UI.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "03",
    title: "Data Analysis",
    description: "Exploring, cleaning and analysing structured data.",
    tags: ["Pandas", "NumPy", "Data Analysis"],
  },
  {
    number: "04",
    title: "Python Tools",
    description: "Building practical desktop utilities and workflows.",
    tags: ["Tkinter", "Automation"],
  },
];

const projects = [
  {
    number: "01",
    type: "MANAGEMENT SYSTEM",
    title: "School Attendance Management System",
    description:
      "A practical system concept for organising student attendance and making routine record management easier.",
    tags: ["Python", "Tkinter"],
    art: "purple-art",
    word: "ATTENDANCE",
  },
  {
    number: "02",
    type: "AUTOMATION",
    title: "WhatsApp Management System",
    description:
      "An automation-focused project for managing repetitive WhatsApp workflows.",
    tags: ["Python", "Automation"],
    art: "cyan-art",
    word: "WHATSAPP",
  },
  {
    number: "03",
    type: "DESKTOP APP",
    title: "Library Management System",
    description:
      "A desktop management application for organising library operations.",
    tags: ["Python", "Tkinter"],
    art: "green-art",
    word: "LIBRARY",
  },
  {
    number: "04",
    type: "AUTOMATION",
    title: "Instagram Automation",
    description:
      "An automation project exploring repetitive social-media workflows.",
    tags: ["Python", "Automation"],
    art: "pink-art",
    word: "INSTAGRAM",
  },
];

const journey = [
  {
    date: "2025 — 2029",
    title: "B.Tech — Information Technology",
    description:
      "Babu Sunder Singh Institute of Technology and Management, Lucknow.",
    detail: "Currently in 2nd year",
  },
  {
    date: "2026",
    title: "IDE Bootcamp 2026",
    description:
      "Participated in a national bootcamp focused on business concepts and entrepreneurship.",
    detail: "Innovation · Entrepreneurship",
  },
  {
    date: "2025 — 2026",
    title: "Smart India Hackathon — Internal Hackathons",
    description:
      "Participated with a team and worked on real-world problem statements.",
    detail: "Problem Solving · Teamwork · Innovation",
  },
  {
    date: "ONGOING",
    title: "Continuous Learning",
    description:
      "Improving Python, web development, automation and data-analysis skills through projects.",
    detail: "Build → Learn → Improve",
  },
];

const achievements = [
  [
    "SIH Participation 2025",
    "Participated in the internal hackathon for Smart India Hackathon 2025.",
  ],
  [
    "SIH Participation 2026",
    "Participated in the internal hackathon and worked with a team on a real-world problem statement.",
  ],
  [
    "IDE Bootcamp 2026",
    "Explored entrepreneurship and business concepts through the national bootcamp.",
  ],
  [
    "Russian Language Certificate",
    "Completed a Russian language learning certificate.",
  ],
  [
    "Sports",
    "Active interest and participation in sports alongside academics and technology.",
  ],
  [
    "Innovista Technical Society",
    "Member of Innovista, the Technical Society of BSSGI.",
  ],
];

function SectionHeading({ number, eyebrow, children }) {
  return (
    <div className="section-heading reveal">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function ProjectArt({ project }) {
  return (
    <div className={`project-art ${project.art}`}>
      <div className="art-word">{project.word}</div>
      {project.number === "01" && (
        <div className="dashboard-mock">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <div className="dash-line">
            <span>Students</span>
            <b>148</b>
          </div>
          <div className="dash-line">
            <span>Present</span>
            <b>132</b>
          </div>
          <div className="dash-line">
            <span>Attendance</span>
            <b>89%</b>
          </div>
        </div>
      )}
      {project.number === "02" && (
        <div className="phone">
          <i />
          <i />
          <i />
        </div>
      )}
      {project.number === "03" && (
        <div className="books">
          <i />
          <i />
          <i />
        </div>
      )}
      {project.number === "04" && <div className="insta" />}
    </div>
  );
}

function App() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);
  const [phrase, setPhrase] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightTheme, setLightTheme] = useState(
    () => localStorage.getItem("sg-theme") === "light",
  );

  useEffect(() => {
    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeoutId;

    const typeNextCharacter = () => {
      const currentPhrase = phrases[phraseIndex];
      if (!deleting) {
        setPhrase(currentPhrase.slice(0, characterIndex));
        characterIndex += 1;
        if (characterIndex > currentPhrase.length) {
          deleting = true;
          timeoutId = window.setTimeout(typeNextCharacter, 1200);
          return;
        }
      } else {
        setPhrase(currentPhrase.slice(0, characterIndex));
        characterIndex -= 1;
        if (characterIndex < 0) {
          characterIndex = 0;
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      timeoutId = window.setTimeout(typeNextCharacter, deleting ? 35 : 65);
    };

    typeNextCharacter();
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", lightTheme);
    localStorage.setItem("sg-theme", lightTheme ? "light" : "dark");
  }, [lightTheme]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 30);
    const updateCursorGlow = (event) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${event.clientX}px`;
        glowRef.current.style.top = `${event.clientY}px`;
      }
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("pointermove", updateCursorGlow);

    const sections = document.querySelectorAll("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${(index % 5) * 65}ms`;
      revealObserver.observe(element);
    });

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    if (reduceMotion.matches) {
      document.documentElement.style.scrollBehavior = "auto";
    }

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("pointermove", updateCursorGlow);
      sectionObserver.disconnect();
      revealObserver.disconnect();
      if (reduceMotion.matches) {
        document.documentElement.style.scrollBehavior = "";
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let particles = [];
    let animationFrameId;
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = window.innerWidth < 700 ? 38 : 78;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.4 + 0.4,
      }));
    };

    const animateParticles = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -1;
        }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(150,135,255,.55)";
        context.fill();
      });

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const a = particles[first];
          const b = particles[second];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 115) {
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(128,100,255,${0.1 * (1 - distance / 115)})`;
            context.stroke();
          }
        }
      }
      animationFrameId = window.requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    animateParticles();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const updateCardTilt = (event) => {
    if (window.innerWidth < 850) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateX = ((y / bounds.height) - 0.5) * -4;
    const rotateY = ((x / bounds.width) - 0.5) * 4;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  };

  return (
    <>
      <div className="noise" />
      <div className="cursor-glow" ref={glowRef} />

      <header className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <a className="logo" href="#home">
          SG<span>.</span>
        </a>
        <nav className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {navigation.map(([label, id]) => (
            <a
              className={activeSection === id ? "active" : ""}
              href={`#${id}`}
              key={id}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <button
            id="themeBtn"
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setLightTheme((current) => !current)}
          >
            {lightTheme ? "☾" : "☼"}
          </button>
          <button
            id="menuBtn"
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <canvas id="particles" ref={canvasRef} />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-inner">
            <div className="status-pill reveal">
              <span /> Available for internships &amp; collaborations
            </div>
            <p className="eyebrow reveal">
              B.Tech IT Student · Python Developer · Data Enthusiast
            </p>
            <h1 className="hero-title reveal">
              Hi, I&apos;m <em>Shashikant Gupta.</em>
              <br />
              I build <strong id="typing">{phrase}</strong>
              <b className="typing-cursor">|</b>
            </h1>
            <p className="hero-copy reveal">
              A 2nd-year Information Technology student from Lucknow who enjoys
              building practical software, automation tools and data-driven
              solutions for real-world problems.
            </p>
            <div className="hero-actions reveal">
              <a href="#projects" className="btn btn-primary">
                Explore my work <span>↗</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Let&apos;s connect <span>→</span>
              </a>
            </div>
            <div className="hero-socials reveal">
              <a
                href="https://github.com/Shashikantgupta8543977623"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
              <i>•</i>
              <a
                href="https://www.linkedin.com/in/shashikant-gupta-855481440/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <i>•</i>
              <a href="mailto:codewithshashikant@gmail.com">Email</a>
            </div>
          </div>
          <a href="#about" className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <b>↓</b>
          </a>
        </section>

        <section className="section" id="about">
          <SectionHeading number="01" eyebrow="About me">
            Building. Learning.
            <br />
            <span>Growing.</span>
          </SectionHeading>
          <div className="about-grid">
            <div className="profile-card glass reveal">
              <div className="profile-art">
                <div className="initials">SG</div>
                <div className="floating-tag tag-a">&lt;/&gt;</div>
                <div className="floating-tag tag-b">Py</div>
                <div className="floating-tag tag-c">{"{ }"}</div>
              </div>
              <div className="profile-meta">
                <small>CURRENTLY STUDYING</small>
                <strong>B.Tech — Information Technology</strong>
                <p>
                  Babu Sunder Singh Institute of Technology and Management,
                  Lucknow
                </p>
              </div>
            </div>
            <div className="about-text reveal">
              <p className="lead">
                I like turning ideas into <span>working software.</span>
              </p>
              <p>
                I am pursuing B.Tech in Information Technology and currently in
                my second year. My core interest is Python development,
                automation, desktop applications and data analysis.
              </p>
              <p>
                I learn best by building. My projects include management
                systems, automation workflows and practical applications
                designed around everyday problems.
              </p>
              <div className="mini-stats">
                <div>
                  <strong>2nd</strong>
                  <span>Year</span>
                </div>
                <div>
                  <strong>IT</strong>
                  <span>B.Tech</span>
                </div>
                <div>
                  <strong>Lucknow</strong>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading number="02" eyebrow="My toolkit">
            Skills I use to
            <br />
            <span>build things.</span>
          </SectionHeading>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article
                className="skill-card glass reveal"
                key={skill.number}
                onPointerMove={updateCardTilt}
                onPointerLeave={(event) => {
                  event.currentTarget.style.transform = "";
                }}
              >
                <small>{skill.number}</small>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <Tags items={skill.tags} />
              </article>
            ))}
          </div>
          <div className="skill-strip reveal">
            <span>PYTHON</span>
            <b>✦</b>
            <span>HTML</span>
            <b>✦</b>
            <span>CSS</span>
            <b>✦</b>
            <span>JAVASCRIPT</span>
            <b>✦</b>
            <span>TKINTER</span>
            <b>✦</b>
            <span>PANDAS</span>
            <b>✦</b>
            <span>NUMPY</span>
            <b>✦</b>
            <span>DATA ANALYSIS</span>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading number="03" eyebrow="Selected work">
            Projects that
            <br />
            <span>solve problems.</span>
          </SectionHeading>
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.number === "01" ? " featured" : ""} glass reveal`}
                key={project.number}
                onPointerMove={updateCardTilt}
                onPointerLeave={(event) => {
                  event.currentTarget.style.transform = "";
                }}
              >
                <ProjectArt project={project} />
                <div className="project-content">
                  <small>{project.number} · {project.type}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <Tags items={project.tags} />
                    <a href="#contact">Discuss ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <SectionHeading number="04" eyebrow="Education & growth">
            My <span>journey.</span>
          </SectionHeading>
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item reveal" key={item.title}>
                <span className="timeline-dot" />
                <small>{item.date}</small>
                <div className="timeline-card glass">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <b>{item.detail}</b>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="achievements">
          <SectionHeading number="05" eyebrow="Milestones">
            Things I&apos;m
            <br />
            <span>proud of.</span>
          </SectionHeading>
          <div className="achievement-grid">
            {achievements.map(([title, description], index) => (
              <article
                className="achievement glass reveal"
                key={title}
                onPointerMove={updateCardTilt}
                onPointerLeave={(event) => {
                  event.currentTarget.style.transform = "";
                }}
              >
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card glass reveal">
            <div className="contact-top">
              <span className="eyebrow">06 · GET IN TOUCH</span>
              <span className="available">
                <i /> Available for opportunities
              </span>
            </div>
            <h2>
              Let&apos;s build something
              <br />
              <span>meaningful.</span>
            </h2>
            <p>
              Have a project idea, internship opportunity or simply want to
              talk tech? I’d love to hear from you.
            </p>
            <a
              className="email-link"
              href="mailto:codewithshashikant@gmail.com"
            >
              codewithshashikant@gmail.com <span>↗</span>
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/Shashikantgupta8543977623"
                target="_blank"
                rel="noopener"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/shashikant-gupta-855481440/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:codewithshashikant@gmail.com">Email ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Shashikant Gupta</span>
        <span>Lucknow · India</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
