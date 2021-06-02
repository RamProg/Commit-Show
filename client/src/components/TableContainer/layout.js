import React from "react";
import "./styles.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import CommitTable from "./CommitTable/container";

function Layout({ loading, handleRefresh, data, availableData, noNewData }) {
  return (
    <div className="fill p-5 bg-dark text-white">
      <div className="top-container mb-3">
        <p className="ml-5 title">Commit-Show</p>
        {noNewData && <Alert variant="info">There are no new commits.</Alert>}
        <button
          type="button"
          className="btn btn-info mr-5 refresh"
          onClick={handleRefresh}
        >
          <p className="m-0 p-0 refresh-text">Refresh</p>
        </button>
      </div>
      {loading ? (
        <div className="spinner-container">
          <div>
            <Spinner animation="grow" size="lg" variant="info" />
            <p className="mt-2 loading">Loading...</p>
          </div>
        </div>
      ) : (
        <CommitTable data={data} availableData={availableData} />
      )}
    </div>
  );
}

export default Layout;
