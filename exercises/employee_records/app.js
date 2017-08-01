var employees = [];
function Employee (name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
    }
};

var newEmployee = new Employee("Rick Sanchez", "Genius", "3 pinkleplorps/hour")
employees.push(newEmployee);

var newEmployee = new Employee("Morty Sanchez", "Idiot", "Nothing, ever")
employees.push(newEmployee);

var newEmployee = new Employee("Summer Sanchez", "Decision-maker", "1 pinkpleplorp/hour")
employees.push(newEmployee);

employees[2].status = "Part-time"

employees[0].printEmployeeForm();
employees[1].printEmployeeForm();
employees[2].printEmployeeForm();


