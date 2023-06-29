const form = document.getElementById("form");
const input = document.getElementById("input");
const container = document.getElementById("container");
let todos = [];

const handleDelete = (index) => {
  console.log("DELETE WORKING" + index);
  delete todos[index];
  loadData();
};

const handleEdit = (index) => {
    let value = prompt("EDIT YOUR TODO HERE");
    if (value === "") return;
    if (value !== null && value.trim() !== "") {
      todos[index] = value;
      loadData();
    }
  };
  
  

const loadData = () => {
  container.innerHTML = "";
  todos.forEach((el, index) => {
    let title = document.createElement("h3");
    let deletebtn = document.createElement("button");
    let editbtn = document.createElement("button");

    title.innerHTML = el;
    deletebtn.innerHTML = "DELETE";
    editbtn.innerHTML = "EDIT";
    deletebtn.addEventListener("click", () => handleDelete(index));
    editbtn.addEventListener("click", () => handleEdit(index));

    container.append(title, deletebtn, editbtn);
  });
  input.value = "";
};
loadData();

const handleSubmit = (e) => {
  e.preventDefault();
  let todo = input.value.trimEnd();
  if(todo==="")return;
  todos.push(todo);
  loadData();
};

form.addEventListener("submit", (e) => handleSubmit(e));

