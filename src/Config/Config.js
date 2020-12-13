import logo from '../images/logo.svg'
import menuBtn from '../images/icon-hamburger.svg'
import feature_icon_1 from '../images/icon-snappy-process.svg'
import feature_icon_2 from '../images/icon-affordable-prices.svg'
import feature_icon_3 from '../images/icon-people-first.svg'
import facebook_icon from '../images/icon-facebook.svg'
import pinterest_icon from '../images/icon-pinterest.svg'
import instagram_icon from '../images/icon-instagram.svg'
import twitter_icon from '../images/icon-twitter.svg'

export const HEADER = {
    logo: {
        path: logo,
        alt: 'logo'
    },
    menu: [{
            path: '#',
            label: 'how we work',
            btn: false
        }, {
            path: '#',
            label: 'blog',
            btn: false
        }, {
            path: '#',
            label: 'account',
            btn: false
        },
        {
            path: '#',
            label: 'view plans',
            btn: true
        }
    ],
    menuBtn: {
        path: menuBtn,
        label: 'open menu',
    }
}
export const HERO = {
    title: "Humanizing your insurance.",
    description: "Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
    cta: {
        label: "View plans",
        url: "#"
    }
}
export const CONTENTS = {
    title: "We’re different",
    features: [{
            icon: feature_icon_1,
            title: "Snappy Process",
            description: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
        },
        {
            icon: feature_icon_2,
            title: "Affordable Prices",
            description: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        },
        {
            icon: feature_icon_3,
            title: "People First",
            description: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.."
        },
    ],
    cta: {
        title: "Find out more about how we work",
        label: "how we work",
        url: "#"
    }
}
export const FOOTER = {
    logo: {
        path: logo,
        alt: 'logo'
    },
    social: [{
            path: '#',
            icon: facebook_icon,
            name: "facebook"
        },
        {
            path: '#',
            icon: twitter_icon,
            name: "twitter"
        },
        {
            path: '#',
            icon: pinterest_icon,
            name: "pinterest"
        },
        {
            path: '#',
            icon: instagram_icon,
            name: "instagram"
        }
    ],
    footer_menues: [{
            title: "our company",
            links: [{
                label: "how we work",
                url: "#"
            }, {
                label: "why insure?",
                url: "#"
            }, {
                label: "wiew plans",
                url: "#"
            }, {
                label: "reviews",
                url: "#"
            }],
        }, {
            title: "help me",
            links: [{
                label: "faq",
                url: "#"
            }, {
                label: "terms of use",
                url: "#"
            }, {
                label: "privacy policy",
                url: "#"
            }, {
                label: "coockies",
                url: "#"
            }],
        }, {
            title: "contacts",
            links: [{
                label: "sales",
                url: "#"
            }, {
                label: "support",
                url: "#"
            }, {
                label: "live chat",
                url: "#"
            }],
        }, {
            title: "others",
            links: [{
                label: "careers",
                url: "#"
            }, {
                label: "press",
                url: "#"
            }, {
                label: "licences",
                url: "#"
            }],
        },

    ]
}