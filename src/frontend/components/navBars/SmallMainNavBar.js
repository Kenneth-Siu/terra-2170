import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import keyboardsAndDiceSplash from "../../../../data/keyboardsAndDiceSplash.jpg";
import KndLogo from "../../../../data/kndLogo.svg";
import "./SmallMainNavBar.scss";

export default function SmallMainNavBar() {
    return (
        <nav className="small-main-nav-bar">
            <img className="background-image" src={keyboardsAndDiceSplash} />
            <ul>
                <li className="home">
                    <Link to="/">
                        <KndLogo /> Keyboards &amp; Dice
                    </Link>
                </li>
                <li className="terra">
                    <NavLink to="/terra" activeClassName="is-current-page">Terra 2170</NavLink>
                    <NavLink to="/terra" className="abbreviated" activeClassName="is-current-page" aria-hidden>
                        Terra
                    </NavLink>
                </li>
                <li className="darkham">
                    <NavLink to="/darkham" activeClassName="is-current-page">Darkham Horror</NavLink>
                    <NavLink to="/darkham" className="abbreviated" activeClassName="is-current-page" aria-hidden>
                        Darkham
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
