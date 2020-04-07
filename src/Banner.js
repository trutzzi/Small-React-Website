import React from 'react';

function Banner(props) {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <h2>{props.page}</h2>
                </div>
            </div>
        </div>
    );
}

export default Banner;