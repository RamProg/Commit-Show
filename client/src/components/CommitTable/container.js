import React, { useEffect, useState } from "react";
import "./styles.css";

function CommitTable() {
  const [data, setData] = useState([]);

  useEffect(async () =>{
    const res = await fetch("/repo");
    const data = await res.json();
    console.log(data);
    setData(data);
  }, []);

  return <div>{data.map(e => <p>{e.commit.message}</p>)}</div>;
}

export default CommitTable;
