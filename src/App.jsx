// App.jsx — Main portfolio component
import { useState, useEffect } from "react"

function App() {

  // ── PROJECTS CAROUSEL STATE ─────────────────────────
  const [current, setCurrent] = useState(0)

  // ── ARTICLES CAROUSEL STATE ─────────────────────────
  const [currentArticle, setCurrentArticle] = useState(0)

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

  // ── SKILLS DATA ─────────────────────────────────────
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
      // ← Real published Medium article
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
      // ← Coming soon — placeholder
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
      // ← Coming soon — placeholder
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

  return (
    <div style={{ backgroundColor: '#0a0f1e', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        display: 'flex', justifyContent: 'center',
        alignItems: 'center', gap: '48px',
        padding: '20px 60px', backgroundColor: '#0a0f1e',
        borderBottom: '1px solid #1e2a45', boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem' }}>
          {['Home', 'What I Do', 'My Projects', 'Skills', 'Articles', 'Contact Me'].map((link, i) => (
            <a key={i} href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              style={{
                color: i === 0 ? '#00FFCC' : '#cbd5e1',
                textDecoration: 'none',
                borderBottom: i === 0 ? '2px solid #00FFCC' : 'none',
                paddingBottom: '4px'
              }}>
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO SECTION ─────────────────────────────── */}
      <section id="home" style={{
        minHeight: 'auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 60px 60px 60px',
      }}>
        <div style={{ maxWidth: '620px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00FFCC', margin: '0 0 10px 0', lineHeight: 1.1 }}>
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
          <a href="#contact-me" style={{
            border: '1.5px solid #00FFCC', color: '#00FFCC',
            padding: '12px 28px', borderRadius: '999px',
            textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem',
          }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
            Get in touch &rsaquo;&rsaquo;&rsaquo;
          </a>
        </div>
      </section>

      {/* ── WHAT I DO SECTION ────────────────────────── */}
      <section id="what-i-do" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>What I Do</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px', alignItems: 'start' }}>

          <div style={{ padding: '28px 28px 20px 28px', borderRight: '1px solid #1e2a45', borderBottom: '1px solid #1e2a45' }}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '12px' }}>Machine Learning</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
              I build well-tuned and accurate machine learning models, like{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>classification</span>,{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>CNN</span>,{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>regression</span>, and{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>deep learning</span>{' '}
              techniques to uncover patterns in complex data. I build models that go beyond accuracy and into{' '}
              <span style={{ color: '#e879f9', fontWeight: '600' }}>real-world deployment</span>.
            </p>
          </div>

          <div style={{ padding: '36px 36px 20px 36px', borderBottom: '1px solid #1e2a45' }}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '12px' }}>Data Analysis & Statistics</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
              With a strong foundation in{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>applied statistics</span>{' '}
              and mathematics, I go beyond running numbers, I extract the{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>story behind the data</span>.
              Using Python, R, SQL, Tableau, Excel, and Power BI, I conduct exploratory analysis,
              sentiment analysis, topic modeling, and engagement analytics that shape{' '}
              <span style={{ color: '#e879f9', fontWeight: '600' }}>actual decisions</span>.
            </p>
          </div>

          <div style={{ padding: '28px', borderRight: '1px solid #1e2a45' }}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '12px' }}>Health Informatics</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
              I build Machine Learning-powered tools designed for clinical use. I care about building tools that are not just
              accurate, but{' '}
              <span style={{ color: '#e879f9', fontWeight: '600' }}>accessible to the people who need them most</span>.
            </p>
          </div>

          <div style={{ padding: '28px' }}>
            <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '12px' }}>Teaching & Research</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '0.95rem', margin: 0, textAlign: 'justify' }}>
              As a Statistics, Computer Science, and Mathematics Instructor at{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>Technical University of Mombasa</span>,
              I translate complex concepts into clear and practical understanding. My research spans{' '}
              <span style={{ color: '#00FFCC', fontWeight: '600' }}>
                Natural Language Processing, Mental Health, Health, and Learning Analytics in K-12 schools.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* ── MY PROJECTS SECTION ──────────────────────── */}
      <section id="my-projects" style={{ padding: '50px 80px', backgroundColor: '#0a0f1e' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>My Projects</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>

        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            transform: `translateX(-${current * 100}%)`,
          }}>

            {/* ── SLIDE 1: Suicidal Ideation ─────────── */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div style={{
                backgroundColor: '#0d1526', borderRadius: '12px',
                border: '1px solid #1e2a45', overflow: 'hidden',
                display: 'flex', alignItems: 'stretch',
              }}>
                <div style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{
                    backgroundColor: 'rgba(0,255,204,0.1)', border: '1px solid rgba(0,255,204,0.3)',
                    color: '#00FFCC', borderRadius: '999px', padding: '3px 12px',
                    fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block'
                  }}>NLP · Deep Learning · Mental Health</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>
                    Suicidal Ideation Detection
                  </h3>
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
                  <a href="https://suicidal-ideation-detector.streamlit.app/"
                    target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #00FFCC', color: '#00FFCC', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/Suicidal Ideation.jpg" alt="Suicidal Ideation Detection App"
                  style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

            {/* ── SLIDE 2: Heart Disease ────────────── */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div style={{
                backgroundColor: '#0d1526', borderRadius: '12px',
                border: '1px solid #1e2a45', overflow: 'hidden',
                display: 'flex', alignItems: 'stretch',
              }}>
                <div style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{
                    backgroundColor: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.3)',
                    color: '#60a5fa', borderRadius: '999px', padding: '3px 12px',
                    fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block'
                  }}>Health Informatics · Machine Learning</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>
                    Heart Disease Risk Predictor
                  </h3>
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
                  <a href="https://heart-disease-risk-predictor-app.streamlit.app/"
                    target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #60a5fa', color: '#60a5fa', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#60a5fa'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#60a5fa'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/Heart_Disease.jpg" alt="Heart Disease Risk Predictor"
                  style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

            {/* ── SLIDE 3: PharmAssist ──────────────── */}
            <div style={{ minWidth: '100%', boxSizing: 'border-box' }}>
              <div style={{
                backgroundColor: '#0d1526', borderRadius: '12px',
                border: '1px solid #1e2a45', overflow: 'hidden',
                display: 'flex', alignItems: 'stretch',
              }}>
                <div style={{ width: '55%', padding: '28px 32px', boxSizing: 'border-box' }}>
                  <span style={{
                    backgroundColor: 'rgba(232,121,249,0.1)', border: '1px solid rgba(232,121,249,0.3)',
                    color: '#e879f9', borderRadius: '999px', padding: '3px 12px',
                    fontSize: '0.72rem', fontWeight: '600', marginBottom: '14px', display: 'inline-block'
                  }}>Pharmacy · Health Informatics · ML Deployment</span>
                  <h3 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '8px' }}>
                    PharmAssist, Medication Management Risk Screener
                  </h3>
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
                  <a href="https://medication-difficulty.streamlit.app/"
                    target="_blank" rel="noopener noreferrer"
                    style={{ border: '1.5px solid #e879f9', color: '#e879f9', padding: '8px 20px', borderRadius: '999px', textDecoration: 'none', fontWeight: '500', fontSize: '0.85rem' }}
                    onMouseEnter={e => { e.target.style.backgroundColor = '#e879f9'; e.target.style.color = '#000'; }}
                    onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#e879f9'; }}>
                    View Live App ›
                  </a>
                </div>
                <img src="/PharmAssist.jpg" alt="PharmAssist Medication Risk Screener"
                  style={{ width: '45%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>

          </div>

          {/* ── PREV ARROW ─────────────────────────── */}
          <button onClick={() => setCurrent(prev => (prev - 1 + 3) % 3)}
            style={{
              position: 'absolute', left: '12px', top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45',
              color: 'white', borderRadius: '50%', width: '40px', height: '40px',
              fontSize: '1.1rem', cursor: 'pointer', zIndex: 10,
            }}>‹</button>

          {/* ── NEXT ARROW ─────────────────────────── */}
          <button onClick={() => setCurrent(prev => (prev + 1) % 3)}
            style={{
              position: 'absolute', right: '12px', top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45',
              color: 'white', borderRadius: '50%', width: '40px', height: '40px',
              fontSize: '1.1rem', cursor: 'pointer', zIndex: 10,
            }}>›</button>
        </div>

        {/* ── PROJECT DOT INDICATORS ─────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px', borderRadius: '999px',
                backgroundColor: i === current ? '#00FFCC' : '#1e2a45',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s', padding: 0,
              }}/>
          ))}
        </div>

      </section>

      {/* ── SKILLS SECTION ───────────────────────────── */}
      <section id="skills" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Skill Set</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '30px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>

          <div style={{ backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#00FFCC', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Technical Tools
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {technicalSkills.map((skill, i) => (
                <span key={i} style={{
                  backgroundColor: 'rgba(0,255,204,0.08)', border: '1px solid rgba(0,255,204,0.2)',
                  color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                }}>{skill}</span>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#60a5fa', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Analytical Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {analyticalSkills.map((skill, i) => (
                <span key={i} style={{
                  backgroundColor: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.2)',
                  color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                }}>{skill}</span>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#0a0f1e', borderRadius: '12px', border: '1px solid #1e2a45', padding: '28px' }}>
            <h3 style={{ color: '#e879f9', fontSize: '1rem', fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Soft Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {softSkills.map((skill, i) => (
                <span key={i} style={{
                  backgroundColor: 'rgba(232,121,249,0.08)', border: '1px solid rgba(232,121,249,0.2)',
                  color: '#94a3b8', borderRadius: '6px', padding: '5px 10px', fontSize: '0.78rem',
                }}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── ARTICLES SECTION ─────────────────────────── */}
      <section id="articles" style={{ padding: '50px 80px', backgroundColor: '#0a0f1e' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Articles</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '30px' }}>
          Thoughts on machine learning, data science, and research, part of my{' '}
          <span style={{ color: '#00FFCC', fontWeight: '600' }}>#LRWithDiana</span> series.
        </p>

        {/* ── ARTICLES CAROUSEL WRAPPER ─────────────── */}
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>

          {/* ── ARTICLES SLIDES TRACK ─────────────────── */}
          <div style={{
            display: 'flex',
            transition: 'transform 0.6s ease-in-out',
            transform: `translateX(-${currentArticle * 100}%)`,
          }}>

            {/* Each article is its own full-width slide */}
            {articles.map((article, i) => (
              <div key={i} style={{ minWidth: '100%', boxSizing: 'border-box' }}>
                <div style={{
                  backgroundColor: '#0d1526', borderRadius: '12px',
                  border: '1px solid #1e2a45', padding: '40px 48px',
                  display: 'flex', flexDirection: 'column',
                  minHeight: '220px', justifyContent: 'space-between',
                }}>
                  {/* Top: tag + date */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{
                        backgroundColor: article.tagBg, border: `1px solid ${article.tagBorder}`,
                        color: article.tagColor, borderRadius: '999px',
                        padding: '4px 14px', fontSize: '0.75rem', fontWeight: '600',
                      }}>{article.tag}</span>
                      <span style={{ color: '#4a5568', fontSize: '0.8rem' }}>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '14px', lineHeight: 1.5 }}>
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.8', marginBottom: '28px', maxWidth: '75%' }}>
                      {article.summary}
                    </p>
                  </div>

                  {/* Read link */}
                  <a href={article.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      color: article.tagColor, fontSize: '0.88rem',
                      fontWeight: '600', textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.target.style.opacity = '0.7'; }}
                    onMouseLeave={e => { e.target.style.opacity = '1'; }}>
                    Read Article ›
                  </a>
                </div>
              </div>
            ))}

          </div>

          {/* ── ARTICLES PREV ARROW ───────────────────── */}
          <button onClick={() => setCurrentArticle(prev => (prev - 1 + 3) % 3)}
            style={{
              position: 'absolute', left: '12px', top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45',
              color: 'white', borderRadius: '50%', width: '40px', height: '40px',
              fontSize: '1.1rem', cursor: 'pointer', zIndex: 10,
            }}>‹</button>

          {/* ── ARTICLES NEXT ARROW ───────────────────── */}
          <button onClick={() => setCurrentArticle(prev => (prev + 1) % 3)}
            style={{
              position: 'absolute', right: '12px', top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #1e2a45',
              color: 'white', borderRadius: '50%', width: '40px', height: '40px',
              fontSize: '1.1rem', cursor: 'pointer', zIndex: 10,
            }}>›</button>

        </div>

        {/* ── ARTICLES DOT INDICATORS ───────────────── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setCurrentArticle(i)}
              style={{
                width: i === currentArticle ? '24px' : '8px',
                height: '8px', borderRadius: '999px',
                backgroundColor: i === currentArticle ? '#00FFCC' : '#1e2a45',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.3s', padding: 0,
              }}/>
          ))}
        </div>

        {/* View all button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="https://www.linkedin.com/in/diana-opiyo-680b98309/"
            target="_blank" rel="noopener noreferrer"
            style={{
              border: '1.5px solid #00FFCC', color: '#00FFCC',
              padding: '12px 32px', borderRadius: '999px',
              textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem',
            }}
            onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
            onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
            View All on LinkedIn ›
          </a>
        </div>

      </section>

      {/* ── CONTACT ME SECTION ───────────────────────── */}
      <section id="contact-me" style={{ padding: '50px 80px', backgroundColor: '#0d1526' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>Contact Me</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: '#00FFCC', marginBottom: '10px' }}></div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '40px' }}>
          Projects, collaborations, research, or just to say hi, I am all for it 😊
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

          {/* ── LEFT: Contact Form ────────────────────── */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>Name</label>
              <input type="text" placeholder="Your name"
                style={{
                  width: '100%', padding: '12px 16px',
                  backgroundColor: '#0a0f1e', border: '1px solid #1e2a45',
                  borderRadius: '8px', color: 'white', fontSize: '0.9rem',
                  outline: 'none', boxSizing: 'border-box',
                }}/>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>Email</label>
              <input type="email" placeholder="Enter your email"
                style={{
                  width: '100%', padding: '12px 16px',
                  backgroundColor: '#0a0f1e', border: '1px solid #1e2a45',
                  borderRadius: '8px', color: 'white', fontSize: '0.9rem',
                  outline: 'none', boxSizing: 'border-box',
                }}/>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea placeholder="Your message..." rows={5}
                style={{
                  width: '100%', padding: '12px 16px',
                  backgroundColor: '#0a0f1e', border: '1px solid #1e2a45',
                  borderRadius: '8px', color: 'white', fontSize: '0.9rem',
                  outline: 'none', resize: 'vertical', boxSizing: 'border-box',
                }}/>
            </div>
            <button style={{
              width: '100%', padding: '13px',
              backgroundColor: 'transparent',
              border: '1.5px solid #00FFCC', color: '#00FFCC',
              borderRadius: '8px', fontSize: '0.95rem',
              fontWeight: '600', cursor: 'pointer',
            }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#00FFCC'; e.target.style.color = '#000'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#00FFCC'; }}>
              Send Message
            </button>
          </div>

          {/* ── RIGHT: Contact Info with SVG icons ───── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Email card */}
            <div style={{
              backgroundColor: '#0a0f1e', borderRadius: '10px',
              border: '1px solid #1e2a45', padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="#00FFCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6"
                  stroke="#00FFCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>Email</div>
                <div style={{ color: '#00FFCC', fontSize: '0.9rem', fontWeight: '500' }}>kopiyodiana@gmail.com</div>
              </div>
            </div>

            {/* LinkedIn card */}
            <div style={{
              backgroundColor: '#0a0f1e', borderRadius: '10px',
              border: '1px solid #1e2a45', padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>LinkedIn</div>
                <a href="https://www.linkedin.com/in/diana-opiyo-680b98309/"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: '#00FFCC', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>
                  diana-opiyo
                </a>
              </div>
            </div>

            {/* GitHub card */}
            <div style={{
              backgroundColor: '#0a0f1e', borderRadius: '10px',
              border: '1px solid #1e2a45', padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>GitHub</div>
                <a href="https://github.com/kopiyo"
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: '#00FFCC', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none' }}>
                  github.com/kopiyo
                </a>
              </div>
            </div>

            {/* Location card */}
            <div style={{
              backgroundColor: '#0a0f1e', borderRadius: '10px',
              border: '1px solid #1e2a45', padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  stroke="#00FFCC" strokeWidth="2"/>
                <circle cx="12" cy="9" r="2.5" stroke="#00FFCC" strokeWidth="2"/>
              </svg>
              <div>
                <div style={{ color: '#94a3b8', fontSize: '0.78rem', marginBottom: '4px' }}>Location</div>
                <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: '500' }}>Allendale, Michigan, USA</div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '60px', paddingTop: '24px',
          borderTop: '1px solid #1e2a45',
          textAlign: 'center', color: '#4a5568', fontSize: '0.8rem'
        }}>
          © 2026 Diana Opiyo. Built with React.
        </div>

      </section>

    </div>
  )
}

export default App