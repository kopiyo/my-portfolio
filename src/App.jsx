// App.jsx — Main portfolio component
import { useState, useEffect } from "react"

function App() {

  // ── STATES ──────────────────────────────────────────
  const [current, setCurrent] = useState(0)
  const [currentArticle, setCurrentArticle] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleSections, setVisibleSections] = useState({})
  const [animationKey, setAnimationKey] = useState(0)

  // Auto-slides projects every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Auto-slides articles every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // ── SCROLL REVEAL ────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }))
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

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
      tag: 'NLP · Data Science',
      tagColor: '#00FFCC',
      tagBg: 'rgba(0,255,204,0.1)',
      tagBorder: 'rgba(0,255,204,0.3)',
      date: 'April 2026',
      title: 'What is Natural Language Processing (NLP)?',
      summary: 'A technical introduction to what NLP is, why it matters, what it can do, and where it appears in everyday life. Covers 9 core NLP tasks with real examples.',
      link: 'https://medium.com/@kopiyodiana/what-is-natural-language-processing-nlp-a868586804f5',
    },
    {
      tag: 'Machine Learning',
      tagColor: '#e879f9',
      tagBg: 'rgba(232,121,249,0.1)',
      tagBorder: 'rgba(232,121,249,0.3)',
      date: 'Coming Soon',
      title: 'How NLP Works: The Computational Pipeline',
      summary: 'Article 2 of the #LRWithDiana series. Covers tokenisation, part-of-speech tagging, parsing, and how machines build representations of meaning from raw text.',
      link: 'https://medium.com/@kopiyodiana',
    },
    {
      tag: 'Deep Learning',
      tagColor: '#60a5fa',
      tagBg: 'rgba(96,165,250,0.1)',
      tagBorder: 'rgba(96,165,250,0.3)',
      date: 'Coming Soon',
      title: 'NLP Techniques: From Word Embeddings to Transformers',
      summary: 'Article 3 of the #LRWithDiana series. A deep dive into Word2Vec, GloVe, LSTMs, Bi-LSTMs, and the Transformer architecture that powers ChatGPT and BERT.',
      link: 'https://medium.com/@kopiyodiana',
    },
  ]

  // ── WHAT I DO CARDS ──────────────────────────────────
  const whatIDoCards = [
    {
      id: 0, icon: '🤖', title: 'Machine Learning', accent: '#00FFCC',
      borderSide: { borderRight: '1px solid #1e2a45', borderBottom: '1px solid #1e2a45' },
      content: (
        <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
          I build well-tuned and accurate machine learning models, like{' '}
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

  // ── REVEAL HELPER ────────────────────────────────────
  const reveal = (id, delay = 0) => ({
    opacity: visibleSections[id] ? 1 : 0,
    transform: visibleSections[id] ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  })

  // ── NAV CLICK HANDLER ────────────────────────────────
  const handleNavClick = (link) => {
    const id = link.toLowerCase().replace(/ /g, '-')
    setVisibleSections(prev => ({ ...prev, [id]: false }))
    setAnimationKey(prev => prev + 1)
  }

  return (
    <div style={{ backgroundColor: '#0a0f1e', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* ── GLOBAL STYLES ──────────────────────────────── */}
      <style>{`
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
        <div className="nav-links" style={{ display: 'flex', gap: '32px', fontSize: '0.9rem' }}>
          {['Home', 'What I Do', 'My Projects', 'Skills', 'Articles', 'Publications', 'Contact Me'].map((link, i) => (
            <a key={i}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => handleNavClick(link)}
              style={{
                color: i === 0 ? '#00FFCC' : '#cbd5e1',
                textDecoration: 'none',
                borderBottom: i === 0 ? '2px solid #00FFCC' : 'none',
                paddingBottom: '4px', whiteSpace: 'nowrap',
              }}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────── */}
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
            onClick={() => handleNavClick('Contact Me')}
            style={{ border: '1.5px solid #00FFCC', color: '#00FFCC', padding: '12px 28px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem' }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
            Get in touch &rsaquo;&rsaquo;&rsaquo;
          </a>
        </div>
      </section>

      {/* ── WHAT I DO ──────────────────────────────────── */}
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
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>
        </div>

        <div style={{ ...reveal('my-projects', 0.15), position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
          <div style={{ display: 'flex', transition: 'transform 0.6s ease-in-out', transform: `translateX(-${current * 100}%)` }}>

            {/* Slide 1 */}
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

            {/* Slide 2 */}
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

            {/* Slide 3 */}
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setCurrent(i)}
              style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '999px', backgroundColor: i === current ? '#00FFCC' : '#1e2a45', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }}/>
          ))}
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────── */}
      <section id="skills" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <div style={reveal('skills')}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Skill Set</h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>

          <div style={{ ...reveal('skills', 0.1), backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#00FFCC', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {technicalSkills.map((skill, i) => (
                <span key={`${animationKey}-tech-${i}`} className="skill-pill skill-pill-animate"
                  style={{
                    backgroundColor: 'rgba(0,255,204,0.08)', border: '1px solid rgba(0,255,204,0.2)',
                    color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                    animationDelay: `${i * 0.04}s`,
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = '#00FFCC'; e.target.style.color = '#00FFCC'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(0,255,204,0.2)'; e.target.style.color = '#94a3b8'; }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ ...reveal('skills', 0.2), backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#60a5fa', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Analytical Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {analyticalSkills.map((skill, i) => (
                <span key={`${animationKey}-analytical-${i}`} className="skill-pill skill-pill-animate"
                  style={{
                    backgroundColor: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.2)',
                    color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                    animationDelay: `${i * 0.06}s`,
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = '#60a5fa'; e.target.style.color = '#60a5fa'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(96,165,250,0.2)'; e.target.style.color = '#94a3b8'; }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div style={{ ...reveal('skills', 0.3), backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#e879f9', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Soft Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {softSkills.map((skill, i) => (
                <span key={`${animationKey}-soft-${i}`} className="skill-pill skill-pill-animate"
                  style={{
                    backgroundColor: 'rgba(232,121,249,0.08)', border: '1px solid rgba(232,121,249,0.2)',
                    color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                    animationDelay: `${i * 0.04}s`,
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = '#e879f9'; e.target.style.color = '#e879f9'; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(232,121,249,0.2)'; e.target.style.color = '#94a3b8'; }}>
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
              <div key={`${animationKey}-article-${i}`} style={{ minWidth: '100%', boxSizing: 'border-box' }}>
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
      <section id="publications" className="section-pad" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
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
            {contactCards.map((card, idx) => (
              <div key={card.id} className="contact-info-card"
                style={{ backgroundColor: '#0d1526', borderRadius: '10px', border: '1px solid #1e2a45', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                {card.icon}
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>{card.label}</div>
                  {card.isLink
                    ? <a href={card.href} target="_blank" rel="noopener noreferrer"
                        style={{ color: '#00FFCC', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>
                        {card.value}
                      </a>
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