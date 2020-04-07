import React from 'react';
import { connect } from 'react-redux';
import Banner from "./Banner"
import Item from "./Item"
function Store(props) {
    const { items, total } = props
    return (
        <React.Fragment>
            <Banner page={props.page} />
            <div className="page">
                <div className="container">
                    <h2>Shop from us</h2>
                    <div className="store-items">
                        <Item items={items} />
                        <div className="total">
                            <i className="fas fa-money-bill"></i> Total {total}Lei
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}
const mapStateToProps = (store) => {
    return {
        items: store.items,
        total: store.total
    }
}
export default connect(mapStateToProps)(Store);