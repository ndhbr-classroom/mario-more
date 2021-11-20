const { generatePyramid } = require('../index')

test("generate pyramid function", () => {
  expect(generatePyramid(1)).toBe(`#`)
  expect(generatePyramid(2)).toBe(` #
  ##`)
  expect(generatePyramid(8)).toBe(`       #
  ##
 ###
####
#####
######
#######
########`)
})