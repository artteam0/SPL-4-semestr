//1//
interface StudentType1 {
    id: number;
    name: string;
    group: number;
}

const studentsArray: StudentType1[] = [
    { id: 1, name: "Vasya", group: 10 },
    { id: 2, name: "Ivan", group: 11 },
    { id: 3, name: "Masha", group: 12 },
    { id: 4, name: "Petya", group: 10 },
    { id: 5, name: "Kira", group: 11 },
];

//2//
interface CarsType {
    manufacturer?: string;
    model?: string;
}

let car: CarsType = {};
car.manufacturer = "manufacturer";
car.model = 'model';

//3//
interface ArrayCarsType {
    cars: CarsType[];
}

const car1: CarsType = {};
car1.manufacturer = "manufacturer";
car1.model = 'model';

const car2: CarsType = {};
car2.manufacturer = "manufacturer";
car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];

//4//
type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DoneType = boolean;

type MarkType = {
    subject: string,
    mark: MarkFilterType, 
    done: DoneType,
}


type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, 
    marks: Array<MarkType>,
}


type GroupType = {
    students: StudentType[],// массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    mark: MarkFilterType,
    group: GroupFilterType,
}

let students: StudentType[] = [
    { id: 1, name: 'Alice', group: 10, marks: [{ subject: 'Math', mark: 8, done: true }] },
    { id: 2, name: 'Bob', group: 12, marks: [{ subject: 'Physics', mark: 7, done: false }] }
]

for (let student of students) {
    console.log(student);
}


const groupp: GroupType = {
    students,
    studentsFilter: (group: number) => groupp.students.filter(student => student.group === group),
    marksFilter: (mark: number) => groupp.students.filter(student => student.marks.some(m => m.mark === mark)),
    deleteStudent: (id: number) => {
        groupp.students = groupp.students.filter(student => student.id !== id);
    },
    mark: 1,
    group: 10
}

groupp.students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Group: ${student.group}`);
    student.marks.forEach(mark => {
        console.log(`  Subject: ${mark.subject}, Mark: ${mark.mark}, Done: ${mark.done}`);
    });
});
console.log(groupp.studentsFilter(12));
console.log(groupp.marksFilter(8));
console.log(groupp.deleteStudent(1));
console.log(groupp.students);