import React from "react";
import Layout from "./layout.js";
import "./styles.css";

function CommitTable({data, availableData}) {
  // const [data, setData] = useState([]);
  // const [availableData, setAvailableData] = useState(false);

  // useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const res = await fetch("/repo");
    //     const info = await res.json();
    //     assignData(info);
    //   } catch (e) {
    //     console.log("There was an error", e);
    //     noData();
    //   }
    // }
    // fetchData();
  //   assignData(demo);
  // }, []);

  // const noData = () => {
  //   setAvailableData(false);
  // };

  // const assignData = (info) => {
  //   setAvailableData(true);
  //   setData(info);
  // };

  return <Layout data={data} availableData={availableData} />;
}

export default CommitTable;
