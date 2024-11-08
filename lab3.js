document.getElementById('subject-select').addEventListener('change', function () {
    // Hide all materials
    const materials = document.querySelectorAll('.materials');
    materials.forEach(material => {
        material.classList.remove('active');
    });

    // Show selected material
    const selectedSubject = this.value;
    if (selectedSubject) {
        document.getElementById(selectedSubject).classList.add('active');
    }
});

function viewFile(fileName) {
    window.open(fileName);
}

function uploadFile(subject) {
    const fileInput = document.getElementById(`upload-${subject}`);
    const file = fileInput.files[0];

    if (file) {
        // Simulating a file upload action
        alert(`Tải lên thành công tài liệu: ${file.name}`);
    } else {
        alert("Vui lòng chọn một tài liệu để tải lên.");
    }
}
