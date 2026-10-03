You are a senior Full-Stack Web Developer, UI/UX Designer, Front-End Architect, and Accessibility Specialist.

Your task is to DESIGN AND BUILD a complete, polished, responsive professional portfolio website for:

**REBIE L. DANITARAS, MIT**  
**Assistant Professor II**

The website must present me as a technology professional whose work intersects:

- Information Technology Education
- Full-Stack Web Development
- Software Engineering
- Database Systems
- Artificial Intelligence
- Research and Innovation
- Digital Transformation
- Cybersecurity Awareness
- Startup and Product Development
- Student Mentoring and Technology Competitions

The final website must look like the portfolio of an experienced IT professional and educator, NOT like a generic student portfolio or a template with placeholder content.

---

# 1. TECHNICAL REQUIREMENTS

Build the website using ONLY:

- HTML5
- CSS3
- Vanilla JavaScript

Do NOT use:

- React
- Next.js
- Vue
- Angular
- Node.js backend
- PHP
- databases
- npm packages
- Tailwind CSS
- Bootstrap
- build tools

The website must be completely static and deployable directly through **GitHub Pages**.

Recommended structure:

/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── documents/
├── README.md
└── .gitignore

All paths must be RELATIVE so that the site works correctly when deployed to:

username.github.io/repository-name/

Do not hardcode localhost paths, Windows paths, or root-relative paths that could break GitHub Pages deployment.

---

# 2. DESIGN DIRECTION

Create a sophisticated modern technology portfolio.

Visual personality:

Professional  
Academic  
Technical  
Innovative  
Minimal  
Confident  
Clean  
Research-oriented

Avoid a childish, overly colorful, or generic portfolio appearance.

Use a premium SaaS / developer-portfolio aesthetic.

Suggested visual direction:

Primary:
Deep navy / midnight blue

Secondary:
Technology blue

Accent:
Cyan or electric blue

Light mode:
Off-white / very light gray background

Dark mode:
Deep navy / near-black background

Use subtle gradients sparingly.

Typography should be highly readable and modern.

Suggested font hierarchy:

Headings:
Inter, Manrope, or similar modern sans-serif

Body:
Inter, system-ui, sans-serif

Code/technology labels:
JetBrains Mono, monospace fallback

Use CSS variables for all major colors.

Example:

:root {
  --bg-primary: ...;
  --bg-secondary: ...;
  --text-primary: ...;
  --text-secondary: ...;
  --accent: ...;
  --border: ...;
}

Create equivalent variables for dark mode.

---

# 3. UX REQUIREMENTS

The site must be:

- Mobile-first
- Fully responsive
- Keyboard accessible
- Accessible
- Fast loading
- Touch friendly
- Easy to scan
- SEO friendly
- GitHub Pages compatible

Use semantic HTML.

Include appropriate:

- aria-label attributes
- alt text
- focus states
- keyboard navigation
- color contrast
- reduced-motion support

Respect:

@media (prefers-reduced-motion: reduce)

Do not sacrifice usability for animation.

---

# 4. NAVIGATION

Create a sticky responsive navigation bar.

Desktop navigation:

Home  
About  
Expertise  
Projects  
Research & Innovation  
Experience  
Teaching  
Achievements  
Contact

Left side:

**RLD**

or

**Rebie Danitaras**

Right side:

Navigation links  
Theme toggle

On mobile:

Use an accessible hamburger menu.

The active section should automatically highlight while scrolling using IntersectionObserver.

Include smooth scrolling.

---

# 5. HERO SECTION

The hero must immediately communicate who I am.

Suggested hierarchy:

Eyebrow:

HELLO, I'M

Main heading:

**REBIE L. DANITARAS**

Professional designation:

**Assistant Professor II · IT Educator · Full-Stack Developer · Researcher & Innovator**

Supporting statement:

Create a concise statement communicating that I work at the intersection of technology, education, software development, research, and innovation—building practical digital solutions while helping future IT professionals develop real-world technical skills.

Do not use exaggerated claims such as "world-class expert", "visionary", "industry-leading", or unsupported superlatives.

Add two primary CTAs:

**Explore My Work**

**Download CV**

Add secondary links/icons for:

GitHub  
LinkedIn  
Email

Use placeholders where the actual URL has not been supplied:

YOUR_GITHUB_URL
YOUR_LINKEDIN_URL
YOUR_EMAIL
assets/documents/Rebie-Danitaras-CV.pdf

Do not invent personal contact information.

---

# 6. HERO VISUAL

The hero should not simply display a large stock photograph.

