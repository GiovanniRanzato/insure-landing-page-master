import React from 'react'
import classes from './Footer.module.css'
import Container from '../../Hoc/Container/Container';

const Footer = (props) => {
    const social_links = props.social.map((social, i) =>
        <a key={i + social.name} href={social.path}>{social.icon}</a>);

    const menues = props.footer_menues.map((menu, i) => {
        const links = menu.links.map((link, i) =>
            <li key={i + link.label}>
                <a href={link.path}>{link.label}</a>
            </li>)
        return <div key={i + menu.title} className={classes.menu}>
            <p>{menu.title}</p>
            <ul>
                {links}
            </ul>
        </div>
    });
    return <footer className={classes.footer}>
        <Container >
            <div className={classes.logo_social}>
                <div className={classes.logo}>
                    <img src={props.logo.path} alt={props.logo.alt} />
                </div>
                <div className={classes.social_links}>
                    {social_links}
                </div>
            </div>

            <div className={classes.menues}>
                {menues}
            </div>
        </Container>
        <a className={classes.test}></a>
    </footer>
}
export default Footer;