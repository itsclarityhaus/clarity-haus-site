// ─────────────────────────────────────────────────────────────
// Central site settings. Change these once and they update everywhere.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Clarity Haus',
  url: 'https://itsclarityhaus.com',
  tagline: 'Financial clarity for creators.',
  positioning: 'We help creators understand, organize, and grow the business behind their content.',
  email: 'itsclarityhaus@gmail.com',

  // PLACEHOLDER: paste your Calendly (or other scheduler) link here.
  // When set, the booking page shows the scheduler embed instead of the placeholder box.
  schedulingUrl: '',

  socials: [
    { label: 'Instagram', href: 'https://instagram.com/theclarityhaus' },
    // PLACEHOLDERS: add real links or delete these lines
    { label: 'TikTok', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'For Creators', href: '/for-creators/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
];

export const faqs = [
  {
    q: 'Do I need QuickBooks?',
    a: "Not necessarily. We'll review your current financial setup and recommend the tools that make the most sense for your business.",
  },
  {
    q: 'Do I need a bookkeeper already?',
    a: 'No. We can work with an existing bookkeeper or handle the bookkeeping side as part of your ongoing financial partnership.',
  },
  {
    q: 'Can you work remotely?',
    a: 'Yes. Clarity Haus is designed to work with creator businesses virtually.',
  },
  {
    q: 'Can I start with just a cleanup?',
    a: 'Yes. A Financial Cleanup can be completed as a standalone project. If you want ongoing support afterward, you can transition into a monthly or quarterly partnership.',
  },
  {
    q: 'How often do we meet?',
    a: 'Depending on your service level, meetings may happen monthly or quarterly. Communication and reporting can also happen between scheduled meetings.',
  },
  {
    q: 'What if I also need tax help?',
    a: 'We can help you understand estimated taxes and plan for tax obligations. Full tax preparation services may be offered through Clarity Haus in the future.',
  },
  {
    q: 'Do you work with LLCs?',
    a: 'Yes. We work with creator businesses using a variety of business structures.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'The exact engagement terms will depend on the service selected. One-time cleanup projects are project-based, while ongoing partnerships may have their own engagement terms.',
  },
  {
    q: 'Do you work with international creators?',
    a: 'Clarity Haus currently focuses primarily on U.S.-based creator businesses.',
  },
];

export const processSteps = [
  { title: 'Discovery Call', text: 'We learn about your business and goals.' },
  { title: 'Financial Review', text: 'We assess your current financials and identify opportunities.' },
  { title: 'Recommendations', text: 'We create a clear plan tailored to your needs.' },
  { title: 'Clean Books or Ongoing Support', text: 'We get your finances organized and set up for long-term success.' },
  { title: 'Ongoing Partnership', text: 'You receive regular reports, guidance, and support so you always know your numbers.' },
];

export const creatorCategories = [
  { label: 'Lifestyle', icon: 'sun' },
  { label: 'Fashion', icon: 'hanger' },
  { label: 'Home', icon: 'home' },
  { label: 'Travel', icon: 'plane' },
  { label: 'Fitness', icon: 'dumbbell' },
  { label: 'Wellness', icon: 'leaf' },
  { label: 'Food', icon: 'utensils' },
  { label: 'Family', icon: 'users' },
  { label: 'Education', icon: 'book' },
  { label: 'YouTubers', icon: 'play' },
  { label: 'Podcasters', icon: 'mic' },
  { label: 'Digital Products', icon: 'download' },
  { label: 'Course Creators', icon: 'grad' },
];

// Add real testimonials here when you have them. The section switches
// from the "Launching" waitlist card to testimonial cards automatically.
export const testimonials: { quote: string; name: string; role: string }[] = [];
