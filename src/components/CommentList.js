import React, { Component } from 'react';
import {connect} from 'react-redux';

class CommentList extends Component {
    renderComments(){
        let arr =  this.props.comments.map(comment =>{
            return <li key={comment}> {comment} </li>
        });
        return arr;
    
    }
    render() {
        return(
            <div> 
                <h4>Comment List </h4>
                <ul>
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