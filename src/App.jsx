import { useMemo, useState } from 'react'
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import {
  BarChart3,
  Bell,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Edit3,
  Eye,
  FileText,
  Filter,
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

const mainNav = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/choose-path', label: 'Choose Path', icon: Target },
  { to: '/profile', label: 'Profiles', icon: User },
  { to: '/proof-videos', label: 'Proof Videos', icon: PlayCircle },
  { to: '/marketplace', label: 'Marketplace', icon: Store },
  { to: '/messages', label: 'Messages', icon: MessageCircle },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/learning', label: 'Learning', icon: GraduationCap },
  { to: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { to: '/admin', label: 'Admin', icon: LayoutDashboard },
  { to: '/settings', label: 'Settings', icon: Settings },
]

const profileSubNav = [
  { to: '/profile', label: 'My Profile' },
  { to: '/profile/public', label: 'Public Profile' },
  { to: '/profile/edit', label: 'Edit Profile' },
  { to: '/profile/proof', label: 'Profile Proof' },
  { to: '/profile/reviews', label: 'Reviews' },
  { to: '/profile/analytics', label: 'Analytics' },
]

const proofSubNav = [
  { to: '/proof-videos', label: 'All Proof' },
  { to: '/proof-videos/add', label: 'Add Proof' },
  { to: '/proof-videos/score', label: 'Quality Score' },
  { to: '/proof-videos/verification', label: 'Verification' },
  { to: '/proof-videos/tips', label: 'Tips' },
]

const marketplaceSubNav = [
  { to: '/marketplace', label: 'Explore' },
  { to: '/marketplace/services', label: 'Services' },
  { to: '/marketplace/jobs', label: 'Jobs/Gigs' },
  { to: '/marketplace/people', label: 'People' },
  { to: '/marketplace/needs', label: 'Needs' },
  { to: '/marketplace/offers', label: 'Offers' },
  { to: '/marketplace/saved', label: 'Saved' },
]

const messageSubNav = [
  { to: '/messages', label: 'Inbox' },
  { to: '/messages/chat', label: 'Chat' },
  { to: '/messages/requests', label: 'Requests' },
  { to: '/messages/templates', label: 'Templates' },
  { to: '/messages/archived', label: 'Archived' },
]

const notificationSubNav = [
  { to: '/notifications', label: 'All' },
  { to: '/notifications/unread', label: 'Unread' },
  { to: '/notifications/matches', label: 'Matches' },
  { to: '/notifications/messages', label: 'Messages' },
  { to: '/notifications/reviews', label: 'Reviews' },
  { to: '/notifications/trust', label: 'Trust Score' },
  { to: '/notifications/settings', label: 'Preferences' },
]

const paths = [
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

const profiles = [
  {
    name: 'Aline Mukamana',
    initials: 'AM',
    role: 'Short Video Creator',
    location: 'Kigali',
    trust: 78,
    proofs: 3,
    rating: 4.8,
    price: '10,000 - 50,000 RWF',
    status: 'Available this week',
  },
  {
    name: 'Eric Niyonzima',
    initials: 'EN',
    role: 'Welding Specialist',
    location: 'Huye',
    trust: 84,
    proofs: 5,
    rating: 4.9,
    price: 'Project based',
    status: 'Available weekends',
  },
  {
    name: 'Claudine Uwase',
    initials: 'CU',
    role: 'WhatsApp Business Helper',
    location: 'Musanze',
    trust: 69,
    proofs: 2,
    rating: 4.6,
    price: '5,000 - 25,000 RWF',
    status: 'Available online',
  },
]

const proofs = [
  {
    title: 'Restaurant short video sample',
    source: 'TikTok',
    type: 'Skill demonstration',
    score: 86,
    status: 'Approved',
    service: 'Short videos',
  },
  {
    title: 'Salon before/after promo',
    source: 'Instagram',
    type: 'Before/after',
    score: 74,
    status: 'Pending',
    service: 'Social media content',
  },
  {
    title: 'Client testimonial for welding',
    source: 'YouTube',
    type: 'Client testimonial',
    score: 91,
    status: 'Verified',
    service: 'Welding',
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
    title: 'Nkeneye cleaning ya office',
    category: 'Cleaning',
    location: 'Kicukiro',
    budget: '30,000 RWF',
    urgency: 'Tomorrow',
  },
  {
    title: 'Nkeneye tutor wa English',
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
    title: 'WhatsApp Business setup helper',
    category: 'Small business support',
    location: 'Online / Kigali',
    price: '5,000 - 30,000 RWF',
    proof: '2 demos',
  },
  {
    title: 'Welding ya gates, windows na doors',
    category: 'Welding',
    location: 'Huye',
    price: 'Project based',
    proof: '5 samples',
  },
]

const notifications = [
  { type: 'matches', title: 'You have 3 new recommended matches.', unread: true },
  { type: 'messages', title: 'Restaurant Kigali sent you a new message.', unread: true },
  { type: 'trust', title: 'Your trust score increased by 5 points.', unread: false },
  { type: 'reviews', title: 'A client left a 5-star review.', unread: false },
  { type: 'system', title: 'New marketplace category added: Small Business Support.', unread: false },
]

function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

function Shell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const pageTitle = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length === 0) return 'Home'
    return parts.map((part) => part.replaceAll('-', ' ')).join(' / ')
  }, [location.pathname])

  return (
    <main className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <NavLink to="/" className="brand-button" onClick={() => setSidebarOpen(false)}>
            <span className="brand-mark">UB</span>
            <span>
              <strong>UBWENGE Buzima</strong>
              <small>Skills • Proof • Trust</small>
            </span>
          </NavLink>

          <button className="icon-button close-btn" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="side-nav">
          {mainNav.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="sidebar-card">
          <Sparkles size={18} />
          <strong>Phase 3</strong>
          <p>Real routes + sub-screens za Profiles, Proof Videos, Marketplace, Messaging na Notifications.</p>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="icon-button menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>

          <div>
            <p className="breadcrumb">UBWENGE Buzima / Phase 3</p>
            <h1>{pageTitle}</h1>
          </div>

          <div className="topbar-actions">
            <button className="search-button">
              <Search size={17} />
              <span>Search</span>
            </button>
            <NavLink to="/ai-assistant" className="primary-small">
              <Bot size={17} />
              Ask AI
            </NavLink>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/choose-path" element={<ChoosePathScreen />} />

          <Route path="/profile" element={<ModuleLayout nav={profileSubNav} />}>
            <Route index element={<MyProfileScreen />} />
            <Route path="public" element={<PublicProfileScreen />} />
            <Route path="edit" element={<EditProfileScreen />} />
            <Route path="proof" element={<ProfileProofScreen />} />
            <Route path="reviews" element={<ProfileReviewsScreen />} />
            <Route path="analytics" element={<ProfileAnalyticsScreen />} />
          </Route>

          <Route path="/proof-videos" element={<ModuleLayout nav={proofSubNav} />}>
            <Route index element={<ProofHomeScreen />} />
            <Route path="add" element={<AddProofScreen />} />
            <Route path="score" element={<ProofScoreScreen />} />
            <Route path="verification" element={<ProofVerificationScreen />} />
            <Route path="tips" element={<ProofTipsScreen />} />
          </Route>

          <Route path="/marketplace" element={<ModuleLayout nav={marketplaceSubNav} />}>
            <Route index element={<MarketplaceExploreScreen />} />
            <Route path="services" element={<MarketplaceServicesScreen />} />
            <Route path="jobs" element={<MarketplaceJobsScreen />} />
            <Route path="people" element={<MarketplacePeopleScreen />} />
            <Route path="needs" element={<MarketplaceNeedsScreen />} />
            <Route path="offers" element={<MarketplaceOffersScreen />} />
            <Route path="saved" element={<MarketplaceSavedScreen />} />
          </Route>

          <Route path="/messages" element={<ModuleLayout nav={messageSubNav} />}>
            <Route index element={<MessagesInboxScreen />} />
            <Route path="chat" element={<ChatScreen />} />
            <Route path="requests" element={<MessageRequestsScreen />} />
            <Route path="templates" element={<MessageTemplatesScreen />} />
            <Route path="archived" element={<ArchivedMessagesScreen />} />
          </Route>

          <Route path="/notifications" element={<ModuleLayout nav={notificationSubNav} />}>
            <Route index element={<NotificationsListScreen filter="all" />} />
            <Route path="unread" element={<NotificationsListScreen filter="unread" />} />
            <Route path="matches" element={<NotificationsListScreen filter="matches" />} />
            <Route path="messages" element={<NotificationsListScreen filter="messages" />} />
            <Route path="reviews" element={<NotificationsListScreen filter="reviews" />} />
            <Route path="trust" element={<NotificationsListScreen filter="trust" />} />
            <Route path="settings" element={<NotificationPreferencesScreen />} />
          </Route>

          <Route path="/learning" element={<LearningScreen />} />
          <Route path="/ai-assistant" element={<AiAssistantScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>

      {sidebarOpen && <button className="overlay" onClick={() => setSidebarOpen(false)} />}
    </main>
  )
}

function ModuleLayout({ nav }) {
  return (
    <div>
      <nav className="sub-nav">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

function HomeScreen() {
  return (
    <div className="screen-grid">
      <section className="hero-card wide">
        <div>
          <span className="eyebrow">Real Routes Added</span>
          <h2>Erekana icyo ushoboye. Hura n’abagukeneye. Hindura skills zawe amafaranga.</h2>
          <p>
            Phase 3 yongeyeho routes nyazo na sub-screens za Profiles, Proof Videos,
            Marketplace, Messaging na Notifications.
          </p>
          <div className="button-row">
            <NavLink className="primary-button" to="/marketplace">
              Explore Marketplace
              <ChevronRight size={18} />
            </NavLink>
            <NavLink className="secondary-button" to="/profile/edit">
              Edit Profile
            </NavLink>
          </div>
        </div>

        <div className="hero-mini-panel">
          <div>
            <span>New Routes</span>
            <strong>30+ screens</strong>
            <p>Profiles, proof, marketplace, messages, notifications.</p>
          </div>
          <div>
            <span>Next</span>
            <strong>Backend Ready</strong>
            <p>Forms and mock data can later connect to database.</p>
          </div>
        </div>
      </section>

      <StatsRow />

      <section className="panel wide">
        <PanelHeader
          label="Phase 3 Modules"
          title="Sub-screens zatangiye gukora"
          text="Kanda muri sidebar cyangwa muri links zikurikira urebe routes nyazo."
        />
        <div className="three-grid">
          <LinkCard to="/profile" icon={User} title="Profiles" text="My Profile, Public, Edit, Proof, Reviews, Analytics." />
          <LinkCard to="/proof-videos" icon={PlayCircle} title="Proof Videos" text="All proof, add proof, score, verification, tips." />
          <LinkCard to="/marketplace" icon={Store} title="Marketplace" text="Explore, services, jobs, people, needs, offers, saved." />
          <LinkCard to="/messages" icon={MessageCircle} title="Messaging" text="Inbox, chat, requests, templates, archived." />
          <LinkCard to="/notifications" icon={Bell} title="Notifications" text="All, unread, matches, messages, reviews, trust, preferences." />
          <LinkCard to="/ai-assistant" icon={Bot} title="AI Assistant" text="Opportunity advisor and profile helper." />
        </div>
      </section>
    </div>
  )
}

function ChoosePathScreen() {
  const [selected, setSelected] = useState('Sinzi icyo natanga, mfasha kumenya')

  return (
    <section className="panel">
      <PanelHeader
        label="Choose Your Path"
        title="Hitamo urugendo rwawe"
        text="Iyo umuntu ahisemo path, platform izamwereka screens, actions na matches zimureba."
      />
      <div className="path-grid">
        {paths.map((path) => (
          <button
            className={`path-option ${selected === path ? 'selected' : ''}`}
            key={path}
            onClick={() => setSelected(path)}
          >
            <span>{path}</span>
            {selected === path && <CheckCircle2 size={18} />}
          </button>
        ))}
      </div>
      <div className="result-box">
        <span className="eyebrow">Selected Path</span>
        <h3>{selected}</h3>
        <p>AI izakubaza ibibazo bike, iguhe first action, proof ukeneye na matches zishoboka.</p>
      </div>
    </section>
  )
}

function MyProfileScreen() {
  return (
    <div className="screen-grid">
      <section className="profile-header wide">
        <div className="avatar large">AM</div>
        <div>
          <span className="eyebrow">My Profile</span>
          <h2>Aline Mukamana</h2>
          <p>Short Video Creator for Small Businesses • Kigali • Available this week</p>
          <div className="pill-row">
            <span>Trust 78/100</span>
            <span>3 Proof Videos</span>
            <span>4.8 Rating</span>
            <span>10k - 50k RWF</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <PanelHeader label="Profile Completion" title="82% complete" />
        <Progress value={82} />
        <Checklist items={['Add profile photo', 'Add intro video', 'Add 3 proof links', 'Create first offer', 'Ask for first review']} />
      </section>

      <section className="panel">
        <PanelHeader label="Value Statement" title="Icyo mfasha abantu" />
        <p>Mfasha restaurants, salons na shops gukora short videos zibafasha kugaragaza products zabo kuri social media.</p>
      </section>
    </div>
  )
}

function PublicProfileScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Public Profile" title="Uko client azabona profile yawe" />
      <div className="profile-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </section>
  )
}

function EditProfileScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Edit Profile" title="Hindura economic identity yawe" />
      <div className="form-grid">
        <input placeholder="Full name" defaultValue="Aline Mukamana" />
        <input placeholder="Location" defaultValue="Kigali" />
        <input placeholder="Main skill/category" defaultValue="Short Video Creator" />
        <input placeholder="Price range" defaultValue="10,000 - 50,000 RWF" />
        <input placeholder="Availability" defaultValue="Available this week" />
        <input placeholder="Contact preference" defaultValue="Message first" />
      </div>
      <button className="primary-button top-space">
        <Edit3 size={18} />
        Save Profile
      </button>
    </section>
  )
}

function ProfileProofScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Profile Proof" title="Proof videos zigaragara kuri profile" />
      <ProofGrid />
    </section>
  )
}

function ProfileReviewsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Reviews" title="Reviews zubaka trust" />
      <div className="card-list">
        <SmallCard title="5 stars from Restaurant Kigali" text="Aline yakoze videos nziza kandi azitanga ku gihe." />
        <SmallCard title="4.8 stars from Salon client" text="Communication yari nziza, proof ye ni yo yatumye tumwizera." />
        <SmallCard title="5 stars from Shop owner" text="Videos zadufashije kubona clients kuri WhatsApp na TikTok." />
      </div>
    </section>
  )
}

function ProfileAnalyticsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Analytics" title="Profile performance" />
      <div className="stats-grid">
        <StatCard value="246" label="Profile Views" />
        <StatCard value="38" label="Contact Clicks" />
        <StatCard value="12" label="Requests" />
        <StatCard value="4.8" label="Average Rating" />
      </div>
    </section>
  )
}

function ProofHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="All Proof Videos" title="Proof links zose" text="MVP ibika links mbere yo gukora direct upload." />
      <ProofGrid />
    </section>
  )
}

function AddProofScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Add Proof" title="Shyiraho proof video link" />
      <div className="form-grid">
        <input placeholder="Video title" />
        <input placeholder="Video link: YouTube, TikTok, Instagram..." />
        <select>
          <option>Proof type</option>
          <option>Skill demonstration</option>
          <option>Before/after</option>
          <option>Client testimonial</option>
          <option>Product demo</option>
        </select>
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
    </section>
  )
}

function ProofScoreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Proof Quality Score" title="Uko proof ihabwa amanota" />
      <div className="card-list">
        <SmallCard title="Clear video" text="20 points" />
        <SmallCard title="Shows real work" text="30 points" />
        <SmallCard title="Shows result" text="20 points" />
        <SmallCard title="Related to service" text="10 points" />
        <SmallCard title="Safe and appropriate" text="10 points" />
      </div>
    </section>
  )
}

function ProofVerificationScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Verification" title="Proof verification status" />
      <ProofGrid />
    </section>
  )
}

function ProofTipsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Proof Tips" title="Uko wakora proof nziza" />
      <Checklist items={['Fata video ifite urumuri', 'Erekana igikorwa nyacyo', 'Sobanura ibyo uri gukora', 'Erekana result', 'Huza proof na service utanga']} />
    </section>
  )
}

function MarketplaceExploreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Marketplace Explore" title="Opportunity feed ifite action" />
      <FilterTabs tabs={['All', 'Services', 'Jobs/Gigs', 'People', 'Proof Videos', 'Learning Paths']} />
      <MarketplaceMixedGrid />
    </section>
  )
}

function MarketplaceServicesScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Services" title="Services ziri kuri marketplace" />
      <OfferGrid />
    </section>
  )
}

function MarketplaceJobsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Jobs/Gigs" title="Gigs n’akazi gato kari hafi yawe" />
      <NeedGrid />
    </section>
  )
}

