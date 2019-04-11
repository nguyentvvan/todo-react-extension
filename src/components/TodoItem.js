import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TodoItem extends Component {
    render() {
      return (
        <div className="todo-item">
          <div className="">{this.props.content}</div>
          <Button outline color="secondary" onClick={this.props.delete}>
            <i class="material-icons">delete</i>
          </Button>
        </div>
      );
    }
}

export default TodoItem;
