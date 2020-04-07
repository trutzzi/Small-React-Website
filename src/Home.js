import React from 'react';
import Banner from './Banner'
import { signInWithGoogle, signOutWithGoogle } from './firebase/firebase.utils'
function Home(props) {
    return (
        <React.Fragment>
            <Banner page={props.page} />
            <div className="page">
                <div className="container">
                    {!props.isUserLoged ?
                        <button onClick={signInWithGoogle}>Sign in with google</button>
                        :
                        <button onClick={signOutWithGoogle}>Sign Out</button>
                    }
                    <h3>Tehnologies</h3>
                    <p>Tehnologies that i used to build this website project</p>
                    <br />React JS
                        <br />React Roouter Dom
                        <br />React Redux
                        <br />HTML5
                        <br />CSS3
                    <h3>Disclaimers</h3>
            Font family: Google Fonts, <a href="https://fonts.google.com/specimen/Rubik?selection.family=Rubik:wght@400;500&sidebar.open">Rubik</a>
                    <br /> Images: <a href="https://www.pexels.com">Pixels</a>
                </div>
            </div>
        </React.Fragment>
    );
}
export default (Home);