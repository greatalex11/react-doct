import {Link} from "react-router-dom";

const NavigationLink = (props) => {

    return (
        <li className={props.classNameLi}>
            <Link className={props.classNameA} to={props.url}> {props.nom}</Link>
        </li>
    )
}

export default NavigationLink