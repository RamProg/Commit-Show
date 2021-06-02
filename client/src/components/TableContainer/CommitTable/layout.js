import React from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";

function Layout({ data, availableData }) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nro</th>
          <th>Description</th>
          <th>Author</th>
          <th>Email</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      {availableData ? (
        <tbody>
          {data.map((e) => (
            <tr key={e.nro}>
              <td>{e.nro}</td>
              <td>{e.message}</td>
              <td>{e.author.name}</td>
              <td>{e.author.email}</td>
              <td>{new Date(e.author.date.toString()).toDateString()}</td>
              <td>{new Date(e.author.date.toString()).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr><td>Sorry, there is no available data right now.</td></tr>
        </tbody>
      )}
    </Table>
  );
}

export default Layout;
