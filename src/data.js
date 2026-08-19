// ============================================================================
// SITE CONTENT — single source of truth. Edit this file to update the site.
// ============================================================================

export const profile = {
  name: 'Lamim Zakir Pronay',
  kicker: 'Applied AI/ML Research',
  role: 'Applied AI/ML Researcher',
  tagline:
    "I study efficient, interpretable deep learning for high-stakes, data-constrained domains — medical imaging and structured knowledge. Applying to PhD programs for Fall 2027.",
  about: [
    'I work on applied AI/ML research with five publications spanning vision-language models for medical imaging, knowledge distillation, explainable Vision Transformers, and few-shot knowledge graph completion. I hold a PGDM in Business Management from IIM Visakhapatnam and a B.Tech in Computer Science & Engineering from NIT Andhra Pradesh, with research experience at IIT Mandi and IIT Ropar.',
    "I currently work as a Software Development Engineer II at Accelerize360, building Salesforce and Java-based systems for a financial institution — work that keeps my engineering sharp alongside research. I'm applying to PhD programs for Fall 2027, looking to continue the thread running through my publications: making deep learning models more efficient, interpretable, and reliable in domains where data is scarce and errors are costly."
  ],
  email: 'pronayfarab03@gmail.com',
  phone: null, // intentionally omitted from public display
  location: 'Dhaka, Bangladesh',
  links: {
    linkedin: 'https://www.linkedin.com/in/lamim-zakir-pronay/',
    github: 'https://github.com/LamimZakirPronay',
    // TODO: still unverified — a Scholar search hit returned a co-author's
    // profile (Rupesh Kumar Yadav Mediboyina, IIT Bombay), not yours, so
    // this is left out rather than linking the wrong person. Send me your
    // actual Scholar profile URL and I'll wire it in.
    scholar: 'https://scholar.google.com/citations?user=REPLACE_ME'
  }
};

export const publications = [
  {
    title:
      'Comparative Evaluation of Vision–Language Models for Detecting and Localizing Dental Lesions from Intraoral Images',
    venue: 'Journal of Imaging (Q1)',
    year: '2026',
    summary:
      'Evaluated state-of-the-art VLMs for automated detection and localization of dental lesions, designing experimental pipelines comparing multiple VLM architectures on clinical intraoral datasets.',
    doi: '10.3390/jimaging12010022'
  },
  {
    title: 'Similarity Aware Few-Shot Learning for Knowledge Graph Completion (SAFSL)',
    venue: 'Springer, Cham — Next-Generation Networks and Deployable AI 2025',
    year: '2026',
    summary:
      'A few-shot learning approach for knowledge graph completion incorporating semantic similarity and translational properties, with an intuitive negative-sampling method and a cosine-similarity + translation-distance scoring function.',
    doi: '10.1007/978-3-032-15401-9_8'
  },
  {
    title: 'FAKD-XAI: Feature-Aligned Knowledge Distillation with Explainable AI for Efficient Brain Tumor Classification',
    venue: 'Springer, Cham — ICDSAIA 2025',
    year: '2025',
    summary:
      'Logit-level and adaptive intermediate feature-level knowledge distillation from ResNet-50 to MobileNetV3-Large — 99.47% accuracy on Brain Tumor MRI at 5.25ms inference, suitable for real-time clinical deployment.',
    doi: '10.1007/978-3-032-11335-1_30'
  },
  {
    title:
      'MRAViT-XAI: A Novel Multi-Resolution Attention Vision Transformer Framework with Explainable AI for Enhanced Lung and Colon Cancer Classification',
    venue: 'IEEE Xplore — QPAIN 2025',
    year: '2025',
    summary:
      'A Vision Transformer framework with multi-resolution attention achieving 99.90% accuracy on LC25000, integrating LIME for visual interpretability of cancer classification decisions.',
    doi: '10.1109/QPAIN66474.2025.11172105'
  },
  {
    title: 'Graph-Based Stance Grouping in Multi-Participant Discussions',
    venue: 'Springer Nature — ICSICE 2024',
    year: '2025',
    summary:
      'A stance-propagation model using the Heat Diffusion algorithm to group user stances in online debates, modeling users as graph nodes and interactions as edges in CreateDebate threads.',
    doi: '10.2991/978-94-6463-718-2_131'
  }
];

export const researchExperience = [
  {
    role: 'Research Intern — Network Systems Research Group',
    org: 'Indian Institute of Technology Mandi',
    location: 'Mandi, India (Remote)',
    start: '2024-09',
    end: '2024-12',
    bullets: [
      'Researched next-generation transport protocols under Dr. P. Manjunath, studying QUIC fundamentals — connection establishment, stream multiplexing, and packet encryption.',
      'Benchmarked four congestion control algorithms (BBR, CUBIC, NewReno, Vegas) integrated with QUIC across simple and complex bottleneck topologies using ns-3.',
      'Quantified how algorithm choice and bottleneck complexity affect throughput, latency, and congestion-control efficiency, providing empirical insights for protocol optimization.'
    ]
  },
  {
    role: 'Summer Research Intern — Autonomous UAV Landing',
    org: 'Indian Institute of Technology Ropar',
    location: 'Rupnagar, India',
    start: '2023-05',
    end: '2023-07',
    bullets: [
      'Designed a computer-vision-based drone landing system on moving UGVs, studying policy-gradient and Q-learning approaches for real-time guidance in dynamic environments.',
      'Implemented vehicle control using ROS and C-based motor controllers, with YOLO-based visual target detection for UGV localization.',
      'Validated the complete framework in Gazebo, iteratively testing control strategies and vision pipelines against manually flown baseline trajectories.'
    ]
  }
];

