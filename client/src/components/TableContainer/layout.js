import React from "react";
import "./styles.css";
import Spinner from "react-bootstrap/Spinner";
import CommitTable from "./CommitTable/container";

function Layout({ loading, handleRefresh, data, availableData}) {
  return (
    <div class="fill p-5 bg-dark text-white">
      <div class="top-container mb-3">
        <p class="ml-5 title">Commit-Show</p>
        <button type="button" class="btn btn-info mr-5 refresh" onClick={handleRefresh}>
          <p class="m-0 p-0 refresh-text">Refresh</p>
        </button>
      </div>
      {loading ? (
        <div class="spinner-container">
          <div>
            <Spinner animation="grow" size="lg" variant="info" />
            <p class="mt-2 loading">Loading...</p>
          </div>
        </div>
      ) : (
        <CommitTable data={data} availableData={availableData}/>
      )}
    </div>
  );
}

export default Layout;