Create a modern visual composition representing my professional identity.

Possible concept:

A central professional profile-photo placeholder surrounded by subtle technology nodes/cards representing:

</> Development  
AI  
Database  
Research  
Education  
Innovation

Alternatively, create a tasteful abstract technology grid/network behind the profile.

Include:

assets/images/profile.jpg

as the profile-image placeholder.

If the image does not exist, the layout must remain visually acceptable.

Use decorative elements carefully.

---

# 7. PROFESSIONAL IDENTITY / VALUE STRIP

Immediately below the hero, create four concise identity cards:

**Educator**

Teaching and mentoring future information technology professionals.

**Developer**

Designing secure, usable, data-driven web applications and information systems.

**Researcher**

Exploring applied computing, AI, intelligent systems, and technology-enabled solutions.

**Innovator**

Transforming real-world problems into practical digital products and research concepts.

Use elegant icons and subtle hover interactions.

---

# 8. ABOUT SECTION

Heading:

**About Me**

Write professional copy based on the following background.

I am an Information Technology educator and practitioner with experience spanning higher education, software development, database administration, government ICT, research, innovation, and student mentoring.

Current professional designation:

**Assistant Professor II**

Academic qualification:

**Master in Information Technology (MIT)**

My work combines teaching, software engineering, database systems, artificial intelligence, digital transformation, cybersecurity awareness, and applied research.

I previously worked in government ICT, including experience as a Computer Programmer and as an Information Technology Officer designated as a Database Administrator.

My academic work includes teaching and mentoring BSIT students in areas such as:

- Object-Oriented Programming
- Database Systems
- Integrative Programming
- Desktop Application Development
- Information Security
- Software Development

My broader interests include:

- Artificial Intelligence
- Design Science Research
- Full-Stack Development
- Database Architecture
- Secure Information Systems
- Digital Transformation
- Educational Technology
- Community-centered Innovation
- Startup Development

Rewrite this naturally and professionally.

Do not simply dump these items into a paragraph.

---

# 9. EXPERTISE SECTION

Heading:

**Technical Expertise**

Organize skills by category instead of showing arbitrary percentage bars.

Never display fake proficiency percentages such as "JavaScript 95%".

Categories:

### Software Development

HTML5  
CSS3  
JavaScript  
Java  
C#  
PHP  
Laravel  
Vue.js  
Next.js

### Database & Backend

Supabase  
PostgreSQL  
MySQL  
Database Design  
Relational Database Systems  
Row-Level Security  
REST APIs

### Development & Deployment

Git  
GitHub  
Vercel  
GitHub Pages  
Responsive Web Development  
Progressive Web Applications

### AI & Intelligent Systems

AI-Assisted Applications  
Retrieval-Augmented Generation concepts  
Embeddings / Semantic Search  
Explainable AI concepts  
Computer Vision concepts  
AI-assisted Decision Support

### UI/UX & Product Development

Responsive Design  
Mobile-First Design  
Design Thinking  
User-Centered Design  
Product Architecture  
Rapid Prototyping

### Research & Academic

Design Science Research  
IT Research  
System Evaluation  
Technology Readiness  
Academic Writing  
Research Prototyping

Use badges, chips, icons, or grouped cards.

---

# 10. FEATURED PROJECTS

This is one of the most important sections.

Heading:

**Featured Projects**

Intro:

"Selected systems, research concepts, and digital products focused on practical technology applications."

Create professional project cards.

Each card should contain:

- Project name
- Short description
- Category
- Technology stack
- Status
- Image placeholder
- Details button
- GitHub button ONLY when a GitHub URL exists
- Demo button ONLY when a demo URL exists

Never invent GitHub repositories or live URLs.

Create the following initial projects.

---

## PROJECT 1 — SeePat / SIPAT

Title:

**SeePat — Smart Insights for Profit, Assets and Trade**

Category:

FinTech / MSME Decision Intelligence

Description:

A proposed voice-first business intelligence platform designed for Filipino microentrepreneurs. It transforms everyday business transactions into structured records and understandable insights about sales, expenses, inventory, receivables, profit, and capital.

Core concepts:

- Voice-to-Business
- Sales and Expense Tracking
- Inventory Intelligence
- Utang / Receivables Tracking
- Profit Engine
- SeePat Score
- AI-assisted Business Insights
- Business Twin / Capital Intelligence
- Filipino microbusiness-oriented UX

Status:

**Pre-MVP / Validation Stage**

Do NOT imply that the platform already has users, revenue, or production deployment.

Suggested stack:

Next.js  
Supabase  
PWA  
AI Integration

