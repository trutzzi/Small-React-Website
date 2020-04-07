import React from 'react';
import Banner from './Banner'
function Contact(props) {
    return (
        <React.Fragment>
            <Banner page={props.page} />
            <div className="page">
                <div className="container">
                    <h2>Write us</h2>
                    <p>Do you have an ideea about a project? <br />Contact me at trutzzi@yahoo.ro</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;