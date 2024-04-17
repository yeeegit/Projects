// document.getElementById("btn").addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.onload = () => {
//     if (this.status1 === 200) {
//       document.getElementById("aj").textContent = this.responseText;
//     }
//   };

//   xhr.onreadystatechange = () => {
//     if (this.status1 === 200 && this.readyState == 4) {
//       console.log(this.responseText);
//     }
//   };
//   xhr.open("GET", "example.txt",true);
//   xhr.send();
//   xhr.onerror = () => {
//     console.log("An error occurred while fetching the data.");
//   };
  
// });


document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){

  const xhr = new XMLHttpRequest();

  xhr.open("GET","employees.json",true);

  xhr.onload = function(){
    let list = document.getElementById("employees");

    if (this.status == 200) {
       const employees = JSON.parse(this.responseText);

             employees.forEach(function(employee){
              list.innerHTML +=  `
              <tr>
                <td>${employee.name}
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                `
             });
    };
  }
  xhr.send();
}