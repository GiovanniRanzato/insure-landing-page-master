import React from 'react';
import Container from '../../Hoc/Container/Container';
import classes from './Contents.module.css';

const Contents = (props) => {
    const features = props.features.map((feature, i) =>
        <div key={i} className={classes.feature}>
            <span><img src={feature.icon} alt={feature.title} /></span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
        </div>);
    return <Container className={classes.contents} >
        <h2 className={classes.title}> {props.title} </h2>
        <div className={classes.features} >
            {features}
        </div>
        <div className={classes.cta}>
            <h2 className={classes.cta_title}>{props.cta.title}</h2>
            <a href={props.cta.url}>{props.cta.label}</a>
        </div>
    </Container>

}
export default Contents;