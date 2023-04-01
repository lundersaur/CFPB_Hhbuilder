const ageInput = document.getElementById('age');
ageInput.type = 'number';
ageInput.min = 1;

const addButton = document.getElementsByClassName('add')[0]
addButton.type = 'button'; // Add type='button' to button to prevent submit and page refresh behavior
addButton.addEventListener("click", addFamilyMember)

function addFamilyMember() {
  const relation = document.getElementById('rel').value;
  const age = document.getElementById('age').value;
  const smoker = document.getElementById('smoker').checked ? "(smoker)" : "(non-smoker)";

  const householdMember = document.createElement('li')
  householdMember.textContent = `${relation} ${age} ${smoker}`

  document.getElementsByClassName('household')[0].appendChild(householdMember);
}