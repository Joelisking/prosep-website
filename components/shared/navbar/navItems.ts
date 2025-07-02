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
      { text: 'Mining & General Industry', url: '/mining' },
      { text: 'Pumps', url: '/pumps' },
      { text: 'ABUS Security Systems', url: '/security-systems' },
      { text: 'Laboratory Equipment', url: '/laboratory-equipment' },
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
