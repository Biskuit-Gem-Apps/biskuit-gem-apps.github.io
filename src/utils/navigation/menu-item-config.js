import React from "react";

const PrivacyPage = React.lazy(() => import("../../pages/support/PrivacyPage"));

export const MENU_ITEMS = [
    {
        pathname: "/projects",
        noRoute: true,
        label: 'Projects',
        icon: 'rocket',
        items: [
            {
                pathname: '/projects/workout-interval-timer',
                label: 'WIT (Mobile)',
                icon: 'stopwatch',
                component: PrivacyPage,
            }
        ],
    },
    {
        pathname: '/support',
        noRoute: true,
        label: 'Support',
        icon: 'question-circle',
        items: [
            {
                pathname: '/support/privacy-policy',
                label: 'Privacy Policy',
                icon: 'shield-alt',
                component: PrivacyPage,
            },
            {
                pathname: '/support/terms-and-conditions',
                label: 'Terms and Conditions',
                icon: 'file-signature',
                component: PrivacyPage,
            }
        ],
    },
];