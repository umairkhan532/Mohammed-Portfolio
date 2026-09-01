// ---------- DATA ----------
const SKILLS = [
  {
    title: "Languages",
    icon: "&lt;/&gt;",
    tags: ["Python 3.13", "TypeScript", "SQL", "JavaScript", "Java", "C#", "C++"],
  },
  {
    title: "Cloud & Platform",
    icon: "☁",
    tags: ["AWS CDK", "Lambda", "S3", "SQS", "DynamoDB", "Secrets Manager", "Fargate", "ECR", "Docker"],
  },
  {
    title: "Data & Analytics",
    icon: "◧",
    tags: ["Snowflake", "Snowpark", "dbt Cloud", "Power BI", "Pandas", "ETL/ELT", "Data Modeling", "Parquet"],
  },
  {
    title: "AI & Automation",
    icon: "✦",
    tags: ["Generative AI", "Prompt Engineering", "Context Engineering", "PyTorch", "GitHub Copilot", "Claude"],
  },
  {
    title: "Web & Frameworks",
    icon: "⬡",
    tags: ["Streamlit", "Vite", "React", "Flask", "Django", "Spring", "REST APIs"],
  },
  {
    title: "Quality & DevOps",
    icon: "✓",
    tags: ["Pytest", "Moto", "Playwright", "Ruff", "Git", "Azure DevOps", "Jenkins", "CI/CD"],
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineer → AI Solutions Engineer",
    company: "Koch Industries",
    meta: "Plano, TX · Jan 2024 – Present",
    points: [
      "Design and deliver enterprise software, data-platform, and AI-enabled solutions using Python, TypeScript, AWS, Snowflake, Snowpark, dbt, SQL, and Power BI, supporting <b>20+ internal teams</b>.",
      "Built a Snowpipe failure notification system with Microsoft Teams alerts and subscription workflows, <b>saving 120 hours annually</b> and cutting incident-detection time to under 5 minutes.",
      "Designed a Streamlit roadmapping app integrated with Azure DevOps, <b>reducing sprint-planning effort by 48 hours annually</b>.",
      "Led load and performance testing with <b>up to 5,000 concurrent users</b>, validating scalability and resilience under high-volume conditions.",
      "Automated build, deployment, and testing workflows, improving delivery consistency and reducing manual release risk.",
      "Enhanced secure enterprise file-ingestion with browser-direct S3 uploads, multipart processing, ZIP support, and Excel-to-CSV conversion.",
      "Developed a Hub Status Page with real-time monitoring and alerting for service health, downtime, and connectivity.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Molex",
    meta: "Conway, AR · May 2023 – Aug 2023",
    points: [
      "Improved manufacturing-software productivity by <b>15%</b> through Python enhancements and SDLC optimization.",
      "Increased data-processing speed by <b>20%</b> using Pandas, SQL, JSON, Jenkins, Conda, Git, and Bitbucket.",
      "Created tutorials and documentation that <b>increased internal tool adoption by 25%</b>.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Southern Arkansas University",
    meta: "Oct 2022 – May 2023",
    points: [
      "Supported coursework and lab instruction, mentoring students on software development and tooling (VS Code, version control, project management).",
    ],
  },
  {
    role: "Software Engineer",
    company: "Esprit IT Technologies",
    meta: "Jun 2022 – Jul 2022",
    points: [
      "Developed manufacturing diagnostic-tool workflows with in-vehicle software specialists and supported deployment for <b>12 colleagues</b>.",
      "Performed regression testing and updates using Monaco DTS8, XFlash, CANape, UDE, and Corvus across <b>10 McLaren Artura vehicles</b>.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Southern Arkansas University",
    meta: "Oct 2021 – May 2022",
    points: [
      "Developed reusable Python and PyTorch components for computer-vision and deep-learning research.",
      "Collaborated on breast-cancer detection work achieving <b>98% model accuracy</b>, contributing to a <b>published paper</b>.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Enterprise File Ingestion Platform",
    metric: "99.9% reliability",
    desc: "Secure upload, processing, and raw-file retrieval with presigned browser-direct uploads, multipart handling, ZIP support, Excel-to-CSV conversion, and async processing.",
    tags: ["Python", "TypeScript", "AWS S3", "SQS", "Lambda", "Snowflake", "Playwright"],
  },
  {
    title: "Hub Observability & Status Platform",
    metric: "120 hrs saved/yr",
    desc: "Pipeline-failure notifications, subscription-based alerting, and real-time service-health visibility to improve troubleshooting and proactive response.",
    tags: ["Python", "AWS", "Snowflake", "MS Teams"],
  },
  {
    title: "Roadmapper Application",
    metric: "48 hrs saved/yr",
    desc: "Integrated project-planning and backlog-visualization app that streamlined sprint planning across Scrum teams.",
    tags: ["Python", "Streamlit", "Azure DevOps"],
  },
  {
    title: "Snowflake Platform Automation",
    metric: "Reusable toolkit",
    desc: "Utilities for table-existence checks, auto-creation, overwrite/truncation behavior, data-loading, and stored-procedure execution with expanded unit tests.",
    tags: ["Python", "Snowpark", "Snowflake", "dbt", "SQL"],
  },
  {
    title: "Power BI CI/CD Enablement",
    metric: "Team standard",
    desc: "Repository structure, branching guidance, deployment docs, and onboarding material to standardize report lifecycle management.",
    tags: ["Power BI", "GitHub", "Deployment Pipelines"],
  },
  {
    title: "AMBER Alert 2.0",
    metric: "< 2s processing",
    desc: "ML-based alert-optimization prototype delivering rapid alert processing over a machine-learning pipeline.",
    tags: ["Python", "Machine Learning", "Google Colab"],
  },
];

const ROLES = ["Software Engineer", "AI Solutions Engineer", "Platform Engineer"];

// ---------- RENDER ----------
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-cat reveal">
      <div class="skill-cat__title">
        <span class="skill-cat__icon">${s.icon}</span>${s.title}
      </div>
      <div class="skill-cat__tags">
        ${s.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>`
  ).join("");
}

function renderExperience() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = EXPERIENCE.map(
    (e) => `
    <div class="tl-item reveal">
      <div class="tl-item__head">
        <span class="tl-item__role">${e.role}</span>
        <span class="tl-item__co">${e.company}</span>
      </div>
      <div class="tl-item__meta">${e.meta}</div>
      <ul class="tl-item__list">
        ${e.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
    </div>`
  ).join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="proj reveal">
      <div class="proj__top">
        <span class="proj__folder">▦</span>
        <span class="proj__metric">${p.metric}</span>
      </div>
      <h3 class="proj__title">${p.title}</h3>
      <p class="proj__desc">${p.desc}</p>
      <div class="proj__tags">
        ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </article>`
  ).join("");
}

// ---------- ROLE ROTATOR ----------
function rotateRoles() {
  const el = document.querySelector(".hero__role");
  let i = 0;
  setInterval(() => {
    i = (i + 1) % ROLES.length;
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = ROLES[i];
      el.style.opacity = 1;
    }, 300);
  }, 2600);
  el.style.transition = "opacity 0.3s ease";
}

// ---------- COUNTERS ----------
function animateCounters() {
  const nums = document.querySelectorAll(".stat__num");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        const isFloat = target % 1 !== 0;
        let cur = 0;
        const steps = 40;
        const inc = target / steps;
        const tick = () => {
          cur += inc;
          if (cur >= target) {
            el.textContent = (isFloat ? target.toFixed(1) : target.toLocaleString()) + suffix;
          } else {
            el.textContent = (isFloat ? cur.toFixed(1) : Math.floor(cur).toLocaleString()) + suffix;
            requestAnimationFrame(tick);
          }
        };
        tick();
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => obs.observe(n));
}

// ---------- SCROLL REVEAL ----------
function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

// ---------- NAV BEHAVIOR ----------
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    })
  );

  // active section highlight
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((l) =>
            l.classList.toggle("active", l.getAttribute("href") === `#${id}`)
          );
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// ---------- THEME ----------
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
  toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderExperience();
  renderProjects();
  rotateRoles();
  animateCounters();
  initReveal();
  initNav();
  initTheme();
  document.getElementById("year").textContent = new Date().getFullYear();
});
