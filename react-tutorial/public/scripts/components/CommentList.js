import React from 'react';
import Jquery from 'jquery';


export class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map( comment =>
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
    );
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
