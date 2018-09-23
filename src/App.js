import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  
  constructor (props){
    super(props);
    this.state = {
            tasks : [],    // id : unique, name, status
            DisplayForm : false // biến dùng để show ra TaskForm có ẩn hay hiện
    };
  }

  componentWillMount(){                                   // save tasks in localStorage and take the ID(not change)
    if (localStorage && localStorage.getItem('tasks')){       // != null
        var tasks = JSON.parse(localStorage.getItem('tasks'));  
        this.setState({
            tasks : tasks 
        });
    }
  }

  GenerateData = () => {        // create data  
      var tasks = [ 
          {   
            id : this.generateID(),
            name : 'Learning Code',            
            status : true
          },
          {   
            id : this.generateID(),
            name : 'Learning JavaScript',            
            status : false
          },
          {   
            id : this.generateID(),
            name : 'Studying HTML and CSS',            
            status : true
          }
      ];
    //  this.setState(){            if saving with setState, when reset page, it'll lose all tasks
    //      task : tasks            so using localStorage and it'll save in tasks
    //  };

      localStorage.setItem('tasks' , JSON.stringify(tasks));    //syntax localStorage.setItem('id',value),JSON.stringify will save tasks in string,can type in localStorage.setItem('tasks' , tasks) 
                                                                // look application
    }
      randomID(){
        return Math.floor((1+Math.random()) * 0x100000).toString(16).substring(1); // create a random ID
      }

      generateID(){
        return this.randomID() + this.randomID() + '_' + this.randomID() + '_' + this.randomID() + this.randomID() + '_' + this.randomID();
      }
  
      MiniForm = () => {
          this.setState({
              DisplayForm : !this.state.DisplayForm  // xét status ngược lại,true thành false, false thành true để đóng & mở MiniForm
          });
      }

      CloseForm = () => {
        this.setState ({
          DisplayForm : false
        });   // biến dùng để truyền dữ liệu cho button x đóng miniform
      }

  render() {

    var {tasks,DisplayForm} = this.state;   // var tasks = this.state.tasks;
    var elementTaskForm = DisplayForm ? <TaskForm CloseForm = {this.CloseForm}/> : '';       // close or open TaskForm

    return (
        <div className="container"> 
            <div className = "text-center">
              <h1>WORKING MANAGERMENT</h1>
            </div>  
            <hr/>

            <div className="row">
              <div className= { DisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': '' }>  {/*form mini add activities,*/}
                {/* Form Input*/}                             {/*if biến DisplayForm is true :xuất form 4 cột,false thì đóng*/}
                  {elementTaskForm}
              </div>

             {/*form show activities,if biến DisplayForm is true :xuất form 8 cột,false thì mini form đóng nên sẽ full màn hình là 12 cột*/}
              <div className= { DisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                  <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick ={this.MiniForm}    //bắt sự kiện cho nút add working,click vào sẽ đóng miniform
                  >
                    <span className ="fa fa-plus mr-5">  Add Working</span>
                  </button>
                  <button 
                      type="button" 
                      className="btn btn-warning ml-5"
                      onClick = {this.GenerateData}
                  >
                    Generate Working
                  </button>
                {/* Searching and Sort form*/}
                
                     <Control />
                {/*List*/}
                     <TaskList tasks = {tasks} /> 
              </div>
            </div>
        </div>
    );
  }
}

export default App;