---

## PROJECT 2 — SEAMS-AI

Title:

**SEAMS-AI**

Subtitle:

AI-Assisted Secure Assessment and Examination Management System

Category:

EdTech / AI / Assessment

Description:

A secure assessment platform concept for managing examinations, AI-assisted question generation, faculty workflows, student assessments, Table of Specifications support, analytics, and assessment integrity.

Key concepts:

- Faculty / Student / Administrator roles
- AI-assisted question generation
- Source-grounded assessment generation
- Exam management
- Assessment analytics
- Offline interruption recovery
- Audit trails
- Role-based access control
- Secure examination workflows

Suggested stack:

Next.js  
Supabase  
PostgreSQL  
AI APIs  
RLS

---

## PROJECT 3 — UCare AI

Title:

**UCare AI**

Category:

Campus Health Information System

Description:

A university clinic information-system concept designed around secure clinical workflows, role-based access, healthcare records, clinic operations, and an AI-assisted information experience.

Key concepts:

- Student / Faculty / Staff workflows
- Nurse and clinic staff workflows
- Physician and dentist access
- RBAC
- Privacy-focused architecture
- Clinical information management
- AI assistant integration

Suggested stack:

Next.js  
Supabase  
PWA  
AI Integration

Do not expose or fabricate sensitive medical information.

---

## PROJECT 4 — LikasLens

Title:

**LikasLens**

Category:

Environmental AI / Computer Vision

Description:

An offline-first environmental monitoring concept using computer vision and rule-based intelligence to support identification and reporting of environmental concerns.

Concepts:

- Computer Vision
- Environmental monitoring
- Offline-first architecture
- Structured incident reporting
- Rule-based reasoning
- Community-focused technology

Suggested technology:

PWA  
YOLO-based Computer Vision  
Graph/Rule-based Reasoning

---

## PROJECT 5 — FloodSense

Title:

**FloodSense**

Category:

IoT / Disaster Risk Reduction

Description:

A research and innovation concept for community flood monitoring and early warning using sensor-based water-level detection and communications technology.

Concepts:

- IoT
- Ultrasonic sensing
- Solar-powered deployment concept
- GSM/LTE communications
- Community alerts
- Disaster-risk reduction

Clearly identify this as a research/prototype concept unless evidence of deployment is supplied.

---

# 11. PROJECT FILTERING

Create filter controls:

All  
Web Systems  
AI  
Research  
EdTech  
FinTech  
IoT

Filtering must work with vanilla JavaScript.

Animate transitions subtly.

---

# 12. PROJECT DETAILS

Instead of creating unnecessary separate HTML pages, implement an accessible modal or expandable project-detail component.

Clicking:

**View Project**

should show:

Overview  
Problem  
Proposed Solution  
Key Features  
Technology  
My Role  
Status

Make the modal:

- keyboard accessible
- closable with Escape
- closable using a visible button
- focus managed
- responsive

---

# 13. RESEARCH & INNOVATION

Heading:

**Research & Innovation**

Create an academically styled section.

Intro:

"My research interests focus on applied computing and the design of technology solutions that address practical educational, organizational, environmental, and community challenges."

Research interests:

Artificial Intelligence  
Design Science Research  
Explainable AI  
Computer Vision  
Educational Technology  
Database Systems  
Digital Transformation  
IoT  
Decision Support Systems  
Community-Centered Computing

Create visual research cards rather than a plain bullet list.

Include a subsection:

**Current Research Directions**

Examples:

AI-assisted assessment systems  
Explainable technology-readiness assessment  
Programming misconception detection  
Environmental AI monitoring  
IoT-based community warning systems  
AI-assisted decision intelligence for microenterprises

Use careful wording such as:

"research interest"
"research direction"
"research concept"
"prototype"

Do not present unfinished research as completed or published research.

---

# 14. PROFESSIONAL EXPERIENCE

Heading:

**Professional Journey**

Use a vertical timeline.

Include:

### Assistant Professor II

Higher Education / Information Technology

Focus:

Teaching  
Curriculum delivery  
Software development education  
Student mentoring  
Research and innovation  
Technology projects

Do not invent employment dates.

---

### Information Technology Officer / Database Administrator

Government ICT environment

Focus:

Database administration  
Information systems  
ICT operations  
Data management  
Technical support

---

### Computer Programmer

Government ICT environment

Focus:

Software development  
Information systems support  
Data processing  
ICT services

If exact organizations or dates are not explicitly supplied, create placeholders rather than inventing them.

---

# 15. TEACHING SECTION

Heading:

**Teaching & Academic Work**

