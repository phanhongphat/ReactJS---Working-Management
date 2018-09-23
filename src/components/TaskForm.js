import React, { Component } from 'react';


class TaskForm extends Component {

  CloseForm = () => {
  this.props.CloseForm();
}


  render() {
    return (
             <div className="panel panel-warning">
                    <div className="panel-heading">
                      <h3 className="panel-title">Add Works
                          <span  
                              className="fa fa-times-circle text-right"
                              onClick = {this.CloseForm}
                          ></span>  {/* button cancel*/}
                      </h3>
                    </div>

                    <div className="panel-body">
                        <form>
                          <div className="form-group">
                            <label>Name : </label>
                            <input type="text" 
                                   className="form-control" 
                                   name="name" 
                            />
                          </div>
                        
                          <label>Situation</label>
                            <select name="status" 
                                    className="form-control" 
                            >
                              <option value={true}>Active</option>
                              <option value={false}>Hide</option>
                            </select> <br/>

                            <div className = "text-center">
                              <button type="submit" className="btn btn-warning">
                                <span className ="fa fa-plus mr-5" > Save</span>
                              </button>&nbsp;
                              <button type="submit" className="btn btn-danger">
                                <span className ="fa fa-close mr-5" > Cancel</span>
                              </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
              
    );
  }
}

export default TaskForm;
