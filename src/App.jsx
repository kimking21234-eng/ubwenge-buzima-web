import { useMemo, useState } from 'react'
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
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
  Star,
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
    const clean = location.pathname.split('/').filter(Boolean)
    if (clean.length === 0) return 'Home'
    return clean.map((x) => x.replaceAll('-', ' ')).join(' / ')
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

          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<MyProfileScreen />} />
            <Route path="public" element={<PublicProfileScreen />} />
            <Route path="edit" element={<EditProfileScreen />} />
            <Route path="proof" element={<ProfileProofScreen />} />
            <Route path="reviews" element={<ProfileReviewsScreen />} />
            <Route path="analytics" element={<ProfileAnalyticsScreen />} />
          </Route>

          <Route path="/proof-videos" element={<ProofLayout />}>
            <Route index element={<ProofHomeScreen />} />
            <Route path="add" element={<AddProofScreen />} />
            <Route path="score" element={<ProofScoreScreen />} />
            <Route path="verification" element={<ProofVerificationScreen />} />
            <Route path="tips" element={<ProofTipsScreen />} />
          </Route>

          <Route path="/marketplace" element={<MarketplaceLayout />}>
            <Route index element={<MarketplaceExploreScreen />} />
            <Route path="services" element={<MarketplaceServicesScreen />} />
            <Route path="jobs" element={<MarketplaceJobsScreen />} />
            <Route path="people" element={<MarketplacePeopleScreen />} />
            <Route path="needs" element={<MarketplaceNeedsScreen />} />
            <Route path="offers" element={<MarketplaceOffersScreen />} />
            <Route path="saved" element={<MarketplaceSavedScreen />} />
          </Route>

          <Route path="/messages" element={<MessagesLayout />}>
            <Route index element={<MessagesInboxScreen />} />
            <Route path="chat" element={<ChatScreen />} />
            <Route path="requests" element={<MessageRequestsScreen />} />
            <Route path="templates" element={<MessageTemplatesScreen />} />
            <Route path="archived" element={<ArchivedMessagesScreen />} />
          </Route>

          <Route path="/notifications" element={<NotificationsLayout />}>
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

function ProfileLayout() {
  return <ModuleLayout nav={profileSubNav} />
}

function ProofLayout() {
  return <ModuleLayout nav={proofSubNav} />
}

function MarketplaceLayout() {
  return <ModuleLayout nav={marketplaceSubNav} />
}

function MessagesLayout() {
  return <ModuleLayout nav={messageSubNav} />
}

function NotificationsLayout() {
  return <ModuleLayout nav={notificationSubNav} />
}

function ModuleLayout({ nav }) {
  return (
    <div>
      <nav className="sub-nav">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to.split('/').length <= 2}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <RoutesOutlet />
    </div>
  )
}

function RoutesOutlet() {
  const { Outlet } = requireOutlet()
  return <Outlet />
}

function requireOutlet() {
  return { Outlet: requireOutletComponent }
}

function requireOutletComponent() {
  const { Outlet } = window.__ubwengeRouterOutlet || {}
  return Outlet ? <Outlet /> : null
}
