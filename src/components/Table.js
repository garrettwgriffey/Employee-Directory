import React, { Component } from 'react';
// import TableRow from './TableRow';

class Table extends Component {
    render() {
        return (
    <div className='container'>
      <input
          // style={inputStyle}
          type="text"
          name="search"
          // search={this.state.search}
          placeholder="Search ..."
          // value={this.state.search}
          // onChange={this.onChange} this is where search will work 1n 12, 14 & 15
        ></input>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  {/* <tbody><TableRow/></tbody> */}
  
</table>
            </div>
        )
    }
}

export default Table;


// where going to do axios call
// where were going to put promise from API 
// set state
// search and sort