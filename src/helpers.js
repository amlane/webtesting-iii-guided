const uuid = require("uuid");
// Test Double

// new Date()

// make person (name) => { id, name }
module.exports = {
  savePerson
};

function savePerson(name) {
  return {
    id: uuid(),
    name
  };
}
