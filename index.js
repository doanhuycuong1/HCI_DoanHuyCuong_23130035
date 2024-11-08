document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lab1').addEventListener('click', function() {
        window.location.href = 'lab1.html';
    });
    document.getElementById('lab2').addEventListener('click', function() {
        window.location.href = 'lab2.html';
    });
    document.getElementById('lab3').addEventListener('click', function() {
        window.location.href = 'lab3.html';
    });
    document.getElementById('lab4').addEventListener('click', function() {
        window.location.href = 'lab4.html';
    });
    document.getElementById('lab5').addEventListener('click', function() {
        window.location.href = 'lab5.html';
    });
    document.getElementById('lab6').addEventListener('click', function() {
        window.location.href = 'lab6.html';
    });
    document.getElementById('labvideo').addEventListener('click', function() {
        window.location.href = 'video.html';
    });
});

function openTab(event, tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}
