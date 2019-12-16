import React from 'react';

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
        return (<div>Profile</div>);
    }
}
export default Profle;