const fetch = require("node-fetch");

exports.getRepo = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/ramprog/commit-show/commits"
    );
    const data = await response.json();
    const stripedData = stripData(data);
    return stripedData;
  } catch (err) {
    console.log("There was an error, you probable exceded the unauthenticated limit rate.", err);
  }
};

const stripData = (data) => {
  let result = [];
  for (let i in data) {
    let temp = data[i].commit;
    console.log(temp);
    delete temp.tree;
    delete temp.url;
    delete temp.verification;
    delete temp.comment_count;
    delete temp.committer;
    result[i] = temp;
    result[i].nro = parseInt(i)+1;
  }
  return result;
};
