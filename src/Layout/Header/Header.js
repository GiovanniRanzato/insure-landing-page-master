import classes from './Header.module.css';
import React, { useState } from 'react';
import Container from '../../Hoc/Container/Container'

const Header = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuState = openMenu ? classes.open : classes.closed;

    const menu = props.menu.map((el, i) => <li key={el.path + i} className={el.btn ? classes.menuBtn : classes.menuItem} ><a href={props.path}>{el.label}</a></li>);
    return <div className={classes.header}>
        <Container className={classes.toolBar}>
        <img className={classes.logo} src={props.logo.path} alt={props.logo.alt} />
        <ul className={classes.menu + " " + classes.desktopOnly}>{menu}</ul>
        <img
            className={classes.menuButton + " " + classes.mobileOnly}
            onClick={() => setOpenMenu(!openMenu)}
            src={props.menuBtn.path} />
        </Container>
        <Container className={classes.menu + " " + menuState + " " + classes.mobileOnly}>
        <ul >{menu}</ul>
        </Container>
           
    </div>
    
  



}
export default Header;