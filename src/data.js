// ============================================================================
// SITE CONTENT — single source of truth. Edit this file to update the site.
// ============================================================================

export const profile = {
  name: 'Lamim Zakir Pronay',
  role: 'Software Engineer — Full-Stack, Salesforce & Applied AI',
  tagline:
    'I build production systems for financial institutions by day and publish research on vision-language models and few-shot learning by night.',
  email: 'pronayfarab03@gmail.com',
  phone: null, // intentionally omitted from public display
  location: 'Dhaka, Bangladesh',
  links: {
    linkedin: 'https://www.linkedin.com/in/lamim-zakir-pronay/',
    // TODO: I couldn't confidently find/verify these — a Scholar search hit
    // returned a co-author's profile (Rupesh Kumar Yadav Mediboyina, IIT
    // Bombay), not yours, so I left it out rather than link the wrong person.
    github: 'https://github.com/REPLACE_ME',
    scholar: 'https://scholar.google.com/citations?user=REPLACE_ME'
  }
};

// domain used to auto-fetch a company/institute logo. If it 404s client-side
// falls back to a generated monogram badge automatically — no broken images.
export const experience = [
  {
    role: 'Software Development Engineer II',
    org: 'Accelerize360',
    domain: 'accelerize360.com',
    location: 'Dallas, United States (Remote)',
    start: '2024-01',
    end: null,
    bullets: [
      'Built solutions for a large financial institution in the insurance industry using Omnistudio, Flow Orchestration, and Agentforce curated for their business cases.',
      'Engineered scalable solutions with Apex, LWC, SOS, SOQL and Java, building robust integrations using MuleSoft and Zapier for seamless end-to-end experiences.',
      'Managed the full development lifecycle with Gearset and Bitbucket while acting as a client-facing technical advisor, backed by five Salesforce certifications.'
    ]
  },
  {
    role: 'Software Business Analyst',
    org: 'Appinion BD Limited',
    domain: 'appinionbd.com',
    location: 'Gulshan 01, Dhaka',
    start: '2025-11',
    end: '2026-05',
    bullets: [
      'Directed requirement engineering across Fintech, EdTech, Healthcare, and FMCG, translating business cases into formal SRS documentation and functional specs.',
      'Bridged communication between developers and stakeholders, managed agile sprints, conducted internal QA, and led client training sessions.',
      'Mitigated project scope risk and managed commercial operations including AMCs, billing, and strategic solution design.'
    ]
  },
  {
    role: 'Project Manager',
    org: 'Bright Future Soft',
    domain: 'brightfuturesoft.com',
    location: 'Mirpur, Bangladesh (Remote)',
    start: '2025-07',
    end: '2025-10',
    bullets: [
      'Directed the full project lifecycle — task assignment, code QA, and daily delivery tracking.',
      'Architected scalable products, leading product conception and low-level system design.',
      'Pitched product vision and technical roadmaps to investors and clients to secure buy-in.'
    ]
  },
  {
    role: 'Research Intern — Network Systems Research Group',
    org: 'Indian Institute of Technology Mandi',
    domain: 'iitmandi.ac.in',
    location: 'Mandi, India (Remote)',
    start: '2024-09',
    end: '2024-12',
    bullets: [
      'Researched next-generation transport protocols under Dr. P. Manjunath.',
      "Focused on the QUIC protocol's BBR congestion control across diverse network topologies.",
      'Used ns-3 to evaluate throughput, latency, and congestion-control efficiency.'
    ]
  },
  {
    role: 'Machine Learning Intern — Generative AI & Cloud Infrastructure',
    org: 'Radiance AI',
    domain: 'radianceai.com',
    location: 'San Jose, United States (Remote)',
    start: '2023-05',
    end: '2023-07',
    bullets: [
      'Worked on Stable Diffusion models for product image generation, integrating ControlNet for fine-tuned outputs.',
      'Developed front-end interfaces using React, Next.js, Tailwind CSS, and TypeScript.',
      'Managed deployment using Docker, AWS EKS, and Kubernetes for scalable, cloud-native apps.'
    ]
  },
  {
    role: 'Summer Research Intern — Autonomous UAV Landing',
    org: 'Indian Institute of Technology Ropar',
    domain: 'iitrpr.ac.in',
    location: 'Rupnagar, India',
    start: '2023-05',
    end: '2023-07',
    bullets: [
      'Designed a computer-vision-based drone landing system on UGVs using reinforcement learning in Gazebo.',
      'Used ROS for real-time system communication and coordination.',
      'Validated the framework in simulated environments for deployment feasibility.'
    ]
  },
  {
    role: 'Data Science Intern',
    org: 'Upwork',
    domain: 'upwork.com',
    location: 'Remote',
    start: '2023-03',
    end: '2023-05',
    bullets: [
      'Optimized ML model architectures, achieving a 15-20% average performance improvement on an industry-scale codebase.',
      'Built web-scraping pipelines with rigorous cleaning and preprocessing for model training data.'
    ]
  }
];

export const teaching = [
  {
    role: 'Teaching Assistant — Data Structures & Algorithms Lab',
    org: 'National Institute of Technology Andhra Pradesh',
    domain: 'nitandhra.ac.in',
    start: '2023-08',
    end: '2023-12'
  },
  {
    role: 'Teaching Assistant — Operating Systems Lab',
    org: 'National Institute of Technology Andhra Pradesh',
    domain: 'nitandhra.ac.in',
    start: '2022-08',
    end: '2022-12'
  }
];

