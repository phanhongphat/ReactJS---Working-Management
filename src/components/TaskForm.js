import React, { Component } from 'react';


class TaskForm extends Component {

  constructor (props){
    super(props);
    this.state = {
      id :'',
      name : '',
      status : false
    }
  }

  onChange = (event) => {             //lấy biến trong form 
    var target = event.target;
    var name   = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;  // ép kiểu true false thành boolen khi add thêm data từ moniform
    }
    this.setState ({
      [name] : value
    });
  }

  onSubmit = (event) =>{      //truyền dữ liệu submit từ mini form qua form của app.js
    event.preventDefault();    // ko cho hiện trên thanh address
    this.props.onSubmit(this.state);
    // sau khi add data cho form, sẽ đóng miniform và xóa dữ liệu nhập trc đó
    this.onClear();  
    this.CloseForm();
  }

  CloseForm = () => {
  this.props.CloseForm();
  }

  onClear = () => {
    this.setState ({    // setState : thay đổi biến 
      name : '',
      status : false
    });
  }

  componentWillMount() {          //lifecylcle 1
    if (this.props.task){         //khác null
        this.setState({
            id : this.props.task.id,        //line 139 app.js task = {taskEditing}
            name : this.props.task.name,    // nên ở đây là task, đang props
            status : this.props.task.status
        });
        console.log(this.state); 
    }      
  }

  componentWillReceiveprops (nextProps){      //lifecycle 2 
     if (nextProps && nextProps.task){         //khác null
        this.setState({
            id : nextProps.task.id,        
            name : nextProps.task.name,    
            status : nextProps.task.status
        });        
    }  else 
          if (!nextProps.task){
            this.setState({
                id :'',
                name : '',
                status : false
                         });
    }    
  }

  render() {
    var { id } = this.state;  //xét id để xuất bảng thêm cv or sửa cv
    return (
             <div className="panel panel-warning">
                    <div className="panel-heading">
                      <h3 className="panel-title">
                          { id !== '' ? 'Updating Work' : 'Adding Work' }
                          <span  
                              className="fa fa-times-circle text-right"
                              onClick = {this.CloseForm}
                          ></span>  {/* button cancel*/}
                      </h3>
                    </div>

                    <div className="panel-body">
                        <form onSubmit = {this.onSubmit}>
                          <div className="form-group">
                            <label>Name : </label>
                            <input name="name"
                                   type="text" 
                                   className="form-control"  
                                   value ={this.state.name}
                                   onChange = {this.onChange}
                            />
                          </div>
                        
                          <label>Situation</label>
                            <select name="status" 
                                    className="form-control" 
                                     value ={this.state.status}
                                   onChange = {this.onChange}
                            >
                              <option value={true}>Active</option>
                              <option value={false}>Hide</option>
                            </select> <br/>

                            <div className = "text-center">
                              <button type="submit" className="btn btn-warning">
                                <span className ="fa fa-plus mr-5" > Save</span>
                              </button>&nbsp;
                              <button onClick = {this.onClear} type="submit" className="btn btn-danger">
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
