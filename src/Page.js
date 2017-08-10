import React from 'react'
import CategoryMenu from './CategoryMenu'
import Menu from './Menu'
import {Link} from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <div id="body" className="container-fluid">
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 info-head">
                            <div className="container">
                                <div className="row dark-head">
                                    <div className="col-xs-12 col-sm-8 col-md-5 col-lg-5 logo">
                                       <div className="name">
                                           <h2>МЕМОРИАЛ</h2> РИТУАЛЬНОЕ АГЕНСТВО
                                       </div>
                                        <Link to="/">
                                            <div className="sprite-logo">
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 menu-head">
                            <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar">
                                            </span>
                                            <span className="icon-bar">
                                            </span>
                                            <span className="icon-bar">
                                            </span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <Menu pathname={this.props.location.pathname}/>
                                        <div className="hidden-sm navbar-text navbar-right bottom-head ">
                                            Cасово Мемориал - изготовление памятников от 8.000 руб. за комплект
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div id="save"><div className="catalog" id="">
                                    <CategoryMenu/>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-9">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-footer menu-footer">
                    <div className="container">

                    </div>
                </div>
                <div className="panel-footer info-footer">
                    <div className="container">
                        <div className="navbar-text navbar-right">
                            © {new Date().getFullYear()} Ритуальное агентство "Мемориал"
                        </div>
                    </div>
                </div>

                <div className="catalog-save" style={{display: "none"}}>
                    <CategoryMenu/>
                </div>
                <a className="menu-btn" href="#menu">
                    <span className="glyphicon glyphicon-new-window" aria-hidden={true}>
                    </span>
                </a>
            </div>
        );
    }
});