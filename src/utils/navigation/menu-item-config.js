import React from "react";

const PageNotFound = React.lazy(() => import("../../pages/PageNotFound"));
const AboutPage = React.lazy(() => import("../../pages/AboutPage"));
const ViewDocxPage = React.lazy(() => import("../../pages/support/ViewDocxPage"));

export const MENU_ITEMS = [
    {
        pathname: "/about",
        label: 'About',
        icon: 'info-circle',
        component: AboutPage,
    },
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
                component: PageNotFound,
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
                render: props => <ViewDocxPage {...props} title="Privacy Policy" docName="Privacy.docx" />,
            },
            {
                pathname: '/support/terms-and-conditions',
                label: 'Terms and Conditions',
                icon: 'file-signature',
                render: props => <ViewDocxPage {...props} title="Terms and Conditions" docName="Terms.docx" />,
            }
        ],
    },
];