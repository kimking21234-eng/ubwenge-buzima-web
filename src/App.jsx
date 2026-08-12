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
  Lock,
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
  Trash2,
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
  { to: '/needs', label: 'Needs', icon: ClipboardList },
  { to: '/offers', label: 'Offers', icon: BriefcaseBusiness },
  { to: '/marketplace', label: 'Marketplace', icon: Store },
  { to: '/matching', label: 'Matching', icon: Target },
  { to: '/feed', label: 'Opportunity Feed', icon: Zap },
  { to: '/messages', label: 'Messages', icon: MessageCircle },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/reviews', label: 'Reviews', icon: Star },
  { to: '/trust-score', label: 'Trust Score', icon: ShieldCheck },
  { to: '/tasks', label: 'Tasks', icon: CheckCircle2 },
  { to: '/learning', label: 'Learning', icon: GraduationCap },
  { to: '/zero-capital', label: 'Zero-Capital', icon: Zap },
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

const needsSubNav = [
  { to: '/needs', label: 'All Needs' },
  { to: '/needs/post', label: 'Post Need' },
  { to: '/needs/matches', label: 'Need Matches' },
  { to: '/needs/applications', label: 'Applications' },
  { to: '/needs/closed', label: 'Closed Needs' },
]

const offersSubNav = [
  { to: '/offers', label: 'All Offers' },
  { to: '/offers/create', label: 'Create Offer' },
  { to: '/offers/requests', label: 'Requests' },
  { to: '/offers/analytics', label: 'Analytics' },
  { to: '/offers/featured', label: 'Featured' },
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

const matchingSubNav = [
  { to: '/matching', label: 'Recommended' },
  { to: '/matching/people', label: 'People' },
  { to: '/matching/jobs', label: 'Jobs' },
  { to: '/matching/services', label: 'Services' },
  { to: '/matching/reasons', label: 'Reasons' },
  { to: '/matching/improve', label: 'Improve' },
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

const taskSubNav = [
  { to: '/tasks', label: 'All Tasks' },
  { to: '/tasks/requested', label: 'Requested' },
  { to: '/tasks/accepted', label: 'Accepted' },
  { to: '/tasks/in-progress', label: 'In Progress' },
  { to: '/tasks/completed', label: 'Completed' },
  { to: '/tasks/disputed', label: 'Disputed' },
]

const learningSubNav = [
  { to: '/learning', label: 'Learning Home' },
  { to: '/learning/paths', label: 'Paths' },
  { to: '/learning/whatsapp-business', label: 'WhatsApp Business' },
  { to: '/learning/proof-video-helper', label: 'Proof Video Helper' },
  { to: '/learning/tasks', label: 'Practice Tasks' },
  { to: '/learning/certificate', label: 'Certificate' },
]

const zeroCapitalSubNav = [
  { to: '/zero-capital', label: 'Home' },
  { to: '/zero-capital/assessment', label: 'Assessment' },
  { to: '/zero-capital/recommended', label: 'Recommended Path' },
  { to: '/zero-capital/proof-video-helper', label: 'Proof Video Helper' },
  { to: '/zero-capital/local-connector', label: 'Local Connector' },
  { to: '/zero-capital/whatsapp-business-helper', label: 'WhatsApp Helper' },
]

const aiSubNav = [
  { to: '/ai-assistant', label: 'AI Home' },
  { to: '/ai-assistant/find-my-skill', label: 'Find My Skill' },
  { to: '/ai-assistant/generate-bio', label: 'Generate Bio' },
  { to: '/ai-assistant/generate-offer', label: 'Generate Offer' },
  { to: '/ai-assistant/video-script', label: 'Video Script' },
  { to: '/ai-assistant/message-template', label: 'Message Template' },
  { to: '/ai-assistant/pricing-helper', label: 'Pricing Helper' },
]

const adminSubNav = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/profiles', label: 'Profiles' },
  { to: '/admin/proof-videos', label: 'Proof Videos' },
  { to: '/admin/needs', label: 'Needs' },
  { to: '/admin/offers', label: 'Offers' },
  { to: '/admin/matches', label: 'Matches' },
  { to: '/admin/reports', label: 'Reports' },
  { to: '/admin/revenue', label: 'Revenue' },
  { to: '/admin/platform-health', label: 'Platform Health' },
]

const settingsSubNav = [
  { to: '/settings', label: 'Account' },
  { to: '/settings/security', label: 'Security' },
  { to: '/settings/privacy', label: 'Privacy' },
  { to: '/settings/notifications', label: 'Notifications' },
  { to: '/settings/language', label: 'Language' },
  { to: '/settings/delete-account', label: 'Delete Account' },
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
  { name: 'Aline Mukamana', initials: 'AM', role: 'Short Video Creator', location: 'Kigali', trust: 78, proofs: 3, rating: 4.8 },
  { name: 'Eric Niyonzima', initials: 'EN', role: 'Welding Specialist', location: 'Huye', trust: 84, proofs: 5, rating: 4.9 },
  { name: 'Claudine Uwase', initials: 'CU', role: 'WhatsApp Business Helper', location: 'Musanze', trust: 69, proofs: 2, rating: 4.6 },
]

const proofs = [
  { title: 'Restaurant short video sample', source: 'TikTok', type: 'Skill demonstration', score: 86, status: 'Approved', service: 'Short videos' },
  { title: 'Salon before/after promo', source: 'Instagram', type: 'Before/after', score: 74, status: 'Pending', service: 'Social media content' },
  { title: 'Client testimonial for welding', source: 'YouTube', type: 'Client testimonial', score: 91, status: 'Verified', service: 'Welding' },
]

const needs = [
  { title: 'Nkeneye umuntu ukora videos za restaurant', category: 'Digital services', location: 'Kigali', budget: '50,000 RWF', urgency: 'Within 1 week' },
  { title: 'Nkeneye cleaning ya office', category: 'Cleaning', location: 'Kicukiro', budget: '30,000 RWF', urgency: 'Tomorrow' },
  { title: 'Nkeneye tutor wa English', category: 'Tutoring', location: 'Remera', budget: '80,000 RWF/month', urgency: 'This week' },
]

const offers = [
  { title: 'Nkora short videos za business nto', category: 'Digital services', location: 'Kigali', price: '10,000 - 50,000 RWF', proof: '3 videos' },
  { title: 'WhatsApp Business setup helper', category: 'Small business support', location: 'Online / Kigali', price: '5,000 - 30,000 RWF', proof: '2 demos' },
  { title: 'Welding ya gates, windows na doors', category: 'Welding', location: 'Huye', price: 'Project based', proof: '5 samples' },
]

const matches = [
  { title: 'Restaurant Kigali ↔ Aline Mukamana', score: 92, type: 'Need to provider', reason: 'Category, location, proof video, availability and budget match.' },
  { title: 'Shop owner ↔ WhatsApp Business Helper', score: 86, type: 'Business support', reason: 'Service matches need, online delivery available, price is within budget.' },
  { title: 'Huye construction client ↔ Eric Welding', score: 89, type: 'Local service', reason: 'Location and welding proof videos match the client need.' },
]

const feedItems = [
  { title: 'Restaurant i Kigali irashaka umuntu ukora short videos', meta: 'Budget: 50,000 RWF • Proof required • Within 1 week', action: 'Apply' },
  { title: 'Ufite phone gusa? Tangira nka Proof Video Helper', meta: 'Step 1: Shaka artisan 1 • Step 2: Mufashe gukora video', action: 'Start path' },
  { title: 'Shop owner arashaka WhatsApp Business catalog', meta: 'Small business support • Online • 20,000 RWF', action: 'Offer help' },
]

const reviews = [
  { from: 'Restaurant Kigali', rating: 5, comment: 'Aline yakoze videos nziza kandi azitanga ku gihe.' },
  { from: 'Salon Client', rating: 4.8, comment: 'Proof video ye ni yo yatumye tumwizera mbere yo kumwandikira.' },
  { from: 'Shop Owner', rating: 5, comment: 'Yadufashije gushyira products kuri WhatsApp Business neza.' },
]

const notifications = [
  { type: 'matches', title: 'You have 3 new recommended matches.', unread: true },
  { type: 'messages', title: 'Restaurant Kigali sent you a new message.', unread: true },
  { type: 'trust', title: 'Your trust score increased by 5 points.', unread: false },
  { type: 'reviews', title: 'A client left a 5-star review.', unread: false },
  { type: 'system', title: 'New marketplace category added: Small Business Support.', unread: false },
]

const tasks = [
  { title: 'Create 5 short videos for restaurant', status: 'In progress', client: 'Restaurant Kigali', budget: '50,000 RWF' },
  { title: 'Setup WhatsApp Business catalog', status: 'Requested', client: 'Shop Owner', budget: '20,000 RWF' },
  { title: 'Review project details', status: 'Accepted', client: 'Aline Mukamana', budget: 'Pending' },
  { title: 'Welding gate repair', status: 'Completed', client: 'Huye Client', budget: 'Project based' },
  { title: 'Late delivery discussion', status: 'Disputed', client: 'Salon Client', budget: '30,000 RWF' },
]

const learningPaths = [
  { title: 'WhatsApp Business Setup Helper', lessons: 4, demand: 'High demand', result: 'Help shops create online catalog' },
  { title: 'Proof Video Helper', lessons: 5, demand: 'High demand', result: 'Help artisans show real work' },
  { title: 'Local Opportunity Connector', lessons: 3, demand: 'Growing demand', result: 'Connect needs with providers' },
]

const adminStats = [
  { value: '128', label: 'Users' },
  { value: '74', label: 'Profiles' },
  { value: '213', label: 'Proof Videos' },
  { value: '46', label: 'Needs' },
  { value: '59', label: 'Offers' },
  { value: '301', label: 'Matches' },
  { value: '12', label: 'Reports' },
  { value: '0 RWF', label: 'Revenue MVP' },
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
          <strong>Phase 5</strong>
          <p>Learning, Zero-Capital, AI Assistant, Admin Dashboard na Settings expansion.</p>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="icon-button menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>

          <div>
            <p className="breadcrumb">UBWENGE Buzima / Phase 5</p>
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
            <Route path="reviews" element={<ReviewsScreen />} />
            <Route path="analytics" element={<ProfileAnalyticsScreen />} />
          </Route>

          <Route path="/proof-videos" element={<ModuleLayout nav={proofSubNav} />}>
            <Route index element={<ProofHomeScreen />} />
            <Route path="add" element={<AddProofScreen />} />
            <Route path="score" element={<ProofScoreScreen />} />
            <Route path="verification" element={<ProofHomeScreen />} />
            <Route path="tips" element={<ProofTipsScreen />} />
          </Route>

          <Route path="/needs" element={<ModuleLayout nav={needsSubNav} />}>
            <Route index element={<NeedsHomeScreen />} />
            <Route path="post" element={<PostNeedScreen />} />
            <Route path="matches" element={<MatchListScreen />} />
            <Route path="applications" element={<SimpleList title="Applications" items={['Aline applied to restaurant videos', 'Claudine applied to WhatsApp setup']} />} />
            <Route path="closed" element={<SimpleList title="Closed Needs" items={['Restaurant videos completed', 'Office cleaning completed']} />} />
          </Route>

          <Route path="/offers" element={<ModuleLayout nav={offersSubNav} />}>
            <Route index element={<OffersHomeScreen />} />
            <Route path="create" element={<CreateOfferScreen />} />
            <Route path="requests" element={<SimpleList title="Offer Requests" items={['Restaurant requested short videos', 'Shop requested WhatsApp setup']} />} />
            <Route path="analytics" element={<StatsScreen title="Offer Analytics" />} />
            <Route path="featured" element={<OffersHomeScreen />} />
          </Route>

          <Route path="/marketplace" element={<ModuleLayout nav={marketplaceSubNav} />}>
            <Route index element={<MarketplaceExploreScreen />} />
            <Route path="services" element={<OffersHomeScreen />} />
            <Route path="jobs" element={<NeedsHomeScreen />} />
            <Route path="people" element={<PeopleScreen />} />
            <Route path="needs" element={<NeedsHomeScreen />} />
            <Route path="offers" element={<OffersHomeScreen />} />
            <Route path="saved" element={<SimpleList title="Saved Items" items={['Aline profile', 'Restaurant need', 'Proof video sample']} />} />
          </Route>

          <Route path="/matching" element={<ModuleLayout nav={matchingSubNav} />}>
            <Route index element={<MatchListScreen />} />
            <Route path="people" element={<PeopleScreen />} />
            <Route path="jobs" element={<NeedsHomeScreen />} />
            <Route path="services" element={<OffersHomeScreen />} />
            <Route path="reasons" element={<MatchReasonsScreen />} />
            <Route path="improve" element={<ChecklistScreen title="Improve Matches" />} />
          </Route>

          <Route path="/messages" element={<ModuleLayout nav={messageSubNav} />}>
            <Route index element={<MessagesInboxScreen />} />
            <Route path="chat" element={<ChatScreen />} />
            <Route path="requests" element={<SimpleList title="Message Requests" items={['Restaurant Kigali wants videos', 'Shop owner wants WhatsApp setup']} />} />
            <Route path="templates" element={<MessageTemplatesScreen />} />
            <Route path="archived" element={<EmptyScreen title="No archived chats yet" icon={FileText} />} />
          </Route>

          <Route path="/notifications" element={<ModuleLayout nav={notificationSubNav} />}>
            <Route index element={<NotificationsListScreen filter="all" />} />
            <Route path="unread" element={<NotificationsListScreen filter="unread" />} />
            <Route path="matches" element={<NotificationsListScreen filter="matches" />} />
            <Route path="messages" element={<NotificationsListScreen filter="messages" />} />
            <Route path="reviews" element={<NotificationsListScreen filter="reviews" />} />
            <Route path="trust" element={<NotificationsListScreen filter="trust" />} />
            <Route path="settings" element={<SettingsCards title="Notification Preferences" type="notifications" />} />
          </Route>

          <Route path="/feed" element={<OpportunityFeedScreen />} />
          <Route path="/reviews" element={<ReviewsScreen />} />
          <Route path="/trust-score" element={<TrustScoreScreen />} />

          <Route path="/tasks" element={<ModuleLayout nav={taskSubNav} />}>
            <Route index element={<TasksHomeScreen />} />
            <Route path="requested" element={<TasksByStatusScreen status="Requested" />} />
            <Route path="accepted" element={<TasksByStatusScreen status="Accepted" />} />
            <Route path="in-progress" element={<TasksByStatusScreen status="In progress" />} />
            <Route path="completed" element={<TasksByStatusScreen status="Completed" />} />
            <Route path="disputed" element={<TasksByStatusScreen status="Disputed" />} />
          </Route>

          <Route path="/learning" element={<ModuleLayout nav={learningSubNav} />}>
            <Route index element={<LearningHomeScreen />} />
            <Route path="paths" element={<LearningPathsScreen />} />
            <Route path="whatsapp-business" element={<LearningDetailScreen title="WhatsApp Business Setup Helper" />} />
            <Route path="proof-video-helper" element={<LearningDetailScreen title="Proof Video Helper" />} />
            <Route path="tasks" element={<LearningTasksScreen />} />
            <Route path="certificate" element={<CertificateScreen />} />
          </Route>

          <Route path="/zero-capital" element={<ModuleLayout nav={zeroCapitalSubNav} />}>
            <Route index element={<ZeroCapitalHomeScreen />} />
            <Route path="assessment" element={<ZeroCapitalAssessmentScreen />} />
            <Route path="recommended" element={<RecommendedZeroCapitalScreen />} />
            <Route path="proof-video-helper" element={<ZeroCapitalPathScreen title="Proof Video Helper" />} />
            <Route path="local-connector" element={<ZeroCapitalPathScreen title="Local Opportunity Connector" />} />
            <Route path="whatsapp-business-helper" element={<ZeroCapitalPathScreen title="WhatsApp Business Helper" />} />
          </Route>

          <Route path="/ai-assistant" element={<ModuleLayout nav={aiSubNav} />}>
            <Route index element={<AiAssistantHomeScreen />} />
            <Route path="find-my-skill" element={<AiToolScreen title="Find My Skill" output="Ushobora gutangira nka Proof Video Helper cyangwa Local Connector." />} />
            <Route path="generate-bio" element={<AiToolScreen title="Generate Bio" output="Mfasha business nto gukora videos ngufi zigaragaza products zabo kuri social media." />} />
            <Route path="generate-offer" element={<AiToolScreen title="Generate Offer" output="Nkora short videos za business nto, kuva kuri 10,000 kugeza 50,000 RWF." />} />
            <Route path="video-script" element={<AiToolScreen title="Video Script" output="Muraho, nitwa [Name]. Nkora [service]. Mfasha abantu [result]." />} />
            <Route path="message-template" element={<AiToolScreen title="Message Template" output="Muraho [Name], nabonye ko mukeneye [service]. Mfite proof kuri profile yanjye." />} />
            <Route path="pricing-helper" element={<AiToolScreen title="Pricing Helper" output="Tangira na 10,000 RWF kuri video imwe, package ya 5 videos ibe 50,000 RWF." />} />
          </Route>

          <Route path="/admin" element={<ModuleLayout nav={adminSubNav} />}>
            <Route index element={<AdminDashboardScreen />} />
            <Route path="users" element={<AdminTableScreen title="Users" />} />
            <Route path="profiles" element={<AdminTableScreen title="Profiles" />} />
            <Route path="proof-videos" element={<AdminTableScreen title="Proof Videos" />} />
            <Route path="needs" element={<AdminTableScreen title="Needs" />} />
            <Route path="offers" element={<AdminTableScreen title="Offers" />} />
            <Route path="matches" element={<AdminTableScreen title="Matches" />} />
            <Route path="reports" element={<AdminReportsScreen />} />
            <Route path="revenue" element={<AdminRevenueScreen />} />
            <Route path="platform-health" element={<AdminHealthScreen />} />
          </Route>

          <Route path="/settings" element={<ModuleLayout nav={settingsSubNav} />}>
            <Route index element={<SettingsCards title="Account Settings" type="account" />} />
            <Route path="security" element={<SettingsCards title="Security Settings" type="security" />} />
            <Route path="privacy" element={<SettingsCards title="Privacy Settings" type="privacy" />} />
            <Route path="notifications" element={<SettingsCards title="Notification Settings" type="notifications" />} />
            <Route path="language" element={<LanguageSettingsScreen />} />
            <Route path="delete-account" element={<DeleteAccountScreen />} />
          </Route>

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
          <span className="eyebrow">Phase 5 Complete</span>
          <h2>Erekana icyo ushoboye. Hura n’abagukeneye. Hindura skills zawe amafaranga.</h2>
          <p>
            UBWENGE Buzima ubu ifite Learning-to-Earning, Zero-Capital Paths, AI Assistant,
            Admin Dashboard na Settings expansion.
          </p>
          <div className="button-row">
            <NavLink className="primary-button" to="/learning">
              Start Learning
              <ChevronRight size={18} />
            </NavLink>
            <NavLink className="secondary-button" to="/zero-capital">
              Zero-Capital Paths
            </NavLink>
          </div>
        </div>

        <div className="hero-mini-panel">
          <div>
            <span>Platform</span>
            <strong>70+ screens</strong>
            <p>Foundation ikomeje kwaguka yerekeza kuri 500+ screens.</p>
          </div>
          <div>
            <span>New Engines</span>
            <strong>Learning + AI + Admin</strong>
            <p>Phase 5 yongeramo systems zikomeye.</p>
          </div>
        </div>
      </section>

      <StatsRow />

      <section className="panel wide">
        <PanelHeader label="Phase 5 Modules" title="Learning, Zero-Capital, AI, Admin na Settings" />
        <div className="three-grid">
          <LinkCard to="/learning" icon={GraduationCap} title="Learning-to-Earning" text="Paths, lessons, practice tasks and certificates." />
          <LinkCard to="/zero-capital" icon={Zap} title="Zero-Capital Paths" text="Assessment and recommended paths for people starting with little money." />
          <LinkCard to="/ai-assistant" icon={Bot} title="AI Assistant" text="Generate bio, offer, script, message templates and pricing ideas." />
          <LinkCard to="/admin" icon={LayoutDashboard} title="Admin Dashboard" text="Users, profiles, proof videos, reports, revenue and health." />
          <LinkCard to="/settings" icon={Settings} title="Settings Expansion" text="Account, security, privacy, language and delete account." />
          <LinkCard to="/feed" icon={Zap} title="Opportunity Feed" text="Actions, needs, learning prompts and local opportunities." />
        </div>
      </section>
    </div>
  )
}

