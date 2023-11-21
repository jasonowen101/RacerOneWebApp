import React, { useEffect, useState } from 'react';
import db from './db'; // Import the SQLite connection

const Dbdemo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the SQLite database
    db.all('SELECT * FROM your_table_name', (err, rows) => {
      if (err) {
        console.error('Error querying database:', err.message);
      } else {
        setData(rows);
      }
    });
  }, []);

  return (
    <div>
      <h1>React App with SQLite</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dbdemo;
