var studentsArray = [
    { id: 1, name: "Vasya", group: 10 },
    { id: 2, name: "Ivan", group: 11 },
    { id: 3, name: "Masha", group: 12 },
    { id: 4, name: "Petya", group: 10 },
    { id: 5, name: "Kira", group: 11 },
];
var car = {};
car.manufacturer = "manufacturer";
car.model = 'model';
var car1 = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';
var car2 = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var students = [
    { id: 1, name: 'Alice', group: 10, marks: [{ subject: 'Math', mark: 8, done: true }] },
    { id: 2, name: 'Bob', group: 12, marks: [{ subject: 'Physics', mark: 7, done: false }] }
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log(student);
}
var groupp = {
    students: students,
    studentsFilter: function (group) { return groupp.students.filter(function (student) { return student.group === group; }); },
    marksFilter: function (mark) { return groupp.students.filter(function (student) { return student.marks.some(function (m) { return m.mark === mark; }); }); },
    deleteStudent: function (id) {
        groupp.students = groupp.students.filter(function (student) { return student.id !== id; });
    },
    mark: 1,
    group: 10
};
groupp.students.forEach(function (student) {
    console.log("ID: ".concat(student.id, ", Name: ").concat(student.name, ", Group: ").concat(student.group));
    student.marks.forEach(function (mark) {
        console.log("  Subject: ".concat(mark.subject, ", Mark: ").concat(mark.mark, ", Done: ").concat(mark.done));
    });
});
console.log(groupp.studentsFilter(12));
console.log(groupp.marksFilter(8));
console.log(groupp.deleteStudent(1));
console.log(groupp.students);