function ChoosePathScreen() {
  const [selected, setSelected] = useState('Sinzi icyo natanga, mfasha kumenya')
  return (
    <section className="panel">
      <PanelHeader label="Choose Your Path" title="Hitamo urugendo rwawe" />
      <div className="path-grid">
        {paths.map((path) => (
          <button className={`path-option ${selected === path ? 'selected' : ''}`} key={path} onClick={() => setSelected(path)}>
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
      <PeopleScreen />
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
  return <ProofHomeScreen />
}

function ProfileAnalyticsScreen() {
  return <StatsScreen title="Profile Analytics" />
}

function ProofHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="All Proof Videos" title="Proof links zose" />
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
        <select><option>Proof type</option><option>Skill demonstration</option><option>Before/after</option><option>Client testimonial</option></select>
        <select><option>Related service</option><option>Short videos</option><option>Welding</option><option>Cleaning</option></select>
      </div>
      <button className="primary-button top-space"><Plus size={18} /> Add Proof Link</button>
    </section>
  )
}

function ProofScoreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Proof Quality Score" title="Uko proof ihabwa amanota" />
      <div className="match-breakdown">
        <ScoreRow label="Clear video" value={20} max={20} />
        <ScoreRow label="Shows real work" value={30} max={30} />
        <ScoreRow label="Shows result" value={20} max={20} />
        <ScoreRow label="Has explanation" value={10} max={10} />
        <ScoreRow label="Related to service" value={10} max={10} />
        <ScoreRow label="Safe and appropriate" value={10} max={10} />
      </div>
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

function NeedsHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Needs" title="Abantu bagaragaza ibyo bakeneye" />
      <NeedGrid />
    </section>
  )
}

function PostNeedScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Post Need" title="Andika icyo ukeneye" />
      <div className="form-grid">
        <input placeholder="Need title" />
        <select><option>Category</option><option>Digital services</option><option>Cleaning</option><option>Tutoring</option></select>
        <input placeholder="Location" />
        <input placeholder="Budget" />
        <select><option>Urgency</option><option>Today</option><option>This week</option></select>
        <input placeholder="Preferred proof" />
      </div>
      <button className="primary-button top-space"><Plus size={18} /> Publish Need</button>
    </section>
  )
}

function OffersHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Offers" title="Abantu bagaragaza ibyo batanga" />
      <OfferGrid />
    </section>
  )
}

function CreateOfferScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Create Offer" title="Hindura skill yawe service yumvikana" />
      <div className="form-grid">
        <input placeholder="Offer title" />
        <select><option>Category</option><option>Digital services</option><option>Small business support</option><option>Welding</option></select>
        <input placeholder="Location" />
        <input placeholder="Price range" />
        <input placeholder="Proof video link" />
        <select><option>Availability</option><option>Today</option><option>This week</option></select>
      </div>
      <button className="primary-button top-space"><Plus size={18} /> Create Offer</button>
    </section>
  )
}

function MarketplaceExploreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Marketplace Explore" title="Opportunity feed ifite action" />
      <FilterTabs tabs={['All', 'Services', 'Jobs/Gigs', 'People', 'Proof Videos', 'Learning Paths']} />
      <div className="three-grid">
        <LinkCard to="/marketplace/people" icon={Users} title="People who can help you" text="Find providers with proof and trust." />
        <LinkCard to="/marketplace/needs" icon={ClipboardList} title="People who need you" text="Find demand that matches your skill." />
        <LinkCard to="/marketplace/services" icon={BriefcaseBusiness} title="Services" text="Explore offers with prices and proof." />
      </div>
    </section>
  )
}

