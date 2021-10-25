import { Icon } from '@iconify/react';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import mapFill from '@iconify/icons-eva/map-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'map',
    path: '/dashboard/app',
    icon: getIcon(mapFill)
  },
 
  {
    title: 'status',
    path: '/dashboard/products',
    icon: getIcon('grommet-icons:status-info')
  },
  {
    title: 'reservation',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
];

export default sidebarConfig;
