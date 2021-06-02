import React from "react";
import Layout from "./layout.js";
import "./styles.css";

function CommitTable({data, availableData}) {

  return <Layout data={data} availableData={availableData} />;
}

export default CommitTable;