function PeopleScreen() {
  return (
    <div className="profile-grid">
      {profiles.map((profile) => <ProfileCard key={profile.name} profile={profile} />)}
    </div>
  )
}

function MatchListScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Matching Engine" title="Recommended matches" />
      <MatchList />
    </section>
  )
}

function MatchReasonsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Match Reasons" title="Impamvu iyi match igukwiriye" />
      <div className="match-breakdown">
        <ScoreRow label="Category match" value={25} max={25} />
        <ScoreRow label="Location match" value={20} max={20} />
        <ScoreRow label="Skill/offer match" value={20} max={20} />
        <ScoreRow label="Budget match" value={10} max={10} />
        <ScoreRow label="Availability" value={10} max={10} />
        <ScoreRow label="Proof exists" value={10} max={10} />
        <ScoreRow label="Trust score" value={5} max={5} />
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
          <EmptyScreen title="No notifications" icon={Bell} />
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

function OpportunityFeedScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Opportunity Feed" title="Feed ifite intego yo kurema action" />
      <div className="feed-list">
        {feedItems.map((item) => (
          <article className="feed-card" key={item.title}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
            </div>
            <button className="primary-small">{item.action}</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReviewsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Reviews" title="Reviews zubaka reputation" />
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.from}>
            <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div>
            <h3>{review.from}</h3>
            <p>{review.comment}</p>
            <span>{review.rating} / 5</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function TrustScoreScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Trust Score" title="78/100" />
      <Progress value={78} />
      <div className="three-grid top-space">
        <SmallCard title="Profile completeness" text="18/20 points" />
        <SmallCard title="Verification" text="12/15 points" />
        <SmallCard title="Proof videos" text="17/20 points" />
        <SmallCard title="Completed tasks" text="14/20 points" />
        <SmallCard title="Reviews" text="12/15 points" />
        <SmallCard title="No reports" text="5/5 points" />
      </div>
    </section>
  )
}

function TasksHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Task Workflow" title="Uko akazi gakurikiranwa" />
      <TaskKanban />
    </section>
  )
}

function TasksByStatusScreen({ status }) {
  const filtered = tasks.filter((task) => task.status === status)
  return (
    <section className="panel">
      <PanelHeader label="Tasks" title={`${status} tasks`} />
      <div className="card-list">
        {filtered.length === 0 ? <EmptyScreen title="No tasks here" icon={CheckCircle2} /> : filtered.map((task) => <TaskCard key={task.title} task={task} />)}
      </div>
    </section>
  )
}

function LearningHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Learning-to-Earning" title="Amasomo aganisha ku mafaranga" text="Amasomo ntabwo ari library gusa; agomba kuganisha kuri proof, offer, outreach na first client." />
      <LearningPathGrid />
    </section>
  )
}

function LearningPathsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Learning Paths" title="Paths zishobora kuganisha kuri income" />
      <LearningPathGrid />
    </section>
  )
}

function LearningDetailScreen({ title }) {
  return (
    <section className="panel">
      <PanelHeader label="Learning Path" title={title} text="Iyi path igizwe n’amasomo magufi, practice task, proof creation, offer creation na outreach." />
      <div className="phase5-timeline">
        <StepCard number="1" title="Market Demand" text="Small businesses need this service." />
        <StepCard number="2" title="Short Lessons" text="Iga basics mu buryo bworoshye." />
        <StepCard number="3" title="Practice Task" text="Kora demo cyangwa sample." />
        <StepCard number="4" title="Create Proof" text="Fata video cyangwa screenshots." />
        <StepCard number="5" title="Create Offer" text="Hindura skill yawe service." />
        <StepCard number="6" title="Outreach" text="Ohereza message ku bantu 20." />
      </div>
    </section>
  )
}

function LearningTasksScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Practice Tasks" title="Tasks zito zubaka proof" />
      <Checklist items={['Create a demo WhatsApp catalog', 'Record 1-minute proof video', 'Write service offer', 'Send outreach message to 5 shops']} />
    </section>
  )
}

function CertificateScreen() {
  return (
    <section className="panel">
      <div className="certificate-card">
        <GraduationCap size={48} />
        <span className="eyebrow">Certificate</span>
        <h2>UBWENGE Buzima Practical Skill Certificate</h2>
        <p>Issued after completing lessons, task, proof and offer creation.</p>
      </div>
    </section>
  )
}

function ZeroCapitalHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Zero-Capital Engine" title="Tangira n’ibyo ufite" text="Iyi engine ifasha umuntu ufite phone, internet nke, network cyangwa ubushobozi buke kubona inzira yatangiriraho." />
      <div className="three-grid">
        <LinkCard to="/zero-capital/assessment" icon={ClipboardList} title="Assessment" text="Menya icyo ufite n’icyo waheraho." />
        <LinkCard to="/zero-capital/recommended" icon={Target} title="Recommended Path" text="AI iguhe path ikubereye." />
        <LinkCard to="/zero-capital/proof-video-helper" icon={PlayCircle} title="Proof Video Helper" text="Tangira ufasha artisans gukora proof." />
      </div>
    </section>
  )
}

function ZeroCapitalAssessmentScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Assessment" title="Ufite iki watangiriraho?" />
      <div className="form-grid">
        <select><option>Ufite phone?</option><option>Yego</option><option>Oya</option></select>
        <select><option>Ufite internet?</option><option>Yego</option><option>Rimwe na rimwe</option></select>
        <select><option>Uzi gufata video?</option><option>Yego</option><option>Ndabyiga</option></select>
        <select><option>Uzi kuvuga neza?</option><option>Yego</option><option>Buhoro</option></select>
        <select><option>Uzi abantu benshi?</option><option>Yego</option><option>Oya</option></select>
        <select><option>Ushobora kugenda mu gace?</option><option>Yego</option><option>Oya</option></select>
      </div>
      <NavLink to="/zero-capital/recommended" className="primary-button top-space">See Recommended Path</NavLink>
    </section>
  )
}

function RecommendedZeroCapitalScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Recommended Path" title="Proof Video Helper" text="Ufite phone + uzi gufata video + ushobora kuganira n’abantu. Tangirira ku bantu bafite ibikorwa ariko badafite proof." />
      <Checklist items={['Shaka artisan umwe', 'Mufashe gukora video ya 30 seconds', 'Mufashe gushyiraho proof', 'Mwandikishe kuri UBWENGE Buzima']} />
    </section>
  )
}

function ZeroCapitalPathScreen({ title }) {
  return (
    <section className="panel">
      <PanelHeader label="Zero-Capital Path" title={title} />
      <div className="phase5-timeline">
        <StepCard number="1" title="Find opportunity" text="Shaka umuntu/business ifite ikibazo." />
        <StepCard number="2" title="Offer help" text="Mwereke uko wamufasha." />
        <StepCard number="3" title="Create proof" text="Kora sample cyangwa proof." />
        <StepCard number="4" title="Get first review" text="Saba review nyuma y’igikorwa." />
      </div>
    </section>
  )
}

function AiAssistantHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="AI Assistant" title="Umujyanama w’amahirwe" />
      <div className="ai-box">
        <div className="chat-message left">Mfite phone, ndi i Kigali, sinzi coding, ariko nzi kuvuga no gufata amafoto. Nakora iki?</div>
        <div className="chat-message right ai">Ushobora gutangira nka Proof Video Helper cyangwa Social Media Assistant. Tangirira kuri shops, salons na restaurants ziri hafi yawe.</div>
      </div>
      <div className="three-grid top-space">
        <LinkCard to="/ai-assistant/find-my-skill" icon={Search} title="Find My Skill" text="AI igufashe kubona icyo watanga." />
        <LinkCard to="/ai-assistant/generate-bio" icon={User} title="Generate Bio" text="Kora profile bio igurisha value." />
        <LinkCard to="/ai-assistant/video-script" icon={PlayCircle} title="Video Script" text="Kora intro/proof video script." />
      </div>
    </section>
  )
}

function AiToolScreen({ title, output }) {
  return (
    <section className="panel">
      <PanelHeader label="AI Tool" title={title} />
      <div className="form-grid">
        <input placeholder="Andika ibyo ushaka ko AI igufasha..." />
        <button className="primary-button"><Bot size={18} /> Generate</button>
      </div>
      <div className="result-box">
        <span className="eyebrow">AI Output Example</span>
        <h3>{title}</h3>
        <p>{output}</p>
      </div>
    </section>
  )
}

function AdminDashboardScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Admin Dashboard" title="Founder view" text="Aho founder arebera ubuzima bwa platform." />
      <div className="stats-grid">{adminStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}</div>
    </section>
  )
}

function AdminTableScreen({ title }) {
  return (
    <section className="panel">
      <PanelHeader label="Admin" title={`${title} Management`} />
      <div className="admin-table">
        {['Name/Title', 'Category', 'Status', 'Action'].map((head) => <strong key={head}>{head}</strong>)}
        {['Aline Mukamana', 'Digital services', 'Active', 'View'].map((cell) => <span key={cell}>{cell}</span>)}
        {['Restaurant videos', 'Need', 'Open', 'Review'].map((cell) => <span key={cell}>{cell}</span>)}
        {['Proof video sample', 'Proof', 'Pending', 'Approve'].map((cell) => <span key={cell}>{cell}</span>)}
      </div>
    </section>
  )
}

function AdminReportsScreen() {
  return <SimpleList title="Reports" items={['Reported profile: pending review', 'Reported proof video: needs moderation', 'Disputed task: late delivery']} />
}

function AdminRevenueScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Revenue" title="Monetization MVP" text="Revenue izaza nyuma yo gutanga value: featured profiles, business accounts, premium AI, subscriptions." />
      <div className="stats-grid">
        <StatCard value="0 RWF" label="Current MVP Revenue" />
        <StatCard value="12" label="Future Premium Leads" />
        <StatCard value="4" label="Business Accounts" />
        <StatCard value="0%" label="Commission Active" />
      </div>
    </section>
  )
}

function AdminHealthScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Platform Health" title="Ubuzima bwa platform" />
      <Checklist items={['Users are joining', 'Profiles are being completed', 'Proof videos are increasing', 'Needs and offers are balanced', 'Matches are generating actions']} />
    </section>
  )
}

function SettingsCards({ title, type }) {
  const items = {
    account: ['Edit email', 'Edit phone', 'Change password', 'Location settings'],
    security: ['Two-factor authentication', 'Login protection', 'Session history', 'Security alerts'],
    privacy: ['Profile visibility', 'Blocked users', 'Data options', 'Contact preferences'],
    notifications: ['Push notifications', 'Email notifications', 'SMS/WhatsApp notifications', 'Notification history'],
  }[type] || ['General setting']

  return (
    <section className="panel">
      <PanelHeader label="Settings" title={title} />
      <div className="card-list">{items.map((item) => <ToggleCard key={item} title={item} text="You can turn this setting on or off." />)}</div>
    </section>
  )
}

function LanguageSettingsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Language" title="Language Settings" />
      <div className="form-grid">
        <select><option>Kinyarwanda</option><option>English</option><option>Français</option></select>
        <select><option>Use mixed Kinyarwanda + English</option><option>Kinyarwanda only</option><option>English only</option></select>
      </div>
    </section>
  )
}

function DeleteAccountScreen() {
  return (
    <section className="panel danger-panel">
      <PanelHeader label="Danger Zone" title="Delete Account" text="This is a mock screen. Real delete account will require confirmation and backend." />
      <button className="danger-button"><Trash2 size={18} /> Delete Account</button>
    </section>
  )
}

function StatsRow() {
  return (
    <section className="stats-grid wide">
      <StatCard value="70+" label="Routed Screens" />
      <StatCard value="15+" label="Platform Modules" />
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
      <div className="module-icon"><Icon size={22} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </NavLink>
  )
}

function SmallCard({ title, text }) {
  return <article className="small-card"><h3>{title}</h3><p>{text}</p></article>
}

function StatCard({ value, label }) {
  return <div className="stat-card"><strong>{value}</strong><span>{label}</span></div>
}

