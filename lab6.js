 

  function openForm(title) {
    document.getElementById("title").value = title; // Set the title based on the card clicked
    const modal = new bootstrap.Modal(document.getElementById('modalForm'));
    modal.show(); // Show the modal
  }

  function toggleEditorForm() {
    const section = document.getElementById('input-output-section');
    const normalSection = document.getElementById('normal-section');
    const starterCodeButton = document.getElementById('starter-code-button');
    const isVisible = section.style.display === 'block';

    // Toggle the visibility of both sections
    section.style.display = isVisible ? 'none' : 'block';
    normalSection.style.display = isVisible ? 'none' : 'block';

    // Show/hide the starter code button based on input-output section visibility
    starterCodeButton.style.display = isVisible ? 'none' : 'block';
  }

  // Populate input-output test cases dynamically if needed
  const inputOutputContainer = document.getElementById('input-output-container');

  const inputValues = [
    '12, 31, 25, 17, 40, 10, 29',
    '1,2,3,4,5,6,7,8,9,10',
    '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20',
    '0',
    '1',
    '0,2,4,6,8,10',
    '1,3,5',
    'input #',
    '8,8,8,8,8,8,8,8',
    '1,1,1,1,1,1,1,1,1,1,1,1,1'
  ];

  const expectedOutputs = [4, 5, 10, 0, 1, 0, 3, 0, 0, 13];

  inputValues.forEach((inputValue, index) => {
    const group = document.createElement('div');
    group.className = 'input-output-group mb-2';

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'form-control';
    inputField.placeholder = inputValue;

    const outputField = document.createElement('input');
    outputField.type = 'text';
    outputField.className = 'form-control';
    outputField.value = expectedOutputs[index];

    group.appendChild(inputField);
    group.appendChild(outputField);
    inputOutputContainer.appendChild(group);
  });
