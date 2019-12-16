import React from 'react';
import '../Home/style.css';
import './style.css';


class Profle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:localStorage.getItem('username')
        }
    }

    componentDidMount() {
        document.getElementById('profileTab').classList.add('whiteText')
        if (document.getElementById('homeTab').classList.contains('whiteText')) {
            document.getElementById('homeTab').classList.remove('whiteText')
        }
    }

    saveUserName(){
        let input=document.getElementById('inputUserName');
        localStorage.setItem('username',input.value);
        this.setState({username:input});
        input.value='';
    }


    render() {
        return (
            <div className='d-flex flex-column container mr-0 tweetTextBox'>
                <h2>Profile</h2>
                <h6>User Name</h6>
                <input type='text' placeholder={localStorage.getItem('username')} id="inputUserName" />
                <div className="mt-2 saveButton" >
                    <button className="btn btn-primary" onClick={()=>this.saveUserName()}>Save</button>
                </div>
            </div>
        );
    }
}
export default Profle;