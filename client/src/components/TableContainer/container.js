import React, { useState, useEffect, useCallback } from "react";
import Layout from "./layout.js";
// The demo is a harcoded json to switch in case the Github API is down
// import demo from "../assets/demo.json";

function TableContainer() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [availableData, setAvailableData] = useState(false);
  const [noNewData, setNoNewData] = useState(false);

  // This function grabs the data from the local API
  // Then it saves it in the state
  // If there is no new data, it will set the state
  // In case, there is an error it will tell the state that there is no data available
  const fetchData = useCallback(async (data, refresh = false) => {
    try {
      const res = await fetch("/repo");
      const info = await res.json();
      console.log(data && data.length);
      console.log(info.length);
      assignData(info);
      if (refresh && data && info && data.length === info.length)
        setNoNewData(true);
    } catch (e) {
      console.log("There was an error", e);
      noData();
    }
    setLoading(false);
  }, []);

  // This effect will grab the data when you access the app
  useEffect(
    (data) => {
      fetchData(data);
    //   assignData(demo);
    },
    [fetchData]
  );

  const noData = () => {
    setAvailableData(false);
  };

  const assignData = (info) => {
    setAvailableData(true);
    setData(info);
    setLoading(false);
  };

  const handleRefresh = () => {
    setNoNewData(false);
    setLoading(true);
    fetchData(data, true);
    // assignData(demo);
  };

  return (
    <Layout
      loading={loading}
      handleRefresh={handleRefresh}
      data={data}
      availableData={availableData}
      noNewData={noNewData}
    ></Layout>
  );
}

export default TableContainer;
