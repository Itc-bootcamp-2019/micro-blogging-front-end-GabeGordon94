import React from 'react';
import './style.css'

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render(){
        return(
            <div>
                <input type='textbox' />
            </div>
        );
    }
}

export default TextBox;