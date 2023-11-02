import { Home as HomeIcon } from '@mui/icons-material';

type DrawerNavItem = {
  label: string;
  icon?: any;
  href: string;
  children?: DrawerNavItem[];
}

export const dashboardDrawerNav: DrawerNavItem[] = [
  {
    label: "Home",
    icon: HomeIcon,
    href: '/dashboard/report/statistic'
  }
]