export const education = [
  {
    school: 'Indian Institute of Management Visakhapatnam',
    degree: 'PGDM in Business Management — CGPA 3.35/4 (Director’s Merit List)',
    location: 'Visakhapatnam, India',
    start: '2024-03',
    end: '2025-03'
  },
  {
    school: 'National Institute of Technology Andhra Pradesh',
    degree: 'B.Tech, Computer Science & Engineering — Minor: AI for Signal Processing — CGPA 7.91/10',
    location: 'Tadepalligudem, India',
    start: '2020-12',
    end: '2024-04'
  }
];

export const teaching = [
  {
    role: 'Teaching Assistant — Data Structures & Algorithms Lab',
    org: 'National Institute of Technology Andhra Pradesh',
    start: '2023-01',
    end: '2023-12',
    note: 'Lectures on algorithm design and complexity analysis; hands-on lab sessions for 213 students.'
  },
  {
    role: 'Teaching Assistant — Operating Systems Lab',
    org: 'National Institute of Technology Andhra Pradesh',
    start: '2022-08',
    end: '2022-12',
    note: 'Customized an xv6 kernel to teach system-call mechanisms and kernel-level operations to 213 students.'
  }
];

export const experience = [
  {
    role: 'Software Development Engineer II',
    org: 'Accelerize360',
    location: 'Dallas, United States (Remote)',
    start: '2024-01',
    end: null,
    bullets: [
      'Build Salesforce and Java-based systems for a financial institution’s insurance line of business — Omnistudio, Flow Orchestration, and Agentforce.',
      'Engineer integrations with Apex, LWC, and SOQL across MuleSoft and Zapier; hold five Salesforce certifications.'
    ]
  },
  {
    role: 'Software Business Analyst',
    org: 'Appinion BD Limited',
    location: 'Gulshan 01, Dhaka',
    start: '2025-11',
    end: '2026-05',
    bullets: [
      'Directed requirement engineering across Fintech, EdTech, Healthcare, and FMCG, translating business cases into formal specs.',
      'Bridged developers and stakeholders, managed agile sprints, and led client training sessions.'
    ]
  },
  {
    role: 'Project Manager',
    org: 'Bright Future Soft',
    location: 'Mirpur, Bangladesh (Remote)',
    start: '2025-07',
    end: '2025-10',
    bullets: [
      'Directed the full project lifecycle — task assignment, code QA, and daily delivery tracking.',
      'Led product conception and low-level system design; pitched technical roadmaps to investors and clients.'
    ]
  },
  {
    role: 'Machine Learning Intern — Generative AI & Cloud Infrastructure',
    org: 'Radiance AI',
    location: 'San Jose, United States (Remote)',
    start: '2023-05',
    end: '2023-07',
    bullets: [
      'Built a Stable Diffusion + ControlNet pipeline for product image generation, deployed via Docker on AWS EKS.'
    ]
  },
  {
    role: 'Data Science Intern',
    org: 'Upwork',
    location: 'Remote',
    start: '2023-03',
    end: '2023-05',
    bullets: [
      'Optimized ML model architectures, achieving a 15–20% average performance improvement on an industry-scale codebase.'
    ]
  }
];

export const projects = [
  {
    title: 'LoRa Mesh Network for Forest Surveillance',
    stack: ['LoRa E22', 'ESP32', 'Raspberry Pi', 'Edge AI'],
    summary:
      'A multi-node LoRa mesh network across a 5 km radius in Bandarban forest, with multi-hop relay routing and Raspberry Pi edge-AI computer vision for real-time unauthorized-movement detection.'
  },
  {
    title: '5-DOF Robotic Arm with Intelligent Control',
    stack: ['Raspberry Pi', 'OpenCV', 'Embedded Systems'],
    summary:
      'Real-time motor control via Raspberry Pi 4, with a color-based pick-and-place system, a MinMax-driven Tic-Tac-Toe interface, and gesture-based control via sign-language recognition.'
  }
];

export const leadership =
  'Secretary, Artificial Intelligence & Robotics Club at NIT Andhra Pradesh (2022–2024) — led robotics projects including a MARS ROVER initiative and a Pixhawk-based surveillance drone, and mentored 200+ members.';

export const skills = {
  'Machine Learning': ['Vision Transformers', 'Knowledge Distillation', 'Few-Shot Learning', 'Explainable AI (LIME)', 'Stable Diffusion'],
  'Languages & Frameworks': ['Python', 'Java', 'Apex', 'JavaScript', 'ROS'],
  'Systems & Tools': ['ns-3', 'Gazebo', 'OpenCV', 'Docker', 'AWS', 'ESP32 / LoRa']
};
