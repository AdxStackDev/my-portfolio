export const personalInfo = {
  name: "Aditya Kumar Dixit",
  title: "Full-Stack Developer",
  subtitle: "PHP · Laravel · Python · React · React Native · AI/ML · Cloud",
  location: "Ahmedabad, Gujarat, India",
  email: "dixit99304@gmail.com",
  phone: "+91 9990662773",
  github: "https://github.com/AdxStackDev",
  linkedin: "https://www.linkedin.com/in/aditya-dixit-6b10a625b",
  summary:
    "Results-driven Full-Stack Developer with 6+ years of hands-on experience architecting and shipping scalable web and mobile applications across fintech, healthcare, and enterprise domains. Specialist in PHP/Laravel back-end systems, RESTful API design, and React/React Native front-end engineering. Deep expertise in third-party financial platform integrations (KYC/AML, payments, CRM), database performance optimisation with Redis and Elasticsearch, and cloud-native deployments on AWS, Oracle Cloud, and Vercel. Driven by a passion for AI/ML, with active personal projects exploring RAG pipelines, local LLMs via Ollama, YOLO-based computer vision, and real-time data dashboards.",
};

export const workExperience = [
  {
    company: "Azine Web Technologies",
    location: "Ahmedabad, India",
    position: "PHP Developer",
    period: "June 2025 – Present",
    achievements: [
      "Architected a Laravel-based KYC/AML/Prefill integration suite (IDMERIT) handling identity verification, Aadhaar validation, and AML screening with Passport token auth and rate-limited API gateways.",
      "Designed MySQL and MongoDB database schemas with Redis caching layers and Elasticsearch full-text indexing, reducing average query response time by ~60%.",
      "Built the IDMERIT KYX React.js dashboard — a multi-tenant identity verification portal featuring RBAC, multi-tier subscription management, and real-time verification status tracking.",
      "Integrated front-end React components seamlessly with Laravel back-end via RESTful APIs; implemented reusable component libraries and standardised API response patterns.",
      "Led cross-functional code reviews and collaborated with QA teams to deliver secure, scalable, production-ready features on aggressive timelines.",
    ],
  },
  {
    company: "JoomDev",
    location: "Ahmedabad, India",
    position: "Full Stack / PHP Developer",
    period: "Feb 2023 – Feb 2025",
    achievements: [
      "Engineered RESTful API integrations for four fintech platforms — Fundkite, Juice Financial, Sensible, and MoneyThumb — enabling automated loan origination, document analysis, and financial data exchange workflows.",
      "Integrated Thomson Reuters Clear for compliance screening and KYC verification within the lead management pipeline.",
      "Built HealthWell, a full-stack reimbursement portal (React + Laravel) with multi-level admin hierarchy, automated claim processing engine, OTP-based patient authentication, and real-time claim status dashboards.",
      "Automated 12+ business workflows using Pipedream; integrated Shopify, Square, QuickBooks, Rutter, HubSpot CRM, and Vtiger CRM.",
      "Developed a PDF/Excel processing pipeline leveraging Dropbox storage, reducing manual document handling time by ~70% for reimbursement claims.",
      "Managed AWS S3 bucket policies and IAM roles for secure document storage; maintained full technical documentation on GitHub and GitBook.",
    ],
  },
  {
    company: "WebMintra Technologies Pvt. Ltd.",
    location: "Ahmedabad, India",
    position: "Full Stack / PHP Developer",
    period: "April 2021 – Jan 2023",
    achievements: [
      "Developed the Overseas Education Lane portal — a Laravel-based multi-role platform for international education agencies managing partner universities, course catalogues, student applications, and agent workflows.",
      "Implemented OAuth2 SSO flows and session management for seamless cross-role authentication (agents, universities, administrators, students).",
      "Built custom CodeIgniter modules for education portals serving clients across the UK, Canada, and Australia, including application tracking, document upload, and offer letter management.",
      "Conducted database normalisation and query optimisation (indexing strategies, query caching), improving portal load times significantly.",
    ],
  },
  {
    company: "Capgemini India (HCSC Process)",
    location: "Ahmedabad, India",
    position: "Process Associate",
    period: "June 2019 – April 2021",
    achievements: [
      "Managed large-scale health insurance data records for HCSC (Health Care Service Corporation) using MySQL and CodeIgniter; ensured HIPAA-compliant data handling with 99.9% accuracy.",
      "Created, reviewed, and maintained benefit documentation (ASO, HMO, PPO, Dental plan books) for enterprise policyholders, processing 500+ records monthly.",
      "Streamlined data intake and validation workflows, reducing processing errors by 35% through automation scripts and checklist-based QA processes.",
    ],
  },
  {
    company: "FranConnect",
    location: "Noida, India",
    position: "Internship Trainee",
    period: "June 2018 – December 2018",
    achievements: [
      "Completed foundational professional training in web application development using PHP and MySQL.",
      "Contributed to internal tooling and supported senior developers in client-facing project delivery.",
    ],
  },
];

