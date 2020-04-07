import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import nextId from "react-id-generator";
import { Reset, ResetAll } from './redux/storeActions';
function Header(props) {
    const [cart, setChart] = useState(false)
    const [mobileToggle, setMobileToggle] = useState(false)
    const { selected, onReset, onResetAll, total } = props
    const toggleCart = () => {
        setChart(!cart)
    }
    return (
        <div>
            <div className="disclaimer">This is a demo website, any prodcuts or delivery aren't processed!</div>
            <nav>
                <div className="container">
                    <ul className="menu-desktop">
                        <NavLink activeClassName='selected' exact to="/">
                            <li>Home</li>
                        </NavLink>
                        <NavLink activeClassName='selected' to="/store">
                            <li>Store</li>
                        </NavLink>
                        <NavLink activeClassName="selected" to="/checkout">
                            <li>Checkout</li>
                        </NavLink>
                        <NavLink activeClassName="selected" to="/contact">
                            <li>Contact</li>
                        </NavLink>
                    </ul>
                    <div className="mobile">
                        <span onClick={() => setMobileToggle(!mobileToggle)} className="menu-toggle">{mobileToggle ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}</span>
                        <ul className={mobileToggle ? "menu-mobile active" : "menu-mobile"} >
                            <NavLink activeClassName="selected" exact to="/">
                                <li>Home</li>
                            </NavLink>
                            <NavLink activeClassName="selected" to="/store">
                                <li>Store</li>
                            </NavLink>
                            <NavLink activeClassName="selected" to="/checkout">
                                <li>Checkout</li>
                            </NavLink>
                            <NavLink activeClassName="selected" to="/contact">
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className={cart ? 'shopping-cart active' : 'shopping-cart'} >
                        <div className="cart">
                            <span onClick={toggleCart} className="cart-toggle">
                                <span className="fa fa-shopping-cart"></span> Store ({selected.length})
                        </span>
                        </div>
                        <div className="list">
                            {selected.map(i => (
                                <div className="item" key={nextId()}>
                                    <div className="title">
                                        <span className="icon icon-clean" onClick={() => onReset(i.id)}><i className="fas fa-trash-alt"></i> </span>
                                        {i.title}
                                    </div>
                                    <div className="price">
                                        {i.count} x {i.price}Lei
                                    </div>
                                </div>
                            )
                            )}
                            {selected.length === 0 && <div className="center"><i className="far fa-smile"></i> No items in the cart</div>}
                            <span className="total">
                                <i className="fas fa-money-bill"></i>  Total: {total} Lei
                                </span>
                            {selected.length !== 0 &&
                                <span className="rest" onClick={() => onResetAll()}>
                                    <i className="fas fa-redo-alt"></i> Drop cart
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
}
const mapPropsToState = (state) => ({
    selected: state.items.filter(f => f.selected === true),
    total: state.total,
    userLoged: state.currentUser

})
const mapDispatchToProps = (dispach) => ({
    onReset: (i) => dispach(Reset(i)),
    onResetAll: () => dispach(ResetAll())
})
export default connect(mapPropsToState, mapDispatchToProps)(Header);