Create visually polished course cards for areas including:

Object-Oriented Programming

Fundamentals of Database Systems

Integrative Programming and Technologies

Desktop Application Development

Information Security

Software Development

Each card can show:

Course area  
Primary technologies  
Teaching focus

Add a short statement emphasizing practical, hands-on learning, programming exercises, laboratory work, project-based development, and real-world application.

---

# 16. MENTORSHIP & INNOVATION

Create a section:

**Mentorship & Innovation**

Explain that my academic role extends beyond classroom instruction into mentoring student technology projects, hackathons, innovation challenges, startup concepts, and applied research.

Potential categories:

Hackathons  
Startup Challenges  
AI Innovation  
Research Projects  
Capstone Mentoring  
Technology Competitions

Use a visual layout showing the relationship:

IDEA
↓
DESIGN
↓
BUILD
↓
TEST
↓
PRESENT

Do not invent competition victories.

Only state awards or placements when explicitly supplied in the content.

---

# 17. SELECTED ACHIEVEMENTS

Heading:

**Selected Highlights**

Create cards that can later be edited easily.

Include known items conservatively, such as:

**ASEAN AI Hackathon 2026**

Mentoring involvement with Team Syntaxure SEA / LikasLens.

Use wording that accurately distinguishes team achievements from personal awards.

**Startup & Innovation Mentoring**

Mentoring student teams in technology innovation and startup-development activities.

**Government ICT Experience**

Professional experience involving programming, database administration, and ICT systems.

Make this section data-driven in JavaScript if practical so new achievements can easily be added.

Do not fabricate certificates, awards, publications, or rankings.

---

# 18. PHILOSOPHY SECTION

Create a visually distinctive section with the heading:

**Technology with Purpose**

Write a short professional philosophy around this idea:

Technology should not exist merely because it can be built. Effective information systems should solve real problems, reduce complexity, support informed decisions, and create measurable value for the people who use them.

Connect this philosophy to:

Education  
Software Development  
Research  
Community Innovation

Keep the language concise and credible.

---

# 19. CONTACT SECTION

Heading:

**Let's Connect**

Supporting copy:

"I'm open to conversations around technology, research, academic collaboration, software development, innovation, and student mentorship."

Contact cards:

Email  
GitHub  
LinkedIn

Use placeholders:

YOUR_EMAIL  
YOUR_GITHUB_URL  
YOUR_LINKEDIN_URL

Do NOT invent contact information.

Because GitHub Pages does not provide a backend, DO NOT create a fake contact form that appears to submit data.

Either:

A. Use a mailto-based contact action

or

B. Show contact links only.

Preferred CTA:

**Send Me an Email**

---

# 20. FOOTER

Create a minimal footer.

Example:

© [current year] Rebie L. Danitaras. All rights reserved.

Built with HTML, CSS & JavaScript.

Generate the year dynamically using JavaScript.

Include:

Back to Top

GitHub  
LinkedIn  
Email

---

# 21. DARK / LIGHT MODE

Implement a fully functional theme toggle.

Requirements:

- Detect prefers-color-scheme
- Allow manual override
- Save preference using localStorage
- Avoid flash of incorrect theme where practical
- Accessible toggle button
- Proper icons for light/dark state

---

# 22. ANIMATIONS

Use subtle professional animations.

Implement:

- Fade-in on scroll
- Small card elevation on hover
- Smooth navigation
- Hero entrance
- Timeline reveal
- Skill-chip interaction
- Project filtering animation

Use IntersectionObserver.

Avoid:

- excessive parallax
- constant motion
- bouncing elements
- distracting particle effects
- animation that reduces readability

Respect reduced-motion preferences.

---

# 23. RESPONSIVE DESIGN

Explicitly optimize for:

320px mobile  
375px mobile  
430px mobile  
768px tablet  
1024px laptop  
1440px desktop  
1920px large desktop

Ensure there is:

- no horizontal overflow
- readable text
- appropriate tap targets
- responsive project grid
- responsive timeline
- responsive navigation
- responsive typography

Use CSS:

clamp()

where appropriate.

---

# 24. PERFORMANCE

Target excellent Lighthouse performance.

Optimize for:

Performance  
Accessibility  
Best Practices  
SEO

Avoid unnecessary JavaScript.

Lazy-load non-critical images:

loading="lazy"

Set explicit image dimensions where possible to reduce layout shift.

---

# 25. SEO

Include:

<title>Rebie L. Danitaras | IT Educator, Developer & Researcher</title>

Create an appropriate meta description.

Include:

