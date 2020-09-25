import logo from '../images/logo.svg'
import menuBtn from '../images/icon-hamburger.svg'

export const HEADER = {
    logo: {
        path:logo,
        alt: 'logo'
    },
    menu: [{
        path: '#',
        label: 'how we work',
        btn: false
    },{
        path: '#',
        label: 'blog',
        btn: false
    },{
        path: '#',
        label: 'account',
        btn: false
    },
    {
        path: '#',
        label: 'view plans',
        btn: true
    }],
    menuBtn: {  
        path: menuBtn,
        label: 'open menu',
    }
}