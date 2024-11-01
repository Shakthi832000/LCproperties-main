let selectedRow = null;

function onFormSubmit() {
  let formData = readFormData();
  if (selectedRow == null) {
    insertNewProperty(formData);
  } else {
    updateProperty(formData);
  }
  resetForm();
}

function readFormData() {
  // let arr =JSON.parse(localStorage.getItem('formData'))
  let formData = {};
  formData["propImg"] = document.getElementById("propImg").value;
  formData["propCode"] = document.getElementById("propCode").value;
  formData["propType"] = document.getElementById("propType").value;
  formData["propAddress"] = document.getElementById("propAddress").value;
  formData["propSize"] = document.getElementById("propSize").value;
  formData["propPrice"] = document.getElementById("propPrice").value;
  return formData;
}

function insertNewProperty(data) {
  //  
  let table = document
    .getElementById("propertyList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.propImg;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.propCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.propType;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.propAddress;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.propSize;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.propPrice;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<button onclick="onEdit(this)" class="btn-Custom"><i class="fas fa-pen"></i>Edit</button> 

                        <button onclick="onDelete(this)" class="btn-Custom"><i class="fas fa-trash-alt"></i>Delete</button>`;
}

function resetForm() {
  document.getElementById("propImg").value = "";
  document.getElementById("propCode").value = "";
  document.getElementById("propType").value = "";
  document.getElementById("propAddress").value = "";
  document.getElementById("propSize").value = "";
  document.getElementById("propPrice").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("propImg").value = selectedRow.cells[0].innerHTML;
  document.getElementById("propCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("propType").value = selectedRow.cells[2].innerHTML;
  document.getElementById("propAddress").value = selectedRow.cells[3].innerHTML;
  document.getElementById("propSize").value = selectedRow.cells[4].innerHTML;
  document.getElementById("propPrice").value = selectedRow.cells[5].innerHTML;
}

function updateProperty(formData) {
  selectedRow.cells[0].innerHTML = formData.propImg;
  selectedRow.cells[1].innerHTML = formData.propCode;
  selectedRow.cells[2].innerHTML = formData.propType;
  selectedRow.cells[3].innerHTML = formData.propAddress;
  selectedRow.cells[4].innerHTML = formData.propSize;
  selectedRow.cells[5].innerHTML = formData.propPrice;
}

function onDelete(td) {
  if (confirm("Are you sure you want to delete this property?")) {
    row = td.parentElement.parentElement;
    document.getElementById("propertyList").deleteRow(row.rowIndex);
    resetForm();
  }
}

// function getCrudData(){
// 	let arr=JSON.parse(localStorage.getItem('formData'));
// 	return arr;
// }

// function setCrudData(arr){
// 	localStorage.setItem('formData',JSON.stringify(arr));
// }
