import React from "react";

const AboutPage = React.lazy(() => import("../../pages/AboutPage"));
const ViewDocxPage = React.lazy(() => import("../../pages/support/ViewDocxPage"));
const WITPage = React.lazy(() => import("../../pages/projects/WITPage"));

export const MENU_ITEMS = [
    {
        pathname: "/about",
        label: 'About',
        icon: 'info-circle',
        component: AboutPage,
    },
    {
        pathname: "/projects",
        noRoute: true, /* set this variable to true as this is a dropdown menu */
        label: 'Projects',
        icon: 'rocket',
        items: [
            {
                pathname: '/projects/workout-interval-timer',
                label: 'WIT (Mobile)',
                icon: 'stopwatch',
                component: WITPage,
            }
        ],
    },
    {
        pathname: '/support',
        noRoute: true, /* set this variable to true as this is a dropdown menu */
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