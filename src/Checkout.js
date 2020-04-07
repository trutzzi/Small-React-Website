import React from 'react';
import { connect } from 'react-redux';
import nextId from "react-id-generator";
import Banner from './Banner'
import Item from './Item'
function Checkout(props) {
    const { items, total } = props
    return (
        <React.Fragment>
            <Banner page={props.page} />
            <div className="page">
                <div className="container">
                    <h2>Your shopping cart</h2>
                    <div className="store-items">
                        <Item items={items} />
                        {items.length === 0 && <span>No items in shopping cart.</span>}
                        <div className="total">
                            <i className="fas fa-money-bill"></i> Total {total}Lei
            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
const mapStateToProps = (store) => {
    return {
        items: store.items.filter(i => i.selected === true),
        total: store.total
    }
}
export default connect(mapStateToProps)(Checkout);