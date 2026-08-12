import { useState } from 'react'
import {
  Bell,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Eye,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  Menu,
  MessageCircle,
  PlayCircle,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  User,
  Users,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'choose-path', label: 'Choose Path', icon: Target },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'proof-videos', label: 'Proof Videos', icon: PlayCircle },
  { id: 'needs', label: 'Needs', icon: ClipboardList },
  { id: 'offers', label: 'Offers', icon: BriefcaseBusiness },
  { id: 'marketplace', label: 'Marketplace', icon: Store },
  { id: 'messages', label: 'Messages', icon: MessageCircle },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'learning', label: 'Learning', icon: GraduationCap },
  { id: 'zero-capital', label: 'Zero-Capital', icon: Zap },
  { id: 'ai-assistant', label: 'AI Assistant', icon: Bot },
  { id: 'trust-score', label: 'Trust Score', icon: ShieldCheck },
  { id: 'admin', label: 'Admin', icon: LayoutDashboard },
  { id: 'settings', label: 'Settings', icon: Settings },
]

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

const mockProfiles = [
  {
    name: 'Aline Mukamana',
    role: 'Short Video Creator',
    location: 'Kigali',
    trust: 78,
    proof: 3,
    price: '10,000 - 50,000 RWF',
  },
  {
    name: 'Eric Niyonzima',
    role: 'Welding Specialist',
    location: 'Huye',
    trust: 84,
    proof: 5,
    price: '30,000 - 200,000 RWF',
  },
  {
    name: 'Claudine Uwase',
    role: 'WhatsApp Business Helper',
    location: 'Musanze',
    trust: 69,
    proof: 2,
    price: '5,000 - 25,000 RWF',
  },
]

const needs = [
  {
    title: 'Nkeneye umuntu ukora videos za restaurant',
    category: 'Digital services',
    location: 'Kigali',
    budget: '50,000 RWF',
    urgency: 'Within 1 week',
  },
  {
    title: 'Nkeneye umukozi wo gukora cleaning ya office',
    category: 'Cleaning',
    location: 'Kicukiro',
    budget: '30,000 RWF',
    urgency: 'Tomorrow',
  },
  {
    title: 'Nkeneye tutor wa English ku mwana',
    category: 'Tutoring',
    location: 'Remera',
    budget: '80,000 RWF/month',
    urgency: 'This week',
  },
]

const offers = [
  {
    title: 'Nkora short videos za business nto',
    category: 'Digital services',
    location: 'Kigali',
    price: '10,000 - 50,000 RWF',
    proof: '3 videos',
  },
  {
    title: 'Mfasha shops gushyira products kuri WhatsApp Business',
    category: 'Small business support',
    location: 'Online / Kigali',
    price: '5,000 - 30,000 RWF',
    proof: '2 demos',
  },
  {
    title: 'Nkora welding ya gates, windows na doors',
    category: 'Welding',
    location: 'Huye',
    price: 'Depends on project',
    proof: '5 samples',
  },
]

const notifications = [
  'You have 3 new recommended matches.',
  'A client viewed your proof video.',
  'Your trust score increased by 5 points.',
  'New need posted near Kigali.',
  'AI Assistant created a new offer suggestion.',
]

const adminStats = [
  { label: 'Users', value: '128' },
  { label: 'Profiles', value: '74' },
  { label: 'Proof Videos', value: '213' },
  { label: 'Needs Posted', value: '46' },
  { label: 'Offers Posted', value: '59' },
  { label: 'Matches', value: '301' },
]

