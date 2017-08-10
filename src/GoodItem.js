import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        let imgLink = (this.props.item.images.length) ? "http://127.0.0.1:8000/" + this.props.item.images[0].image : "http://127.0.0.1:8000/media/not_good.jpg";
        let size = this.props.item.characteristic;
        if(size.length) {
            size = size.reduce(function (pre, item) {
                if(pre instanceof Object) {
                    pre = pre.value + ' ' + pre.characteristic;
                }
                return pre + ' ' + item.value + ' ' + item.characteristic;
            });
        } else {
            size = 'нет размеров';
        }

        return (
            <div className="col-xs-12 col-sm-4 col-md-4 elem1">
                <div className="table">
                    <div className="img">
                        <Link
                            to={"/category/"+this.props.item.parent+"/goods/"+this.props.item.alias}
                            title="О памятнике"

                        >
                            <div
                                style={
                                    {"backgroundImage" : "url('"+imgLink+"')"}
                                }
                                className="div-img"
                            >
                            </div>
                        </Link>
                    </div>
                    <div className="name">
                        <Link to={"/category/"+this.props.item.parent+"/goods/"+this.props.item.alias}>{this.props.item.name}</Link>
                    </div>
                    <div className="price">{this.props.item.price}</div>
                    <div className="gabar">
                        {size                        }
                    </div>
                    <div className="complekt">
                        ({this.props.item.description})
                    </div>
                </div>
            </div>
        );
    }
});