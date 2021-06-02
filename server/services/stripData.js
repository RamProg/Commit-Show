// This function deletes any data from the json that the frontend doesn't need
// This way the package is lighter
// It will also prevent the frontend from having access to pivate data

exports.stripData = (data) => {
  let result = [];
  const DATA_SIZE = data.length;
  for (let i in data) {
    let temp = data[i].commit;
    delete temp.tree;
    delete temp.url;
    delete temp.verification;
    delete temp.comment_count;
    delete temp.committer;
    result[i] = temp;
    result[i].nro = DATA_SIZE - i;
  }
  return result;
};
