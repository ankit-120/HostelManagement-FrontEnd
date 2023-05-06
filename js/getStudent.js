let BASE_URL = 'http://localhost:8080/hms/';
let student = localStorage.getItem("data");
// localStorage.removeItem("data");
let obj = JSON.parse(student);


let c = Object.keys(obj[0]).length;
let r = obj.length;


const res = document.getElementById("res");
// creates a <table> element and a <tbody> element
const table = document.getElementById("table");
const tbl = document.createElement("table");
const tblHead = document.createElement("thead");
const tblBody = document.createElement("tbody");

//creating head of table
const headRow = document.createElement("tr");
const headings = Object.keys(obj[0]);
for (let i = 0; i < c; i++) {
  let cell = document.createElement("th");
  cell.setAttribute("scope", "col");
  const cellText = document.createTextNode(headings[i].toUpperCase());
  cell.appendChild(cellText);
  headRow.appendChild(cell);
}
tblBody.appendChild(headRow);

// creating all cells
for (let i = 0; i < r; i++) {
  // creates a table row
  const cellRow = document.createElement("tr");
  const content = Object.values(obj[i]);

  for (let j = 0; j < c; j++) {
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell = document.createElement("td");
    cell.classList.add()
    const cellText = document.createTextNode(content[j]);
    cell.appendChild(cellText);
    cellRow.appendChild(cell);
  }

  // add the row to the end of the table body
  tblBody.appendChild(cellRow);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into div
table.appendChild(tbl);
// table.innerHTML = tbl;
// sets the border attribute of tbl to '2'
tbl.setAttribute("border", "2");
tbl.setAttribute("id", "name-list");
tbl.classList.add("table", "opaque");


const nameList = document.getElementById('name-list');
const nameSearch = document.getElementById('searchBox');
const search = document.getElementById('search');


search.addEventListener('click', (e) => {
  e.preventDefault();
  const query = nameSearch.value.toLowerCase();
  const names = nameList.getElementsByTagName('tr');
  let flag=false;

  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toLowerCase();
    if (name.includes(query)) {
      console.log("inside if")
      names[0].style.display = '';
      names[i].style.display = '';
      // res.innerText="";
      flag = true;
    } else {
      console.log("inside else")

      names[i].style.display = 'none';
    }
  }
  if(!flag){
    res.innerText = "Student Doesn't Exists";
    res.classList.add("p-3");
  }
});



