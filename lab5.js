function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    
    // Update the active state of the tabs
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[onclick="showSection('${sectionId}')"]`).classList.add('active');
  }