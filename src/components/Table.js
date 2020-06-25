import React from 'react';
import TableRow from './TableRow';

const inputStyle = {
  marginLeft: "400px",
  marginBottom: "50px",
  marginTop: "50px",
  flex: "10",
  padding: "5px ",
  width: "300px",
};

function Table(props) {
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
      />
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">E-mail</th>
      <th scope="col">Phone Number</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map(emp => (
      <TableRow 
        first={emp.first}
        last={emp.last}
        email={emp.email}
        phone={emp.phone}
        dob={emp.dob}
        thumbnail={emp.thumbnail}
        key={emp.phone}
      />
    ))}
  </tbody>
  
</table>
            </div>
        )
    }

export default Table;


// where going to do axios call
// where were going to put promise from API 
// set state
// search and sort