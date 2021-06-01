const fetch = require("node-fetch");

exports.getRepo = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/ramprog/commit-show/commits"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