function App() {
  const [activeScreen, setActiveScreen] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPath, setSelectedPath] = useState('Sinzi icyo natanga, mfasha kumenya')

  const activeItem = navItems.find((item) => item.id === activeScreen)

  function openScreen(screenId) {
    setActiveScreen(screenId)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="brand-button" onClick={() => openScreen('home')}>
            <span className="brand-mark">UB</span>
            <span>
              <strong>UBWENGE Buzima</strong>
              <small>Skills • Proof • Trust</small>
            </span>
          </button>

          <button className="icon-button close-btn" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="side-nav">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                className={activeScreen === item.id ? 'active' : ''}
                key={item.id}
                onClick={() => openScreen(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="sidebar-card">
          <Sparkles size={18} />
          <strong>AI Opportunity Advisor</strong>
          <p>Gufasha umuntu kumenya icyo yatanga no kubona first action.</p>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="icon-button menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>

          <div>
            <p className="breadcrumb">UBWENGE Buzima / Phase 2</p>
            <h1>{activeItem?.label || 'Dashboard'}</h1>
          </div>

          <div className="topbar-actions">
            <button className="search-button">
              <Search size={17} />
              <span>Search opportunities</span>
            </button>
            <button className="primary-small" onClick={() => openScreen('ai-assistant')}>
              <Bot size={17} />
              Ask AI
            </button>
          </div>
        </header>

        {activeScreen === 'home' && <HomeScreen openScreen={openScreen} />}
        {activeScreen === 'choose-path' && (
          <ChoosePathScreen selectedPath={selectedPath} setSelectedPath={setSelectedPath} />
        )}
        {activeScreen === 'profile' && <ProfileScreen />}
        {activeScreen === 'proof-videos' && <ProofVideosScreen />}
        {activeScreen === 'needs' && <NeedsScreen />}
        {activeScreen === 'offers' && <OffersScreen />}
        {activeScreen === 'marketplace' && <MarketplaceScreen />}
        {activeScreen === 'messages' && <MessagesScreen />}
        {activeScreen === 'notifications' && <NotificationsScreen />}
        {activeScreen === 'learning' && <LearningScreen />}
        {activeScreen === 'zero-capital' && <ZeroCapitalScreen />}
        {activeScreen === 'ai-assistant' && <AiAssistantScreen selectedPath={selectedPath} />}
        {activeScreen === 'trust-score' && <TrustScoreScreen />}
        {activeScreen === 'admin' && <AdminScreen />}
        {activeScreen === 'settings' && <SettingsScreen />}
      </section>

      {sidebarOpen && <button className="overlay" onClick={() => setSidebarOpen(false)} />}
    </main>
  )
}

function HomeScreen({ openScreen }) {
  return (
    <div className="screen-grid">
      <section className="hero-card wide">
        <div>
          <span className="eyebrow">Opportunity Platform</span>
          <h2>Erekana icyo ushoboye. Hura n’abagukeneye. Hindura skills zawe amafaranga.</h2>
          <p>
            UBWENGE Buzima ihuza abantu n’akazi, clients, services, partners, amasoko,
            n’amahirwe hashingiwe kuri skills, proof videos, location, trust, n’icyo buri muntu akeneye.
          </p>

          <div className="button-row">
            <button className="primary-button" onClick={() => openScreen('choose-path')}>
              Choose Your Path
              <ChevronRight size={18} />
            </button>
            <button className="secondary-button" onClick={() => openScreen('marketplace')}>
              Explore Marketplace
            </button>
          </div>
        </div>

        <div className="hero-mini-panel">
          <div>
            <span>AI Match</span>
            <strong>Restaurant needs short videos</strong>
            <p>Kigali • 50,000 RWF • Proof required</p>
          </div>
          <div>
            <span>Trust Score</span>
            <strong>78/100</strong>
            <p>Profile complete, proof uploaded.</p>
          </div>
        </div>
      </section>

      <StatsRow />

      <section className="panel wide">
        <PanelHeader
          label="Recommended Actions"
          title="Dore intambwe za mbere platform yakwereka"
          text="Izi actions ni mock data, ariko zerekana uko app izajya iyobora umuntu."
        />
        <div className="three-grid">
          <ActionCard icon={User} title="Complete profile" text="Shyiraho skills, location, price range na availability." />
          <ActionCard icon={PlayCircle} title="Add proof video" text="Shyiraho link ya TikTok, YouTube cyangwa Instagram." />
          <ActionCard icon={Store} title="Create first offer" text="Hindura skill yawe service umukiriya yumva." />
        </div>
      </section>
    </div>
  )
}

function ChoosePathScreen({ selectedPath, setSelectedPath }) {
  return (
    <section className="panel">
      <PanelHeader
        label="Choose Your Path"
        title="Hitamo urugendo rwawe"
        text="Aha ni ho umuntu atangirira. Iyo ahisemo path, platform imwereka ibimureba gusa."
      />

      <div className="path-grid">
        {pathOptions.map((path) => (
          <button
            className={`path-option ${selectedPath === path ? 'selected' : ''}`}
            key={path}
            onClick={() => setSelectedPath(path)}
          >
            <span>{path}</span>
            {selectedPath === path && <CheckCircle2 size={18} />}
          </button>
        ))}
      </div>

      <div className="result-box">
        <span className="eyebrow">Recommended First Action</span>
        <h3>{selectedPath}</h3>
        <p>
          AI izakubaza ibibazo bike, ikumenyeshe skills/assets ufite, proof ukeneye,
          matches zishoboka, na message wakoresha uvugana n’umukiriya.
        </p>
      </div>
    </section>
  )
}

function ProfileScreen() {
  return (
    <div className="screen-grid">
      <section className="profile-header wide">
        <div className="avatar large">AM</div>
        <div>
          <span className="eyebrow">Economic Identity</span>
          <h2>Aline Mukamana</h2>
          <p>Short Video Creator for Small Businesses • Kigali • Available this week</p>
          <div className="pill-row">
            <span>Proof Uploaded</span>
            <span>Trust 78/100</span>
            <span>3 Reviews</span>
            <span>Price: 10k - 50k RWF</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <PanelHeader label="Profile Completion" title="82% complete" />
        <Progress value={82} />
        <Checklist
          items={[
            'Add profile photo',
            'Add intro video',
            'Add 3 proof links',
            'Create first offer',
            'Ask for first review',
          ]}
        />
      </section>

      <section className="panel">
        <PanelHeader label="Value Statement" title="Icyo Aline afasha abantu" />
        <p>
          Mfasha restaurants, salons na shops gukora short videos zibafasha kugaragaza products zabo kuri social media.
        </p>
      </section>

      <section className="panel wide">
        <PanelHeader label="Skills & Services" title="Ibyo atanga" />
        <div className="card-list">
          <SmallCard title="Short video for business" text="Video 1 ya 30-60 seconds • 1-2 days • 10k-30k RWF" />
          <SmallCard title="TikTok content package" text="Videos 5 ngufi zo kwamamaza products • 50k RWF" />
          <SmallCard title="Product demo video" text="Kwerekana product uko ikoreshwa n’inyungu zayo." />
        </div>
      </section>
    </div>
  )
}

function ProofVideosScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Proof Videos"
        title="Ikimenyetso cy’ibyo umuntu ashoboye"
        text="MVP itangira ikoresha links; direct upload izaza nyuma."
      />

      <div className="form-grid">
        <input placeholder="Video title" />
        <select>
          <option>Proof type</option>
          <option>Skill demonstration</option>
          <option>Before/after</option>
          <option>Client testimonial</option>
          <option>Product demo</option>
        </select>
        <input placeholder="Video link: YouTube, TikTok, Instagram..." />
        <select>
          <option>Related service</option>
          <option>Short videos</option>
          <option>Welding</option>
          <option>Cleaning</option>
          <option>Tutoring</option>
        </select>
      </div>

      <button className="primary-button top-space">
        <Plus size={18} />
        Add Proof Link
      </button>

      <div className="card-list top-space">
        <SmallCard title="Restaurant video sample" text="TikTok link • Score 86/100 • Related to Short videos" />
        <SmallCard title="Before/after salon promo" text="Instagram link • Score 74/100 • Approved" />
        <SmallCard title="Client testimonial" text="YouTube link • Score 91/100 • Verified" />
      </div>
    </section>
  )
}

function NeedsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Needs" title="Abantu bagaragaza ibyo bakeneye" />

      <div className="form-grid">
        <input placeholder="Need title" />
        <select>
          <option>Category</option>
          <option>Digital services</option>
          <option>Cleaning</option>
          <option>Tutoring</option>
          <option>Repair</option>
        </select>
        <input placeholder="Location" />
        <input placeholder="Budget" />
        <select>
          <option>Urgency</option>
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>
        <input placeholder="Preferred proof" />
      </div>

      <button className="primary-button top-space">
        <Plus size={18} />
        Post Need
      </button>

      <DataList items={needs} />
    </section>
  )
}

function OffersScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Offers" title="Abantu bagaragaza ibyo batanga" />

      <div className="form-grid">
        <input placeholder="Offer title" />
        <select>
          <option>Category</option>
          <option>Digital services</option>
          <option>Business support</option>
          <option>Welding</option>
        </select>
        <input placeholder="Location" />
        <input placeholder="Price range" />
        <input placeholder="Proof video link" />
        <select>
          <option>Availability</option>
          <option>Today</option>
          <option>This week</option>
          <option>Weekends</option>
        </select>
      </div>

      <button className="primary-button top-space">
        <Plus size={18} />
        Create Offer
      </button>

      <DataList items={offers} />
    </section>
  )
}

function MarketplaceScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Marketplace"
        title="Explore opportunities"
        text="Aho abantu bazajya bashakisha services, jobs, needs, offers, people, proof videos na learning paths."
      />

      <div className="filter-row">
        <button>All</button>
        <button>Services</button>
        <button>Jobs/Gigs</button>
        <button>People</button>
        <button>Proof Videos</button>
        <button>Learning Paths</button>
      </div>

      <div className="profile-grid">
        {mockProfiles.map((profile) => (
          <article className="market-card" key={profile.name}>
            <div className="avatar">{profile.name.split(' ').map((x) => x[0]).join('')}</div>
            <h3>{profile.name}</h3>
            <p>{profile.role}</p>
            <div className="pill-row">
              <span>{profile.location}</span>
              <span>Trust {profile.trust}</span>
              <span>{profile.proof} proofs</span>
            </div>
            <button className="secondary-button">
              <Eye size={17} />
              View Profile
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

function MessagesScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Messaging" title="Business structured chats" />
      <div className="message-layout">
        <div className="inbox">
          {['Aline Mukamana', 'Restaurant Kigali', 'Eric Welding', 'AI Assistant'].map((name) => (
            <button key={name}>
              <strong>{name}</strong>
              <span>Muraho, nabonye ko mukora service...</span>
            </button>
          ))}
        </div>
        <div className="chat-box">
          <div className="chat-message left">Muraho, nabonye proof video yanyu.</div>
          <div className="chat-message right">Murakoze. Nshobora kubafasha gukora videos 5.</div>
          <div className="chat-message left">Budget ni 50,000 RWF. Mwaboneka ejo?</div>
          <div className="chat-input">
            <input placeholder="Write message..." />
            <button className="primary-small">Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function NotificationsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Notifications" title="All notifications" />
      <div className="notification-tabs">
        {['All', 'Unread', 'Matches', 'Messages', 'Reviews', 'Trust', 'System'].map((tab) => (
          <button key={tab}>{tab}</button>
        ))}
      </div>

      <div className="card-list">
        {notifications.map((note) => (
          <SmallCard key={note} title={note} text="Just now • UBWENGE Buzima notification" />
        ))}
      </div>
    </section>
  )
}

function LearningScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Learning-to-Earning"
        title="Amasomo aganisha ku mafaranga"
        text="Learning path ntigomba kuba library gusa; igomba kuganisha kuri proof, offer, outreach na first client."
      />
      <div className="three-grid">
        <ActionCard icon={GraduationCap} title="WhatsApp Business Helper" text="Learn catalog, quick replies, outreach and proof creation." />
        <ActionCard icon={PlayCircle} title="Proof Video Helper" text="Learn how to help artisans create simple proof videos." />
        <ActionCard icon={Store} title="Product Listing Helper" text="Help shops list products online and find clients." />
      </div>
    </section>
  )
}

function ZeroCapitalScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Zero-Capital Engine"
        title="Tangira n’ibyo ufite"
        text="Iyi screen izafasha umuntu ufite phone gusa kubona inzira ashobora gutangiriraho."
      />

      <div className="form-grid">
        <select>
          <option>Ufite phone?</option>
          <option>Yego</option>
          <option>Oya</option>
        </select>
        <select>
          <option>Ufite internet?</option>
          <option>Yego</option>
          <option>Rimwe na rimwe</option>
        </select>
        <select>
          <option>Uzi gufata video?</option>
          <option>Yego</option>
          <option>Ndabyiga</option>
        </select>
        <select>
          <option>Uzi kuvuga neza?</option>
          <option>Yego</option>
          <option>Buhoro</option>
        </select>
      </div>

      <div className="result-box">
        <span className="eyebrow">Recommended Path</span>
        <h3>Proof Video Helper</h3>
        <p>
          Tangira ushake artisan cyangwa shop imwe hafi yawe, uyifashe gukora video ngufi,
          uyishyire kuri profile ya UBWENGE Buzima.
        </p>
      </div>
    </section>
  )
}