export const education = [
  {
    institution: "IEC College of Engineering and Technology",
    location: "Greater Noida, India",
    degree: "B.Tech — Computer Science & Engineering",
    period: "Aug 2014 – Nov 2018",
    affiliation: "Affiliated to AKTU (Dr. A.P.J. Abdul Kalam Technical University)",
  },
  {
    institution: "St. Mary's Inter College",
    location: "India",
    degree: "High School Diploma",
    period: "",
    affiliation: "",
  },
];

export const skills = {
  backend: [
    "PHP 8.x", "Laravel 12/13", "CodeIgniter", "Python",
    "Flask", "Django", "FastAPI", "Node.js",
  ],
  frontend: [
    "React.js", "React Native", "JavaScript (ES6+)", "TypeScript",
    "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Livewire", "AJAX",
  ],
  databases: [
    "MySQL", "MongoDB", "Redis", "Elasticsearch", "SQLite", "PostgreSQL",
  ],
  cloudAndDevOps: [
    "AWS S3/EC2", "Oracle Cloud", "Render", "Vercel",
    "Docker", "GitHub Actions", "Cron Jobs", "cURL",
  ],
  aiAndMl: [
    "YOLO (Ultralytics)", "Ollama", "PyTorch", "ONNX",
    "Scikit-learn", "Pandas", "NumPy", "RAG Pipelines",
  ],
  apiAndAuth: [
    "RESTful APIs", "GraphQL", "OAuth 2.0", "JWT",
    "Laravel Sanctum", "Laravel Passport", "Microservices",
  ],
  integrations: [
    "IDMERIT KYC/AML", "Shopify", "Square", "QuickBooks", "Rutter",
    "HubSpot", "Vtiger CRM", "Pipedream", "Dropbox", "Juice Financial",
    "Fundkite", "Sensible", "MoneyThumb", "Thomson Reuters Clear",
    "Gmail API", "Google Maps API", "Prokerala API",
  ],
  tools: [
    "Git / GitHub", "GitBook", "Postman", "Figma",
    "Power BI", "Vite", "Composer", "NPM", "Astro",
  ],
};

