const studentsData = [
  {
    name: "BCD",
    age: 21,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "ABC",
    age: 22,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "CDE",
    age: 20,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "DEF",
    age: 27,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "EFG",
    age: 22,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "FGH",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "GHI",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "HIJ",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "IJK",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "JKL",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "KLM",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "LMN",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "MNO",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "NOP",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  },
  {
    name: "OPQ",
    age: 25,
    class: "1st Year",
    avg_marks: "70%"
  }
];

let currentData = studentsData.slice();

const listContainer = document.getElementById("listContainer");

let page = 1;

const itemsToShow = 6;

renderList = data => {
  const startItem = itemsToShow * (page - 1);
  const endItem = page * itemsToShow;
  let dataToShow = data.slice(startItem, endItem);

  return dataToShow.map(
    (data, index) => `
  <li>
    <div class="listRow">
      <h4 style="flex:1">${data.name}</h4>
      <p style="flex:1">${data.age}</p>
      <p style="flex:1">${data.class}</p>
      <p style="flex:1">${data.avg_marks}</p>
    </div>
    <span onclick="deleteItem(${index})" class="_delete">Delete</span>
  </li>`
  );
};

sortByName = () => {
  currentData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  });

  list(currentData);
};

sortByAge = () => {
  currentData.sort((a, b) => a.age - b.age);

  list(currentData);
};

deleteItem = index => {
  currentData.splice(index, 1);

  list(currentData);
};

search = () => {
  const query = document.getElementById("myInput").value;

  const searchResults = studentsData.filter(data => data.name.includes(query));

  currentData = searchResults;

  list(currentData);
};

reset = () => {
  document.getElementById("myInput").value = "";

  currentData = studentsData.slice();

  list(currentData);
};

previous = () => {
  if (page > 1) {
    page--;
    list(currentData);
  }
};

next = () => {
  if (page < Math.ceil(currentData.length / 6))
    if (page < 3) {
      page++;
      list(currentData);
    }
};

list = data =>
  (listContainer.innerHTML = `
    <ul id="studentsList">
      <li>
        <div class="listRow">
          <h3 style="flex:1">Name</h3>
          <h3 style="flex:1">Age</h3>
          <h3 style="flex:1">Class</h3>
          <h3 style="flex:1">Average Marks</h3>
        </div>
      </li>
      ${renderList(data)}
    </ul>`);

list(studentsData);
