import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Handshake,
  MessageCircle,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import './App.css'

const pathOptions = [
  'Ndashaka akazi',
  'Ndashaka clients',
  'Ndashaka service',
  'Ndashaka umukozi',
  'Ndashaka partner',
  'Ndashaka kugurisha product/service',
  'Ndashaka kwiga skill inyinjiriza',
  'Ndashaka gutangira n’ibyo mfite',
  'Sinzi icyo natanga, mfasha kumenya',
]

const modules = [
  {
    icon: Users,
    title: 'Profile System',
    description:
      'Profile iba economic identity: skills, services, needs, proof videos, reviews, trust score na availability.',
    points: ['Intro video', 'Skills', 'Services', 'Trust score'],
  },
  {
    icon: PlayCircle,
    title: 'Proof Video System',
    description:
      'Abantu bashyiraho proof links zerekana ibikorwa nyabyo kuri YouTube, TikTok, Instagram cyangwa Facebook.',
    points: ['Skill demo', 'Before/after', 'Testimonials', 'Product demo'],
  },
  {
    icon: Store,
    title: 'Needs & Offers Marketplace',
    description:
      'Abantu bashyiraho ibyo bakeneye n’ibyo batanga kugira ngo haboneke matches ziganisha ku bikorwa.',
    points: ['Post need', 'Create offer', 'Budget', 'Location'],
  },
  {
    icon: Target,
    title: 'AI Matching Engine',
    description:
      'Matching ishingiye kuri category, location, skills, budget, availability, proof na trust score.',
    points: ['Match score', 'Match reason', 'Recommended people', 'Recommended jobs'],
  },
  {
    icon: GraduationCap,
    title: 'Learning-to-Earning',
    description:
      'Amasomo magufi afasha umuntu kwiga skill, gukora proof, gushyiraho offer no kubona client wa mbere.',
    points: ['Short lessons', 'Practice tasks', 'Create proof', 'Outreach'],
  },
  {
    icon: Zap,
    title: 'Zero-Capital Engine',
    description:
      'Ifasha umuntu ufite phone gusa gutangira inzira nka connector, proof video helper cyangwa referral agent.',
    points: ['Phone only', 'Local connector', 'Referral agent', 'First task'],
  },
]

const pages = [
  'Home',
  'Choose Your Path',
  'Onboarding',
  'Profile',
  'Proof Videos',
  'Needs',
  'Offers',
  'Marketplace',
  'Opportunity Feed',
  'Learning-to-Earning',
  'Zero-Capital Paths',
  'AI Assistant',
  'Messaging',
  'Notifications',
  'Trust Score',
  'Reviews',
  'Business Marketplace',
  'Admin Dashboard',
  'Settings',
  'Contact',
]

const journey = [
  'Umuntu yinjira',
  'Ahitamo path',
  'Akora profile',
  'Ashyiraho proof',
  'Apostinga need cyangwa offer',
  'Abona matches',
  'Avugana n’abantu',
  'Akora task',
  'Abona review',
  'Trust score irazamuka',
  'Platform imwereka amahirwe menshi',
]

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Website MVP Foundation',
    text: 'Home, paths, modules, pages, journey, roadmap na call-to-action.',
  },
  {
    phase: 'Phase 2',
    title: 'Screens Expansion',
    text: 'Notifications, Messaging, Profiles, Marketplace, Proof Videos na sub-screens.',
  },
  {
    phase: 'Phase 3',
    title: 'Marketplace Logic',
    text: 'Needs, Offers, Matching, Reviews, Trust Score na Opportunity Feed.',
  },
  {
    phase: 'Phase 4',
    title: 'AI & Learning',
    text: 'AI advisor, zero-capital paths, learning-to-earning na recommendations.',
  },
  {
    phase: 'Phase 5',
    title: 'Backend & Real Users',
    text: 'Authentication, database, admin dashboard, analytics, moderation na deployment scaling.',
  },
]

