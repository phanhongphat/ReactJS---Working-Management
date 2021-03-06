import React, { Component } from 'react';

class TaskItem extends Component {
 
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);  // nhận dạng status thông qua id trong tasks
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  }

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  }

  render() {
    var {task, index} = this.props;
    return (
       <tr>
              <td>{index + 1}</td>
              <td>{task.name}</td>
              <td className="text-center">
                  <span   
                        className= { task.status === true ? 'label label-danger' : 'label label-success' }
                        onClick = { this.onUpdateStatus }
                  >
                  {task.status === true ? 'Active' : 'Hide' }
                  </span> {/*toán tử 3 ngôi*/}
              </td>
              <td className="text-center">
                <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = {this.onUpdate }
                >
                  <span className="fa fa-pencil mr-5"></span>Fix
                </button>&nbsp;
                <button onClick = { this.onDelete } type="button" className="btn btn-danger">
                  <span className="fa fa-trash mr-5"></span>Delete
                </button>
              </td>
      </tr>
    );
  }
}

export default TaskItem;
