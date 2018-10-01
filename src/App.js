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
            DisplayForm : false, // biến dùng để show ra TaskForm có ẩn hay hiện
            taskEditing : null,
            filter : {
              name : '',
              status : -1
            },
            keyword : '',
            sortBy :'name',
            sortValue : 1
    }
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
        if(this.state.DisplayForm && this.state.taskEditing !== null) {
          this.setState({
              DisplayForm : true,  // xét status ngược lại,true thành false, false thành true để đóng & mở MiniForm
              taskEditing : null
          });
      } else {
          this.setState({
              DisplayForm : !this.state.DisplayForm,  // xét status ngược lại,true thành false, false thành true để đóng & mở MiniForm
              taskEditing : null 
                       });   
      }
      }

      CloseForm = () => {
        this.setState ({
          DisplayForm : false
        });   // biến dùng để truyền dữ liệu cho button x đóng miniform
      }

      onSubmit = (data) => {  // nhận dữ liệu từ taskform-con
        var {tasks} = this.state ;   // var task = this.state.task
        if(data.id === ''){               //TH thêm cv
             data.id = this.generateID();   //gọi generateID rùi push vào data, sau đó lưu trong localStorage
             tasks.push(data); //push date vào tasks để xuất ra form lớn ở app.js
        }
        else { // TH Update + edit cv
            var index = this.findIndex(data.id);   //tìm index để sửa rùi replace nó trong chuỗi
            tasks[index] = data;
        }
       
        this.setState({
          tasks : tasks ,
          taskEditing : null
        });
        localStorage.setItem('tasks' , JSON.stringify(tasks));      
      }

      onUpdateStatus = (id) => {
        var index = this.findIndex(id); // khai báo index = id để tìm id gán cho status khi thay đổi
        var { tasks } = this.state;
        if (index !== -1) {             // khác -1 là tìm thấy index của status
          tasks[index].status = !tasks[index].status; 
          this.setState({   
            tasks : tasks
          });
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      }

      findIndex = (id) =>{
        var { tasks } = this.state; // var tasks = this.state.tasks + lấy lấy danh sách các task trong tasks ra
        var result = -1;
        tasks.forEach((task , index) => { // mỗi lần truyền qua forEach sẽ nhận dc task và index
          if (task.id === id) {
            result = index;
          }
        });
          return result;
      }

      onDelete = (id) => {                    // giống hàm onUpdateStatus
         var index = this.findIndex(id); 
         var { tasks } = this.state;
         if (index !== -1) {             
              tasks.splice(index,1);      // splice(index,1) : xóa index và xóa 1
              this.setState({   
                tasks : tasks
              });
              localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            this.CloseForm();
      }

      ShowMiniForm = () =>{
        this.setState({
          DisplayForm : true
        });
      }

      onUpdate = (id) => {
         var index = this.findIndex(id);  //tìm index để lấy dc index lưu vào tasks
         var { tasks } = this.state;      // lấy state danh sách cac1s tasks
         var taskEditing = tasks[index];
         this.setState ({
            taskEditing : taskEditing
         });
        this.ShowMiniForm();
      }

      onFilter = (filterName , filterStatus) => {
        filterStatus = parseInt(filterStatus,10);
        this.setState ({
          filter : {
            name : filterName.toLowerCase(),
            status : filterStatus
          }
        });
      }

      onSearch = (keyword) => {
        this.setState({
          keyword : keyword
        });
      }

      onSort = (sortBy,sortValue) => {
        this.setState ({
            sortBy : sortBy,
            sortValue : sortValue
        });
      }

  render() {

    var { tasks , DisplayForm , taskEditing , filter , keyword , sortBy , sortValue } = this.state;   // var tasks = this.state.tasks;
    if(filter){                                                        // bảng filter nhỏ
        if(filter.name){                                               
          tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(filter.name) !== -1;    
            });
       }
    }
        tasks = tasks.filter((task) => {
          if(filter.status === -1){
            return task;
          } else {
            return task.status === (filter.status === 1 ? true : false)
          }
        });                                                           //. 

     if(keyword){                                                     // thanh tool search 
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword) !== -1;    
            });
     }

     if(sortBy === 'name'){
        tasks.sort((a,b) => {
              if(a.name > b.name)       return sortValue;
              else if(a.name < b.name)  return -sortValue; 
              else return 0;
          });
        } else {
        tasks.sort((a,b) => {
              if(a.status > b.status)       return sortValue;
              else if(a.status < b.status)  return -sortValue; 
              else return 0;
          });
     }

    var elementTaskForm = DisplayForm ? 
        <TaskForm  
              task = { taskEditing } 
              onSubmit = {this.onSubmit} 
              CloseForm = {this.CloseForm}
        /> 
        : '';       // close or open TaskForm

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
                        className ="btn btn-primary"
                        onClick   = {this.MiniForm}    //bắt sự kiện cho nút add working,click vào sẽ đóng miniform
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
                
                     <Control 
                             onSearch = { this.onSearch } 
                             onSort   = { this.onSort }
                             sortBy   = { sortBy }
                             sortValue= { sortValue}
                     />
                {/*List*/}
                     <TaskList 
                           tasks = {tasks} 
                           onUpdateStatus = { this.onUpdateStatus }
                           onDelete       = { this.onDelete }
                           onUpdate       = { this.onUpdate }
                           onFilter       = { this.onFilter }
                     /> 
              </div>
            </div>
        </div>
    );
  }
}

export default App;


