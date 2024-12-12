class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies++;
    if (this.tardies >= 3) return "YOU ARE EXPELLED!!!";
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  static EnrollStudents() {
    return "Enrolling!!!";
  }
}

const p1 = new Student("Shivam", "Gupta", 2012);

// console.log(p1.tardies);
// console.log(p1.markLate());
const a = Student.EnrollStudents();
console.log(a);
