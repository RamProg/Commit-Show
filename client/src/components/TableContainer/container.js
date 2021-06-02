import React, { useState, useEffect } from "react";
import Layout from "./layout.js";
import CommitTable from "./CommitTable/container";
import demo from "../assets/demo.json";

function TableContainer() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [availableData, setAvailableData] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch("/repo");
      const info = await res.json();
      assignData(info);
      setLoading(false)
    } catch (e) {
      console.log("There was an error", e);
      noData();
    }
  };

  useEffect(() => {
    // fetchData();
    assignData(demo);
  }, []);

  const noData = () => {
    setAvailableData(false);
  };

  const assignData = (info) => {
    setAvailableData(true);
    setData(info);
    setLoading(false);
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchData()
  };

  return (
    <Layout
      loading={loading}
      handleRefresh={handleRefresh}
      data={data}
      availableData={availableData}
    ></Layout>
  );
}

export default TableContainer;
