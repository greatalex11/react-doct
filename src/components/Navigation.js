import './Navigation.css'
import NavigationDropwonLink from "./NavigationDropwonLink";
import NavigationLink from "./NavigationLink";
import React, {useState} from "react";

function Navigation() {
    const menu = [
        {url: '/', nom: 'Home'},
        {
            url: 'about',
            nom: 'About'
        },
        {url: '/blog', nom: 'Blogs'},
        {url: 'service', nom: 'Service'},
        {
            url: 'departement', nom: 'Departments', subItems: [
                {url: 'departement', nom: 'Departments'},
                {url: 'departement/single', nom: 'DepartementSingle'},
            ]
        },
        {url: '/contact', nom: 'Contact'},
    ]
    const [showToolBar, setShowToolBar] = useState(false)
    const checking = () => {
        setShowToolBar(!showToolBar)
    };

    return (
        <>
            <header>
                {showToolBar &&
                    <div className="header-top-bar">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                        <li className="list-inline-item"><a href="mailto:support@gmail.com"><i
                                            className="icofont-support-faq mr-2"></i>support@novena.com</a></li>
                                        <li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address
                                            Ta-134/A, New York, USA
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                        <a href="tel:+23-345-67890">
                                            <span>Call Now : </span>
                                            <span className="h4">823-4565-13456</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <nav className="navbar navbar-expand-lg navigation">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" className="img-fluid"/>
                        </a>

                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">

                                {menu.map((link) =>
                                    <>
                                        {!link.subItems &&
                                            <>
                                                {/*
                                                 <li className="nav-item">
                                                    <a className="nav-link" href={link.url}>{link.nom}</a>
                                                </li>

                                                */}


                                                <NavigationLink classNameLi={'nav-item'}
                                                                classNameA={'nav-link'}
                                                                url={link.url}
                                                                nom={link.nom}>

                                                </NavigationLink>
                                            </>
                                        }

                                        {link.subItems && link.subItems.length > 0 &&
                                            <NavigationDropwonLink link={link}>

                                            </NavigationDropwonLink>
                                        }
                                    </>
                                )}
                            </ul>
                        </div>
                        <label>
                            <input type="checkbox" checked={showToolBar} onChange={checking}/>
                        </label>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navigation