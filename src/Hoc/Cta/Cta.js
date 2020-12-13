import classes from './Cta.module.css';
import React from 'react';

const Cta = (props) => {
    return <a className={classes.cta + " " + props.classes}
        href={props.url}>{props.label}
    </a>
}
export default Cta;