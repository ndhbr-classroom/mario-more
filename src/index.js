const prompt = require('prompt-sync')({sigint: true});

function generatePyramid(height) {
  var result = '';

  // TODO: Implement pyramid function

  return result;
}

if (require.main === module) {
  const height = Number(prompt('Height: '));

  console.log(generatePyramid(height));
}

module.exports = {
  generatePyramid
}
