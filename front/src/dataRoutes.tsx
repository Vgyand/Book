import MainPage from './components/pages/MainPage';
import Authorization from './components/pages/Authorization/Authorization'

export const dataRoutes = [
    {
        path: '/',
        exact: true,
        component: <MainPage />,
        auth: false,
    },
    {
        path: '/authorization',
        exact: true,
        component: <Authorization />,
        auth: false,
    },
];