export const education = [
  {
    school: 'Indian Institute of Management Visakhapatnam',
    domain: 'iimv.ac.in',
    degree: 'PGDM in Business Management — CGPA 3.35/4 (Director’s Merit List)',
    location: 'Visakhapatnam, India',
    start: '2024-03',
    end: '2025-03'
  },
  {
    school: 'National Institute of Technology Andhra Pradesh',
    domain: 'nitandhra.ac.in',
    degree: 'B.Tech, Computer Science & Engineering — Minor: AI for Signal Processing — CGPA 7.91/10',
    location: 'Tadepalligudem, India',
    start: '2020-12',
    end: '2024-04'
  }
];

export const publications = [
  {
    title:
      'Comparative Evaluation of Vision–Language Models for Detecting and Localizing Dental Lesions from Intraoral Images',
    venue: 'Journal of Imaging (Q1)',
    year: '2026',
    domain: 'mdpi.com',
    summary:
      'Evaluated state-of-the-art VLMs for automated detection and localization of dental lesions, designing experimental pipelines comparing multiple VLM architectures on clinical intraoral datasets.',
    doi: '10.3390/jimaging12010022'
  },
  {
    title: 'Similarity Aware Few-Shot Learning for Knowledge Graph Completion (SAFSL)',
    venue: 'Springer, Cham — Next-Generation Networks and Deployable AI 2025',
    year: '2026',
    domain: 'springer.com',
    summary:
      'A few-shot learning approach for knowledge graph completion incorporating semantic similarity and translational properties, with an intuitive negative-sampling method and a cosine-similarity + translation-distance scoring function.',
    doi: '10.1007/978-3-032-15401-9_8'
  },
  {
    title: 'FAKD-XAI: Feature-Aligned Knowledge Distillation with Explainable AI for Efficient Brain Tumor Classification',
    venue: 'Springer, Cham — ICDSAIA 2025',
    year: '2025',
    domain: 'springer.com',
    summary:
      'Logit-level and adaptive intermediate feature-level knowledge distillation from ResNet-50 to MobileNetV3-Large — 99.47% accuracy on Brain Tumor MRI at 5.25ms inference, suitable for real-time clinical deployment.',
    doi: '10.1007/978-3-032-11335-1_30'
  },
  {
    title:
      'MRAViT-XAI: A Novel Multi-Resolution Attention Vision Transformer Framework with Explainable AI for Enhanced Lung and Colon Cancer Classification',
    venue: 'IEEE Xplore — QPAIN 2025',
    year: '2025',
    domain: 'ieee.org',
    summary:
      'A Vision Transformer framework with multi-resolution attention achieving 99.90% accuracy on LC25000, integrating LIME for visual interpretability of cancer classification decisions.',
    doi: '10.1109/QPAIN66474.2025.11172105'
  },
  {
    title: 'Graph-Based Stance Grouping in Multi-Participant Discussions',
    venue: 'Springer Nature — ICSICE 2024',
    year: '2025',
    domain: 'springer.com',
    summary:
      'A stance-propagation model using the Heat Diffusion algorithm to group user stances in online debates, modeling users as graph nodes and interactions as edges in CreateDebate threads.',
    doi: '10.2991/978-94-6463-718-2_131'
  }
];

export const projects = [
  {
    title: 'Ruma Tourism Entry System',
    stack: ['Laravel', 'PHP', 'MySQL'],
    summary:
      "The country's first digital tourism management software for a restricted tourist area — submitted-form PDF generation, thermal token printing, and full audit tracking for security and RBAC.",
    link: null
  },
  {
    title: 'NIT Andhra Pradesh Alumni Website',
    stack: ['PHP', 'MySQL'],
    summary:
      'An interactive alumni portal with secure login and encrypted data storage — registration, profile editing, alumni search, and job postings/seeking.',
    link: null
  },
  {
    title: '5-DOF Robotic Arm with Intelligent Control',
    stack: ['Raspberry Pi', 'Python', 'OpenCV', 'Embedded Systems'],
    summary:
      'Precise real-time motor control via Raspberry Pi 4, a color-based pick-and-place system with OpenCV, a MinMax-driven Tic-Tac-Toe interface, and gesture-based control via sign-language recognition.',
    link: null
  }
];

export const leadership = [
  {
    role: 'Secretary — Artificial Intelligence & Robotics Club',
    org: 'National Institute of Technology Andhra Pradesh',
    domain: 'nitandhra.ac.in',
    start: '2022',
    end: '2024',
    bullets: [
      'Led high-impact robotics projects: a 5-DOF color-sorting robot, hand-gesture recognition robot, and dynamically controlled robotic arm.',
      'Spearheaded the MARS ROVER initiative and deployed a Hexacopter surveillance drone with Raspberry Pi and Pixhawk.',
      'Mentored 200+ members across strategic planning, project management, and team coordination.'
    ]
  }
];

export const skills = {
  Languages: ['Java', 'PHP', 'Python', 'Apex', 'TypeScript', 'JavaScript'],
  'Web & Frameworks': ['Laravel', 'React', 'Next.js', 'LWC', 'Tailwind CSS'],
  'Salesforce Ecosystem': ['Omnistudio', 'Flow Orchestration', 'Agentforce', 'SOQL', 'Gearset'],
  'AI / ML': ['Vision Transformers', 'Knowledge Distillation', 'Stable Diffusion', 'ControlNet', 'LIME / XAI'],
  'Cloud & DevOps': ['Docker', 'AWS EKS', 'Kubernetes', 'Bitbucket', 'MuleSoft', 'Zapier'],
  'Systems & Robotics': ['ROS', 'Gazebo', 'ns-3', 'OpenCV', 'Raspberry Pi']
};
