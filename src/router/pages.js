export const routes = [
    {
        path: '/',
        name: 'main',
        meta: {
            layout: 'main',
        },
        component: () => import('../pages/MainPage/MainPage')
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            layout: 'main',
        },
        component: () => import('../pages/SearchPage/SearchPage')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: {
            layout: 'main',
        },
        component: () => import('../pages/DetailPage/DetailPage')
    },
    {
        path: '/detail-preview/:id',
        name: 'detail-preview',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../pages/DetailPage/DetailPage')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../pages/ProfilePage/ProfilePage')
    },
    {
        path: '/profile-settings',
        name: 'profile-settings',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../pages/ProfileEditPage/ProfileEditPage')
    },
    {
        path: '/confirm',
        name: 'confirm',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../pages/ConfirmPage/ConfirmPage')
    },
    {
        path: '/page-create',
        name: 'page-create',
        meta: {
            layout: 'create',
            auth: true
        },
        component: () => import('../pages/CreatePage/CreatePage')
    },
    {
        path: '/page-report',
        name: 'page-report',
        meta: {
            layout: 'main',
            auth: true
        },
        component: () => import('../pages/ReportPage/ReportPage')
    },
]
