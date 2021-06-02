const fetch = require("node-fetch");

const { stripData } = require("../services/stripData");

exports.getRepo = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/ramprog/commit-show/commits"
    );
    const data = await response.json();
    const stripedData = stripData(data);
    return stripedData;
  } catch (err) {
    console.log(
      "There was an error, you probably exceded the unauthenticated limit rate.",
      err
    );
  }
};