Open Graph metadata  
Twitter/X card metadata  
Canonical URL placeholder  
Theme color  
Author metadata

Add basic Person structured data using JSON-LD.

Only include known information.

Do not invent:

social profiles  
address  
telephone number  
awards  
employer details

Use placeholders where required.

---

# 26. JAVASCRIPT FEATURES

script.js should implement:

1. Responsive mobile navigation
2. Theme switching
3. localStorage theme persistence
4. Active navigation section detection
5. Smooth scrolling
6. IntersectionObserver reveal animations
7. Project category filtering
8. Accessible project modal
9. Escape-key modal closing
10. Dynamic footer year
11. Back-to-top functionality
12. Graceful handling when optional DOM elements are absent

Keep JavaScript modular and readable.

Use functions instead of placing all logic into one large DOMContentLoaded callback.

---

# 27. CODE QUALITY

The generated code must be production-quality.

Requirements:

- semantic HTML
- organized CSS
- descriptive class names
- reusable components/patterns
- CSS custom properties
- no unnecessary duplication
- readable JavaScript
- comments only where useful
- no dead code
- no console errors
- no broken links
- no inline CSS unless absolutely necessary
- no inline JavaScript
- no fake API calls

Do not use placeholder Lorem Ipsum.

---

# 28. CONTENT INTEGRITY

This is extremely important.

Do NOT fabricate:

- awards
- publications
- employment dates
- companies
- universities
- research results
- certifications
- statistics
- GitHub repositories
- project deployment status
- project users
- startup revenue
- contact information

When information is unavailable, use clearly identifiable placeholders or omit it.

Differentiate carefully between:

COMPLETED PROJECT

PROTOTYPE

RESEARCH CONCEPT

PRE-MVP

ONGOING WORK

Do not turn concepts into fake completed products.

---

# 29. README

Create a professional README.md explaining:

# Rebie L. Danitaras — Portfolio

Then include:

- Project overview
- Technology stack
- Folder structure
- How to customize profile information
- How to replace images
- How to add projects
- How to add achievements
- How to update social links
- How to replace the CV
- Local preview instructions
- GitHub Pages deployment instructions

Include GitHub Pages instructions:

Repository
→ Settings
→ Pages
→ Deploy from a branch
→ main
→ /root
→ Save

Explain that the final URL will typically follow:

https://USERNAME.github.io/REPOSITORY/

Also explain the special case where the repository is named:

USERNAME.github.io

---

# 30. PLACEHOLDER MANAGEMENT

Create an obvious configuration area near the beginning of script.js or clearly documented HTML comments for values I need to replace.

Examples:

YOUR_EMAIL
YOUR_GITHUB_URL
YOUR_LINKEDIN_URL
YOUR_CANONICAL_URL
YOUR_PROFILE_PHOTO
YOUR_CV_FILE

Make these easy to search and replace.

---

# 31. FINAL VALIDATION

After building the website, perform a full review.

Check:

[ ] index.html works by opening it directly  
[ ] CSS loads  
[ ] JavaScript loads  
[ ] Navigation works  
[ ] Mobile navigation works  
[ ] All sections exist  
[ ] Dark mode works  
[ ] Theme preference persists  
[ ] Project filters work  
[ ] Project modal works  
[ ] Escape closes modal  
[ ] No horizontal mobile overflow  
[ ] No console errors  
[ ] Images have alt attributes  
[ ] Buttons have accessible labels where needed  
[ ] Keyboard navigation works  
[ ] Focus indicators are visible  
[ ] prefers-reduced-motion is respected  
[ ] GitHub Pages relative paths are correct  
[ ] No localhost URLs exist  
[ ] No Windows file paths exist  
[ ] No fabricated professional claims exist  
[ ] No fake links are presented as real links  
[ ] Footer year is dynamic  
[ ] Site works without a backend  
[ ] README contains deployment instructions

Fix any issue found during validation before considering the task complete.

---

# 32. FINAL OUTPUT

Build the COMPLETE WEBSITE.

Do not only explain what should be built.

Create all required files:

index.html  
css/style.css  
js/script.js  
README.md  
.gitignore

Where images or documents are required, reference sensible paths under:

assets/images/
assets/documents/

At the end, provide:

1. Final project directory tree
2. Files created
3. Features implemented
4. Placeholder values I still need to replace
5. GitHub Pages deployment steps
6. Final QA checklist showing PASS / NEEDS USER CONTENT
7. Any item requiring my actual personal information

The final result should feel like the professional digital portfolio of an IT educator, software developer, researcher, and technology innovator—not a generic portfolio template.