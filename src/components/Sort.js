import React, { Component } from 'react';


class Sort extends Component {

  componentWillReceiveProps(nextProps) {

  }

  onClick = (sortBy, sortValue) =>{  
    this.props.onSort(sortBy, sortValue);
  }

  render() {
    return (
    
                       <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <div className ="dropdown">
                              <button 
                                  type="button"
                                  className="btn btn-primary" 
                                  id ="dropdownmenu1"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                              >
                              Sorting <span className="fa fa-caret-square-o-down ml-5"></span>
                              </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownmenu1">
                                    
                                    <li onClick = { () => this.onClick('name' , 1)}>
 {/*dấu stick V trong ô sort*/}       <a 
                                        role="button"
                                        className = {(this.props.sortBy === 'name' && this.props.sortValue === 1) 
                                        ? 'sort_selected' : ''}
                                      >                                         
                                        <span className="fa fa-sort-alpha-asc pr-5" > 
                                        Name A - Z 
                                        </span>
                                        </a>
                                    </li>

                                    <li onClick = { () => this.onClick('name' , -1)}>
                                      <a 
                                        role="button"
                                        className = {(this.props.sortBy === 'name' && this.props.sortValue === -1) 
                                        ? 'sort_selected' : ''}
                                      >  
                                        <span className="fa fa-sort-alpha-desc pr-5" > 
                                        Name Z - A
                                        </span>
                                      </a> 
                                    </li>

                                    <li role="separator" className="devider"></li>  
                                    <li onClick = { () => this.onClick('status' , 1)}>
                                      <a 
                                        role="button"
                                        className = {(this.props.sortBy === 'status' && this.props.sortValue === 1) 
                                        ? 'sort_selected' : ''}
                                      >  
                                       Active 
                                      </a>
                                    </li>

                                    <li onClick = { () => this.onClick('status' , -1)}>
                                      <a 
                                        role="button"
                                        className = {(this.props.sortBy === 'status' && this.props.sortValue === -1) 
                                        ? 'sort_selected' : ''}
                                      > 
                                      Hide
                                      </a>
                                    </li>
                                  </ul>
                          </div>
                      </div>
                     
    );
  }
}

export default Sort;
