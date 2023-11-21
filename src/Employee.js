import React, { useState, useEffect } from 'react';
import sqlite3 from 'sqlite3';

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Establish SQLite database connection
    const db = new sqlite3.Database('./employee_database.db', (err) => {
      if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
      }

      console.log('Connected to the SQLite database.');

      // Query to get all employees
      const query = 'SELECT * FROM employees';

      // Execute the query
      db.all(query, (err, rows) => {
        if (err) {
          console.error('Error executing query:', err.message);
          return;
        }

        // Update state with the retrieved employees
        setEmployees(rows);

        // Close the database connection
        db.close((err) => {
          if (err) {
            console.error('Error closing the database:', err.message);
          } else {
            console.log('Closed the SQLite database connection.');
          }
        });
      });
    });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zip}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