function ProfileCard({ profile }) {
  return (
    <article className="market-card">
      <div className="avatar">{profile.initials}</div>
      <h3>{profile.name}</h3>
      <p>{profile.role} • {profile.location}</p>
      <div className="pill-row"><span>Trust {profile.trust}</span><span>{profile.proofs} proofs</span><span>{profile.rating} stars</span></div>
      <button className="secondary-button"><Eye size={17} /> View Profile</button>
    </article>
  )
}

function ProofGrid() {
  return (
    <div className="proof-grid">
      {proofs.map((proof) => (
        <article className="proof-card" key={proof.title}>
          <div className="proof-thumb"><PlayCircle size={34} /></div>
          <h3>{proof.title}</h3>
          <p>{proof.source} • {proof.type} • {proof.service}</p>
          <div className="pill-row"><span>Score {proof.score}/100</span><span>{proof.status}</span></div>
        </article>
      ))}
    </div>
  )
}

function NeedGrid() {
  return <div className="card-list">{needs.map((need) => <article className="data-card" key={need.title}><div><h3>{need.title}</h3><p>{need.category} • {need.location}</p></div><div className="pill-row"><span>{need.budget}</span><span>{need.urgency}</span></div></article>)}</div>
}

function OfferGrid() {
  return <div className="card-list">{offers.map((offer) => <article className="data-card" key={offer.title}><div><h3>{offer.title}</h3><p>{offer.category} • {offer.location}</p></div><div className="pill-row"><span>{offer.price}</span><span>{offer.proof}</span></div></article>)}</div>
}

function MatchList() {
  return <div className="card-list">{matches.map((match) => <MatchCard key={match.title} match={match} />)}</div>
}

function MatchCard({ match }) {
  return (
    <article className="match-card-phase4">
      <div><h3>{match.title}</h3><p>{match.type}</p><small>{match.reason}</small></div>
      <div className="match-score"><strong>{match.score}</strong><span>/100</span></div>
    </article>
  )
}

function MessageList() {
  return <div className="inbox">{['Aline Mukamana', 'Restaurant Kigali', 'Eric Welding', 'AI Assistant'].map((name) => <NavLink key={name} to="/messages/chat"><strong>{name}</strong><span>Muraho, nabonye ko mukora service...</span></NavLink>)}</div>
}

function FilterTabs({ tabs }) {
  return <div className="filter-row">{tabs.map((tab) => <button key={tab}><Filter size={15} /> {tab}</button>)}</div>
}

function Progress({ value }) {
  return <div className="progress-track"><div style={{ width: `${value}%` }} /></div>
}

function Checklist({ items }) {
  return <div className="checklist">{items.map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}</div>
}

function ChecklistScreen({ title }) {
  return (
    <section className="panel">
      <PanelHeader label="Checklist" title={title} />
      <Checklist items={['Complete your profile', 'Add clear proof video', 'Set accurate location', 'Add price range', 'Update availability', 'Ask for reviews after tasks']} />
    </section>
  )
}

function ScoreRow({ label, value, max }) {
  const width = Math.round((value / max) * 100)
  return <div className="score-row"><div><strong>{label}</strong><span>{value} points</span></div><Progress value={width} /></div>
}

function TaskKanban() {
  const statuses = ['Requested', 'Accepted', 'In progress', 'Completed', 'Disputed']
  return <div className="kanban">{statuses.map((status) => <div className="kanban-column" key={status}><h3>{status}</h3>{tasks.filter((task) => task.status === status).map((task) => <TaskCard key={task.title} task={task} />)}</div>)}</div>
}

function TaskCard({ task }) {
  return <article className="task-card"><h3>{task.title}</h3><p>{task.client}</p><div className="pill-row"><span>{task.status}</span><span>{task.budget}</span></div></article>
}

function LearningPathGrid() {
  return <div className="three-grid">{learningPaths.map((path) => <article className="phase5-card" key={path.title}><GraduationCap size={24} /><h3>{path.title}</h3><p>{path.result}</p><div className="pill-row"><span>{path.lessons} lessons</span><span>{path.demand}</span></div></article>)}</div>
}

function StepCard({ number, title, text }) {
  return <article className="step-card"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>
}

function SimpleList({ title, items }) {
  return <section className="panel"><PanelHeader label="List" title={title} /><div className="card-list">{items.map((item) => <SmallCard key={item} title={item} text="Mock data item for this screen." />)}</div></section>
}

function StatsScreen({ title }) {
  return <section className="panel"><PanelHeader label="Analytics" title={title} /><div className="stats-grid"><StatCard value="124" label="Views" /><StatCard value="31" label="Clicks" /><StatCard value="9" label="Requests" /><StatCard value="3" label="Completed" /></div></section>
}

function EmptyScreen({ title, icon: Icon }) {
  return <div className="empty-state"><Icon size={42} /><h3>{title}</h3><p>Content will appear here when users start using the platform.</p></div>
}

function ToggleCard({ title, text }) {
  const [on, setOn] = useState(true)
  return <article className="toggle-card"><div><h3>{title}</h3><p>{text}</p></div><button className={on ? 'toggle on' : 'toggle'} onClick={() => setOn(!on)}><span /></button></article>
}

export default App
