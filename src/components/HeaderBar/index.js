import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'
import firebase from 'firebase';
import { Dropdown } from 'react-bootstrap';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="headerBar" className="d-flex justify-content-between p-3">
                <div className="d-flex ml-2 justify-content-around">
                    <NavLink to="/" id="homeTab" activeClassName='selected' >Home</NavLink>
                    {/* <NavLink to="/profile" id="profileTab" activeClassName='selected'>Profile</NavLink> */}
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="none" id="dropdown-basic">
                        <img alt="proPic" src={firebase.auth().currentUser.photoURL} id="proPic" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item  onClick={() => { firebase.auth().signOut() }}>
                        Log Out</Dropdown.Item>
                        
                    </Dropdown.Menu>
                </Dropdown>
                {/*
                 <button className='btn btn-danger signOut'
                 onClick={() => { firebase.auth().signOut() }}>Sign Out</button> */}
            </div>
        );
    }
}

export default HeaderBar