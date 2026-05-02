// App.jsx — Main portfolio component
import { useState, useEffect } from "react"

function App() {

  // ── STATES ──────────────────────────────────────────
  const validPages = ['home', 'resume', 'my-projects', 'live-coding', 'skills', 'articles', 'honors', 'publications', 'conferences', 'contact-me']
  const [activePage, setActivePage] = useState(() => {
    const hashPage = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
    return validPages.includes(hashPage) ? hashPage : 'home'
  })
  const [currentArticle, setCurrentArticle] = useState(0)
  const [current, setCurrent] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleSections, setVisibleSections] = useState({ [activePage]: true })
  const [activeSkill, setActiveSkill] = useState('Machine Learning')

  // Auto-slides articles every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hashPage = window.location.hash.replace('#', '')
      if (validPages.includes(hashPage)) {
        setActivePage(hashPage)
        setVisibleSections(prev => ({ ...prev, [hashPage]: true }))
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (activePage === 'home') {
      setVisibleSections({ home: true })
      return
    }
    setVisibleSections(prev => ({ ...prev, [activePage]: true }))
  }, [activePage])

  // ── SCROLL REVEAL — animates in once, stays permanently ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // ── REVEAL HELPER ────────────────────────────────────
  const reveal = (id, delay = 0) => ({
  opacity: visibleSections[id] ? 1 : 0,
  transform: visibleSections[id] ? 'translateY(0px)' : 'translateY(40px)',
  transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
})

  // ── SKILLS DATA ──────────────────────────────────────
  const technicalSkills = [
    'Python', 'R', 'SQL', 'STATA', 'SPSS', 'JASP', 'JAMOVI',
    'MS Excel', 'Excel', 'Access', 'Tableau', 'Power BI',
    'pandas', 'ggplot', 'scikit-learn', 'PyTorch', 'TensorFlow',
    'Huggingface', 'PySpark', 'Data automation', 'Pivot tables',
  ]
  const analyticalSkills = [
    'Data analysis', 'Exploratory data analysis', 'ANOVA', 'ANCOVA',
    'Time series analysis', 'Computer programming',
  ]
  const softSkills = [
    'Reliable', 'Self-motivated', 'Problem solving', 'Negotiation skills',
    'Empathy', 'Collaborative', 'Conflict resolution', 'Adaptability',
    'Organized', 'Critical thinking', 'Confidential', 'Active listening',
    'Detail oriented', 'Mentoring and coaching', 'Ethical Judgment',
    'Turn-taking', 'Time management', 'Willingness to learn',
    'Accountability', 'Good communication',
  ]

  // ── ARTICLES DATA ────────────────────────────────────
  const articles = [
    {
      tag: 'NLP · Data Science', tagColor: '#00FFCC',
      tagBg: 'rgba(0,255,204,0.1)', tagBorder: 'rgba(0,255,204,0.3)',
      date: 'April 2026',
      title: 'What is Natural Language Processing (NLP)?',
      summary: 'A technical introduction to what NLP is, why it matters, what it can do, and where it appears in everyday life. Covers 9 core NLP tasks with real examples.',
      link: 'https://medium.com/@kopiyodiana/what-is-natural-language-processing-nlp-a868586804f5',
    },
    {
      tag: 'Python Â· Data Analysis', tagColor: '#60a5fa',
      tagBg: 'rgba(96,165,250,0.1)', tagBorder: 'rgba(96,165,250,0.3)',
      date: 'May 2026',
      title: 'Analyzing YouTube Channel Using Python',
      summary: 'A Python project using the YouTube Data API, pandas, seaborn, and matplotlib to explore Lynn Ngugi channel performance, video views, likes, comments, and publishing patterns.',
      link: 'https://medium.com/@kopiyodiana/analyzing-youtube-channel-using-python-e318646394cd',
    },
    {
      tag: 'SQL Â· Healthcare Analytics', tagColor: '#008a45',
      tagBg: 'rgba(0,138,69,0.1)', tagBorder: 'rgba(0,138,69,0.3)',
      date: 'May 2026',
      title: 'Exploring Medical Insurance Charges with SQL',
      summary: 'A SQL project using MySQL Workbench to explore medical insurance charges by smoking status, region, number of children, BMI, age group, and overall cost patterns.',
      link: 'https://medium.com/@kopiyodiana/exploring-medical-insurance-charges-with-sql-0964c3735337',
    },
  ]

  // ── WHAT I DO CARDS ──────────────────────────────────
  const honors = [
    {
      title: 'Best Overall Project',
      year: '2026',
      organization: 'Awarded by: College of Computing, Grand Valley State University',
      image: '',
      description: "Awarded by the Dean of the College of Computing and the Program Director for Data Science as the Best Overall Project for Machine Learning-Based Prediction of Heart Disease Using a Merged UCI Dataset and Web Deployment. The work was accepted for publication at ICR'26 Berlin (Springer Nature LNNS).",
    },
    {
      title: 'Emerging Ideas Track Runner-Up for MindGuard AI',
      year: '2026',
      organization: 'Awarded by: Blue Dot DeepTech Pitch Competition · Applied Computing Institute, Grand Valley State University',
      image: '',
      description: 'Selected as Runner-Up in the Emerging Ideas Track of the Blue Dot DeepTech Pitch Competition for MindGuard AI, a Streamlit-based NLP application that uses a fine-tuned Mental-RoBERTa model to detect early signals of psychological distress in user-generated text. The recognition came with $600 in development funding to advance the tool toward clinical and crisis-response use cases.',
    },
    {
      title: 'Graduate School Showcase — Certificate of Recognition',
      year: '2026',
      organization: 'Awarded by: The Graduate School, Grand Valley State University',
      image: '',
      description: 'Recognized by the Dean of the Graduate School with a Certificate of Recognition for the heart disease prediction research presented at the 2026 Graduate Showcase.',
    },
    {
      title: 'International Student Experience Scholarship',
      year: '2026',
      organization: 'Awarded by: Grand Valley State University, Winter 2026',
      image: '',
      description: 'Awarded the GVSU International Student Experience Scholarship in two categories:Academic Excellence and Campus Community, recognizing both research contributions and active engagement with the broader campus community as an international graduate student.',
    },
  ]

  const publicationEntries = [
    {
      number: '01',
      year: '2026',
      status: 'ACCEPTED',
      title: 'Opiyo, D. & Sawesi, S. Machine Learning-Based Prediction of Heart Disease Using a Merged UCI Dataset and Web Deployment.',
      venue: "5th International Conference on Innovations in Computing Research (ICR'26), Berlin, Germany",
    },
    {
      number: '02',
      year: '2026',
      status: 'IN PROGRESS',
      title: 'Opiyo, D. & Sawesi, S. Predicting Perceived Medication Management Difficulty as an Early Indicator of Non-Adherence Risk: A Machine Learning Approach for Pharmacist Intervention.',
      venue: '',
    },
    {
      number: '03',
      year: '2026',
      status: 'IN PROGRESS',
      title: 'Opiyo, D. Deep Learning Model on Suicidal Ideation Detection Using Social Media Data.',
      venue: 'MSc Thesis, Grand Valley State University',
    },
  ]

  const conferenceTalks = [
    {
      year: '2026',
      title: "ICR'26 — Innovations in Computing Research",
      details: ['Accepted paper · Heart Disease Prediction', 'Berlin, Germany'],
    },
    {
      year: '2026',
      title: 'Graduate Showcase 2026: Bright Minds, Bright Futures',
      details: ['Presenter · Certificate of Recognition', 'Grand Valley State University'],
    },
    {
      year: '2026',
      title: 'Blue Dot DeepTech Pitch Competition',
      details: ['Pitch presenter · MindGuard AI (Runner-Up)', 'GVSU College of Computing'],
    },
  ]

  const projectSkills = ['Machine Learning', 'Python', 'SQL', 'Power BI', 'Tableau']
  const skillProjects = {
    'Machine Learning': [
      {
        title: 'MindGuard AI — Mental Distress Detection from Text',
        image: '/Mindguard AI.jpg',
        badge: 'NLP · Transformer · Mental Health',
        accent: '#008a45',
        description: 'A real-time NLP screening tool built on a fine-tuned Mental-RoBERTa transformer, trained on 12,656 annotated Reddit posts. Achieves 92.5% accuracy and ROC-AUC of 0.9813 on held-out data, with a confidence safeguard for short inputs to support sensitive crisis-detection use. Deployed as a Streamlit app with the model open-sourced on HuggingFace. Runner-Up, Blue Dot DeepTech Pitch Competition · $600 development funding.',
        link: 'https://github.com/kopiyo/mindguard',
        tech: ['Python', 'Mental-RoBERTa', 'Transformers', 'HuggingFace', 'Streamlit', 'NLP'],
        steps: [],
      },
      {
        title: 'Heart Disease Risk Predictor',
        image: '/Heart_Disease.jpg',
        badge: 'Health Informatics · Machine Learning',
        accent: '#60a5fa',
        description: 'A machine learning web app that predicts heart disease risk using a Support Vector Classifier trained on a merged UCI dataset.',
        link: 'https://github.com/kopiyo/heart-disease-predictor',
        tech: ['Python', 'Scikit-learn', 'SVC', 'Streamlit', 'ROC-AUC'],
        steps: [
          { label: 'Load data', code: "df = pd.read_csv('heart_disease.csv')\nX = df.drop('target', axis=1)\ny = df['target']" },
          { label: 'Train model', code: "model = SVC(kernel='rbf', probability=True)\nmodel.fit(X_train, y_train)" },
          { label: 'Deploy app', code: "risk = model.predict(user_inputs)\nst.write('Predicted risk:', risk[0])" },
        ],
      },
      {
        title: 'PharmAssist Medication Risk Screener',
        image: '/PharmAssist.jpg',
        badge: 'Clinical AI · Logistic Regression',
        accent: '#e879f9',
        description: 'A clinical screener that predicts medication management difficulty as an early indicator of non-adherence risk.',
        link: 'https://github.com/kopiyo/Medication-difficulty',
        tech: ['Python', 'Logistic Regression', 'Streamlit', 'ReportLab'],
        steps: [
          { label: 'Prepare predictors', code: "features = survey[predictor_columns]\ntarget = survey['difficulty_flag']" },
          { label: 'Estimate risk', code: "model = LogisticRegression(max_iter=1000)\nmodel.fit(X_train, y_train)" },
          { label: 'Create report', code: "report.build(patient_summary)\nst.download_button('Download PDF', report_bytes)" },
        ],
      },
    ],
    Python: [
      {
        title: 'Analyzing YouTube Channel Using Python',
        image: '/Heart_Disease.jpg',
        accent: '#60a5fa',
        badge: 'Python · YouTube Analytics · API',
        description: 'A Python data analysis project, published on Medium, using the YouTube Data API to explore Lynn Ngugi channel performance, video views, likes, comments, and monthly publishing patterns.',
        link: 'https://medium.com/@kopiyodiana/analyzing-youtube-channel-using-python-e318646394cd',
        tech: ['Python', 'YouTube Data API', 'pandas', 'seaborn', 'matplotlib'],
        steps: [],
      },
    ],
    SQL: [
      {
        title: 'Exploring Medical Insurance Charges with SQL',
        image: '',
        badge: 'SQL · Healthcare Analytics',
        accent: '#008a45',
        description: 'My first SQL case study, published on Medium, exploring medical insurance charges by smoking status, region, number of children, BMI, age group, and overall cost patterns.',
        link: 'https://medium.com/@kopiyodiana/exploring-medical-insurance-charges-with-sql-0964c3735337',
        tech: ['SQL', 'MySQL Workbench', 'Healthcare Data', 'Aggregation', 'CASE Statements'],
        steps: [],
      },
    ],
    'Power BI': [],
    Tableau: [],
  }

  const whatIDoCards = [
    {
      id: 0, icon: '🤖', title: 'Machine Learning', accent: '#00FFCC',
      borderSide: { borderRight: '1px solid #1e2a45', borderBottom: '1px solid #1e2a45' },
      content: (
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
          I build machine learning models, like{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>classification</span>,{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>CNN</span>,{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>regression</span>, and{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>deep learning</span>{' '}
          techniques to uncover patterns in complex data. I build models that go beyond accuracy and into{' '}
          <span style={{ color: '#e879f9', fontWeight: '600' }}>real-world deployment</span>.
        </p>
      )
    },
    {
      id: 1, icon: '📊', title: 'Data Analysis & Statistics', accent: '#60a5fa',
      borderSide: { borderBottom: '1px solid #1e2a45' },
      content: (
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
          With a strong foundation in{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>applied statistics</span>{' '}
          and mathematics, I go beyond running numbers, I extract the{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>story behind the data</span>.
          Using Python, R, SQL, Tableau, Excel, and Power BI, I conduct exploratory analysis,
          sentiment analysis, topic modeling, and engagement analytics that shape{' '}
          <span style={{ color: '#e879f9', fontWeight: '600' }}>actual decisions</span>.
        </p>
      )
    },
    {
      id: 2, icon: '🏥', title: 'Health Informatics', accent: '#e879f9',
      borderSide: { borderRight: '1px solid #1e2a45' },
      content: (
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
          I build Machine Learning-powered tools designed for clinical use. I care about building tools that are not just
          accurate, but{' '}
          <span style={{ color: '#e879f9', fontWeight: '600' }}>accessible to the people who need them most</span>.
        </p>
      )
    },
    {
      id: 3, icon: '🎓', title: 'Teaching & Research', accent: '#00FFCC',
      borderSide: {},
      content: (
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
          As a Statistics, Computer Science, and Mathematics Instructor at{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>Technical University of Mombasa</span>,
          I translate complex concepts into clear and practical understanding. My research spans{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>
            Natural Language Processing, Mental Health, Health, and Learning Analytics in K-12 schools.
          </span>
        </p>
      )
    },
  ]

  const experienceItems = [
    {
      role: 'Statistics, Computer Science, and Mathematics Instructor',
      organization: 'Technical University of Mombasa',
      period: 'December 2019 - Present',
      description: 'Academic instructor supporting undergraduate learning, student research, applied analytics, and STEM mentorship.',
      responsibilities: [
        'Delivered undergraduate lectures in statistics, mathematics, and computer science courses.',
        'Conducted practical lessons using Python, SPSS, R, Excel, STATA, Power BI, and Tableau.',
        'Supervised student research projects involving data collection, analysis, and reporting.',
        'Guided students on data collection tools, accurate data collection, research, and career development.',
        'Participated in curriculum development and STEM mentorship programs for high school students in the Mombasa region.',
      ],
      highlights: ['Teaching', 'Student Research', 'STEM Mentorship'],
    },
    {
      role: 'Data Analyst',
      organization: 'Samaria Medical Center, Kenya',
      period: 'May 2019 - December 2021',
      description: 'Analyzed clinical and operational data to support hospital decision-making, reporting, and patient outcome tracking.',
      responsibilities: [
        'Collected, managed, and analyzed clinical and operational data for hospital decision-making.',
        'Developed dashboards and summary reports using Excel, SPSS, and R.',
        'Collaborated with medical and administrative teams to track patient outcomes, staff performance, and resource use.',
        'Maintained data integrity, confidentiality, security, and backup of patient records in line with health data standards.',
        'Supported hospital report preparation for Ministry of Health presentations.',
      ],
      highlights: ['Clinical Data', 'Dashboards', 'Health Reporting'],
    },
    {
      role: 'Research Assistant',
      organization: 'Technical University of Mombasa Enterprises Limited, Kenya',
      period: 'January 2020 - December 2020',
      description: 'Supported a national tracer study on TVET graduate employability funded by the Ministry of Education.',
      responsibilities: [
        'Contributed to a Ministry of Education-funded proposal worth Ksh 10 million for a national tracer study.',
        'Conducted advanced data analysis using R and Python on large graduate employability datasets.',
        'Generated insights to inform curriculum development and policy reforms.',
        'Supported the design and implementation of a national graduate employability database.',
        'Collaborated with statisticians, lecturers, and ministry officials to ensure data accuracy and reporting compliance.',
      ],
      highlights: ['Research', 'R and Python', 'Policy Analytics'],
    },
    {
      role: 'Data Analyst',
      organization: 'Technical University of Mombasa Enterprises Limited, Kenya',
      period: 'March 2018 - June 2020',
      description: 'Analyzed graduate survey data and produced insights for program review, curriculum planning, and employability tracking.',
      responsibilities: [
        'Designed, collected, cleaned, analyzed, and reported graduate survey data.',
        'Analyzed graduate employment rates and trends.',
        'Ensured data accuracy and compliance with reporting standards.',
        'Provided data insights to inform program and curriculum review.',
        'Created analysis and visualizations using R, Power BI, Python, and Tableau.',
      ],
      highlights: ['Survey Data', 'Power BI', 'Tableau'],
    },
  ]

  // ── CONTACT CARDS ────────────────────────────────────
  const contactCards = [
    {
      id: 'email', label: 'Email', value: 'kopiyodiana@gmail.com', isLink: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#00FFCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="#00FFCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'linkedin', label: 'LinkedIn', value: 'diana-opiyo', href: 'https://www.linkedin.com/in/diana-opiyo-680b98309/', isLink: true,
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
    },
    {
      id: 'github', label: 'GitHub', value: 'github.com/kopiyo', href: 'https://github.com/kopiyo', isLink: true,
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
    },
    {
      id: 'location', label: 'Location', value: 'Allendale, Michigan, USA', isLink: false,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#00FFCC" strokeWidth="2"/>
          <circle cx="12" cy="9" r="2.5" stroke="#00FFCC" strokeWidth="2"/>
        </svg>
      )
    },
  ]

  const pageLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Resume', id: 'resume' },
    { label: 'My Projects', id: 'my-projects' },
    { label: 'Live Coding', id: 'live-coding' },
    { label: 'Skills', id: 'skills' },
    { label: 'Articles', id: 'articles' },
    { label: 'Honors', id: 'honors' },
    { label: 'Publications', id: 'publications' },
    { label: 'Conferences', id: 'conferences' },
    { label: 'Contact Me', id: 'contact-me' },
  ]

  const goToPage = (pageId) => {
    setActivePage(pageId)
    setVisibleSections(prev => ({ ...prev, [pageId]: true }))
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${pageId}`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className={`page-shell page-${activePage}`} style={{ backgroundColor: '#0a0f1e', color: 'white', minHeight: '100vh', fontFamily: "'Space Grotesk', 'Inter', 'Segoe UI', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        :root {
          --ink: #001b33;
          --muted: #314a63;
          --line: #c7d8e2;
          --accent: #008a45;
          --accent-soft: rgba(0,138,69,0.08);
          --paper: rgba(255,255,255,0.66);
          --page-bg: linear-gradient(135deg, #eef9fb 0%, #f8fbfc 55%, #f3fafb 100%);
        }
        html { scroll-behavior: smooth; }
        body, button, input, textarea, select, a {
          font-family: 'Space Grotesk', 'Inter', 'Segoe UI', sans-serif !important;
        }
        .page-shell {
          background: var(--page-bg) !important;
          color: var(--ink) !important;
        }
        .page-shell section[id] { display: none !important; }
        .page-home #home { display: flex !important; }
        .page-home #my-projects,
        .page-home #live-coding,
        .page-home #skills,
        .page-home #articles,
        .page-home #honors,
        .page-home #publications,
        .page-home #conferences,
        .page-home #contact-me { display: block !important; }
        .page-resume #resume,
        .page-my-projects #my-projects,
        .page-live-coding #live-coding,
        .page-skills #skills,
        .page-articles #articles,
        .page-honors #honors,
        .page-publications #publications,
        .page-conferences #conferences,
        .page-contact-me #contact-me {
          display: block !important;
          animation: pageEnter 0.72s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .page-home #home {
          animation: pageEnter 0.72s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .page-shell section[id] {
          background: var(--page-bg) !important;
          color: var(--ink) !important;
          min-height: auto;
          padding-top: 44px !important;
          padding-bottom: 44px !important;
          position: relative;
        }
        .page-shell.page-home section[id] {
          scroll-margin-top: 74px;
        }
        .page-shell #home {
          padding-top: 132px !important;
        }
        .page-shell section[id] h1,
        .page-shell section[id] h2,
        .page-shell section[id] h3 {
          color: var(--ink) !important;
          letter-spacing: 0 !important;
        }
        .page-shell section[id] p,
        .page-shell section[id] label {
          color: var(--muted) !important;
        }
        .page-shell section[id] span {
          color: inherit;
        }
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) span[style*="color"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) a[style*="color"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) div[style*="color"] {
          color: var(--accent) !important;
        }
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) p[style*="color"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) h3[style*="color"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) label[style*="color"] {
          color: var(--muted) !important;
        }
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) h1[style*="color"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) h2[style*="color"] {
          color: var(--ink) !important;
        }
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) div[style*="backgroundColor: '#00FFCC'"],
        .page-shell section[id]:not(#legacy-honors):not(#legacy-publications) div[style*="background-color: #00FFCC"] {
          background-color: var(--accent) !important;
        }
        .page-shell section[id] > div,
        .page-shell .project-card,
        .page-shell .article-card,
        .page-shell .pub-card,
        .page-shell .contact-info-card,
        .page-shell .what-i-do-card {
          animation: contentFloat 0.78s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .page-shell .project-card,
        .page-shell .article-card,
        .page-shell .pub-card,
        .page-shell .contact-info-card,
        .page-shell .what-i-do-card,
        .page-shell section[id] form,
        .page-shell section[id] input,
        .page-shell section[id] textarea {
          background-color: rgba(255,255,255,0.62) !important;
          border-color: var(--line) !important;
          color: var(--ink) !important;
          box-shadow: 0 18px 40px rgba(0,27,51,0.035);
        }
        .page-shell .skill-pill,
        .page-shell section[id] pre,
        .page-shell section[id] code {
          background-color: var(--accent-soft) !important;
          border-color: var(--line) !important;
          color: var(--muted) !important;
        }
        .page-shell .project-card span,
        .page-shell .article-card span,
        .page-shell .pub-card span,
        .page-shell .skill-pill {
          background-color: var(--accent-soft) !important;
          border-color: rgba(0,138,69,0.22) !important;
        }
        .page-shell .project-card a,
        .page-shell .article-card a,
        .page-shell .pub-card a,
        .page-shell button,
        .page-shell #resume a,
        .page-shell #contact-me button {
          border-color: var(--accent) !important;
          color: var(--accent) !important;
        }
        .page-shell section[id] > div,
        .page-shell .project-card,
        .page-shell .article-card,
        .page-shell .pub-card,
        .page-shell .contact-info-card,
        .page-shell .what-i-do-card,
        .page-shell .skill-pill {
          animation-name: scrollRise, contentFloat;
          animation-duration: 0.8s, 0.78s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1), cubic-bezier(0.22, 1, 0.36, 1);
          animation-fill-mode: both, both;
          animation-timeline: view(), auto;
          animation-range: entry 0% cover 28%;
        }
        .page-home section[id] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .page-home section[id]:has(> div[style*="opacity: 1"]),
        .page-home #home {
          opacity: 1;
          transform: translateY(0);
        }
        .page-home section[id]::before {
          content: '';
          position: absolute;
          inset: 16px auto auto 80px;
          width: 52px;
          height: 6px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 0.5s ease 0.18s, transform 0.6s ease 0.18s;
        }
        .page-home section[id]:has(> div[style*="opacity: 1"])::before {
          opacity: 0.45;
          transform: scaleX(1);
        }
        .page-shell section[id] a,
        .page-shell section[id] button {
          transition: transform 0.22s ease, background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }
        .page-shell section[id] a:hover,
        .page-shell section[id] button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,27,51,0.08);
        }
        nav {
          background-color: rgba(248,251,252,0.9) !important;
          border-bottom: 1px solid var(--line) !important;
          backdrop-filter: blur(14px);
        }
        .page-nav-link {
          position: relative;
          padding: 7px 10px !important;
          border: 1px solid transparent;
          border-radius: 999px;
          background: transparent;
          transition: color 0.25s ease, transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .page-nav-link::after {
          content: '';
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 3px;
          height: 2px;
          border-radius: 999px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.28s ease;
        }
        .page-nav-link::before {
          content: '';
          position: absolute;
          top: 5px;
          right: 7px;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0;
          transform: scale(0.2);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .page-nav-link:hover {
          color: var(--accent) !important;
          transform: translateY(-2px);
          background-color: rgba(0,138,69,0.07);
          border-color: rgba(0,138,69,0.2);
          box-shadow: 0 8px 16px rgba(0,27,51,0.045);
        }
        .page-nav-link:hover::after,
        .page-nav-link.active::after {
          transform: scaleX(1);
        }
        .page-nav-link:hover::before,
        .page-nav-link.active::before {
          opacity: 1;
          transform: scale(1);
        }
        .page-nav-link.active {
          background-color: rgba(0,138,69,0.1);
          border-color: rgba(0,138,69,0.26);
          box-shadow: 0 8px 16px rgba(0,27,51,0.045);
        }
        .animated-cta {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }
        .animated-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent);
          transform: translateX(-105%);
          transition: transform 0.34s ease;
          z-index: -1;
        }
        .animated-cta:hover::before {
          transform: translateX(0);
        }
        .animated-cta:hover {
          color: #fff !important;
          border-color: transparent !important;
        }
        .page-home section[id] + section[id] {
          margin-top: 0 !important;
        }
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(22px) scale(0.992); filter: blur(8px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes contentFloat {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollRise {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .nav-links { gap: 12px !important; font-size: 0.72rem !important; flex-wrap: wrap !important; justify-content: center !important; }
          .hero-section { padding: 100px 24px 40px 24px !important; }
          .hero-text { font-size: 2rem !important; }
          .section-pad { padding: 40px 24px !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .project-card { flex-direction: column !important; }
          .project-card img { width: 100% !important; height: 200px !important; }
          .project-card-text { width: 100% !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .article-card { padding: 24px 20px !important; }
          .what-i-do-card { border-right: none !important; }
          .award-card { grid-template-columns: 1fr !important; }
          .award-photo { min-height: 220px !important; }
          .lovable-heading { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
        }
        @media (max-width: 480px) {
          .nav-links { font-size: 0.65rem !important; gap: 8px !important; }
          .hero-text { font-size: 1.7rem !important; }
        }
        .what-i-do-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
          cursor: default;
        }
        .what-i-do-card:hover {
          transform: translateY(-4px);
          background-color: #111e35 !important;
          box-shadow: 0 8px 32px rgba(0,255,204,0.08);
        }
        .skill-pill {
          transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
          cursor: default;
        }
        .skill-pill:hover { transform: translateY(-2px); color: white !important; }
        .pub-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .pub-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,255,204,0.1); }
        .contact-info-card {
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
          cursor: default;
        }
        .contact-info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0,255,204,0.4) !important;
          box-shadow: 0 6px 20px rgba(0,255,204,0.08);
        }
        .form-input:focus {
          border-color: #00FFCC !important;
          box-shadow: 0 0 0 3px rgba(0,255,204,0.12) !important;
          outline: none !important;
        }
        .form-input { transition: border-color 0.2s ease, box-shadow 0.2s ease; }
        @keyframes pillFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-pill-animate {
          animation: pillFadeIn 0.4s ease forwards;
          animation-fill-mode: forwards;
          opacity: 0;
        }
      `}</style>

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '16px 24px', backgroundColor: '#0a0f1e',
        borderBottom: '1px solid #1e2a45', boxSizing: 'border-box'
      }}>
        <div className="nav-links" style={{ display: 'flex', gap: '14px', fontSize: '0.9rem', alignItems: 'center', maxWidth: '1240px', width: '100%', justifyContent: 'center', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {pageLinks.map((link) => (
            <a key={link.id}
              className={`page-nav-link ${activePage === link.id ? 'active' : ''}`}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                goToPage(link.id)
              }}
              style={{
                color: activePage === link.id ? '#008a45' : '#17324d',
                textDecoration: 'none',
                borderBottom: 'none',
                paddingBottom: '4px', whiteSpace: 'nowrap',
              }}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="home" className="hero-section" style={{
        minHeight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 60px 60px 60px',
      }}>
        <div style={{ maxWidth: '620px', width: '100%' }}>
          <h1 className="hero-text" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FFCC', margin: '0 0 10px 0', lineHeight: 1.1 }}>
            Diana Opiyo
          </h1>
          <p style={{ color: '#60a5fa', fontSize: '1.05rem', marginBottom: '16px', fontWeight: '500' }}>
            Data Scientist · ML Engineer · Instructor
          </p>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '28px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.9', marginBottom: '36px', textAlign: 'justify' }}>
            I build machine learning models and turn raw data into tools that are used. With a background in
            mathematics, computer science, applied statistics and data science, I build end-to-end solutions,
            from training predictive models to deploying them as clinical screeners,
            NLP pipelines, and interactive web apps. My work spans the domains
            of <span style={{ color: '#00FFCC' }}>health informatics</span>,{' '}
            <span style={{ color: '#00FFCC' }}>natural language processing</span>, and{' '}
            <span style={{ color: '#00FFCC' }}>educational equity</span>,
            and I care deeply about making data science accessible and impactful beyond the lab.
          </p>
          <a href="#contact-me"
            className="animated-cta"
            onClick={(e) => {
              e.preventDefault()
              if (activePage === 'home') {
                document.getElementById('contact-me')?.scrollIntoView({ behavior: 'smooth' })
                window.history.pushState(null, '', '#contact-me')
              } else {
                goToPage('contact-me')
              }
            }}
            style={{ border: '1.5px solid #008a45', color: '#008a45', padding: '12px 28px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem', display: 'inline-block' }}>
            Get in touch &rsaquo;&rsaquo;&rsaquo;
          </a>
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────── */}
      <section id="resume" className="section-pad" style={{ padding: '64px 80px', background: 'linear-gradient(135deg, #eef9fb 0%, #f8fbfc 48%, #fbf2e8 100%)', color: '#001b33' }}>
        <div style={reveal('resume')}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#001b33', marginBottom: '8px', letterSpacing: '0' }}>Resume</h2>
          <div style={{ width: '72px', height: '3px', backgroundColor: '#00e6c3', marginBottom: '18px' }}></div>
          <p style={{ color: '#314a63', fontSize: '1rem', marginBottom: '34px', lineHeight: '1.65' }}>
            A downloadable snapshot of my education, technical work, research, and teaching experience.
          </p>
        </div>
        <div className="grid-2" style={{ ...reveal('resume', 0.15), display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', alignItems: 'stretch' }}>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.62)', border: '1px solid #c7d8e2', borderRadius: '22px', padding: '38px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
            <h3 style={{ color: '#001b33', fontSize: '1.3rem', fontWeight: '800', margin: '22px 0 14px 0' }}>Diana Opiyo Resume</h3>
            <p style={{ color: '#314a63', fontSize: '1rem', lineHeight: '1.8', marginBottom: '28px' }}>
              Includes my data science projects, machine learning deployment work, research publications, technical skills, and teaching background.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="/Diana_Opiyo_Resume.pdf" target="_blank" rel="noopener noreferrer"
                style={{ border: '1.5px solid #008a45', color: '#008a45', padding: '10px 22px', borderRadius: '999px', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem' }}
                onMouseEnter={e => { e.target.style.backgroundColor = '#008a45'; e.target.style.color = '#fff'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#008a45'; }}>
                View Resume
              </a>
              <a href="/Diana_Opiyo_Resume.pdf" download
                style={{ border: '1.5px solid #4f8edc', color: '#4f8edc', padding: '10px 22px', borderRadius: '999px', textDecoration: 'none', fontWeight: '800', fontSize: '0.88rem' }}
                onMouseEnter={e => { e.target.style.backgroundColor = '#4f8edc'; e.target.style.color = '#fff'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#4f8edc'; }}>
                Download PDF
              </a>
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.62)', border: '1px solid #c7d8e2', borderRadius: '22px', padding: '38px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
            {[
              ['ML', 'Deployment'],
              ['NLP', 'Research'],
              ['Health', 'Informatics'],
              ['Teaching', 'Mentoring'],
            ].map(([top, bottom], i) => (
              <div key={`resume-highlight-${i}`} style={{ border: '1px solid #c7d8e2', borderRadius: '16px', padding: '22px', backgroundColor: 'rgba(255,255,255,0.58)' }}>
                <div style={{ color: i % 2 === 0 ? '#008a45' : '#4f8edc', fontSize: '1.05rem', fontWeight: '800', marginBottom: '8px' }}>{top}</div>
                <div style={{ color: '#314a63', fontSize: '0.9rem' }}>{bottom}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...reveal('resume', 0.25), marginTop: '42px' }}>
          <div className="lovable-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#001b33', margin: 0 }}>Experience</h2>
            <span style={{ color: '#17324d', fontSize: '0.92rem', fontFamily: 'Consolas, Monaco, monospace' }}>{experienceItems.length} roles</span>
          </div>
          <div style={{ display: 'grid', gap: '18px' }}>
            {experienceItems.map((item, i) => (
              <div key={`experience-${i}`} className="pub-card"
                style={{ backgroundColor: 'rgba(255,255,255,0.62)', border: '1px solid #c7d8e2', borderRadius: '22px', padding: '28px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '18px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3 style={{ color: '#001b33', fontSize: '1.18rem', fontWeight: '800', margin: 0 }}>{item.role}</h3>
                  <span style={{ color: '#008a45', fontSize: '0.9rem', fontFamily: 'Consolas, Monaco, monospace' }}>{item.period}</span>
                </div>
                <p style={{ color: '#008a45', fontWeight: '700', margin: '0 0 10px 0' }}>{item.organization}</p>
                <p style={{ color: '#314a63', fontSize: '0.98rem', lineHeight: '1.75', margin: '0 0 14px 0' }}>{item.description}</p>
                <ul style={{ color: '#314a63', fontSize: '0.94rem', lineHeight: '1.75', margin: '0 0 18px 20px', padding: 0 }}>
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={`${item.role}-responsibility-${idx}`} style={{ marginBottom: '6px' }}>{responsibility}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.highlights.map((highlight, idx) => (
                    <span key={`${item.role}-${idx}`} style={{ backgroundColor: 'rgba(0,138,69,0.08)', border: '1px solid rgba(0,138,69,0.22)', color: '#008a45', borderRadius: '999px', padding: '6px 12px', fontSize: '0.78rem', fontWeight: '700' }}>{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ ...reveal('resume', 0.35), marginTop: '42px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#001b33', margin: '0 0 24px 0' }}>What I Do</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', alignItems: 'stretch' }}>
            {whatIDoCards.map((card, idx) => (
              <div key={`resume-${card.id}`} className="what-i-do-card"
                style={{ padding: '28px', backgroundColor: 'rgba(255,255,255,0.62)', borderRadius: '22px', border: '1px solid #c7d8e2', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '14px',
                    backgroundColor: 'rgba(0,138,69,0.08)', border: '1px solid rgba(0,138,69,0.22)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                    transition: 'transform 0.3s ease',
                    transform: hoveredCard === card.id ? 'scale(1.12)' : 'scale(1)',
                  }}>{card.icon}</div>
                  <h3 style={{ color: '#001b33', fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>{card.title}</h3>
                </div>
                {card.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-i-do" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <div style={reveal('what-i-do')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>What I Do</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>
        </div>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px', alignItems: 'start' }}>
          {whatIDoCards.map((card, idx) => (
            <div key={card.id} className="what-i-do-card"
              style={{ padding: '28px', backgroundColor: '#0d1526', borderRadius: '4px', ...card.borderSide, ...reveal('what-i-do', idx * 0.1) }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '10px',
                  backgroundColor: `${card.accent}18`, border: `1px solid ${card.accent}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                  transition: 'transform 0.3s ease',
                  transform: hoveredCard === card.id ? 'scale(1.15)' : 'scale(1)',
                }}>{card.icon}</div>
                <h3 style={{
                  color: hoveredCard === card.id ? card.accent : 'white',
                  fontSize: '1.1rem', fontWeight: 'bold', margin: 0,
                  transition: 'color 0.25s ease',
                }}>{card.title}</h3>
              </div>
              <div style={{
                width: hoveredCard === card.id ? '50px' : '0px', height: '2px',
                backgroundColor: card.accent, marginBottom: '14px',
                transition: 'width 0.3s ease', borderRadius: '2px',
              }}></div>
              {card.content}
            </div>
          ))}
        </div>
      </section>

      {/* ── MY PROJECTS ────────────────────────────────── */}
      <section id="my-projects" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0a0f1e' }}>
        <div style={reveal('my-projects')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>My Projects</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px' }}>
            Choose a skill to see matching projects, tools used, and links to the full project work.
          </p>
        </div>
        <div style={{ ...reveal('my-projects', 0.12), display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
          {projectSkills.map(skill => (
            <button key={skill} onClick={() => setActiveSkill(skill)}
              style={{
                backgroundColor: activeSkill === skill ? '#00FFCC' : '#0d1526',
                border: activeSkill === skill ? '1px solid #00FFCC' : '1px solid #1e2a45',
                color: activeSkill === skill ? '#000' : '#cbd5e1',
                borderRadius: '999px',
                padding: '9px 18px',
                fontSize: '0.85rem',
                fontWeight: '700',
                cursor: 'pointer',
              }}>
              {skill}
            </button>
          ))}
        </div>
        <div className="grid-2" style={{ ...reveal('my-projects', 0.18), display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px' }}>
          {skillProjects[activeSkill].length === 0 && (
            <div className="project-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
              <span style={{ backgroundColor: 'rgba(0,255,204,0.08)', border: '1px solid rgba(0,255,204,0.28)', color: '#00FFCC', borderRadius: '999px', padding: '4px 12px', fontSize: '0.72rem', fontWeight: '700', display: 'inline-block', marginBottom: '14px' }}>Coming Soon</span>
              <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 'bold', margin: '0 0 10px 0', lineHeight: 1.5 }}>{activeSkill} Projects</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.9rem', margin: 0 }}>Completed projects will be added here as they are published.</p>
            </div>
          )}
          {skillProjects[activeSkill].map((project, projectIndex) => (
            <div key={`${activeSkill}-${project.title}`} className="project-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', overflow: 'hidden' }}>
              {activeSkill !== 'Python' && project.image && <img src={project.image} alt={project.title} style={{ width: '100%', height: '210px', objectFit: 'cover', display: 'block' }}/>}
              <div style={{ padding: '26px' }}>
                <span style={{ backgroundColor: `${project.accent}18`, border: `1px solid ${project.accent}55`, color: project.accent, borderRadius: '999px', padding: '4px 12px', fontSize: '0.72rem', fontWeight: '700', display: 'inline-block', marginBottom: '14px' }}>{project.badge}</span>
                <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 'bold', margin: '0 0 10px 0', lineHeight: 1.5 }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.9rem', marginBottom: '18px' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.tech.map((tech, i) => (
                    <span key={`${project.title}-${tech}-${i}`} style={{ backgroundColor: '#1e2a45', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' }}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  style={{ border: `1.5px solid ${project.accent}`, color: project.accent, padding: '8px 18px', borderRadius: '999px', textDecoration: 'none', fontWeight: '700', fontSize: '0.84rem', display: 'inline-block' }}
                  onMouseEnter={e => { e.target.style.backgroundColor = project.accent; e.target.style.color = '#000'; }}
                  onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = project.accent; }}>
                  Open Project &rsaquo;
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'none', ...reveal('my-projects', 0.15), position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
          <div style={{ display: 'flex', transition: 'transform 0.6s ease-in-out', transform: `translateX(-${current * 100}%)` }}>

            {/* Slide 1 — Suicidal Ideation */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div className="project-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>
                <div className="project-card-text" style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{ backgroundColor: 'rgba(0,255,204,0.1)', border: '1px solid rgba(0,255,204,0.3)', color: '#00FFCC', borderRadius: '999px', padding: '3px 12px', fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block' }}>NLP · Deep Learning · Mental Health</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>Suicidal Ideation Detection</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.93rem', marginBottom: '20px' }}>
                    A deep learning system that detects suicidal ideation in social media text using a{' '}
                    <span style={{ color: '#00FFCC', fontWeight: '600' }}>Bi-LSTM model</span> trained on
                    Twitter/X data scraped via the Tweepy API. This tool is designed to support{' '}
                    <span style={{ color: '#00FFCC', fontWeight: '600' }}>early mental health intervention</span>{' '}
                    in social media contexts. Deployed as a real-time Streamlit web application.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {['Python', 'Bi-LSTM', 'TensorFlow', 'Tweepy', 'Streamlit', 'NLP'].map((tech, i) => (
                      <span key={i} style={{ backgroundColor: '#1e2a45', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' }}>{tech}</span>
                    ))}
                  </div>
                  <a href="https://suicidal-ideation-detector.streamlit.app/" target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #00FFCC', color: '#00FFCC', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/Suicidal Ideation.jpg" alt="Suicidal Ideation Detection App" style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

            {/* Slide 2 — Heart Disease */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div className="project-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>
                <div className="project-card-text" style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{ backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa', borderRadius: '999px', padding: '3px 12px', fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block' }}>Health Informatics · Machine Learning</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>Heart Disease Risk Predictor</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.93rem', marginBottom: '20px' }}>
                    A machine learning based web app that predicts heart disease risk using a{' '}
                    <span style={{ color: '#60a5fa', fontWeight: '600' }}>Support Vector Classifier</span>{' '}
                    trained on a merged UCI dataset. Achieves a{' '}
                    <span style={{ color: '#60a5fa', fontWeight: '600' }}>ROC-AUC of 0.9412</span>. Deployed on Streamlit Cloud.
                    This tool makes clinical risk screening more accessible.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {['Python', 'SVC', 'Scikit-learn', 'Streamlit', 'UCI Dataset', 'ROC-AUC'].map((tech, i) => (
                      <span key={i} style={{ backgroundColor: '#1e2a45', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' }}>{tech}</span>
                    ))}
                  </div>
                  <a href="https://heart-disease-risk-predictor-app.streamlit.app/" target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #60a5fa', color: '#60a5fa', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#60a5fa'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#60a5fa'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/Heart_Disease.jpg" alt="Heart Disease Risk Predictor" style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

            {/* Slide 3 — PharmAssist */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div className="project-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', overflow: 'hidden', display: 'flex', alignItems: 'stretch' }}>
                <div className="project-card-text" style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{ backgroundColor: 'rgba(232,121,249,0.1)', border: '1px solid rgba(232,121,249,0.3)', color: '#e879f9', borderRadius: '999px', padding: '3px 12px', fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block' }}>Pharmacy · Health Informatics · ML Deployment</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>PharmAssist, Medication Management Risk Screener</h3>
                  <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.93rem', marginBottom: '20px' }}>
                    A clinical risk screener that predicts{' '}
                    <span style={{ color: '#e879f9', fontWeight: '600' }}>medication management difficulty</span>{' '},
                    an early indicator of non-adherence risk, using Logistic Regression trained on
                    the 2021 NCSME Survey (N=1,521). Achieves{' '}
                    <span style={{ color: '#e879f9', fontWeight: '600' }}>ROC-AUC 0.867, Recall 81%</span>.
                    Features real-time risk classification, interpretable factor breakdowns,
                    personalized pharmacist recommendations, and a downloadable clinical PDF report.
                  </p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {['Python', 'Logistic Regression', 'Streamlit', 'ReportLab', 'NCSME Dataset', 'Clinical AI'].map((tech, i) => (
                      <span key={i} style={{ backgroundColor: '#1e2a45', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' }}>{tech}</span>
                    ))}
                  </div>
                  <a href="https://medication-difficulty.streamlit.app/" target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #e879f9', color: '#e879f9', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#e879f9'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e879f9'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/PharmAssist.jpg" alt="PharmAssist Medication Risk Screener" style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

          </div>
          <button onClick={() => setCurrent(prev => (prev - 1 + 3) % 3)}
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.1rem', cursor: 'pointer', zIndex: 10 }}>‹</button>
          <button onClick={() => setCurrent(prev => (prev + 1) % 3)}
            style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.1rem', cursor: 'pointer', zIndex: 10 }}>›</button>
        </div>
        <div style={{ display: 'none', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setCurrent(i)}
              style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '999px', backgroundColor: i === current ? '#00FFCC' : '#1e2a45', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}/>
          ))}
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────── */}
      <section id="live-coding" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#eef9fb' }}>
        <div style={reveal('live-coding')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#001b33', marginBottom: '8px' }}>Live Coding Videos</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
          <p style={{ color: '#17324d', fontSize: '0.95rem', marginBottom: '30px' }}>
            Practical walkthroughs of data science, machine learning, and NLP workflows are coming soon.
          </p>
        </div>
        <div style={{ ...reveal('live-coding', 0.1), backgroundColor: 'rgba(255,255,255,0.58)', border: '1px solid #c7d8e2', borderRadius: '12px', padding: '32px', maxWidth: '760px', boxShadow: '0 18px 36px rgba(0,27,51,0.03)' }}>
          <span style={{ backgroundColor: 'rgba(0,138,69,0.08)', border: '1px solid #b7d9c9', color: '#008a45', borderRadius: '999px', padding: '5px 14px', fontSize: '0.76rem', fontWeight: '800', display: 'inline-block', marginBottom: '16px' }}>Coming Soon</span>
          <h3 style={{ color: '#001b33', fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 12px 0', lineHeight: 1.45 }}>Live Data Science Walkthroughs</h3>
          <p style={{ color: '#314a63', fontSize: '0.92rem', lineHeight: '1.8', margin: 0 }}>
            I will add recorded walkthroughs here as I publish project demos, coding sessions, and practical explanations.
          </p>
        </div>
      </section>

      <section id="skills" className="section-pad" style={{ padding: '64px 80px', background: 'linear-gradient(135deg, #eef9fb 0%, #f8fbfc 48%, #fbf2e8 100%)', color: '#001b33' }}>
        <div style={reveal('skills')}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#001b33', marginBottom: '8px', letterSpacing: '0' }}>Skill Set</h2>
          <div style={{ width: '72px', height: '3px', backgroundColor: '#00e6c3', marginBottom: '36px' }}></div>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>

          <div style={{ ...reveal('skills', 0.1), backgroundColor: 'rgba(255,255,255,0.62)', borderRadius: '22px', border: '1px solid #c7d8e2', padding: '34px', minHeight: '430px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
            <h3 style={{ color: '#001b33', fontSize: '1rem', fontWeight: '800', marginBottom: '22px', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {technicalSkills.map((skill, i) => (
                <span key={`tech-${i}`} className="skill-pill skill-pill-animate"
                  style={{ backgroundColor: 'rgba(0,138,69,0.06)', border: '1px solid #b7d9c9', color: '#17324d', borderRadius: '999px', padding: '7px 13px', fontSize: '0.82rem', animationDelay: `${i * 0.04}s` }}
                  onMouseEnter={e => { e.target.style.borderColor = '#008a45'; e.target.style.color = '#008a45'; e.target.style.backgroundColor = 'rgba(0,138,69,0.1)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = '#b7d9c9'; e.target.style.color = '#17324d'; e.target.style.backgroundColor = 'rgba(0,138,69,0.06)'; }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ ...reveal('skills', 0.2), backgroundColor: 'rgba(255,255,255,0.62)', borderRadius: '22px', border: '1px solid #c7d8e2', padding: '34px', minHeight: '430px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
            <h3 style={{ color: '#001b33', fontSize: '1rem', fontWeight: '800', marginBottom: '22px', textTransform: 'uppercase', letterSpacing: '1px' }}>Analytical Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {analyticalSkills.map((skill, i) => (
                <span key={`analytical-${i}`} className="skill-pill skill-pill-animate"
                  style={{ backgroundColor: 'rgba(79,142,220,0.08)', border: '1px solid #bfd3ec', color: '#17324d', borderRadius: '999px', padding: '7px 13px', fontSize: '0.82rem', animationDelay: `${i * 0.06}s` }}
                  onMouseEnter={e => { e.target.style.borderColor = '#4f8edc'; e.target.style.color = '#4f8edc'; e.target.style.backgroundColor = 'rgba(79,142,220,0.12)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = '#bfd3ec'; e.target.style.color = '#17324d'; e.target.style.backgroundColor = 'rgba(79,142,220,0.08)'; }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ ...reveal('skills', 0.3), backgroundColor: 'rgba(255,255,255,0.62)', borderRadius: '22px', border: '1px solid #c7d8e2', padding: '34px', minHeight: '430px', boxShadow: '0 18px 36px rgba(0,27,51,0.035)' }}>
            <h3 style={{ color: '#001b33', fontSize: '1rem', fontWeight: '800', marginBottom: '22px', textTransform: 'uppercase', letterSpacing: '1px' }}>Soft Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {softSkills.map((skill, i) => (
                <span key={`soft-${i}`} className="skill-pill skill-pill-animate"
                  style={{ backgroundColor: 'rgba(242,151,105,0.09)', border: '1px solid #ecd0c1', color: '#17324d', borderRadius: '999px', padding: '7px 13px', fontSize: '0.82rem', animationDelay: `${i * 0.04}s` }}
                  onMouseEnter={e => { e.target.style.borderColor = '#c76a3f'; e.target.style.color = '#a94d2c'; e.target.style.backgroundColor = 'rgba(242,151,105,0.14)'; }}
                  onMouseLeave={e => { e.target.style.borderColor = '#ecd0c1'; e.target.style.color = '#17324d'; e.target.style.backgroundColor = 'rgba(242,151,105,0.09)'; }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── ARTICLES ───────────────────────────────────── */}
      <section id="articles" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0a0f1e' }}>
        <div style={reveal('articles')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Articles</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
            Thoughts on machine learning, data science, and research, part of my{' '}
            <span style={{ color: '#00FFCC', fontWeight: '600' }}>#LRWithDiana</span> series.
          </p>
        </div>
        <div style={{ ...reveal('articles', 0.15), position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
          <div style={{ display: 'flex', transition: 'transform 0.6s ease-in-out', transform: `translateX(-${currentArticle * 100}%)` }}>
            {articles.map((article, i) => (
              <div key={`article-${i}`} style={{ minWidth: '100%', boxSizing: 'border-box' }}>
                <div className="article-card" style={{ backgroundColor: '#0d1526', borderRadius: '12px', border: '1px solid #1e2a45', padding: '40px 48px', display: 'flex', flexDirection: 'column', minHeight: '220px', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ backgroundColor: article.tagBg, border: `1px solid ${article.tagBorder}`, color: article.tagColor, borderRadius: '999px', padding: '4px 14px', fontSize: '0.75rem', fontWeight: '600' }}>{article.tag}</span>
                      <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>{article.date}</span>
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '14px', lineHeight: 1.5 }}>{article.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.8', marginBottom: '28px', maxWidth: '75%' }}>{article.summary}</p>
                  </div>
                  <a href={article.link} target="_blank" rel="noopener noreferrer"
                    style={{ color: article.tagColor, fontSize: '0.88rem', fontWeight: '600', textDecoration: 'none' }}
                    onMouseEnter={e => { e.target.style.opacity = '0.7'; }}
                    onMouseLeave={e => { e.target.style.opacity = '1'; }}>
                    Read Article ›
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setCurrentArticle(prev => (prev - 1 + 3) % 3)}
            style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.1rem', cursor: 'pointer', zIndex: 10 }}>‹</button>
          <button onClick={() => setCurrentArticle(prev => (prev + 1) % 3)}
            style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.1rem', cursor: 'pointer', zIndex: 10 }}>›</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setCurrentArticle(i)}
              style={{ width: i === currentArticle ? '24px' : '8px', height: '8px', borderRadius: '999px', backgroundColor: i === currentArticle ? '#00FFCC' : '#1e2a45', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}/>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://medium.com/@kopiyodiana" target="_blank" rel="noopener noreferrer"
            style={{ border: '1.5px solid #00FFCC', color: '#00FFCC', padding: '12px 32px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
            View All on Medium ›
          </a>
        </div>
      </section>

      {/* ── PUBLICATIONS ───────────────────────────────── */}
      <section id="legacy-honors" className="section-pad" style={{ display: 'none', padding: '70px 80px', backgroundColor: '#0a0f1e' }}>
        <div style={{ ...reveal('honors'), maxWidth: '860px', marginBottom: '40px' }}>
          <span style={{ color: '#00FFCC', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Recognition</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 'bold', color: 'white', margin: '10px 0 10px 0', lineHeight: 1.2 }}>Honors and Achievements</h2>
          <div style={{ width: '72px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '18px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
            A collection of awards, research milestones, teaching recognition, and professional achievements. Award photos can be added to each card as they become available.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '28px' }}>
          {honors.map((honor, i) => (
            <div key={`honor-${i}`} className="award-card pub-card"
              style={{ ...reveal('honors', i * 0.1), backgroundColor: '#0d1526', border: '1px solid #1e2a45', borderRadius: '16px', overflow: 'hidden', display: 'grid', gridTemplateColumns: '310px 1fr', alignItems: 'stretch', boxShadow: '0 18px 48px rgba(0,0,0,0.22)' }}>
              <div className="award-photo" style={{
                minHeight: '260px',
                backgroundImage: honor.image
                  ? `linear-gradient(rgba(8,17,31,0.12), rgba(8,17,31,0.35)), url(${honor.image})`
                  : 'linear-gradient(135deg, rgba(0,255,204,0.18), rgba(96,165,250,0.16)), radial-gradient(circle at top left, rgba(232,121,249,0.22), transparent 42%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRight: '1px solid #1e2a45',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '22px',
                boxSizing: 'border-box',
              }}>
                {!honor.image && (
                  <div style={{ color: 'white' }}>
                    <div style={{ width: '54px', height: '54px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.25)', backgroundColor: 'rgba(10,15,30,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.45rem', marginBottom: '12px' }}>★</div>
                    <div style={{ color: '#cbd5e1', fontSize: '0.82rem', fontWeight: '700' }}>Award photo placeholder</div>
                  </div>
                )}
              </div>
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '18px' }}>
                  <span style={{ backgroundColor: 'rgba(0,255,204,0.1)', border: '1px solid rgba(0,255,204,0.35)', color: '#00FFCC', borderRadius: '999px', padding: '5px 14px', fontSize: '0.72rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{honor.category}</span>
                  <span style={{ backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa', borderRadius: '999px', padding: '5px 14px', fontSize: '0.72rem', fontWeight: '700' }}>{honor.year}</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.35rem', fontWeight: 'bold', margin: '0 0 12px 0', lineHeight: 1.4 }}>{honor.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.94rem', lineHeight: '1.85', margin: 0 }}>{honor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="legacy-publications" className="section-pad" style={{ display: 'none', padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <div style={reveal('publications')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Publications</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
            Peer-reviewed research accepted for publication.
          </p>
        </div>

        <div className="pub-card" style={{ ...reveal('publications', 0.15), backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '32px', borderLeft: '4px solid #00FFCC' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(0,255,204,0.12)', border: '1px solid rgba(0,255,204,0.35)', color: '#00FFCC', borderRadius: '999px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: '700' }}>✓ ACCEPTED</span>
            <span style={{ backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa', borderRadius: '999px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: '600' }}>Conference Paper</span>
            <span style={{ backgroundColor: 'rgba(232,121,249,0.1)', border: '1px solid rgba(232,121,249,0.3)', color: '#e879f9', borderRadius: '999px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: '600' }}>Springer Nature</span>
          </div>
          <h3 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '12px', lineHeight: 1.6 }}>
            Machine Learning-Based Prediction of Heart Disease Using a Merged UCI Dataset and Web Deployment
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>
            <span style={{ color: '#00FFCC', fontWeight: '600' }}>Diana Opiyo</span>,{' '}
            <span style={{ color: '#00FFCC', fontWeight: '600' }}>Suhila Sawesi</span>
          </p>
          <p style={{ color: '#60a5fa', fontSize: '0.88rem', marginBottom: '16px' }}>
            Published by Springer Nature · Conference Presentation · Germany · Camera-ready: April 2026
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '20px' }}>
            This paper presents a machine learning pipeline for heart disease prediction trained on a merged UCI dataset.
            The best performing model achieves a{' '}
            <span style={{ color: '#00FFCC', fontWeight: '600' }}>ROC-AUC of 0.9412</span> and is deployed
            as an accessible web application, demonstrating end-to-end ML from data preprocessing to clinical deployment.
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Machine Learning', 'Heart Disease', 'UCI Dataset', 'Web Deployment', 'Springer Nature', 'Health Informatics'].map((tag, i) => (
              <span key={i} style={{ backgroundColor: '#1e2a45', color: '#94a3b8', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem' }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="pub-card" style={{ ...reveal('publications', 0.25), marginTop: '20px', backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px', borderLeft: '4px solid #4a5568' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: 'rgba(74,85,104,0.2)', border: '1px solid rgba(74,85,104,0.4)', color: '#94a3b8', borderRadius: '999px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: '700' }}>IN PROGRESS</span>
            <span style={{ backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)', color: '#60a5fa', borderRadius: '999px', padding: '4px 14px', fontSize: '0.72rem', fontWeight: '600' }}>Journal Manuscript</span>
          </div>
          <h3 style={{ color: '#94a3b8', fontSize: '1.05rem', fontWeight: 'bold', marginBottom: '10px', lineHeight: 1.6 }}>
            Predicting Perceived Medication Management Difficulty as an Early Indicator of Non-Adherence Risk
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.8', marginBottom: '12px' }}>
            This study investigates whether perceived medication management difficulty can serve as an
            early warning signal for medication non-adherence. Using the 2021 NCSME Survey (N=1,521),
            we develop a Logistic Regression model with 19 predictors spanning medication complexity,
            financial barriers, social support, and demographics — enabling clinicians to identify
            at-risk patients before non-adherence occurs.
          </p>
          <p style={{ color: '#4a5568', fontSize: '0.85rem', marginBottom: '0' }}>
            In collaboration with Dr. Suhila Sawesi · NCSME Dataset (N=1,521) · Manuscript in preparation
          </p>
        </div>
      </section>

      {/* ── CONTACT ME ─────────────────────────────────── */}
      <section id="honors" className="section-pad" style={{ padding: '64px 80px', background: 'linear-gradient(135deg, #eef9fb 0%, #f8fbfc 42%, #fbf2e8 100%)', color: '#001b33' }}>
        <div className="lovable-heading" style={{ ...reveal('honors'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '38px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#001b33', margin: 0, letterSpacing: '0' }}>Awards &amp; honors</h2>
          <span style={{ color: '#17324d', fontSize: '0.92rem', fontFamily: 'Consolas, Monaco, monospace' }}>{honors.length} total</span>
        </div>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px' }}>
          {honors.map((honor, i) => (
            <div key={`honor-card-${i}`} className="pub-card"
              style={{ ...reveal('honors', i * 0.08), backgroundColor: 'rgba(255,255,255,0.66)', border: '1px solid #c7d8e2', borderRadius: '22px', padding: '30px', minHeight: '190px', boxShadow: '0 20px 44px rgba(0,27,51,0.04)' }}>
              {honor.image && <img src={honor.image} alt={honor.title} style={{ width: '100%', height: '190px', objectFit: 'cover', borderRadius: '16px', marginBottom: '22px', border: '1px solid #d7e5ec' }}/>}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '18px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <h3 style={{ color: '#001b33', fontSize: '1.3rem', fontWeight: '800', margin: 0, lineHeight: 1.25 }}>{honor.title}</h3>
                <span style={{ color: '#008a45', fontSize: '0.9rem', fontFamily: 'Consolas, Monaco, monospace', whiteSpace: 'nowrap' }}>{honor.year}</span>
              </div>
              <p style={{ color: '#17324d', fontSize: '1rem', lineHeight: '1.55', margin: '0 0 12px 0' }}>{honor.organization}</p>
              <p style={{ color: '#314a63', fontSize: '1rem', lineHeight: '1.65', margin: 0 }}>{honor.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="publications" className="section-pad" style={{ padding: '64px 80px', backgroundColor: '#f3fafb', color: '#001b33' }}>
        <div className="lovable-heading" style={{ ...reveal('publications'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '38px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#001b33', margin: 0, letterSpacing: '0' }}>Publications &amp; research</h2>
          <span style={{ color: '#17324d', fontSize: '0.92rem', fontFamily: 'Consolas, Monaco, monospace' }}>{publicationEntries.length} entries</span>
        </div>
        <div style={{ display: 'grid', gap: '20px' }}>
          {publicationEntries.map((entry, i) => (
            <div key={`publication-${entry.number}`} className="pub-card"
              style={{ ...reveal('publications', i * 0.08), backgroundColor: 'rgba(255,255,255,0.58)', border: '1px solid #c7d8e2', borderRadius: '18px', padding: '26px', boxShadow: '0 18px 36px rgba(0,27,51,0.03)' }}>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '14px', color: '#17324d', fontFamily: 'Consolas, Monaco, monospace', fontSize: '0.9rem' }}>
                <span style={{ color: '#008a45' }}>[{entry.number}]</span>
                <span>{entry.year}</span>
                <span style={{ color: '#008a45', border: '1px solid #75c9a1', borderRadius: '999px', padding: '4px 12px', fontSize: '0.78rem', letterSpacing: '1px' }}>{entry.status}</span>
              </div>
              <h3 style={{ color: '#001b33', fontSize: '1.18rem', fontWeight: '500', lineHeight: '1.55', margin: '0 0 12px 0' }}>{entry.title}</h3>
              {entry.venue && <p style={{ color: '#314a63', fontSize: '1rem', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>{entry.venue}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="conferences" className="section-pad" style={{ padding: '64px 80px', background: 'linear-gradient(180deg, #f8fbfc 0%, #eef9fb 100%)', color: '#001b33' }}>
        <div className="lovable-heading" style={{ ...reveal('conferences'), display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '38px' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#001b33', margin: 0, letterSpacing: '0' }}>Conferences &amp; talks</h2>
          <span style={{ color: '#17324d', fontSize: '0.92rem', fontFamily: 'Consolas, Monaco, monospace' }}>{conferenceTalks.length} appearances</span>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px' }}>
          {conferenceTalks.map((talk, i) => (
            <div key={`conference-${i}`} className="pub-card"
              style={{ ...reveal('conferences', i * 0.08), backgroundColor: 'rgba(255,255,255,0.58)', border: '1px solid #c7d8e2', borderRadius: '22px', padding: '30px', minHeight: '176px', boxShadow: '0 18px 36px rgba(0,27,51,0.03)' }}>
              <div style={{ color: '#008a45', fontSize: '0.95rem', fontFamily: 'Consolas, Monaco, monospace', marginBottom: '14px' }}>{talk.year}</div>
              <h3 style={{ color: '#001b33', fontSize: '1.22rem', fontWeight: '800', lineHeight: '1.3', margin: '0 0 14px 0' }}>{talk.title}</h3>
              {talk.details.map((detail, detailIndex) => (
                <p key={`${talk.title}-${detailIndex}`} style={{ color: '#314a63', fontSize: '1rem', lineHeight: '1.5', margin: detailIndex === 0 ? '0 0 6px 0' : 0 }}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="contact-me" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0a0f1e' }}>
        <div style={reveal('contact-me')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Contact Me</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '40px' }}>
            Projects, collaborations, research, or just to say hi, I am all for it 😊
          </p>
        </div>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div style={reveal('contact-me', 0.1)}>
            {[
              { label: 'Name', type: 'text', placeholder: 'Your name', id: 'name' },
              { label: 'Email', type: 'email', placeholder: 'Enter your email', id: 'email' },
            ].map(field => (
              <div key={field.id} style={{ marginBottom: '20px' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} className="form-input"
                  style={{ width: '100%', padding: '12px 16px', backgroundColor: '#0d1526', border: '1px solid #1e2a45', borderRadius: '8px', color: 'white', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}/>
              </div>
            ))}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea placeholder="Your message..." rows={5} className="form-input"
                style={{ width: '100%', padding: '12px 16px', backgroundColor: '#0d1526', border: '1px solid #1e2a45', borderRadius: '8px', color: 'white', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}/>
            </div>
            <button style={{ width: '100%', padding: '13px', backgroundColor: 'transparent', border: '1.5px solid #00FFCC', color: '#00FFCC', borderRadius: '8px', fontSize: '0.95rem', fontWeight: '600', cursor: 'pointer' }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
              Send Message
            </button>
          </div>
          <div style={{ ...reveal('contact-me', 0.2), display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactCards.map(card => (
              <div key={card.id} className="contact-info-card"
                style={{ backgroundColor: '#0d1526', borderRadius: '10px', border: '1px solid #1e2a45', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                {card.icon}
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>{card.label}</div>
                  {card.isLink
                    ? <a href={card.href} target="_blank" rel="noopener noreferrer" style={{ color: '#00FFCC', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>{card.value}</a>
                    : <div style={{ color: card.id === 'location' ? 'white' : '#00FFCC', fontSize: '0.9rem', fontWeight: '500' }}>{card.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #1e2a45', textAlign: 'center', color: '#4a5568', fontSize: '0.8rem' }}>
          © 2026 Diana Opiyo. Built with React.
        </div>
      </section>

    </div>
  )
}

export default App
