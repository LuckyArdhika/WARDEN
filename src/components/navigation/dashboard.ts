import { HomeOutlined as HomeOutlinedIcon, PeopleAltOutlined as PeopleAltOutlinedIcon } from '@mui/icons-material';

export type DrawerNavItem = {
  label: string;
  icon?: any;
  href?: string;
  children?: DrawerNavItem[];
  level?: number;
}

export type DrawerNavItemWLevel = DrawerNavItem & {level: number};

export const dashboardDrawerNav: DrawerNavItem[] = [
  {
    label: "Home",
    icon: HomeOutlinedIcon,
    href: '/dashboard/report/statistic'
  }, {
    label: "Users",
    icon: PeopleAltOutlinedIcon,
    children: [
      {
        label: "Child 1",
        href: '/dashboard/users/statistic',
        children: [
          {
            label: "Child 1.1",
            href: '/dashboard/users/statistic',
            children: [
              {
                label: "Child 1.1.1",
                href: '/dashboard/users/statistic'
              }
            ]
          }
        ]
      },
      {
        label: "Child 2",
        href: '/dashboard/users/statistic',
        children: [
          {
            label: "Child 2.1",
            href: '/dashboard/users/statistic',
            children: [
              {
                label: "Child 2.1.1",
                href: '/dashboard/users/statistic'
              }
            ]
          }
        ]
      }
    ]
  }
]