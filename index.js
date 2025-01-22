// Prompt the user for flavors that are comma seperated
const flavorPrompt = prompt(`Please enter your flavors seperated by a comma`);
// split the string on the commas
const flavorArray = flavorPrompt.split(',');

const flavorFunction = (array) => {
  // create an empty object
  const customerOrder = {};
  // loop though the array
  for (let i = 0; i < array.length; i++) {
    // if key is undefined
    if (!customerOrder[array[i]]) {
      customerOrder[array[i]] = 1; // key: 1
    } else {
      customerOrder[array[i]]++; // key: [value + 1]
    }
  }
  console.log(customerOrder);
}

flavorFunction(flavorArray);