import logo from '../images/logo.svg'
import menuBtn from '../images/icon-hamburger.svg'
import feature_icon_1 from '../images/icon-snappy-process.svg'
import feature_icon_2 from '../images/icon-affordable-prices.svg'
import feature_icon_3 from '../images/icon-people-first.svg'

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
    cta: "View plans"
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
        label: "ho we work",
        url: "#"
    }
}