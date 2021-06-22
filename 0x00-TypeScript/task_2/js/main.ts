interface  DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface  TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome(): string {return 'Working from home';}
    getCoffeeBreak(): string {return 'Getting a coffee break';}
    workDirectorTasks(): string { return 'Getting to director tasks';}
}

export class Teacher implements TeacherInterface {
    workFromHome(): string {return 'Cannot work from home';}
    getCoffeeBreak(): string {return 'Cannot have a break';}
    workTeacherTasks(): string { return 'Getting to work';}
}
interface createEmployeeFunction {
	(salary: number | string): Director | Teacher
}
let createEmployee: createEmployeeFunction;
createEmployee = function (salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) return new Teacher();
	return new Director();
}
function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}
function executeWork(employee: Director | Teacher): void {
	if (!isDirector(employee)) console.log(employee.workTeacherTasks());
	else console.log(employee.workDirectorTasks());
}
type Subjects = 'Math' | 'History';
function teachClass (todayClass: Subjects){
    if (todayClass === 'History') return 'Teaching History';
	return 'Teaching Math';
}
