function getDOB() {


const dateInput = document.getElementById('birthday').value;
const  currentDateInput = document.getElementById('currentDate').value;

 if (!dateInput || !currentDateInput) {
    alert('Please enter both Date of Birth and current Date.');
    return;
}

const dob = new Date(dateInput);
const currentDate = new Date(currentDateInput);

let age = currentDate.getFullYear() - dob.getFullYear();
const monthDifference = currentDate.getMonth() - dob.getMonth();

if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
    age--;
}
document.getElementById('screen').textContent = `You are  ${age} years old.`;

}



