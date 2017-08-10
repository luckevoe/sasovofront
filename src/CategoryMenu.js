import React from 'react'
import { Link } from 'react-router'
import Request from 'react-http-request';
import Loader from './Loader'

export default React.createClass({
    render() {
        return (
            <Request
                url='http://127.0.0.1:8000/api/category/'
                method='get'
                accept='application/json'
                verbose={true}
            >
                {
                    ({error, result, loading}) => {
                        if (loading) {
                            return <Loader/>;
                        } else {

                            result = result.body.filter(function (item, i, arr) {
                                if (item.parent === null) {
                                    return true;
                                }
                                let element = arr.find(function (child) {
                                    return child.alias === item.parent;
                                });
                                if (element) {
                                    if (undefined === element.children) {
                                        element.children = [];
                                    }
                                    if (element.children instanceof Array) {
                                        element.children.push(item);
                                    }

                                    return false;
                                }

                                return true;
                            });


                            if (result instanceof Array) {
                                result = result.map(function (item) {
                                    if (item.children && item.children instanceof Array) {
                                        item.children = item.children.map(function (item) {
                                            return <li key={"menu_" + item.alias}><Link
                                                    to={"/category/" + item.alias + "/goods/"}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        });
                                        item.children = <ul>{item.children}</ul>
                                    }
                                    return <li key={"menu_" + item.alias}>
                                        <Link
                                            to={"/category/" + item.alias + "/goods/"}
                                        >
                                            <div className={item.icon}></div>
                                            <span>{item.name}</span>
                                            <p>{item.type}</p>
                                        </Link>
                                        {item.children}
                                    </li>
                                });
                            }
                            return <ul>{result}</ul>;

                        }
                    }
                }
            </Request>
        );
    }
});