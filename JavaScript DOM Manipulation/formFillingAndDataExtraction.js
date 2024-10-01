/*
    Iam using this (link pasted below) webpage for practicing automated form handling with JavaAcript using DOM Manipulation Approach.
    https://rahulshettyacademy.com/AutomationPractice/
    Visit the above webpage and run this code in the console to start automatic form handling.
    The webpage alaso has 2 tables. This code extracts their data in JSON format. 
*/

// This function will automatically fill the form based on values from JSON provided by user
async function automateForm(inputs) {
  //Delay function will resolve a promise after specified ms to mimick human actions
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Clicking on radio button based on data from the JSON
  document.querySelector(`input[value="${inputs.radio}"]`).click();
  await delay(1500);

  //Setting Country based on value from the JSON
  document.querySelector("#autocomplete").value = inputs.country;
  await delay(1500);

  //Selecting Dropdown based on JSON values
  document.getElementById("dropdown-class-example").value = inputs.dropdown;
  await delay(1500);

  // For checkboxes, making sure that we uncheck any selected checkbox
  let checkedBoxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if (checkedBoxes.length !== 0) {
    for (let checkedBox of checkedBoxes) {
      checkedBox.checked = false; // Any checked checkboxes are now unchecked
    }
  }
  await delay(1500);

  // Selecting Checkboxes based on array values from JSON
  for (let option of inputs.checkboxArr) {
    document.querySelector(`#checkBox${option}`).checked = true;
  }
  await delay(1500);

  // Setting name based on value from JSON
  document.querySelector("#name").value = inputs.name;
  await delay(1500);

  //This code will set value for the Hide/Show example.
  document.querySelector("#displayed-text").value = inputs.hideShow; // This value will be Hidden/Shown Later
  await delay(1500);

  //Hiding Value
  document.querySelector("#hide-textbox").click();
  await delay(1500);

  //Showing The value again
  document.querySelector("#show-textbox").click();
}

// User inputs as a JSON object
const userInputs = {
  radio: "radio2",
  country: "Pakistan",
  dropdown: "option2",
  checkboxArr: ["Option1", "Option3"],
  name: "Ammar Hashmi",
  hideShow: "I am good at DOM Manipulation :)",
}; // Automation Code End

// Data Extraction Phase
// This function will extract table data (based on its number) in JSON Format
function extractTableData(tableNum) {
  // There are total 2 tables on the Webpage
  let table;
  if (tableNum === 1) {
    table = document.querySelector("fieldset > table");
  } else if (tableNum === 2) {
    table = document.querySelector("fieldset > div > table");
  } else {
    return {};
  }
  let tableRows = table.querySelectorAll("tr");
  let data = []; //  Will fill and return later

  // Iterate over each row (skip the header)
  for (let i = 1; i < tableRows.length; i++) {
    let cells = tableRows[i].querySelectorAll("td");
    let rowData;
    // Using conditionals because rows are different in both tables and rowData will be permuted based on table num
    if (tableNum === 1) {
      rowData = {
        Instructor: cells[0].innerText,
        Course: cells[1].innerText,
        Price: parseInt(cells[2].innerText),
      };
    } else if (tableNum === 2) {
      rowData = {
        Name: cells[0].innerText,
        Position: cells[1].innerText,
        City: cells[2].innerText,
        Amount: parseInt(cells[3].innerText),
      };
    }
    data.push(rowData); // Pushing JSON object into the Data array. This JSON stores data of individual row
  }

  return data;
} // Data Extraction Code End

//Function Calls
await automateForm(userInputs); // Other functions will wait for this function to end before they execute

let firstTableJsonData = extractTableData(1);
let secondTableJsonData = extractTableData(2);

// Displaying extracted data
console.log(JSON.stringify(firstTableJsonData, null, 2));
console.log(JSON.stringify(secondTableJsonData, null, 2));
