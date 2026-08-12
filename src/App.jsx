import { useEffect, useMemo, useState } from 'react'
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
  Database,
  Edit3,
  Eye,
  FileText,
  Filter,
  GraduationCap,
  Home,
  KeyRound,
  LayoutDashboard,
  Link2,
  LogIn,
  Menu,
  MessageCircle,
  PlayCircle,
  Plus,
  RefreshCcw,
  Route as RouteIcon,
  Save,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Trash2,
  User,
  UserPlus,
  Users,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const mainNav = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/auth/login', label: 'Login', icon: LogIn },
  { to: '/onboarding', label: 'Onboarding', icon: ClipboardList },
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
  { to: '/backend', label: 'Backend Ready', icon: Database },
  { to: '/local-store', label: 'Local Store', icon: Save },
]

const authSubNav = [
  { to: '/auth/login', label: 'Login' },
  { to: '/auth/signup', label: 'Sign Up' },
  { to: '/auth/phone', label: 'Phone Login' },
  { to: '/auth/otp', label: 'OTP' },
  { to: '/auth/forgot-password', label: 'Forgot Password' },
  { to: '/auth/success', label: 'Success' },
]

const onboardingSubNav = [
  { to: '/onboarding', label: 'Welcome' },
  { to: '/onboarding/identity', label: 'Identity' },
  { to: '/onboarding/goal', label: 'Goal' },
  { to: '/onboarding/assets', label: 'Assets' },
  { to: '/onboarding/proof', label: 'Proof' },
  { to: '/onboarding/first-action', label: 'First Action' },
  { to: '/onboarding/complete', label: 'Complete' },
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

const backendSubNav = [
  { to: '/backend', label: 'Overview' },
  { to: '/backend/database', label: 'Database Schema' },
  { to: '/backend/api', label: 'API Routes' },
  { to: '/backend/flows', label: 'Data Flows' },
  { to: '/backend/roadmap', label: 'Backend Roadmap' },
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

const initialProfiles = [
  { name: 'Aline Mukamana', initials: 'AM', role: 'Short Video Creator', location: 'Kigali', trust: 78, proofs: 3, rating: 4.8 },
  { name: 'Eric Niyonzima', initials: 'EN', role: 'Welding Specialist', location: 'Huye', trust: 84, proofs: 5, rating: 4.9 },
  { name: 'Claudine Uwase', initials: 'CU', role: 'WhatsApp Business Helper', location: 'Musanze', trust: 69, proofs: 2, rating: 4.6 },
]

const initialProofs = [
  { title: 'Restaurant short video sample', source: 'TikTok', type: 'Skill demonstration', score: 86, status: 'Approved', service: 'Short videos' },
  { title: 'Salon before/after promo', source: 'Instagram', type: 'Before/after', score: 74, status: 'Pending', service: 'Social media content' },
  { title: 'Client testimonial for welding', source: 'YouTube', type: 'Client testimonial', score: 91, status: 'Verified', service: 'Welding' },
]

const initialNeeds = [
  { title: 'Nkeneye umuntu ukora videos za restaurant', category: 'Digital services', location: 'Kigali', budget: '50,000 RWF', urgency: 'Within 1 week' },
  { title: 'Nkeneye cleaning ya office', category: 'Cleaning', location: 'Kicukiro', budget: '30,000 RWF', urgency: 'Tomorrow' },
  { title: 'Nkeneye tutor wa English', category: 'Tutoring', location: 'Remera', budget: '80,000 RWF/month', urgency: 'This week' },
]

const initialOffers = [
  { title: 'Nkora short videos za business nto', category: 'Digital services', location: 'Kigali', price: '10,000 - 50,000 RWF', proof: '3 videos' },
  { title: 'WhatsApp Business setup helper', category: 'Small business support', location: 'Online / Kigali', price: '5,000 - 30,000 RWF', proof: '2 demos' },
  { title: 'Welding ya gates, windows na doors', category: 'Welding', location: 'Huye', price: 'Project based', proof: '5 samples' },
]

const initialTasks = [
  { title: 'Create 5 short videos for restaurant', status: 'In progress', client: 'Restaurant Kigali', budget: '50,000 RWF' },
  { title: 'Setup WhatsApp Business catalog', status: 'Requested', client: 'Shop Owner', budget: '20,000 RWF' },
  { title: 'Review project details', status: 'Accepted', client: 'Aline Mukamana', budget: 'Pending' },
  { title: 'Welding gate repair', status: 'Completed', client: 'Huye Client', budget: 'Project based' },
  { title: 'Late delivery discussion', status: 'Disputed', client: 'Salon Client', budget: '30,000 RWF' },
]

const initialReviews = [
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

const feedItems = [
  { title: 'Restaurant i Kigali irashaka umuntu ukora short videos', meta: 'Budget: 50,000 RWF • Proof required • Within 1 week', action: 'Apply' },
  { title: 'Ufite phone gusa? Tangira nka Proof Video Helper', meta: 'Step 1: Shaka artisan 1 • Step 2: Mufashe gukora video', action: 'Start path' },
  { title: 'Shop owner arashaka WhatsApp Business catalog', meta: 'Small business support • Online • 20,000 RWF', action: 'Offer help' },
]

const learningPaths = [
  { title: 'WhatsApp Business Setup Helper', lessons: 4, demand: 'High demand', result: 'Help shops create online catalog' },
  { title: 'Proof Video Helper', lessons: 5, demand: 'High demand', result: 'Help artisans show real work' },
  { title: 'Local Opportunity Connector', lessons: 3, demand: 'Growing demand', result: 'Connect needs with providers' },
]

const databaseTables = [
  { name: 'users', fields: ['id', 'name', 'email', 'phone', 'role', 'language', 'created_at'] },
  { name: 'profiles', fields: ['id', 'user_id', 'bio', 'location', 'availability', 'price_range', 'trust_score'] },
  { name: 'proof_videos', fields: ['id', 'user_id', 'title', 'url', 'source', 'score', 'status'] },
  { name: 'needs', fields: ['id', 'user_id', 'title', 'category', 'location', 'budget', 'urgency'] },
  { name: 'offers', fields: ['id', 'user_id', 'title', 'category', 'price', 'proof_id', 'availability'] },
  { name: 'matches', fields: ['id', 'need_id', 'offer_id', 'provider_id', 'score', 'reason'] },
  { name: 'messages', fields: ['id', 'sender_id', 'receiver_id', 'body', 'status', 'created_at'] },
  { name: 'tasks', fields: ['id', 'client_id', 'provider_id', 'title', 'status', 'budget'] },
  { name: 'reviews', fields: ['id', 'task_id', 'rating', 'comment', 'reviewer_id', 'receiver_id'] },
]

const apiRoutes = [
  { method: 'GET', path: '/api/profiles', text: 'List profiles with proof and trust score.' },
  { method: 'POST', path: '/api/needs', text: 'Create a new need.' },
  { method: 'POST', path: '/api/offers', text: 'Create a new offer.' },
  { method: 'GET', path: '/api/matches/:userId', text: 'Return recommended matches.' },
  { method: 'POST', path: '/api/messages', text: 'Send a message.' },
  { method: 'PATCH', path: '/api/tasks/:id/status', text: 'Update task workflow status.' },
  { method: 'POST', path: '/api/reviews', text: 'Create a review after completed task.' },
  { method: 'DELETE', path: '/api/account', text: 'Delete user account with confirmation.' },
]

function loadLocalData(key, fallback) {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [profiles, setProfiles] = useState(() => loadLocalData('ub_profiles', initialProfiles))
  const [proofs, setProofs] = useState(() => loadLocalData('ub_proofs', initialProofs))
  const [needs, setNeeds] = useState(() => loadLocalData('ub_needs', initialNeeds))
  const [offers, setOffers] = useState(() => loadLocalData('ub_offers', initialOffers))
  const [tasks, setTasks] = useState(() => loadLocalData('ub_tasks', initialTasks))
  const [reviews, setReviews] = useState(() => loadLocalData('ub_reviews', initialReviews))

  useEffect(() => localStorage.setItem('ub_profiles', JSON.stringify(profiles)), [profiles])
  useEffect(() => localStorage.setItem('ub_proofs', JSON.stringify(proofs)), [proofs])
  useEffect(() => localStorage.setItem('ub_needs', JSON.stringify(needs)), [needs])
  useEffect(() => localStorage.setItem('ub_offers', JSON.stringify(offers)), [offers])
  useEffect(() => localStorage.setItem('ub_tasks', JSON.stringify(tasks)), [tasks])
  useEffect(() => localStorage.setItem('ub_reviews', JSON.stringify(reviews)), [reviews])

  const matches = useMemo(() => {
    return needs.slice(0, 3).map((need, index) => {
      const profile = profiles[index % profiles.length]
      return {
        title: `${need.title} ↔ ${profile.name}`,
        score: 92 - index * 5,
        type: 'Need to provider',
        reason: 'Category, location, proof video, availability and budget match.',
      }
    })
  }, [needs, profiles])

  const store = {
    profiles,
    setProfiles,
    proofs,
    setProofs,
    needs,
    setNeeds,
    offers,
    setOffers,
    tasks,
    setTasks,
    reviews,
    setReviews,
    matches,
    resetDemoData: () => {
      setProfiles(initialProfiles)
      setProofs(initialProofs)
      setNeeds(initialNeeds)
      setOffers(initialOffers)
      setTasks(initialTasks)
      setReviews(initialReviews)
      localStorage.removeItem('ub_profiles')
      localStorage.removeItem('ub_proofs')
      localStorage.removeItem('ub_needs')
      localStorage.removeItem('ub_offers')
      localStorage.removeItem('ub_tasks')
      localStorage.removeItem('ub_reviews')
    },
  }

  return (
    <BrowserRouter>
      <Shell store={store} />
    </BrowserRouter>
  )
}

function Shell({ store }) {
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
          <strong>Phase 9</strong>
          <p>Local mock data store, interactive forms, localStorage persistence and reset demo data.</p>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <button className="icon-button menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>

          <div>
            <p className="breadcrumb">UBWENGE Buzima / Phase 9</p>
            <h1>{pageTitle}</h1>
          </div>

          <div className="topbar-actions">
            <button className="search-button">
              <Search size={17} />
              <span>Search</span>
            </button>
            <NavLink to="/local-store" className="primary-small">
              <Save size={17} />
              Local Store
            </NavLink>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomeScreen store={store} />} />

          <Route path="/auth" element={<ModuleLayout nav={authSubNav} />}>
            <Route index element={<Navigate to="/auth/login" replace />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="signup" element={<SignupScreen />} />
            <Route path="phone" element={<PhoneLoginScreen />} />
            <Route path="otp" element={<OtpScreen />} />
            <Route path="forgot-password" element={<ForgotPasswordScreen />} />
            <Route path="success" element={<AuthSuccessScreen />} />
          </Route>

          <Route path="/onboarding" element={<ModuleLayout nav={onboardingSubNav} />}>
            <Route index element={<OnboardingWelcomeScreen />} />
            <Route path="identity" element={<OnboardingStepScreen step="Identity" />} />
            <Route path="goal" element={<OnboardingStepScreen step="Goal" />} />
            <Route path="assets" element={<OnboardingStepScreen step="Assets" />} />
            <Route path="proof" element={<OnboardingStepScreen step="Proof" />} />
            <Route path="first-action" element={<OnboardingFirstActionScreen />} />
            <Route path="complete" element={<OnboardingCompleteScreen />} />
          </Route>

          <Route path="/choose-path" element={<ChoosePathScreen />} />

          <Route path="/profile" element={<ModuleLayout nav={profileSubNav} />}>
            <Route index element={<MyProfileScreen store={store} />} />
            <Route path="public" element={<PublicProfileScreen store={store} />} />
            <Route path="edit" element={<EditProfileScreen />} />
            <Route path="proof" element={<ProofHomeScreen store={store} />} />
            <Route path="reviews" element={<ReviewsScreen store={store} />} />
            <Route path="analytics" element={<StatsScreen title="Profile Analytics" />} />
          </Route>

          <Route path="/proof-videos" element={<ModuleLayout nav={proofSubNav} />}>
            <Route index element={<ProofHomeScreen store={store} />} />
            <Route path="add" element={<AddProofScreen store={store} />} />
            <Route path="score" element={<ProofScoreScreen />} />
            <Route path="verification" element={<ProofHomeScreen store={store} />} />
            <Route path="tips" element={<ProofTipsScreen />} />
          </Route>

          <Route path="/needs" element={<ModuleLayout nav={needsSubNav} />}>
            <Route index element={<NeedsHomeScreen store={store} />} />
            <Route path="post" element={<PostNeedScreen store={store} />} />
            <Route path="matches" element={<MatchListScreen store={store} />} />
            <Route
              path="applications"
              element={<SimpleList title="Applications" items={['Aline applied to restaurant videos', 'Claudine applied to WhatsApp setup']} />}
            />
            <Route
              path="closed"
              element={<SimpleList title="Closed Needs" items={['Restaurant videos completed', 'Office cleaning completed']} />}
            />
          </Route>

          <Route path="/offers" element={<ModuleLayout nav={offersSubNav} />}>
            <Route index element={<OffersHomeScreen store={store} />} />
            <Route path="create" element={<CreateOfferScreen store={store} />} />
            <Route
              path="requests"
              element={<SimpleList title="Offer Requests" items={['Restaurant requested short videos', 'Shop requested WhatsApp setup']} />}
            />
            <Route path="analytics" element={<StatsScreen title="Offer Analytics" />} />
            <Route path="featured" element={<OffersHomeScreen store={store} />} />
          </Route>

          <Route path="/marketplace" element={<ModuleLayout nav={marketplaceSubNav} />}>
            <Route index element={<MarketplaceExploreScreen />} />
            <Route path="services" element={<OffersHomeScreen store={store} />} />
            <Route path="jobs" element={<NeedsHomeScreen store={store} />} />
            <Route path="people" element={<PeopleScreen store={store} />} />
            <Route path="needs" element={<NeedsHomeScreen store={store} />} />
            <Route path="offers" element={<OffersHomeScreen store={store} />} />
            <Route path="saved" element={<SimpleList title="Saved Items" items={['Aline profile', 'Restaurant need', 'Proof video sample']} />} />
          </Route>

          <Route path="/matching" element={<ModuleLayout nav={matchingSubNav} />}>
            <Route index element={<MatchListScreen store={store} />} />
            <Route path="people" element={<PeopleScreen store={store} />} />
            <Route path="jobs" element={<NeedsHomeScreen store={store} />} />
            <Route path="services" element={<OffersHomeScreen store={store} />} />
            <Route path="reasons" element={<MatchReasonsScreen />} />
            <Route path="improve" element={<ChecklistScreen title="Improve Matches" />} />
          </Route>

          <Route path="/messages" element={<ModuleLayout nav={messageSubNav} />}>
            <Route index element={<MessagesInboxScreen />} />
            <Route path="chat" element={<ChatScreen />} />
            <Route
              path="requests"
              element={<SimpleList title="Message Requests" items={['Restaurant Kigali wants videos', 'Shop owner wants WhatsApp setup']} />}
            />
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
          <Route path="/reviews" element={<ReviewsScreen store={store} />} />
          <Route path="/trust-score" element={<TrustScoreScreen />} />

          <Route path="/tasks" element={<ModuleLayout nav={taskSubNav} />}>
            <Route index element={<TasksHomeScreen store={store} />} />
            <Route path="requested" element={<TasksByStatusScreen status="Requested" store={store} />} />
            <Route path="accepted" element={<TasksByStatusScreen status="Accepted" store={store} />} />
            <Route path="in-progress" element={<TasksByStatusScreen status="In progress" store={store} />} />
            <Route path="completed" element={<TasksByStatusScreen status="Completed" store={store} />} />
            <Route path="disputed" element={<TasksByStatusScreen status="Disputed" store={store} />} />
          </Route>

          <Route path="/learning" element={<ModuleLayout nav={learningSubNav} />}>
            <Route index element={<LearningHomeScreen />} />
            <Route path="paths" element={<LearningHomeScreen />} />
            <Route path="whatsapp-business" element={<LearningDetailScreen title="WhatsApp Business Setup Helper" />} />
            <Route path="proof-video-helper" element={<LearningDetailScreen title="Proof Video Helper" />} />
            <Route path="tasks" element={<ChecklistScreen title="Learning Practice Tasks" />} />
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
            <Route index element={<AdminDashboardScreen store={store} />} />
            <Route path="users" element={<AdminTableScreen title="Users" />} />
            <Route path="profiles" element={<AdminTableScreen title="Profiles" />} />
            <Route path="proof-videos" element={<AdminTableScreen title="Proof Videos" />} />
            <Route path="needs" element={<AdminTableScreen title="Needs" />} />
            <Route path="offers" element={<AdminTableScreen title="Offers" />} />
            <Route path="matches" element={<AdminTableScreen title="Matches" />} />
            <Route path="reports" element={<SimpleList title="Reports" items={['Reported profile', 'Reported proof video', 'Disputed task']} />} />
            <Route path="revenue" element={<StatsScreen title="Revenue MVP" />} />
            <Route path="platform-health" element={<ChecklistScreen title="Platform Health" />} />
          </Route>

          <Route path="/settings" element={<ModuleLayout nav={settingsSubNav} />}>
            <Route index element={<SettingsCards title="Account Settings" type="account" />} />
            <Route path="security" element={<SettingsCards title="Security Settings" type="security" />} />
            <Route path="privacy" element={<SettingsCards title="Privacy Settings" type="privacy" />} />
            <Route path="notifications" element={<SettingsCards title="Notification Settings" type="notifications" />} />
            <Route path="language" element={<LanguageSettingsScreen />} />
            <Route path="delete-account" element={<DeleteAccountScreen />} />
          </Route>

          <Route path="/backend" element={<ModuleLayout nav={backendSubNav} />}>
            <Route index element={<BackendOverviewScreen />} />
            <Route path="database" element={<BackendDatabaseScreen />} />
            <Route path="api" element={<BackendApiScreen />} />
            <Route path="flows" element={<BackendFlowsScreen />} />
            <Route path="roadmap" element={<BackendRoadmapScreen />} />
          </Route>

          <Route path="/local-store" element={<LocalStoreScreen store={store} />} />

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

function HomeScreen({ store }) {
  return (
    <div className="screen-grid">
      <section className="hero-card wide">
        <div>
          <span className="eyebrow">Phase 9 Complete</span>
          <h2>Erekana icyo ushoboye. Hura n’abagukeneye. Hindura skills zawe amafaranga.</h2>
          <p>
            UBWENGE Buzima ubu ifite local mock data store: Add Need, Create Offer, Add Proof,
            Add Task, localStorage persistence na reset demo data.
          </p>
          <div className="button-row">
            <NavLink className="primary-button" to="/local-store">
              Open Local Store
              <ChevronRight size={18} />
            </NavLink>
            <NavLink className="secondary-button" to="/needs/post">
              Post Need
            </NavLink>
          </div>
        </div>

        <div className="hero-mini-panel">
          <div>
            <span>Saved Locally</span>
            <strong>{store.needs.length + store.offers.length + store.proofs.length + store.tasks.length} records</strong>
            <p>Data persists in browser localStorage.</p>
          </div>
          <div>
            <span>Next</span>
            <strong>Interactive MVP</strong>
            <p>Forms now create visible records without backend.</p>
          </div>
        </div>
      </section>

      <StatsRow store={store} />

      <section className="panel wide">
        <PanelHeader label="Phase 9 Modules" title="Interactive local mock data" />
        <div className="three-grid">
          <LinkCard to="/needs/post" icon={ClipboardList} title="Add Need" text="Create need and save it locally." />
          <LinkCard to="/offers/create" icon={BriefcaseBusiness} title="Create Offer" text="Create offer and save it locally." />
          <LinkCard to="/proof-videos/add" icon={PlayCircle} title="Add Proof" text="Add proof video link and save it locally." />
          <LinkCard to="/tasks" icon={CheckCircle2} title="Tasks" text="Add and track local task workflow." />
          <LinkCard to="/local-store" icon={Save} title="Local Store" text="View browser data and reset demo." />
          <LinkCard to="/backend" icon={Database} title="Backend Next" text="Prepared to replace localStorage with real database." />
        </div>
      </section>
    </div>
  )
}

function AuthShell({ label, title, text, action, footerText, footerLink, footerLinkText, children }) {
  return (
    <section className="auth-layout">
      <div className="auth-panel">
        <span className="eyebrow">{label}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="auth-form">
          {children}
          <NavLink to="/auth/success" className="primary-button">
            {action}
            <ChevronRight size={18} />
          </NavLink>
        </div>
        <p className="auth-footer">
          {footerText} <NavLink to={footerLink}>{footerLinkText}</NavLink>
        </p>
      </div>

      <div className="auth-side-card">
        <Sparkles size={28} />
        <h3>Why UBWENGE Buzima?</h3>
        <p>Build profile, upload proof, get matches, message clients, complete tasks and grow trust score.</p>
        <div className="pill-row">
          <span>Skills</span>
          <span>Proof</span>
          <span>Trust</span>
          <span>Income</span>
        </div>
      </div>
    </section>
  )
}

function LoginScreen() {
  return (
    <AuthShell label="Login" title="Injira muri UBWENGE Buzima" text="Injira ukoresheje email cyangwa phone." action="Login" footerText="Nta account ufite?" footerLink="/auth/signup" footerLinkText="Create account">
      <input placeholder="Email or phone" />
      <input placeholder="Password" type="password" />
      <NavLink to="/auth/forgot-password" className="auth-link">Forgot password?</NavLink>
    </AuthShell>
  )
}

function SignupScreen() {
  return (
    <AuthShell label="Sign Up" title="Create your opportunity account" text="Tangira kubaka profile, proof, trust score na opportunities zawe." action="Create Account" footerText="Usanzwe ufite account?" footerLink="/auth/login" footerLinkText="Login">
      <input placeholder="Full name" />
      <input placeholder="Email" type="email" />
      <input placeholder="Phone number" />
      <select>
        <option>Account type</option>
        <option>Service Provider</option>
        <option>Client</option>
        <option>Business</option>
        <option>Connector</option>
        <option>Learner</option>
      </select>
    </AuthShell>
  )
}

function PhoneLoginScreen() {
  return (
    <AuthShell label="Phone Login" title="Injira ukoresheje phone" text="Tuzakoherereza OTP code yo kugenzura phone yawe." action="Send OTP" footerText="Ufite email?" footerLink="/auth/login" footerLinkText="Use email login">
      <input placeholder="+250 7XX XXX XXX" />
    </AuthShell>
  )
}

function OtpScreen() {
  return (
    <AuthShell label="OTP" title="Verify your phone" text="Andika code wakiriye kuri phone yawe." action="Verify OTP" footerText="Ntiwabonye code?" footerLink="/auth/phone" footerLinkText="Resend">
      <div className="otp-row">
        <input maxLength="1" placeholder="0" />
        <input maxLength="1" placeholder="0" />
        <input maxLength="1" placeholder="0" />
        <input maxLength="1" placeholder="0" />
        <input maxLength="1" placeholder="0" />
        <input maxLength="1" placeholder="0" />
      </div>
    </AuthShell>
  )
}

function ForgotPasswordScreen() {
  return (
    <AuthShell label="Forgot Password" title="Reset password" text="Shyiramo email cyangwa phone, tukohereze reset instructions." action="Send Reset Link" footerText="Wibutse password?" footerLink="/auth/login" footerLinkText="Back to login">
      <input placeholder="Email or phone" />
    </AuthShell>
  )
}

function AuthSuccessScreen() {
  return (
    <section className="panel">
      <div className="auth-success">
        <CheckCircle2 size={54} />
        <span className="eyebrow">Account Ready</span>
        <h2>Welcome to UBWENGE Buzima</h2>
        <p>Account yawe yakozwe neza. Tangira onboarding kugira ngo platform ikumenye neza.</p>
        <NavLink to="/onboarding" className="primary-button">Start Onboarding</NavLink>
      </div>
    </section>
  )
} 

function OnboardingWelcomeScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Onboarding"
        title="Ntibe form ndende, ibe ikiganiro"
        text="Onboarding imenya identity, goal, assets, proof na first action."
      />
      <OnboardingProgress current={1} />
      <div className="three-grid">
        <LinkCard to="/onboarding/identity" icon={User} title="Start Identity" text="Izina, location, phone/email na language." />
        <LinkCard to="/onboarding/goal" icon={Target} title="Choose Goal" text="Akazi, clients, services, learning or opportunity." />
        <LinkCard to="/onboarding/first-action" icon={Zap} title="Get First Action" text="Platform iguhe ikintu gifatika cyo gukora." />
      </div>
    </section>
  )
}

function OnboardingStepScreen({ step }) {
  const nextMap = {
    Identity: '/onboarding/goal',
    Goal: '/onboarding/assets',
    Assets: '/onboarding/proof',
    Proof: '/onboarding/first-action',
  }

  const currentMap = {
    Identity: 2,
    Goal: 3,
    Assets: 4,
    Proof: 5,
  }

  return (
    <section className="panel">
      <PanelHeader label={step} title={`${step} information`} text="Iyi ni onboarding mock screen izahuzwa na database nyuma." />
      <OnboardingProgress current={currentMap[step] || 2} />
      <div className="form-grid">
        <input placeholder={`${step} field 1`} />
        <input placeholder={`${step} field 2`} />
        <select>
          <option>{step} option</option>
          <option>Yego</option>
          <option>Oya</option>
        </select>
        <select>
          <option>Experience level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Experienced</option>
        </select>
      </div>
      <NavLink to={nextMap[step] || '/onboarding/first-action'} className="primary-button top-space">
        Continue
        <ChevronRight size={18} />
      </NavLink>
    </section>
  )
}

function OnboardingFirstActionScreen() {
  return (
    <section className="panel">
      <PanelHeader label="First Action" title="Dore intambwe yawe ya mbere" text="Onboarding irangira user abonye igikorwa nyacyo." />
      <OnboardingProgress current={6} />

      <div className="three-grid">
        <LinkCard to="/profile/edit" icon={User} title="Complete Profile" text="Shyiraho bio, skills, location na price range." />
        <LinkCard to="/proof-videos/add" icon={PlayCircle} title="Add Proof Video" text="Shyiraho link ya TikTok, YouTube cyangwa Instagram." />
        <LinkCard to="/offers/create" icon={BriefcaseBusiness} title="Create First Offer" text="Hindura skill yawe service client yumva." />
      </div>

      <div className="result-box">
        <span className="eyebrow">AI Recommendation</span>
        <h3>Recommended path: Proof Video Helper</h3>
        <p>Ufite phone, ushobora gufata video, kandi ushobora gufasha business nto kugaragaza ibyo zikora.</p>
      </div>

      <NavLink to="/onboarding/complete" className="primary-button top-space">Complete Onboarding</NavLink>
    </section>
  )
}

function OnboardingCompleteScreen() {
  return (
    <section className="panel">
      <div className="auth-success">
        <CheckCircle2 size={54} />
        <span className="eyebrow">Onboarding Complete</span>
        <h2>Profile yawe yatangiye kubakwa</h2>
        <p>Ubu ushobora kujya kuri profile, kongeramo proof, gukora offer cyangwa kureba matches.</p>
        <div className="button-row">
          <NavLink to="/profile" className="primary-button">Go to Profile</NavLink>
          <NavLink to="/matching" className="secondary-button">View Matches</NavLink>
        </div>
      </div>
    </section>
  )
}

function OnboardingProgress({ current }) {
  const steps = ['Welcome', 'Identity', 'Goal', 'Assets', 'Proof', 'First Action', 'Complete']

  return (
    <div className="onboarding-progress">
      {steps.map((step, index) => (
        <div className={index + 1 <= current ? 'done' : ''} key={step}>
          <span>{index + 1}</span>
          <small>{step}</small>
        </div>
      ))}
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

function MyProfileScreen({ store }) {
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
            <span>{store.proofs.length} Proof Videos</span>
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
        <PanelHeader label="Local Data" title="Stored in browser" />
        <p>This demo uses localStorage. Needs, offers, proofs and tasks you add will stay after refresh.</p>
      </section>
    </div>
  )
}

function PublicProfileScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="Public Profile" title="Uko client azabona profile yawe" />
      <PeopleScreen store={store} />
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

function ProofHomeScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="All Proof Videos" title="Proof links zose" text={`${store.proofs.length} proof records saved locally.`} />
      <ProofGrid proofs={store.proofs} />
    </section>
  )
}

function AddProofScreen({ store }) {
  const [form, setForm] = useState({
    title: '',
    source: 'TikTok',
    type: 'Skill demonstration',
    service: 'Short videos',
    status: 'Pending',
    score: 70,
  })

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function saveProof() {
    if (!form.title.trim()) return
    store.setProofs([{ ...form, score: Number(form.score) || 70 }, ...store.proofs])
    setForm({ title: '', source: 'TikTok', type: 'Skill demonstration', service: 'Short videos', status: 'Pending', score: 70 })
  }

  return (
    <section className="panel">
      <PanelHeader label="Add Proof" title="Shyiraho proof video link" text="Iyi form ibika proof muri localStorage." />
      <div className="form-grid">
        <input placeholder="Video title" value={form.title} onChange={(event) => update('title', event.target.value)} />
        <select value={form.source} onChange={(event) => update('source', event.target.value)}>
          <option>TikTok</option>
          <option>YouTube</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>Google Drive</option>
        </select>
        <select value={form.type} onChange={(event) => update('type', event.target.value)}>
          <option>Skill demonstration</option>
          <option>Before/after</option>
          <option>Client testimonial</option>
          <option>Product demo</option>
        </select>
        <input placeholder="Related service" value={form.service} onChange={(event) => update('service', event.target.value)} />
        <input placeholder="Score" type="number" value={form.score} onChange={(event) => update('score', event.target.value)} />
        <select value={form.status} onChange={(event) => update('status', event.target.value)}>
          <option>Pending</option>
          <option>Approved</option>
          <option>Verified</option>
        </select>
      </div>
      <button className="primary-button top-space" onClick={saveProof}>
        <Save size={18} />
        Save Proof Locally
      </button>
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

function NeedsHomeScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="Needs" title="Abantu bagaragaza ibyo bakeneye" text={`${store.needs.length} needs saved locally.`} />
      <NeedGrid needs={store.needs} />
    </section>
  )
}

function PostNeedScreen({ store }) {
  const [form, setForm] = useState({
    title: '',
    category: 'Digital services',
    location: 'Kigali',
    budget: '',
    urgency: 'This week',
  })

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function saveNeed() {
    if (!form.title.trim()) return
    store.setNeeds([form, ...store.needs])
    setForm({ title: '', category: 'Digital services', location: 'Kigali', budget: '', urgency: 'This week' })
  }

  return (
    <section className="panel">
      <PanelHeader label="Post Need" title="Andika icyo ukeneye" text="Need nshya irahita ibikwa muri localStorage." />
      <div className="form-grid">
        <input placeholder="Need title" value={form.title} onChange={(event) => update('title', event.target.value)} />
        <select value={form.category} onChange={(event) => update('category', event.target.value)}>
          <option>Digital services</option>
          <option>Cleaning</option>
          <option>Tutoring</option>
          <option>Welding</option>
          <option>Small business support</option>
        </select>
        <input placeholder="Location" value={form.location} onChange={(event) => update('location', event.target.value)} />
        <input placeholder="Budget" value={form.budget} onChange={(event) => update('budget', event.target.value)} />
        <select value={form.urgency} onChange={(event) => update('urgency', event.target.value)}>
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>
      </div>
      <button className="primary-button top-space" onClick={saveNeed}>
        <Save size={18} />
        Save Need Locally
      </button>
    </section>
  )
}

function OffersHomeScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="Offers" title="Abantu bagaragaza ibyo batanga" text={`${store.offers.length} offers saved locally.`} />
      <OfferGrid offers={store.offers} />
    </section>
  )
}

