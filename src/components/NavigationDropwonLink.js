import NavigationLink from "./NavigationLink";
import {Link} from "react-router-dom";

const NavigationDropwonLink = (props) => {

    const link = props.link
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to={link.url}
                  id="dropdown02"
                  data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">{link.nom}</Link>

            <ul className="dropdown-menu" aria-labelledby="dropdown02">
                {link.subItems.map((sublink) =>
                    <>
                        {/*/} <li>
                            <a className="dropdown-item"
                               href={sublink.url}> {sublink.nom}</a>
                        </li> {/*/}

                        <NavigationLink classNameA={'dropdown-item'}
                                        url={sublink.url}
                                        nom={sublink.nom}>

                        </NavigationLink>
                    </>
                )}
            </ul>
        </li>
    )
}

export default NavigationDropwonLink