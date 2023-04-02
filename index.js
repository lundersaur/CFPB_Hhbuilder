const ageInput = document.getElementById('age');
ageInput.type = 'number';
ageInput.min = 1;

const relationshipInput = document.getElementById('rel');

const addButton = document.getElementsByClassName('add')[0];
addButton.type = 'button'; // Add type='button' to button to prevent submit and page refresh behavior
addButton.disabled = true;
addButton.addEventListener("click", addFamilyMember);

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", generateHouseholdJson);

function addFamilyMember() {
  const relation = relationshipInput.value;
  const age = ageInput.value;
  const smoker = document.getElementById('smoker').checked ? "(smoker)" : "(non-smoker)";

  const householdMember = document.createElement('li');
  householdMember.textContent = `${relation} ${age} ${smoker}`;

  const removeFromListElement = document.createElement('button');
  removeFromListElement.textContent = " (remove)";
  removeFromListElement.classList.add('remove');
  removeFromListElement.addEventListener("click", function() {
    this.parentElement.remove();
  });

  document.getElementsByClassName('household')[0].appendChild(householdMember).append(removeFromListElement);
  formElement.reset();
  addButton.disabled = true;
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

function generateHouseholdJson(event) {
  event.preventDefault();

  let householdCollection = [];
  document.getElementsByTagName("li");

  const nodeList = document.querySelectorAll("li");
  nodeList.forEach(
    function(node) {
      const nodeTextArray = node.textContent.split(' ');
      householdCollection.push(
        {
          "relationship": nodeTextArray[0],
          "age": nodeTextArray[1],
          "smoker": nodeTextArray[2] === "(smoker)" ? true : false,
        }
      );
    }
  );
  document.querySelector('pre.debug').textContent = JSON.stringify(householdCollection);
}
