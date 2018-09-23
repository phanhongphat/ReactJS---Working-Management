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

  onGenerateData = () =>{        // create data  
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
  

  render() {

    var {tasks} = this.state;   // var tasks = this.state.tasks;

    return (
        <div className="container"> 
            <div className = "text-center">
              <h1>WORKING MANAGERMENT</h1>
            </div>  
            <hr/>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                {/* Form Input*/}
                  <TaskForm
                   />
              </div>

              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <button type="button" className="btn btn-primary">
                    <span className ="fa fa-plus mr-5">  Add Working</span>
                  </button>
                  <button 
                      type="button" 
                      className="btn btn-warning ml-5"
                      onClick = {this.onGenerateData}
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


