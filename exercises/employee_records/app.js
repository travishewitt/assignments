var employees = [];
function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full-time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
    }
};

var newEmployee = new Employee("Rick Sanchez", "Genius", "3 pinkleplorps/hour")
employees.push(newEmployee);

var newEmployee = new Employee("Morty Sanchez", "Idiot", "Nothing, ever", "Part-time")
employees.push(newEmployee);

var newEmployee = new Employee("Summer Sanchez", "Decision-maker", "1 pinkpleplorp/hour")
employees.push(newEmployee);


employees[0].printEmployeeForm();
employees[1].printEmployeeForm();
employees[2].printEmployeeForm();