function AiAssistantScreen({ selectedPath }) {
  return (
    <section className="panel">
      <PanelHeader label="AI Assistant" title="Umujyanama w’amahirwe" />

      <div className="ai-box">
        <div className="chat-message left">
          Mfite phone, ndi i Kigali, sinzi coding, ariko nzi kuvuga no gufata amafoto. Nakora iki?
        </div>
        <div className="chat-message right ai">
          Ushobora gutangira nka Proof Video Helper cyangwa Social Media Assistant. Tangirira kuri business nto ziri hafi yawe: shops, salons, restaurants.
        </div>
      </div>

      <div className="result-box">
        <span className="eyebrow">Current selected path</span>
        <h3>{selectedPath}</h3>
        <p>AI izubakira bio, offer, video script na message template bijyanye n’iyi path.</p>
      </div>

      <div className="form-grid top-space">
        <input placeholder="Ask AI: Mfasha gukora bio..." />
        <button className="primary-button">
          <Bot size={18} />
          Generate Advice
        </button>
      </div>
    </section>
  )
}

function TrustScoreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Trust Score" title="78/100" text="Trust score igomba gusobanura impamvu umuntu yizerwa." />
      <Progress value={78} />
      <div className="three-grid top-space">
        <SmallCard title="Profile completeness" text="18/20 points" />
        <SmallCard title="Proof videos" text="17/20 points" />
        <SmallCard title="Reviews" text="12/15 points" />
      </div>
      <Checklist
        items={[
          'Add intro video',
          'Add another proof video',
          'Complete first task',
          'Ask for review',
          'Verify phone number',
        ]}
      />
    </section>
  )
}

function AdminScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Admin Dashboard" title="Founder view" text="Aho founder arebera ubuzima bwa platform." />
      <div className="stats-grid">
        {adminStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function SettingsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Settings" title="Account and platform settings" />
      <div className="card-list">
        <SmallCard title="Account Settings" text="Email, phone, password, language and location." />
        <SmallCard title="Notification Settings" text="Push, email, SMS and WhatsApp preferences." />
        <SmallCard title="Privacy Settings" text="Profile visibility, blocked users and data options." />
        <SmallCard title="Security Settings" text="Two-factor authentication and login protection." />
      </div>
    </section>
  )
}

function StatsRow() {
  return (
    <section className="stats-grid wide">
      <div className="stat-card"><strong>20</strong><span>MVP Pages</span></div>
      <div className="stat-card"><strong>500+</strong><span>Future Screens</span></div>
      <div className="stat-card"><strong>78</strong><span>Sample Trust Score</span></div>
      <div className="stat-card"><strong>AI</strong><span>Opportunity Advisor</span></div>
    </section>
  )
}

function PanelHeader({ label, title, text }) {
  return (
    <div className="panel-header">
      {label && <span className="eyebrow">{label}</span>}
      {title && <h2>{title}</h2>}
      {text && <p>{text}</p>}
    </div>
  )
}

function ActionCard({ icon: Icon, title, text }) {
  return (
    <article className="action-card">
      <div className="module-icon">
        <Icon size={22} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function SmallCard({ title, text }) {
  return (
    <article className="small-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function DataList({ items }) {
  return (
    <div className="card-list top-space">
      {items.map((item) => (
        <article className="data-card" key={item.title}>
          <div>
            <h3>{item.title}</h3>
            <p>{item.category} • {item.location}</p>
          </div>
          <div className="pill-row">
            {item.budget && <span>{item.budget}</span>}
            {item.urgency && <span>{item.urgency}</span>}
            {item.price && <span>{item.price}</span>}
            {item.proof && <span>{item.proof}</span>}
          </div>
        </article>
      ))}
    </div>
  )
}

function Progress({ value }) {
  return (
    <div className="progress-track">
      <div style={{ width: `${value}%` }} />
    </div>
  )
}

function Checklist({ items }) {
  return (
    <div className="checklist">
      {items.map((item) => (
        <div key={item}>
          <CheckCircle2 size={18} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

export default App
