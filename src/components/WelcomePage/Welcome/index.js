import React from 'react';

const Welcome = (props) => {

    return (
        <div className="container flex-grow-1">
            <div className="d-flex flex-column align-items-center mt-3">
                <label>Enter Username</label>
                <input type='username'/>
                <label className="mt-1">Enter Password</label>
                <input type='password'/>
                <button className="btn btn-primary mt-3" onClick={() => console.log('logged in')}>Log In</button>
                {props.children}
            </div>
        </div>
    );
}

export default Welcome;