import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="headerBar" className="d-flex">
                <NavLink to="/" id="homeTab" activeClassName='selected' exact={true}>Home</NavLink>
                <NavLink to="/profile" id="profileTab" activeClassName='selected'>Profile</NavLink>
            </div>
        );
    }
}

export default HeaderBar