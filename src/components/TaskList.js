import React, { Component } from 'react';
import TaskItem from './TaskItem';



class TaskList extends Component {
  render() {
    
    var {tasks} = this.props ;     // var tasks = this.props.tasks
    var elementTasks = tasks.map((task, index) => {
        return <TaskItem                         
                        key = {task.id} 
                        index = {index} 
                        task = {task} 
                        onUpdateStatus = { this.props.onUpdateStatus }
                        onDelete = { this.props.onDelete }
                        onUpdate = { this.props.onUpdate } // function update data : fix and save date
               />
    });

    return (
      <table className="table table-bordered table-hover mt-15">
                      <thead>
                        <tr>
                          <th className="text-center">No.</th>
                          <th className="text-center">Name</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>
                            <input 
                                 type="text"
                                 name="filterName" 
                                 className="form-control"
                            />
                          </td>
                          <td>
                            <select 
                            name="filterStatus" 
                            className="form-control" 
                            >
                                <option value ={-1}>All</option>
                                <option value ={0}>Active</option>
                                <option value ={1}>Hide</option>
                            </select>
                          </td>
                          <td></td>
                        </tr>
                        {elementTasks}
                      </tbody>
                    </table>
    );
  }
}

export default TaskList;
