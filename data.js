const resumeData = {
  personal: {
    name: "Khadeeja BiBi",
    title: "Mathematician · AI Engineer · Educator",
    tagline: "Building intelligent systems at the intersection of mathematics, machine learning, and education.",
    email: "callme.khadeejabb@gmail.com",
    avatar: "dp.jpg", // Verified visible URL
    social: [
      { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/khadeeja-ansari-907863358/" },
      { label: "GitHub",   icon: "github",   url: "https://github.com/khadeeja-bb" },
      { label: "LeetCode", icon: "code",     url: "https://leetcode.com/u/Khadeeja__Ansari" },
      { label: "Email",    icon: "mail",     url: "mailto:callme.khadeejabb@gmail.com" }
    ],
    nav: [
      { label: "Achievements", icon: "trophy",         id: "achievements" },
      { label: "Education",    icon: "graduation-cap", id: "education"    },
      { label: "Experience",   icon: "briefcase",      id: "experience"   },
      { label: "Projects",     icon: "folder-open",    id: "projects"     },
      { label: "Leadership",   icon: "users",          id: "leadership"   },
      { label: "Skills",       icon: "zap",            id: "skills"       }
    ],
    stats: [
      { value: "3.84", label: "CGPA",       suffix: "/4.0" },
      { value: "115+", label: "LeetCode",   suffix: ""     },
      { value: "4+",   label: "Hackathons", suffix: ""     },
      { value: "6.5",  label: "IELTS",      suffix: ""     }
    ]
  },

  achievements: [
    { text: "Gold Medal in Mathematics for outstanding academic excellence at University of Gujrat.", badge: "🥇 Gold Medal", category: "Academic", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_starting-again-but-not-from-zero-sharing-ugcPost-7441729066715660288-tGxj" },
    { text: "Section Leader at Stanford University's Code in Place 2026 — selected from a global applicant pool.", badge: "🏛️ Stanford", category: "Competitive", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_alhamdulillah-i-am-so-happy-and-excited-ugcPost-7448931063210385408-7u6i" },
    { text: "Perfect score — solved all 10/10 problems in CS50x Puzzle Day 2026.", badge: "🧩 CS50x", category: "Competitive", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_cs50-cs50x-puzzleday2026-activity-7447113281695150080-FvsK" },
    { text: "Competed in 4+ international AI hackathons, delivering production-ready AI solutions under tight deadlines.", badge: "🌐 AI Hackathons", category: "Competitive", url: "https://docs.google.com/spreadsheets/d/1BIGa9nT4WSnjiRQK_TeoUSh-N6zx9tbfjbCFlQbuHic/edit" },
    { text: "115+ DSA problems on LeetCode, focusing on graph theory and dynamic programming.", badge: "💡 115+ DSA", category: "Technical", url: "https://leetcode.com/u/Khadeeja__Ansari" },
    { text: "IELTS Academic Band 6.5 across all four modules — Listening, Reading, Speaking, Writing.", badge: "📝 IELTS 6.5", category: "Academic", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_ielts-growthmindset-studyabroad-share-7434405186451763201-Fthw" },
    { text: "Brilliant Student Award from Govt. Murray College Sialkot for exceptional academic performance.", badge: "⭐ Brilliant Student", category: "Academic", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_starting-again-but-not-from-zero-sharing-activity-7441729069848637440-uSki" },
    { text: "PEEF Scholarship at matriculation level — merit-based award for top-performing students.", badge: "🎓 PEEF Scholar", category: "Scholarship", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_starting-again-but-not-from-zero-sharing-ugcPost-7441729066715660288-tGxj" }
  ],

  education: [
    {
      degree: "Bachelor of Science in Mathematics", institution: "University of Gujrat", location: "Sialkot, Pakistan", period: "2018 – 2022", cgpa: "3.84 / 4.00", highlight: "Gold Medalist",
      description: "Graduated with distinction and the university's Gold Medal. Built deep expertise in pure and applied mathematics — the rigorous foundation underlying all current AI and computational work.",
      coursework: ["Calculus", "ODE", "PDE", "Statistics", "Linear Algebra", "Vector & Tensor Analysis", "Functional Analysis", "Complex Analysis"]
    }
  ],

  experience: [
    {
      role: "Head of Mathematics Department", company: "Shahab-U-Din Islamia High School", location: "Mundekey Goraya, Pakistan", period: "Nov 2022 – Present",
      url: "https://docs.google.com/document/d/1oapeuOxJadZCBIBimGpjPK1JgTvS7nwRHiU-ok_LnDE/edit?usp=sharing",
      description: "Leading curriculum innovation and faculty development for the Mathematics department, with a measurable impact on student outcomes.",
      points: [
        "Redesigned the Mathematics curriculum, integrating computational thinking and real-world problem-solving.",
        "Teach foundational Mathematics and introductory Computer Science at secondary level.",
        "Mentor junior faculty through structured feedback sessions and collaborative lesson planning.",
        "Implement data-driven assessments to systematically track and improve student performance."
      ]
    }
  ],

  projects: [
    {
      name: "GemmaSight", subtitle: "MedGemma Impact Challenge · Medical AI", url: "https://github.com/khadeeja-bb/gemmasight", emoji: "🔬",
      metrics: [ { label: "Accuracy", value: "97%" }, { label: "AUROC", value: "99.97%" } ],
      stack: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "FAISS", "Gradio"],
      description: "A dual-path medical vision model for non-invasive colorectal cancer detection — combining pathology AI with human-readable diagnostic reporting.",
      points: [
        "Dual-path model (Path model + MedSigLIP) for colorectal cancer subtyping (MSI-high vs MSS).",
        "MedGemma integration generates structured, physician-readable diagnostic reports automatically.",
        "97% accuracy and 99.97% AUROC — cutting time-to-diagnosis significantly.",
        "FAISS vector database cross-references predictions against historical cases for clinical reliability."
      ]
    },
    {
      name: "AgriVision", subtitle: "Gemini Hackathon · Precision Agriculture", url: "https://github.com/khadeeja-bb/gemini-3-hackathon", emoji: "🌿", metrics: [],
      stack: ["Python", "Streamlit", "Gemini 3", "OpenCV", "OpenWeatherMap API"],
      description: "An end-to-end AI agent helping farmers detect crop diseases from leaf scans, enriched with live weather data and pesticide market pricing.",
      points: [
        "Agentic AI system using Gemini 3 to classify crop diseases from smartphone leaf images.",
        "Live data from OpenWeatherMap and Google Search APIs for contextual weather and pricing.",
        "OpenCV bounding boxes rendered on detected disease regions for precise localization.",
        "Conversational interface lets non-technical farmers query results in plain language."
      ]
    },
    {
      name: "Polyglot Meeting Whisperer", subtitle: "Open Source · Multilingual NLP", url: "https://github.com/khadeeja-bb/polyglot-meeting-whisperer", emoji: "🎙️", metrics: [],
      stack: ["Python", "Streamlit", "Whisper", "NLP", "LLMs"],
      description: "A real-time multilingual meeting assistant that transcribes, translates, and summarizes live conversations — eliminating language barriers in international teams.",
      points: [
        "Real-time audio transcription with multi-language translation for live meetings.",
        "NLP pipeline for automatic action-item extraction and key-insight summarization.",
        "Supports simultaneous multilingual communication without post-meeting manual work.",
        "Clean Streamlit UI designed for immediate use by non-technical stakeholders."
      ]
    }
  ],

  leadership: [
    {
      role: "Moderator & Technical Trainer", org: "iCodeGuru", location: "Silicon Valley, USA · Remote", period: "Nov 2024 – Present",
      description: "Volunteer educator delivering technical workshops to learners across South Asia, focused on mathematics, deep learning, and language proficiency.",
      points: [
        { text: "Computational Mathematics with Python — live workshop for 80+ students covering numerical methods and scientific visualization.", url: "https://www.youtube.com/live/09d-E1C7WVg?si=MtBVFlA_pntZeP2x", linkLabel: "Watch Recording" },
        { text: "PyTorch Deep Learning workshop for 35+ learners on neural networks, backpropagation, and model training workflows.", url: "https://www.youtube.com/live/k5e1IP5QjrI?si=xrrelVX8HgcKCu6d", linkLabel: "Watch Recording" },
        { text: "4-week IELTS preparation course mentoring 50+ students across all four exam modules.", url: "https://www.linkedin.com/posts/khadeeja-ansari-907863358_ielts-ieltstrainer-education-activity-7372193802700189696-IuHC", linkLabel: "View Details" }
      ]
    }
  ],

  skills: {
    Languages:    { items: ["Python", "C++"],                            icon: "💻" },
    Technologies: { items: ["PyTorch", "NumPy", "Pandas", "Matplotlib"], icon: "⚙️" },
    Tools:        { items: ["Latex, Matlab", "Mathematica", "GitHub"],          icon: "🛠️" }
  }
};
