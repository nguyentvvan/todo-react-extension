import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TodoItem extends Component {
    render() {
      return (
        <div className="todo-item">
          <Button outline className="todo-item-isComplete" color="success" onClick={this.props.complete} active={this.props.isComplete}>
            <i className="material-icons">check</i>
          </Button>
          <div className={this.props.isComplete ? "todo-item-content isCompleted" : "todo-item-content"} active={this.props.isComplete}>{this.props.content}</div>
          <Button className="todo-item-delete" outline color="secondary" onClick={this.props.delete}>
            <i className="material-icons">delete</i>
          </Button>
        </div>
      );
    }
}

export default TodoItem;