function MarketplacePeopleScreen() {
  return (
    <section className="panel">
      <PanelHeader label="People" title="People who can help you" />
      <div className="profile-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </section>
  )
}

function MarketplaceNeedsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Needs" title="People who need help" />
      <NeedGrid />
    </section>
  )
}

function MarketplaceOffersScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Offers" title="People offering services" />
      <OfferGrid />
    </section>
  )
}

function MarketplaceSavedScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Saved Items" title="Ibintu wabikije" />
      <div className="card-list">
        <SmallCard title="Saved profile: Aline Mukamana" text="Short Video Creator • Kigali" />
        <SmallCard title="Saved need: Restaurant videos" text="Budget 50,000 RWF • Kigali" />
        <SmallCard title="Saved proof: Client testimonial" text="YouTube • Verified" />
      </div>
    </section>
  )
}

function MessagesInboxScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Inbox" title="Messages zose" />
      <div className="message-layout">
        <MessageList />
        <div className="empty-state">
          <MessageCircle size={42} />
          <h3>Hitamo conversation</h3>
          <p>Kanda kuri chat kugira ngo utangire kuganira.</p>
          <NavLink to="/messages/chat" className="primary-button">Open Sample Chat</NavLink>
        </div>
      </div>
    </section>
  )
}

function ChatScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Chat" title="Service request discussion" />
      <div className="message-layout">
        <MessageList />
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

function MessageRequestsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Message Requests" title="Requests zitarakirwa" />
      <div className="card-list">
        <SmallCard title="Restaurant Kigali wants short videos" text="Request service • Budget 50,000 RWF" />
        <SmallCard title="Shop owner wants WhatsApp setup" text="Need response • Online" />
      </div>
    </section>
  )
}

function MessageTemplatesScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Templates" title="Message templates zifasha abantu kwandika" />
      <div className="card-list">
        <SmallCard title="Client template" text="Muraho [Name], nabonye ko mukora [service]. Nkeneye ubufasha kuri [need]." />
        <SmallCard title="Provider template" text="Muraho [Name], nabonye ko mukeneye [service]. Mfite proof kuri profile yanjye." />
      </div>
    </section>
  )
}

function ArchivedMessagesScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Archived" title="Chats zabitswe" />
      <div className="empty-state">
        <FileText size={42} />
        <h3>No archived chats yet</h3>
        <p>Chats uzabika zizajya zigaragara hano.</p>
      </div>
    </section>
  )
}

function NotificationsListScreen({ filter }) {
  const list = notifications.filter((item) => {
    if (filter === 'all') return true
    if (filter === 'unread') return item.unread
    return item.type === filter
  })

  return (
    <section className="panel">
      <PanelHeader label="Notifications" title={`${filter} notifications`} />
      <div className="card-list">
        {list.length === 0 ? (
          <div className="empty-state">
            <Bell size={42} />
            <h3>No notifications</h3>
            <p>Nta notification iri muri iyi category.</p>
          </div>
        ) : (
          list.map((item) => (
            <article className="notification-card" key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.type} • Just now</p>
              </div>
              {item.unread && <span>Unread</span>}
            </article>
          ))
        )}
      </div>
    </section>
  )
}

function NotificationPreferencesScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Preferences" title="Notification settings" />
      <div className="card-list">
        <ToggleCard title="Push notifications" text="Receive app/browser alerts." />
        <ToggleCard title="Email notifications" text="Receive important updates via email." />
        <ToggleCard title="SMS/WhatsApp notifications" text="Receive urgent requests by phone or WhatsApp." />
      </div>
    </section>
  )
}

function LearningScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Learning-to-Earning" title="Amasomo aganisha ku mafaranga" />
      <div className="three-grid">
        <LinkCard to="/marketplace/services" icon={GraduationCap} title="WhatsApp Business Helper" text="Learn catalog, quick replies, outreach and proof." />
        <LinkCard to="/proof-videos/tips" icon={PlayCircle} title="Proof Video Helper" text="Learn how to help artisans create proof videos." />
        <LinkCard to="/marketplace/offers" icon={Store} title="Product Listing Helper" text="Help shops list products online." />
      </div>
    </section>
  )
}

