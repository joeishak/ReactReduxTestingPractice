import React, { Component } from 'react';
import {connect} from 'react-redux';
import  classNames  from 'classnames';
import styles from '../styles/style.css';

class CommentList extends Component {

    state = {isHovered: false};
    
    renderComments(){
        let arr =  this.props.comments.map(comment =>{
            return <li key={comment}> {comment} </li>
        });
        return arr;
    
    }
    hoveringOverUL = (event) =>{
        if(this.state.isHovered){
           this.setState({isHovered:false});
        }
        else{
           this.setState({isHovered:true});
        }
        console.warn('clicked',this.state.isHovered)

    }
    
    render() {
        var ulClass = classNames({
            'ulHover': this.state.isHovered
        });
        return(
            <div> 
                <h4>Comment List </h4>
                <ul className={ulClass} onClick={this.hoveringOverUL}>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state);
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);