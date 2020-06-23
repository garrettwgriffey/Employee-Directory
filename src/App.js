import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import API from './utils/API';

class App extends Component {
  state={
    employees:[]
  }

  componentDidMount() {
    API.search().then(response => {
      const res = response.data.results
      const employees = res.map(emp => {
        return {
          first: emp.name.first,
          last: emp.name.last,
          email: emp.email,
          phone: emp.phone,
          dob: (emp.dob.date)
        };
      });
      this.setState({
        employees
      });
      console.log(this.state.employees)
    });
  }

  render() {
    return (
      <>
      <Header />
      <Table />
      </>
      
    );
  }
}

export default App;

// store api info in App.js 
// us componentDidMount and store response in state, then pass to components that need it
// 1st give data to table and render it
// 2nd get sorted by one row
// 3rd search function working