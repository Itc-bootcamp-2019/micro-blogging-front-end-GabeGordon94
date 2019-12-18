import React from 'react';
import '../../HomePage/Home/style.css';
import './style.css';
import {Link} from 'react-router-dom'


class Profle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameHolder:''
        }
    }

    componentDidMount() {
        this.setState({username:localStorage.getItem('username')})
    }

    saveUserName() {
        let input = this.state.usernameHolder;
        if (input) {    
            localStorage.setItem('username', input);
            this.setState({ username: input });
            input = '';
        }
    }


    render() {
        return (
            <div className='d-flex flex-column container mr-0 tweetTextBox '>
                <h2>Profile</h2>
                <h6>User Name: {this.state.username}</h6>
                <input type='text' placeholder='Change Username Here' id="inputUserName" 
                onChange={(event)=>{
                    this.setState({usernameHolder:event.target.value})
                }}/>
                <div className="mt-2 saveButton" >
                <Link to="/"><button className="btn btn-primary" onClick={() => this.saveUserName()}>Save
                </button></Link>
                </div>
            </div>
        );
    }
}
export default Profle;