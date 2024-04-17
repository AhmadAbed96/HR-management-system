"use strict";
function EmployeeData(id,fullName,department,level,url,salary){
    this.id = id,
    this.fullName = fullName,
    this.department = department ,
    this.level = level ,
    this.url = url,
    this.salary = this.calcSalary()
}

EmployeeData.prototype.calcSalary = function(level){
    if (level === "Senior") {
         this.salary= Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
         return this.salary

    }
    
    else if(level === "Mid-Senior"){
         this.salary= Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
         return this.salary

    }
    else{
         this.salary= Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
         return this.salary

    }
    
}

EmployeeData.prototype.render = function(){
    document.write(this.fullName,this.salary )
}

let emp1	 = new EmployeeData(1000,"Ghazi Samer",'Administration','Senior')
emp1.render()


let emp2	 = new EmployeeData(10001,"Lana Ali	",'Finance','Senior')
emp2.render()

let emp3	 = new EmployeeData(1002,"Tamara Ayoub	",'Marketing','Senior')
emp3.render()
let emp4	 = new EmployeeData(1003,"Safi Walid	",'Administration','Mid-Senior')
emp4.render()
let emp5	 = new EmployeeData(1004,"Omar Zaid",'Development','Senior')
emp5.render()
let emp6	 = new EmployeeData(1005,"Rana Saleh	",'Development','Junior')
emp6.render()
let emp7	 = new EmployeeData(1006,"Hadi Ahmad",'Finance','Mid-Senior')
emp7.render()
