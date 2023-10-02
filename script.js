// Initialize student data array
let students = [];

// Function to add a student and their fee record
function addStudent() {
    const studentName = document.getElementById("studentName").value;
    const studentID = document.getElementById("studentID").value;
    const feeAmount = parseFloat(document.getElementById("feeAmount").value);

    if (studentName && !isNaN(studentID) && !isNaN(feeAmount)) {
        const student = {
            name: studentName,
            id: studentID,
            fee: feeAmount.toFixed(2)
        };

        students.push(student);
        displayStudents();
        clearForm();
    } else {
        alert("Invalid input. Please fill in all fields correctly.");
    }
}

// Function to display students and their fee records
function displayStudents() {
    const studentList = document.getElementById("studentList");
    studentList.innerHTML = '';

    students.forEach(student => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${student.name}</strong> (ID: ${student.id}) - Fee: $${student.fee}`;
        studentList.appendChild(listItem);
    });
}

// Function to clear the form fields
function clearForm() {
    document.getElementById("studentName").value = '';
    document.getElementById("studentID").value = '';
    document.getElementById("feeAmount").value = '';
}

// Event listener for the "Add Student" button
document.getElementById("addStudent").addEventListener("click", addStudent);

// Initial display
displayStudents();
