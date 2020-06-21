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
          // onChange={this.onChange}
        ></input>
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  {/* <tbody><TableRow/></tbody> */}
  
</table>
            </div>
        )
    }
}

export default Table;
