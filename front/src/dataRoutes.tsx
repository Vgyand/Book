import MainPage from './components/pages/MainPage';

export const dataRoutes = [
    {
        path: '/',
        exact: true,
        component: <MainPage />,
        auth: false,
    },
];
