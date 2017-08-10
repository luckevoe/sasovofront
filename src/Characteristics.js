import React from 'react'

export default React.createClass({
    render() {
        let characteristic = this.props.characteristic.filter(function (item) {
            return item.type === 1;
        });
        characteristic = characteristic.map(function (item) {
            return <div key={"characteristic"+item.value} className="tr">
                        <div className="one">{item.value}</div>
                        <div>
                            {item.characteristic}
                        </div>
                    </div>
        });


        let size = this.props.characteristic.filter(function (item) {
            return item.type === 2;
        });
        size = size.map(function (item) {
            return <div key={"size"+item.value} className="tr">
                        <div className="one">{item.value}</div>
                        <div>
                            {item.characteristic}
                        </div>
                    </div>
        });

        let d = this.props.characteristic.filter(function (item) {
            return item.type === 3;
        });
        d = d.map(function (item) {
            return  <div key={"d"+item.value} className="tr">
                        <li>
                            <a href="" target="_blank">
                                {item.value}
                            </a>
                            — <span>{item.characteristic}</span>
                        </li>
                    </div>
        });

        return (
            <div>
                { (characteristic.length) ?
                    <div>
                        <h3>Характеристики</h3>
                        <div className="table">
                            {characteristic}
                        </div>
                    </div> : ""
                }

                { (size.length) ?
                    <div>
                        <h3>РАЗМЕРЫ ЭЛЕМЕНТОВ</h3>
                        <div className="table">
                            {size}
                        </div>
                    </div> : ""
                }

                {(d.length) ?
                    <div>
                        <h3>Доставка и Установка</h3>
                        <ul>
                            {d}
                        </ul>
                    </div> : ''
                }
            </div>
        );
    }
});