import React from 'react';
import '../Home/style.css'

class Profle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('profileTab').classList.add('whiteText')
        if (document.getElementById('homeTab').classList.contains('whiteText')) {
            document.getElementById('homeTab').classList.remove('whiteText')
        }
    }

    render() {
        return (
            <div className='d-flex flex-column align-items-center w-100 tweetTextBox'>
                Profile
            </div>
        );
    }
}
export default Profle;