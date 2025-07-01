export interface NavItem {
  text: string;
  url?: string;
  subItems?: NavItem[];
}

export const navItems: NavItem[] = [
  { text: 'Home', url: '/' },
  {
    text: 'Services',
    subItems: [
      { text: 'Who We Are', url: '/who-are-we' },
      { text: 'What We Do', url: '/what-we-do' },
    ],
  },
  {
    text: 'About Us',
    url: '/about',
  },
  // {
  //   text: 'Activities',
  //   url: '/activities',
  // },
  // {
  //   text: 'News',
  //   url: '/news',
  // },
  // {
  //   text: 'Gallery',
  //   url: '/gallery',
  // },
  // { text: 'Get in Touch', url: '/contact' },
];
