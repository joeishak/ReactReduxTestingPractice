import { Button } from '@progress/kendo-react-buttons';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class KendoButton extends Component {
    render(){
        return(
            <Button primary={true} disabled={false}>Browse</Button>
        )
    }
}
export default (KendoButton);