function AiAssistantScreen() {
  return (
    <section className="panel">
      <PanelHeader label="AI Assistant" title="Umujyanama w’amahirwe" />
      <div className="ai-box">
        <div className="chat-message left">
          Mfite phone, ndi i Kigali, sinzi coding, ariko nzi kuvuga no gufata amafoto. Nakora iki?
        </div>
        <div className="chat-message right ai">
          Ushobora gutangira nka Proof Video Helper cyangwa Social Media Assistant. Tangirira kuri shops, salons na restaurants ziri hafi yawe.
        </div>
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

function AdminScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Admin Dashboard" title="Founder view" />
      <div className="stats-grid">
        <StatCard value="128" label="Users" />
        <StatCard value="74" label="Profiles" />
        <StatCard value="213" label="Proof Videos" />
        <StatCard value="46" label="Needs" />
        <StatCard value="59" label="Offers" />
        <StatCard value="301" label="Matches" />
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
      <StatCard value="30+" label="Routed Screens" />
      <StatCard value="5" label="Expanded Modules" />
      <StatCard value="78" label="Trust Score Sample" />
      <StatCard value="AI" label="Opportunity Advisor" />
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

function LinkCard({ to, icon: Icon, title, text }) {
  return (
    <NavLink to={to} className="action-card">
      <div className="module-icon">
        <Icon size={22} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </NavLink>
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

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  )
}

function ProfileCard({ profile }) {
  return (
    <article className="market-card">
      <div className="avatar">{profile.initials}</div>
      <h3>{profile.name}</h3>
      <p>{profile.role} • {profile.location}</p>
      <div className="pill-row">
        <span>Trust {profile.trust}</span>
        <span>{profile.proofs} proofs</span>
        <span>{profile.rating} stars</span>
      </div>
      <button className="secondary-button">
        <Eye size={17} />
        View Profile
      </button>
    </article>
  )
}

function ProofGrid() {
  return (
    <div className="proof-grid">
      {proofs.map((proof) => (
        <article className="proof-card" key={proof.title}>
          <div className="proof-thumb">
            <PlayCircle size={34} />
          </div>
          <div>
            <h3>{proof.title}</h3>
            <p>{proof.source} • {proof.type} • {proof.service}</p>
            <div className="pill-row">
              <span>Score {proof.score}/100</span>
              <span>{proof.status}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

function NeedGrid() {
  return (
    <div className="card-list">
      {needs.map((need) => (
        <article className="data-card" key={need.title}>
          <div>
            <h3>{need.title}</h3>
            <p>{need.category} • {need.location}</p>
          </div>
          <div className="pill-row">
            <span>{need.budget}</span>
            <span>{need.urgency}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function OfferGrid() {
  return (
    <div className="card-list">
      {offers.map((offer) => (
        <article className="data-card" key={offer.title}>
          <div>
            <h3>{offer.title}</h3>
            <p>{offer.category} • {offer.location}</p>
          </div>
          <div className="pill-row">
            <span>{offer.price}</span>
            <span>{offer.proof}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function MarketplaceMixedGrid() {
  return (
    <div className="three-grid">
      <LinkCard to="/marketplace/people" icon={Users} title="People who can help you" text="Find providers with proof and trust." />
      <LinkCard to="/marketplace/needs" icon={ClipboardList} title="People who need you" text="Find demand that matches your skill." />
      <LinkCard to="/marketplace/services" icon={BriefcaseBusiness} title="Services" text="Explore offers with prices and proof." />
    </div>
  )
}

function MessageList() {
  return (
    <div className="inbox">
      {['Aline Mukamana', 'Restaurant Kigali', 'Eric Welding', 'AI Assistant'].map((name) => (
        <NavLink key={name} to="/messages/chat">
          <strong>{name}</strong>
          <span>Muraho, nabonye ko mukora service...</span>
        </NavLink>
      ))}
    </div>
  )
}

function FilterTabs({ tabs }) {
  return (
    <div className="filter-row">
      {tabs.map((tab) => (
        <button key={tab}>
          <Filter size={15} />
          {tab}
        </button>
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

function ToggleCard({ title, text }) {
  const [on, setOn] = useState(true)
  return (
    <article className="toggle-card">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <button className={on ? 'toggle on' : 'toggle'} onClick={() => setOn(!on)}>
        <span />
      </button>
    </article>
  )
}

export default App
