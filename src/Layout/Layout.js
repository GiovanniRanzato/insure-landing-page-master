import React from 'react';
import classes from './Layout.module.css'

import {HEADER} from '../Config/Config'

// CUSTOM COMPONETS
import Header from './Header/Header'

import Container from '../Hoc/Container/Container'

const Layout = () => {
    return(
        <div className={classes.mainContainer}>
            <Header {...HEADER }/>
            <Container className={classes.heroSection}>heroSection</Container>
            <Container className={classes.contets}>contents</Container>
            <Container className={classes.footer}>footer</Container>
        </div>
    );
}
export default Layout;