import React, { Component } from 'react';


class Sort extends Component {
  render() {
    return (
    
                       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <div className ="dropdown">
                              <button 
                                  type="button"
                                  className="btn btn-primary" 
                                  id ="dropdownmenu1"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                              >
                              Sorting <span className="fa fa-caret-square-o-down ml-5"></span>
                              </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownmenu1">
                                    <li>
                                      <a role="button" className="sort-selected">
                                        <span className="fa fa-sort-alpha-asc pr-5"> Name A - Z</span></a>
                                    </li>
                                    <li>
                                      <a  role="button">
                                        <span className="fa fa-sort-alpha-desc pr-5"> Name Z - A</span></a> 
                                    </li>
                                    <li role="seperation" className="devider"></li>  
                                    <li>
                                      <a role="button"> Active </a>
                                    </li>
                                    <li>
                                      <a role="button"> Hide </a>
                                    </li>
                                  </ul>
                          </div>
                      </div>
                     
    );
  }
}

export default Sort;
