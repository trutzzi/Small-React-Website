import React, { useEffect } from 'react';
import Header from './Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Store from './Store'
import Contact from './Contact'
import Checkout from './Checkout'
import { convertCollectionsSnapshotToMap, createUserProfileDocument, auth } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { CurentUser, fetchData } from './redux/storeActions'
function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapShot => {
          props.onSetUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
    })
  }, [])
  useEffect(
    () => {
      props.onFetch(convertCollectionsSnapshotToMap)
    }, []
  )
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
  onFetch: (i) => dispatch(fetchData(i))
})
export default connect(mapPropsToState, mapDispatchToProps)(App);
