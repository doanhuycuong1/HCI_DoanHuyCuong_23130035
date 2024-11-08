document.getElementById('accountForm').addEventListener('input', validateForm);
document.getElementById('cancelButton').addEventListener('click', () => history.back());
document.getElementById('createdAt').innerText = new Date().toLocaleString();
document.getElementById('updatedAt').innerText = new Date().toLocaleString();

function togglePassword() {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

function previewImage(event) {
    const file = event.target.files[0];
    const imagePreview = document.getElementById('imagePreview');
    const urlInput = document.getElementById('imageUrl');
    const reader = new FileReader();
    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.classList.remove('hidden');
    }
    if (file) {
        reader.readAsDataURL(file);
        urlInput.value = ''; // Clear URL input if file is selected
    }
}

function validateForm() {
    let isValid = true;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    document.getElementById('usernameError').innerText = username.length > 0 ? '' : 'Username is required.';
    document.getElementById('emailError').innerText = /\S+@\S+\.\S+/.test(email) ? '' : 'Invalid email format.';
    document.getElementById('roleError').innerText = role.length > 0 ? '' : 'Please select a role.';

    isValid = [...document.querySelectorAll('.error')].every(el => el.innerText === '');
    document.getElementById('submitButton').disabled = !isValid;
}
