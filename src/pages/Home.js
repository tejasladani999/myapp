import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';


const Home = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3200/posts')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div  align="center" className='center-table'>
      <h1>Employee Data</h1>
      <table className='table table-hover' align='center' style={{width:"80%"}}>
        <thead>
          <tr>
            <th>Department</th>
            <th>Employee Name</th>
            <th>Gender</th>
            <th>Experience</th>
            <th>DeptType</th>
            <th colSpan={2}>Action   
              <Link to="/EmployeeForm"> 
              <button className='btn btn-outline-primary'>Add Employee</button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
            <tr className={employee.deptType === 'Government' ? 'text-success' : 'text-danger'} key={index}>
              <td>{employee.department}</td>
              <td>{employee.employeeName}</td>
              <td>{employee.gender}</td>
              <td>{employee.experience}</td>
              <td>{employee.deptType}</td>
              <td>
                {/* Add action buttons or links here */}
                <button className='btn btn-outline-warning' style={{marginRight:"50px"}}>Edit</button>
                <button className='btn btn-outline-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home