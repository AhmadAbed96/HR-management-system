"use strict";
let employees = [];
let section = document.getElementById("cardsection")
console.log(section)
function EmployeeData(fullName,department,level,url){
    this.id = this.calculateId(),
    this.fullName = fullName,
    this.department = department ,
    this.level = level ,
    this.url = url,
    this.salary = this.calcSalary(),
    employees.push(this)
    
}

EmployeeData.prototype.calculateId = function(){
    return 1000 + employees.length;
}

/*function to calculate salary */
EmployeeData.prototype.calcSalary = function(){
    if (this.level === "Senior") {
         this.salary= Math.floor(Math.random() * (2000- 1500 +1 )) +1500;
         return Math.floor(this.salary-(this.salary * .075))

    }
    
    else if(this.level === "Mid-Senior"){
         this.salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
         return Math.floor(this.salary-(this.salary * .075))



    }
    else{
         this.salary= Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
         return Math.floor(this.salary-(this.salary * .075))

    }
  }

let emp1 = new EmployeeData("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg")
let emp2 = new EmployeeData("Lana Ali",'Finance',"Senior","./assets/Lana.jpg")
let emp3 = new EmployeeData("Tamara Ayoub",'Marketing',"Senior","./assets/Tamara.jpg")
let emp4 = new EmployeeData("Safi Walid",'Administration',"Mid-Senior","./assets/Safi.jpg")
let emp5 = new EmployeeData("Omar Zaid",'Development',"Senior","./assets/Omar.jpg")
let emp6 = new EmployeeData("Rana Saleh",'Development',"Junior","./assets/Rana.jpg")
let emp7 = new EmployeeData("Hadi Ahmad",'Finance',"Mid-Senior","./assets/Hadi.jpg")



function createCard(employee) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML =
        `
            <img src="${employee.url}" alt="${employee.fullName}">
            <p> ID: ${employee.id}</p>
            <p>Name: ${employee.fullName}</p>
            <p> Level: ${employee.level}</p>
            <p>Salary: $${employee.salary}</p>
        `;
    return card;
}

function addCard(employee) {
    let fieldset = document.getElementsByClassName(employee.department)[0];
    let card = createCard(employee);
    fieldset.appendChild(card)
}



function renderData() {
    let data = localStorage.getItem(localStorageKey);
    employees = JSON.parse(data);

    
    let departments = ["Administration", "Development", "Finance", "Marketing"];

    departments.forEach(department => {
        let departmentEmployees = employees.filter(employee => employee.department === department);
        let departmentSection = document.createElement("section");
        departmentSection.classList.add("emps");
       
        let departmentFieldset = document.createElement("fieldset");
        departmentFieldset.classList.add(department);
        
        let departmentLegend = document.createElement("legend");
        let departmentHeading = document.createElement("h2");
        departmentHeading.textContent = department;


        departmentSection.appendChild(departmentFieldset);
        departmentFieldset.appendChild(departmentLegend);
        departmentLegend.appendChild(departmentHeading);
        
        
        departmentEmployees.forEach(employee => {
            let card = createCard(employee);
            departmentFieldset.appendChild(card);
        });
        center.appendChild(departmentSection);
    });
}




let myForm = document.forms[0];

myForm.addEventListener("submit", function (eve) {
    eve.preventDefault();
    console.log(eve.target)
    let fullName = eve.target.fullName.value;
    let imageUrl = eve.target.imgurl.value;
    let department = eve.target.Department.value;
    let level = eve.target.Level.value;
    let newEmp = new EmployeeData(fullName, department, level,imageUrl);
    
    addEmployeesToLocalStorage()
    addCard(newEmp);
    // newEmp.renderData();
    // renderData()
});

function addEmployeesToLocalStorage(){
    localStorage.setItem(localStorageKey, JSON.stringify(employees));
}

function addHardCodedDataToLocalStorage() {
    let dataOnLocalStorage = localStorage.getItem(localStorageKey);
    if (dataOnLocalStorage == null) {
        addEmployeesToLocalStorage();
    }
}

addHardCodedDataToLocalStorage();
renderData()
