function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    var isVisible = content.style.display === "block";
    var allContents = document.getElementsByClassName('tabcontent');

    for (var i = 0; i < allContents.length; i++) {
        allContents[i].style.display = 'none';
    }

    if (!isVisible) {
        content.style.display = "block";
    }
}

function seeAllActivities() {
    alert("Redirecting to the 'See All Activities' page...");
}

function editCertificationInterests() {
    alert("Redirecting to the certification interests editor...");
}

function closePersonalizeSection() {
    document.getElementById('personalizeSection').style.display = 'none';
}

function seeMyLearning() {
    alert("Redirecting to My Learning page...");
}