function App() {
  return (
    <main className="app">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="UBWENGE Buzima home">
          <span className="brand-mark">UB</span>
          <span>
            <strong>UBWENGE Buzima</strong>
            <small>Skills • Proof • Trust • Income</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#paths">Paths</a>
          <a href="#modules">Modules</a>
          <a href="#pages">Pages</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Start MVP
          <ArrowRight size={17} />
        </a>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="hero-badge">
            <Sparkles size={17} />
            African opportunity platform
          </div>

          <h1>Erekana icyo ushoboye. Hura n’abagukeneye. Hindura skills zawe amafaranga.</h1>

          <p className="hero-description">
            UBWENGE Buzima ihuza abantu n’akazi, clients, services, partners, amasoko,
            n’amahirwe hashingiwe kuri skills, proof videos, location, trust, n’icyo buri
            muntu akeneye.
          </p>

          <div className="hero-actions">
            <a href="#paths" className="primary-button">
              Ndashaka akazi cyangwa client
              <ArrowRight size={18} />
            </a>
            <a href="#modules" className="secondary-button">
              Reba uko platform izubakwa
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20</strong>
              <span>MVP pages</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>future screens</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>opportunity advisor</span>
            </div>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Platform preview cards">
          <div className="match-card raised">
            <span className="card-label">
              <Target size={16} />
              AI Match
            </span>
            <h3>Restaurant i Kigali irashaka short videos</h3>
            <p>Budget: 50,000 RWF • Proof required • Available this week</p>
          </div>

          <div className="profile-card">
            <div className="avatar">AM</div>
            <div>
              <h3>Aline Mukamana</h3>
              <p>Short Video Creator for Small Businesses</p>
              <div className="mini-tags">
                <span>Kigali</span>
                <span>Proof uploaded</span>
                <span>Available</span>
              </div>
            </div>
          </div>

          <div className="trust-card">
            <span className="card-label">
              <ShieldCheck size={16} />
              Trust Score
            </span>
            <div className="trust-score">78/100</div>
            <p>Profile complete, proof uploaded, reviews growing.</p>
          </div>

          <div className="proof-card">
            <span className="card-label">
              <PlayCircle size={16} />
              Proof Videos
            </span>
            <h3>3 samples connected</h3>
            <p>TikTok • YouTube • Instagram</p>
          </div>
        </aside>
      </section>

      <section id="paths" className="section">
        <div className="section-heading">
          <span className="eyebrow">Choose Your Path</span>
          <h2>Umuntu wese agira aho ahera.</h2>
          <p>
            Aho kugira ngo umuntu yinjire akayoberwa, UBWENGE Buzima imubaza icyo
            ashaka hanyuma ikamwereka first action, proof akeneye na matches zishoboka.
          </p>
        </div>

        <div className="path-grid">
          {pathOptions.map((path, index) => (
            <article className="path-card" key={path}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{path}</h3>
              <p>AI izagufasha kubona inzira, action ya mbere, n’amahirwe ahuye nawe.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modules" className="section dark-section">
        <div className="section-heading">
          <span className="eyebrow">Product Architecture</span>
          <h2>Website uyu munsi, ecosystem nini ejo.</h2>
          <p>
            Iyi MVP ni foundation ya platform izavamo social feed, marketplace, AI advisor,
            learning-to-earning, trust system, messaging na admin dashboard.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <article className="module-card" key={module.title}>
                <div className="module-icon">
                  <Icon size={24} />
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <div className="tag-row">
                  {module.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="pages" className="section">
        <div className="section-heading">
          <span className="eyebrow">MVP Pages</span>
          <h2>Pages 20 zitegura app ya screens 500+.</h2>
          <p>
            Buri page izaguka ikagira screens zayo. Notifications yonyine ishobora kugira
            screens 15+, Messaging ikagira flows zayo, Profiles ikagira economic identity yose.
          </p>
        </div>

        <div className="pages-cloud">
          {pages.map((page) => (
            <span key={page}>{page}</span>
          ))}
        </div>
      </section>

      <section className="section journey-section">
        <div className="section-heading">
          <span className="eyebrow">Core Journey</span>
          <h2>Urugendo ruva kuri “sinzi icyo nakora” rukagera ku income.</h2>
        </div>

        <div className="journey-list">
          {journey.map((step, index) => (
            <div className="journey-item" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roadmap" className="section roadmap-section">
        <div className="section-heading">
          <span className="eyebrow">Roadmap</span>
          <h2>Tuzayubaka buhoro buhoro, module kuri module.</h2>
        </div>

        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article className="roadmap-card" key={item.phase}>
              <span>{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span className="eyebrow">Next Step</span>
          <h2>Twubake UBWENGE Buzima nk’irembo ry’amahirwe.</h2>
          <p>
            Intambwe ikurikira ni ukwagura screens, gushyiramo routes, forms, mock data,
            hanyuma tukazashyiramo backend, database, login na AI matching engine.
          </p>
        </div>

        <a className="primary-button" href="mailto:donaacademy42@gmail.com">
          Contact Dona Academy
          <MessageCircle size={18} />
        </a>
      </section>

      <footer className="site-footer">
        <div className="brand">
          <span className="brand-mark">UB</span>
          <span>
            <strong>UBWENGE Buzima</strong>
            <small>Built for skills, proof, trust and opportunity.</small>
          </span>
        </div>

        <p>© 2026 Dona Academy. UBWENGE Buzima MVP foundation.</p>
      </footer>
    </main>
  )
}

export default App
