import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
    render() {
        return (

            <ul className="nav navbar-nav">
                <li>
                    <Link activeClassName="active" to="/about">
                         О компании
                    </Link>
                </li>
                <li className="divider-vertical">
                </li>
                <li>
                    <Link className={(this.props.pathname === "/" || ~this.props.pathname.indexOf("category")) ? "active" : ""} to="/">
                         Наши услуги
                    </Link>
                </li>
                <li className="divider-vertical">
                </li>
                <li>
                    <Link activeClassName="active" to="/gallery">
                         Галлерея
                    </Link>
                </li>
                <li className="divider-vertical">
                </li>
                <li>
                    <Link activeClassName="active" to="/contacts">
                         Контакты
                    </Link>
                </li>
            </ul>
        );
    }
});