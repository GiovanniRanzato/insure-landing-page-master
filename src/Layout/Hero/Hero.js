import React from 'react'
import classes from './Hero.module.css'
import Container from '../../Hoc/Container/Container';

const Hero = (props) => {
    return <div className={classes.hero}>
        <div className={classes.cover + " " + classes.mobileOnly}></div>
        <Container className={classes.container}>
            <div className={classes.cover + " " + classes.desktopOnly}></div>
            <div className={classes.content}>
                <h1 className={classes.title} >{props.title}</h1>
                <p className={classes.description} >{props.description}</p>
                <div className={classes.cta} >{props.cta}</div>
            </div>
        </Container>
    </div>
}
export default Hero;