import React from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Contact from './Contact'
import Checkout from './Checkout'
import { connect } from 'react-redux'
import { CurentUser } from './redux/storeActions'
function App(props) {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home isUserLoged={props.userLoged} page="Home-page" />} />
          <Route path="/store" exact component={() => <Store page="Store" />} />
          <Route path="/checkout" exact component={() => <Checkout page="Checkout" />} />
          <Route path="/contact" exact component={() => <Contact page="Contact" />} />
        </Switch>
      </div>
    </Router>
  );
}
const mapPropsToState = (store) => ({
  userLoged: store.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  onSetUser: (user) => dispatch(CurentUser(user)),
})
export default connect(mapPropsToState, mapDispatchToProps)(App);