export const projects = [
  {
    title: "IDMERIT KYX Dashboard",
    duration: "Aug – Oct 2025",
    company: "Azine Web Technologies",
    tech: "React.js, Laravel, MySQL, Redis, Elasticsearch, Passport Auth",
    description: [
      "Multi-tenant identity verification dashboard with RBAC — supporting Admin, Operator, and Client roles with granular permission controls.",
      "Integrated live KYC/AML/Prefill API calls with real-time verification status tracking, result caching via Redis, and audit log storage in Elasticsearch.",
      "Subscription management module with tier-based API quota enforcement, automated billing alerts, and usage analytics charts.",
    ],
  },
  {
    title: "HealthWell Reimbursement Portal",
    duration: "Mar – Jun 2024",
    company: "JoomDev",
    tech: "React.js, Laravel, MySQL, AWS S3, Pipedream, Dropbox API",
    description: [
      "End-to-end reimbursement management system covering claim submission, multi-level admin approval (L1/L2/L3), patient data management, and automated payout triggers.",
      "Integrated Dropbox and AWS S3 for encrypted document storage; built PDF processing pipeline to parse claim documents and extract structured data automatically.",
      "Automated email/SMS notifications for claim status changes using Pipedream, reducing support queries by ~40%.",
    ],
  },
  {
    title: "Laravel RAG Document Analyst",
    duration: "2026",
    company: "Personal Project",
    tech: "Laravel 13, PHP 8.3, Ollama (qwen2.5-coder:7b), SQLite, Tailwind CSS v4, Vite",
    github: "https://github.com/AdxStackDev/laravel_rag_doc_analyst",
    description: [
      "100% local, privacy-first Retrieval-Augmented Generation (RAG) knowledge base — no cloud API dependency, all inference runs on-device via Ollama.",
      "Supports ingestion and semantic search across PDF, Word (.docx), and Excel documents using smalot/pdfparser, phpoffice/phpword, and phpoffice/phpspreadsheet.",
      "Implements vector similarity search with SQLite backend and Google Custom Search API as a fallback for web-augmented queries.",
    ],
  },
  {
    title: "ML Skin Condition Detector",
    duration: "2026",
    company: "Personal Project",
    tech: "Python, FastAPI, Ultralytics YOLO, Tailwind CSS, Uvicorn, aiofiles",
    github: "https://github.com/AdxStackDev/ml_skin1",
    description: [
      "AI-powered web application using 5 specialised YOLO models trained on dermatological datasets for detection of acne, scars, dark circles, eyebags, and wrinkles.",
      "FastAPI async back-end with aiofiles for non-blocking image uploads; Tailwind CSS responsive front-end with live preview and annotated bounding box output.",
      "Returns confidence scores and severity classification per detected condition; supports webcam capture and image upload.",
    ],
  },
  {
    title: "NSE F&O Options Dashboard",
    duration: "2026",
    company: "Personal Project",
    tech: "PHP 7.4+, cURL, Vanilla CSS, HTML, SVG, Vercel",
    live: "https://php-nse-oi-data.vercel.app",
    description: [
      "Professional-grade NSE Futures & Options open interest analytics dashboard fetching live data from NSE via cURL with zero external dependencies.",
      "Visualises OI buildup, PCR ratios, and top gainers/losers across contracts using pure PHP and SVG-based charts — no JS framework required.",
      "Deployed serverless on Vercel with PHP runtime; auto-refreshes market data on each request during trading hours.",
    ],
  },
  {
    title: "Larav Eventos — Event Management",
    duration: "2026",
    company: "Personal Project",
    tech: "Laravel 12, MongoDB, PHP, Laravel Sanctum, Tailwind CSS, Vite, PHPUnit",
    github: "https://github.com/AdxStackDev/larav_eventos",
    description: [
      "Comprehensive RESTful API for managing events, tickets, subscriptions, categories, locations, and tags on a MongoDB back-end.",
      "Laravel Sanctum token authentication with role-based access for organisers and attendees; full CRUD with pagination, filtering, and search.",
      "100% PHPUnit test coverage on all API endpoints; documented with Postman collection.",
    ],
  },
  {
    title: "Gmail Bulk Manager",
    duration: "2026",
    company: "Personal Project",
    tech: "PHP 7.4+, Google Gmail API v1, Google OAuth 2.0, Tailwind CSS, Vercel",
    live: "https://gmail-bulk-manger.vercel.app",
    description: [
      "Web app for bulk Gmail operations — label management, mass delete, archiving, and unsubscribe automation — via the Gmail API v1.",
      "Full OAuth 2.0 flow with token refresh; built entirely in PHP with Tailwind CSS UI; deployed on Vercel.",
    ],
  },
  {
    title: "App Sanatan — React Native App",
    duration: "2026",
    company: "Personal Project",
    tech: "React Native, JavaScript, Axios, Prokerala API, React Navigation, Metro",
    github: "https://github.com/AdxStackDev/app_sanatan",
    description: [
      "Cross-platform devotional app for the Hindu community featuring daily panchang, festival calendar, temple locator, and astrology data sourced from the Prokerala API.",
      "Drawer + native-stack navigation; linear gradient UI theming; Jest unit tests for core services.",
    ],
  },
];

export const certifications = [
  {
    name: "AWS SimuLearn: Cloud First Steps",
    issuer: "Amazon Web Services",
    date: "April 2026",
    icon: "☁️",
  },
  {
    name: "Design Power BI Reports",
    issuer: "Microsoft Learn",
    date: "2025",
    icon: "📊",
  },
  {
    name: "Power BI for Beginners",
    issuer: "Simplilearn",
    date: "2025",
    icon: "📈",
  },
  {
    name: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2024",
    icon: "🐍",
  },
  {
    name: "PHP Developer Certification",
    issuer: "Sololearn",
    date: "July 2022",
    icon: "🐘",
  },
];