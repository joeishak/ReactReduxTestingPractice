import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
// 'Minimal' theme - hide/show the AccordionBody component:
import 'react-accessible-accordion/dist/minimal-example.css';
 
// 'Fancy' theme - boilerplate styles for all components, as seen on our demo:
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

class CustomAccordion extends Component {

    state = {
        summaryIsOpen: true,
        detailIsOpen: false
    }
    
     changeAccordion = (event) => {
         event.preventDefault()
        let sumOpen = this.state.summaryIsOpen;
        let detOpen = this.state.detailIsOpen;
        if(event == 0 ){
            // sumOpen = this.state.summaryIsOpen ? false : true;
            sumOpen = this.state.summaryIsOpen ? false: true;
            this.setState({summaryIsOpen: sumOpen})
            console.log("Summary was clicked");
        } else if( event == 1 ) {
             detOpen =  this.state.detailIsOpen ? false : true;
             this.setState({detailIsOpen: detOpen})
            console.log("Details was clicked");

        }

        this.setState({summaryIsOpen: sumOpen, detailIsOpen: detOpen})
        console.log(this.state);

    }
    render() {
       
        return(
            <Accordion accordion="false" onClick={this.changeAccordion}>
                <AccordionItem expanded = {this.state.summaryIsOpen}>
                    <AccordionItemTitle >
                        <h3>Summary</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Summary BI</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem expanded = {this.state.detailIsOpen}>
                    <AccordionItemTitle>
                        <h3>Details</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div>Detail BI</div>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>
        );
    }
}

export default (CustomAccordion);