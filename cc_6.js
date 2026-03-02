// Employee base class

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Manager subclass extending Employee

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `${this.name} manages the ${this.department} department with a team of ${this.teamSize}.`;
  }
}

// Company class to manage employees
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

// Create sample employees and managers
const emp1 = new Employee("Alice Johnson", "Marketing");
const emp2 = new Employee("Carlos Rivera", "Finance");
const mgr1 = new Manager("Dana Lee", "Engineering", 8);

// Instantiate company and add employees
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);

// List all employees
myCompany.listEmployees();