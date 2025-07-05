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
      {
        text: 'ABUS Security Systems',
        url: '/services/security-systems',
      },
      {
        text: 'Mining & General Industry',
        url: '/services/mining-general-industry',
      },
      { text: 'Pumps', url: '/services/pumps' },
      {
        text: 'Laboratory Instruments',
        url: '/services/laboratory-instruments',
      },
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
