// import {useRouter} from 'next/Router';
import React from 'react';
import Card from '../Ui/Card';
import classes from './allmeetupcontent.module.scss';


function Allmeetupcontent(props) {

    // const router = useRouter();

    function showDetails() {
        // router.push('/' + props.id);
    }
    return <li className={classes.li}>
        <Card>
        <figure className={classes.bannerbg}>
            <img src={props.image} alt=""></img>
        </figure>
        <h3 className={classes.headtag}>{props.title}</h3>
        <p>{props.description}</p>
        <button onClick={showDetails} className={classes.btn_next}>show details</button>
        </Card>
    </li>

}
export default Allmeetupcontent