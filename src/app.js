import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Link, hashHistory} from 'react-router'
import Request from 'react-http-request';
import GoodItem from './GoodItem'
import GoodPage from './GoodPage'
import Page from './Page'
import Loader from './Loader'
import MapContainer from './GMaps'



const RequestGoods = React.createClass({
    render() {

        return (
            <Request
                url={'http://127.0.0.1:8000/api/category/' + this.props.alias + '/goods/'}
                method='get'
                accept='application/json'
                verbose={true}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <Loader/>;
                        } else {
                            let category = result.body.category;
                            if (result.body.goods instanceof Array) {
                                result = result.body.goods.map(function (item) {
                                    return <GoodItem key={"good_" + item.alias} item={item}/>;
                                });
                            }
                            return <div className="row blok1">
                                    <h1>{category}</h1>
                                    {result}
                                </div>;
                        }
                    }
                }
            </Request>
        );
    }
});

const RequestGood = React.createClass({
    render() {
        return (
            <Request
                url={"http://127.0.0.1:8000/api/goods/" + this.props.alias + "/"}
                method='get'
                accept='application/json'
                verbose={true}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <Loader/>;
                        } else {
                            return <GoodPage key={"good_page_" + result.body.alias} item={result.body}/>;
                        }
                    }
                }
            </Request>
        );
    }
});

const Goods = React.createClass({
    render() {
        return <RequestGoods alias={this.props.params.category}/>
    }
});

const Good = React.createClass({
    render() {
        return <RequestGood alias={this.props.params.alias}/>
    }
});

const Contacts = React.createClass({
    render() {
        return <div className="right_coll">
            <h1>Контакты</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <span className="glyphicon glyphicon-phone" aria-hidden="true">
                                </span>
                                <span className="text">+8 (910) 908-10-20</span></div>
                            <div className="col-md-4">
                                <span className="glyphicon"
                                      aria-hidden="true">Skype:</span> <span className="text">sasovo-memorial</span>
                            </div>
                            <div className="col-md-4">
                                <span className="glyphicon glyphicon-envelope" aria-hidden="true">
                                </span> <span className="text">sasovo-memorial@yandex.ru</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <MapContainer/>
                </div>
            </div>
        </div>
    }
});

const Gallery = React.createClass({
    render() {
        return <div>Галерея</div>
    }
});

const About = React.createClass({
    render() {
        return <div>О нас</div>
    }
});


render((
    <Router history={hashHistory}>
        <Route path="/" component={Page}>
            <Route path="about" component={About}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="gallery" component={Gallery}/>
            <Route path="category/:category/goods" component={Goods}/>
            <Route path="category/:category/goods">
                <Route path=":alias" component={Good}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'));