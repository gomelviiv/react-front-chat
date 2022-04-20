import Login from '../pages/Login';
// import IUserMenuItems from 'shared/interfaces/menu/MenuItems.interface';
import IRouteElement from 'shared/interfaces/routes/Route.interface';
import Chat from '../pages/Chat';

export const ROUTES = {
  LOGIN: '/',
  CHAT: '/chat',
  SETTINGS: '/settings',
};

export const INITIAL_ROUTE = ROUTES.CHAT;

export const PUBLIC_ROUTES: IRouteElement[] = [];

export const RESTRICTED_ROUTES: IRouteElement[] = [
  {
    path: ROUTES.LOGIN,
    element: Login,
    exact: true,
    restricted: true,
  },
];

export const PRIVATE_ROUTES: IRouteElement[] = [
  {
    path: ROUTES.CHAT,
    element: Chat,
    appTitle: 'Главная страница',
  },
];

// export const MENU_LABELS = {
//   DEFAULT: 'Первый пункт меню',
//   // to do
//   SETTINGS: 'Настройки',
//   LAST: 'Последний пунк меню',
// };

// export const MENU_ROUTES: IRouteElement[] = [
// {
//   path: ROUTES.SETTINGS,
//   element: Settings,
//   appTitle: MENU_LABELS.SETTINGS,
// },
// {
//   path: ROUTES.CHAT,
//   element: Chat,
//   appTitle: MENU_LABELS.LAST,
// },
// ];

// export const DASHBOARD_MENU_ITEMS: IUserMenuItems[] = [
// {
//   label: MENU_LABELS.CHAT,
//   icon: '<ShrinkOutlined /> ', //to do icon menu
//   to: ROUTES.CHAT,
//   items: [],
// },
// ];
