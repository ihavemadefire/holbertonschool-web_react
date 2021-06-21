interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: "James",
    lastName: "Almost",
    age: 43,
    location: "Los Angeles",
}

const student2: Student = {
    firstName: "Jack",
    lastName: "Donaghy",
    age: 50,
    location: "New York",
}

const studentsList = [ student1, student2];
const table = document.createElement('table');
document.body.appendChild(table);
const head = table.createTHead();
const row = head.insertRow();
const th1 = row.insertCell(0);
const th2 = row.insertCell(1);
th1.innerHTML = ("<b>First Name</b>");
th2.innerHTML = ("<b>Location</b>");
studentsList.map((student) => {
	const newRow = table.insertRow();
	const newRowFirstName = newRow.insertCell();
	const newRowLocation = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
