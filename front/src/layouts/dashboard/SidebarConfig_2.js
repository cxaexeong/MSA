import { Icon } from '@iconify/react';
import peopleFill from '@iconify/icons-eva/people-fill';
import mapFill from '@iconify/icons-eva/map-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
// import info from '@iconify/grommet-icons:status-info';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;


const sidebarConfig = [
  {
    title: 'map',
    path: '/dashboard/app',
    icon: getIcon(mapFill)
  },
  {
    title: 'myPage',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
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

];


export default sidebarConfig;

