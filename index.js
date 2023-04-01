const ageInput = document.getElementById('age');
ageInput.type = 'number';
ageInput.min = 1;

const relationshipInput = document.getElementById('rel');

const addButton = document.getElementsByClassName('add')[0]
addButton.type = 'button'; // Add type='button' to button to prevent submit and page refresh behavior
addButton.disabled = true;
addButton.addEventListener("click", addFamilyMember)

function addFamilyMember() {
  const relation = relationshipInput.value;
  const age = ageInput.value;
  const smoker = document.getElementById('smoker').checked ? "(smoker)" : "(non-smoker)";

  const householdMember = document.createElement('li')
  householdMember.textContent = `${relation} ${age} ${smoker}`

  document.getElementsByClassName('household')[0].appendChild(householdMember);
}

const formElement = document.getElementsByTagName('form')[0];
formElement.addEventListener("change", validateButtonState);

function validateButtonState() {
  if (!(ageInput.value > 0)) {
    addButton.disabled = true;
  }
  else if (!(relationshipInput.value)) {
    addButton.disabled = true;
  } else {
    addButton.disabled = false;
  }
}