function CreateOfferScreen({ store }) {
  const [form, setForm] = useState({
    title: '',
    category: 'Digital services',
    location: 'Kigali',
    price: '',
    proof: 'No proof yet',
  })

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function saveOffer() {
    if (!form.title.trim()) return
    store.setOffers([form, ...store.offers])
    setForm({ title: '', category: 'Digital services', location: 'Kigali', price: '', proof: 'No proof yet' })
  }

  return (
    <section className="panel">
      <PanelHeader label="Create Offer" title="Hindura skill yawe service yumvikana" text="Offer nshya irahita ibikwa muri localStorage." />
      <div className="form-grid">
        <input placeholder="Offer title" value={form.title} onChange={(event) => update('title', event.target.value)} />
        <select value={form.category} onChange={(event) => update('category', event.target.value)}>
          <option>Digital services</option>
          <option>Small business support</option>
          <option>Welding</option>
          <option>Tutoring</option>
        </select>
        <input placeholder="Location" value={form.location} onChange={(event) => update('location', event.target.value)} />
        <input placeholder="Price range" value={form.price} onChange={(event) => update('price', event.target.value)} />
        <input placeholder="Proof video label" value={form.proof} onChange={(event) => update('proof', event.target.value)} />
      </div>
      <button className="primary-button top-space" onClick={saveOffer}>
        <Save size={18} />
        Save Offer Locally
      </button>
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

function PeopleScreen({ store }) {
  return (
    <div className="profile-grid">
      {store.profiles.map((profile) => <ProfileCard key={profile.name} profile={profile} />)}
    </div>
  )
}

function MatchListScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="Matching Engine" title="Recommended matches" text="Matches are generated from local needs and profiles." />
      <MatchList matches={store.matches} />
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

function ReviewsScreen({ store }) {
  return (
    <section className="panel">
      <PanelHeader label="Reviews" title="Reviews zubaka reputation" text={`${store.reviews.length} reviews saved locally.`} />
      <div className="review-grid">
        {store.reviews.map((review) => (
          <article className="review-card" key={`${review.from}-${review.comment}`}>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={17} fill="currentColor" />
              ))}
            </div>
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

function TasksHomeScreen({ store }) {
  const [form, setForm] = useState({
    title: '',
    client: '',
    budget: '',
    status: 'Requested',
  })

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function saveTask() {
    if (!form.title.trim()) return
    store.setTasks([form, ...store.tasks])
    setForm({ title: '', client: '', budget: '', status: 'Requested' })
  }

  return (
    <section className="panel">
      <PanelHeader label="Task Workflow" title="Uko akazi gakurikiranwa" text={`${store.tasks.length} tasks saved locally.`} />

      <div className="form-grid local-form-highlight">
        <input placeholder="Task title" value={form.title} onChange={(event) => update('title', event.target.value)} />
        <input placeholder="Client" value={form.client} onChange={(event) => update('client', event.target.value)} />
        <input placeholder="Budget" value={form.budget} onChange={(event) => update('budget', event.target.value)} />
        <select value={form.status} onChange={(event) => update('status', event.target.value)}>
          <option>Requested</option>
          <option>Accepted</option>
          <option>In progress</option>
          <option>Completed</option>
          <option>Disputed</option>
        </select>
      </div>

      <button className="primary-button top-space" onClick={saveTask}>
        <Save size={18} />
        Save Task Locally
      </button>

      <div className="top-space">
        <TaskKanban tasks={store.tasks} />
      </div>
    </section>
  )
}

function TasksByStatusScreen({ status, store }) {
  const filtered = store.tasks.filter((task) => task.status === status)

  return (
    <section className="panel">
      <PanelHeader label="Tasks" title={`${status} tasks`} />
      <div className="card-list">
        {filtered.length === 0 ? (
          <EmptyScreen title="No tasks here" icon={CheckCircle2} />
        ) : (
          filtered.map((task) => <TaskCard key={`${task.title}-${task.client}`} task={task} />)
        )}
      </div>
    </section>
  )
}

function LearningHomeScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Learning-to-Earning" title="Amasomo aganisha ku mafaranga" />
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
      <PanelHeader label="Zero-Capital Engine" title="Tangira n’ibyo ufite" />
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
      <PanelHeader label="Recommended Path" title="Proof Video Helper" text="Ufite phone + uzi gufata video + ushobora kuganira n’abantu." />
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

function AdminDashboardScreen({ store }) {
  const adminStats = [
    { value: '128', label: 'Users' },
    { value: store.profiles.length, label: 'Profiles' },
    { value: store.proofs.length, label: 'Proof Videos' },
    { value: store.needs.length, label: 'Needs' },
    { value: store.offers.length, label: 'Offers' },
    { value: store.matches.length, label: 'Matches' },
    { value: store.tasks.length, label: 'Tasks' },
    { value: store.reviews.length, label: 'Reviews' },
  ]

  return (
    <section className="panel">
      <PanelHeader label="Admin Dashboard" title="Founder view with local data" />
      <div className="stats-grid">
        {adminStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
      </div>
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
      <div className="card-list">
        {items.map((item) => <ToggleCard key={item} title={item} text="You can turn this setting on or off." />)}
      </div>
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

function BackendOverviewScreen() {
  return (
    <section className="panel">
      <PanelHeader
        label="Backend Ready"
        title="UBWENGE Buzima iriteguye database na backend"
        text="Frontend ubu ikoresha localStorage. Nyuma localStorage izasimburwa na real backend nka Supabase, Firebase cyangwa custom API."
      />

      <div className="backend-map">
        <div className="backend-success">
          <strong>Local store ready</strong>
          <p>Needs, offers, proofs, tasks and reviews can be stored in the browser now.</p>
        </div>

        <div className="backend-warning">
          <strong>Next step</strong>
          <p>Replace localStorage with real database tables and API endpoints.</p>
        </div>
      </div>

      <div className="three-grid top-space">
        <LinkCard to="/backend/database" icon={Database} title="Database Schema" text="Tables and relationships." />
        <LinkCard to="/backend/api" icon={Link2} title="API Routes" text="Endpoints for backend." />
        <LinkCard to="/backend/flows" icon={RouteIcon} title="Data Flows" text="User, marketplace and task flows." />
      </div>
    </section>
  )
}

function BackendDatabaseScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Database Schema" title="Tables zizakenerwa muri backend" />
      <div className="database-grid">
        {databaseTables.map((table) => (
          <article className="database-table-card" key={table.name}>
            <h3>{table.name}</h3>
            <ul>
              {table.fields.map((field) => <li key={field}>{field}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function BackendApiScreen() {
  return (
    <section className="panel">
      <PanelHeader label="API Routes" title="Endpoints zizahuza frontend na backend" />
      <div className="api-grid">
        {apiRoutes.map((route) => (
          <article className="api-card" key={`${route.method}-${route.path}`}>
            <span className={`api-method ${route.method.toLowerCase()}`}>{route.method}</span>
            <h3>{route.path}</h3>
            <p>{route.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BackendFlowsScreen() {
  return (
    <section className="panel">
      <PanelHeader label="Data Flows" title="Uko data izagenda muri platform" />
      <div className="flow-grid">
        <FlowCard number="1" title="User Onboarding Flow" items={['User creates account', 'User adds identity, goal and assets', 'User uploads proof', 'System creates profile', 'AI recommends first action']} />
        <FlowCard number="2" title="Marketplace Flow" items={['Client posts need', 'Provider creates offer', 'Matching engine compares category, location, budget and proof', 'User sees match reasons', 'Conversation starts']} />
        <FlowCard number="3" title="Task Completion Flow" items={['Request is created', 'Provider accepts', 'Task moves to in progress', 'Client confirms completion', 'Review is requested']} />
        <FlowCard number="4" title="Trust Score Flow" items={['Profile completeness is calculated', 'Proof videos add score', 'Completed tasks add score', 'Reviews add reputation', 'Reports reduce trust']} />
      </div>
    </section>
  )
}

function BackendRoadmapScreen() {
  const roadmap = [
    { title: 'Local mock data store', text: 'Store users, profiles, needs, offers, tasks and messages in frontend state.', status: 'Phase 9' },
    { title: 'Authentication backend', text: 'Add real login, signup, phone verification, sessions and protected routes.', status: 'Phase 10' },
    { title: 'Database integration', text: 'Connect records to real database.', status: 'Phase 11' },
    { title: 'AI matching engine', text: 'Move matching score logic into backend/API layer.', status: 'Phase 12' },
    { title: 'Admin moderation', text: 'Add report review, proof approval and verification.', status: 'Phase 13' },
    { title: 'Payments and monetization', text: 'Add premium accounts, subscriptions and commission later.', status: 'Phase 14' },
  ]

  return (
    <section className="panel">
      <PanelHeader label="Backend Roadmap" title="Uko tuzava kuri frontend MVP tukajya kuri real platform" />
      <div className="backend-roadmap">
        {roadmap.map((item, index) => (
          <article className="backend-roadmap-step" key={item.title}>
            <span>{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <small>{item.status}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

function FlowCard({ number, title, items }) {
  return (
    <article className="flow-card">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <ul>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </article>
  )
}

function LocalStoreScreen({ store }) {
  const localStats = [
    { value: store.profiles.length, label: 'Profiles' },
    { value: store.proofs.length, label: 'Proofs' },
    { value: store.needs.length, label: 'Needs' },
    { value: store.offers.length, label: 'Offers' },
    { value: store.tasks.length, label: 'Tasks' },
    { value: store.reviews.length, label: 'Reviews' },
  ]

  return (
    <section className="panel">
      <PanelHeader
        label="Local Store"
        title="Browser localStorage data"
        text="Iyi screen ikwereka data ibitswe muri browser. Nushyiraho need, offer, proof cyangwa task, iraguma na nyuma yo gukora refresh."
      />

      <div className="stats-grid">
        {localStats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
      </div>

      <div className="local-store-actions">
        <NavLink to="/needs/post" className="primary-button">
          <Plus size={18} />
          Add Need
        </NavLink>

        <NavLink to="/offers/create" className="secondary-button">
          <Plus size={18} />
          Create Offer
        </NavLink>

        <NavLink to="/proof-videos/add" className="secondary-button">
          <Plus size={18} />
          Add Proof
        </NavLink>

        <button className="danger-button" onClick={store.resetDemoData}>
          <RefreshCcw size={18} />
          Reset Demo Data
        </button>
      </div>

      <div className="local-data-preview">
        <div>
          <h3>Latest Needs</h3>
          <NeedGrid needs={store.needs.slice(0, 3)} />
        </div>

        <div>
          <h3>Latest Offers</h3>
          <OfferGrid offers={store.offers.slice(0, 3)} />
        </div>
      </div>
    </section>
  )
}

function StatsRow({ store }) {
  return (
    <section className="stats-grid wide">
      <StatCard value={store.needs.length} label="Local Needs" />
      <StatCard value={store.offers.length} label="Local Offers" />
      <StatCard value={store.proofs.length} label="Local Proofs" />
      <StatCard value={store.tasks.length} label="Local Tasks" />
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
      <div className="pill-row">
        <span>Trust {profile.trust}</span>
        <span>{profile.proofs} proofs</span>
        <span>{profile.rating} stars</span>
      </div>
      <button className="secondary-button"><Eye size={17} /> View Profile</button>
    </article>
  )
}

function ProofGrid({ proofs }) {
  return (
    <div className="proof-grid">
      {proofs.map((proof) => (
        <article className="proof-card" key={`${proof.title}-${proof.source}`}>
          <div className="proof-thumb"><PlayCircle size={34} /></div>
          <h3>{proof.title}</h3>
          <p>{proof.source} • {proof.type} • {proof.service}</p>
          <div className="pill-row">
            <span>Score {proof.score}/100</span>
            <span>{proof.status}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function NeedGrid({ needs }) {
  return (
    <div className="card-list">
      {needs.map((need) => (
        <article className="data-card" key={`${need.title}-${need.location}`}>
          <div>
            <h3>{need.title}</h3>
            <p>{need.category} • {need.location}</p>
          </div>
          <div className="pill-row">
            <span>{need.budget || 'No budget'}</span>
            <span>{need.urgency}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function OfferGrid({ offers }) {
  return (
    <div className="card-list">
      {offers.map((offer) => (
        <article className="data-card" key={`${offer.title}-${offer.location}`}>
          <div>
            <h3>{offer.title}</h3>
            <p>{offer.category} • {offer.location}</p>
          </div>
          <div className="pill-row">
            <span>{offer.price || 'No price'}</span>
            <span>{offer.proof}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function MatchList({ matches }) {
  return (
    <div className="card-list">
      {matches.map((match) => <MatchCard key={match.title} match={match} />)}
    </div>
  )
}

function MatchCard({ match }) {
  return (
    <article className="match-card-phase4">
      <div>
        <h3>{match.title}</h3>
        <p>{match.type}</p>
        <small>{match.reason}</small>
      </div>
      <div className="match-score">
        <strong>{match.score}</strong>
        <span>/100</span>
      </div>
    </article>
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
        <button key={tab}><Filter size={15} /> {tab}</button>
      ))}
    </div>
  )
}

function Progress({ value }) {
  return <div className="progress-track"><div style={{ width: `${value}%` }} /></div>
}

function Checklist({ items }) {
  return (
    <div className="checklist">
      {items.map((item) => (
        <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>
      ))}
    </div>
  )
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
  return (
    <div className="score-row">
      <div>
        <strong>{label}</strong>
        <span>{value} points</span>
      </div>
      <Progress value={width} />
    </div>
  )
}

function TaskKanban({ tasks }) {
  const statuses = ['Requested', 'Accepted', 'In progress', 'Completed', 'Disputed']

  return (
    <div className="kanban">
      {statuses.map((status) => (
        <div className="kanban-column" key={status}>
          <h3>{status}</h3>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => <TaskCard key={`${task.title}-${task.client}`} task={task} />)}
        </div>
      ))}
    </div>
  )
}

function TaskCard({ task }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>
      <p>{task.client}</p>
      <div className="pill-row">
        <span>{task.status}</span>
        <span>{task.budget || 'No budget'}</span>
      </div>
    </article>
  )
}

function LearningPathGrid() {
  return (
    <div className="three-grid">
      {learningPaths.map((path) => (
        <article className="phase5-card" key={path.title}>
          <GraduationCap size={24} />
          <h3>{path.title}</h3>
          <p>{path.result}</p>
          <div className="pill-row">
            <span>{path.lessons} lessons</span>
            <span>{path.demand}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function StepCard({ number, title, text }) {
  return (
    <article className="step-card">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

function SimpleList({ title, items }) {
  return (
    <section className="panel">
      <PanelHeader label="List" title={title} />
      <div className="card-list">
        {items.map((item) => <SmallCard key={item} title={item} text="Mock data item for this screen." />)}
      </div>
    </section>
  )
}

function StatsScreen({ title }) {
  return (
    <section className="panel">
      <PanelHeader label="Analytics" title={title} />
      <div className="stats-grid">
        <StatCard value="124" label="Views" />
        <StatCard value="31" label="Clicks" />
        <StatCard value="9" label="Requests" />
        <StatCard value="3" label="Completed" />
      </div>
    </section>
  )
}

function EmptyScreen({ title, icon: Icon }) {
  return (
    <div className="empty-state">
      <Icon size={42} />
      <h3>{title}</h3>
      <p>Content will appear here when users start using the platform.</p>
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
