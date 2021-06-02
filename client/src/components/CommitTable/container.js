import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";

function CommitTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/repo");
      const info = await res.json();
      assignData(info);
    }
    fetchData();
  }, []);

  const assignData = (info) => {
    setData(info);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Commit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr>
            <td>{e.commit.message}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CommitTable;
