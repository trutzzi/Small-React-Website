import React from 'react'
import { connect } from 'react-redux'
import { Buy, Delete, Reset } from './redux/storeActions'
import nextId from "react-id-generator";

function Items(props) {
    const { onBuy, onDelete, onReset } = props
    let item = []
    props.items.map(i => (
        item.push(
            <div className="item" key={nextId()}>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + '/images/' + i.image} alt={i.title} />
                </div>
                <div className="title">{i.title} </div>
                <div className="description"><p>{i.description}</p></div>
                <div className="price">{i.count > 0 && i.count + 'x'} {i.price}Lei</div>
                <div className="control">
                    <span onClick={() => onBuy(i.id)}><i className="fas fa-shopping-cart"></i> Buy</span>
                    {i.count > 0 && <span onClick={() => onDelete(i.id)}> <i className="fas fa-trash-alt"></i> Delete</span>}
                    {i.count > 0 && <span onClick={() => onReset(i.id)}> <i className="fas fa-redo-alt"></i > Reset</span>}
                </div>
            </div>
        )
    ))
    return <div className="items">{item}</div>
}
const mapDispatchToProps = (dispatch) => {
    return {
        onBuy: (i) => dispatch(Buy(i)),
        onDelete: (i) => dispatch(Delete(i)),
        onReset: (i) => dispatch(Reset(i))
    }
}
export default connect(null, mapDispatchToProps)(Items)