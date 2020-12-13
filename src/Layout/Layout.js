import React from 'react';
import classes from './Layout.module.css'

import {HEADER, HERO, CONTENTS, FOOTER} from '../Config/Config'

// CUSTOM COMPONETS
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Contents from './Contents/Contents'
import Footer from './Footer/Footer'

const Layout = () => {
    return(
        <div className={classes.mainContainer}>
            <Header {...HEADER }/>
            <Hero {...HERO} />
            <Contents  {...CONTENTS} />
            <Footer  {...FOOTER} />
        </div>
    );
}
export default Layout;