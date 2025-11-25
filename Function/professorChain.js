function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

function Faculty(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function () {
  console.log(`Teaching ${this.subject}`);
};

function Professor(name, subject, title) {
  Faculty.call(this, name, subject);
  this.title = title;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function () {
  console.log(`${this.title} is doing research`);
};

const prof = new Professor("Dr. sara", "JavaScript", "Professor");
prof.sayHello();
prof.teach();
prof.research();
