import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSmile } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  render() {
    const element = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className="container">
            
            <div className = "text-center">
              <h1>WORKING MANAGERMENT</h1>
            </div>  


            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                  {/* Form */}
                  <div className="panel panel-warning">
                    <div className="panel-heading">
                      <h3 className="panel-title">Add Works
                     <div>
                       {
                        element
                       }
                       <FontAwesomeIcon icon={faSmile} />
                     </div>
                          <span 
                                className = "fa fa-time-circle text-right" >  {/* button cancel*/}
                          </span>      
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
                              <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                  </div>
                
              </div>
            </div>

        </div>
    );
  }
}

export default App;
