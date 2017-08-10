import React from 'react'
import Characteristics from './Characteristics'

export default React.createClass({
    render() {
        let imgLink = (this.props.item.images.length) ? "http://127.0.0.1:8000/" + this.props.item.images[0].image : "http://127.0.0.1:8000/media/not_good.jpg";

        return (
            <div className="right_coll">
                <h1>Спецпредложения № {this.props.item.name}</h1>
                <div className="row tovar">
                    <div className="col-md-6 left">
                        <div className="img">
                            <a href={imgLink} title="" className="image-popup-vertical-fit">
                                <img alt="" width="95%" src={imgLink}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 right">
                        <div className="price">
                            <div className="price">
                                {this.props.item.price}
                            </div>
                            <span>руб.</span>
                            <a className="popup-with3" href="#popup-zakaz">
                                <input type="button" value="Заказать"/>
                            </a>
                        </div>
                        <p>
                        </p>

                        <Characteristics characteristic = {this.props.item.characteristic}/>

                        <h3>Описание памятника</h3>
                        <p>
                            {this.props.item.full_description}
                        </p>
                    </div>
                </div>

            </div>
        );
    }
});