import React from 'react';
import { connect } from 'react-redux';
import { Buy, Delete, Reset } from './redux/storeActions'
import nextId from "react-id-generator";
import { addColectionAndDocuments } from './firebase/firebase.utils'
import Banner from "./Banner"
function Store(props) {
    const { items, onBuy, onDelete, onReset, total } = props
    const renderItems = () => {
        let item = []
        items.map(i => (
            item.push(<div className="item" key={nextId()}>
                <div className="title">{i.title} </div>
                <div>{i.description}</div>
                <div className="price">{i.count > 0 && i.count + 'x'} {i.price}Lei</div>
                <div className="control">
                    <span onClick={() => onBuy(i.id)}><i className="fas fa-shopping-cart"></i> Buy</span>
                    {i.count > 0 && <span onClick={() => onDelete(i.id)}> <i className="fas fa-trash-alt"></i> Delete</span>}
                    {i.count > 0 && <span onClick={() => onReset(i.id)}> <i className="fas fa-redo-alt"></i > Reset</span>}
                </div>
            </div>)
        ))
        return <div className="items">{item}</div>
    }
    return (
        <React.Fragment>
            <Banner page={props.page} />
            <div className="page">
                <div className="container">
                    <h2>Shop from us</h2>
                    <div className="store-items">
                        {renderItems()}
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
        items: store.items,
        total: store.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onBuy: (i) => dispatch(Buy(i)),
        onDelete: (i) => dispatch(Delete(i)),
        onReset: (i) => dispatch(Reset(i))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Store);