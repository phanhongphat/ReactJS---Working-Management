import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render() {
    return (
        <div className="row mt-15">
                      {/* Searching form*/}    
                      <Search onSearch = { this.props.onSearch }/>
                      {/* Sort form*/}
                      <Sort />
            
      </div>     

    );
  }
}

export default Control;
