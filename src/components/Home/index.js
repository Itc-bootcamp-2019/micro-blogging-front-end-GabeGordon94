import React from 'react';
import TextBox from '../TextBox'

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.getElementById('homeTab').classList.add('whiteText')
        if(document.getElementById('profileTab').classList.contains('whiteText')){
            document.getElementById('profileTab').classList.remove('whiteText')
        }
    }
    
    render(){
        return (
        <div>
            <TextBox />
        </div>);
    }
}
export default Home;