const toggleButton = document.getElementById('toggleButton');
function toggleMode() {
    const body = document.body;
    const header = document.querySelector('header');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    toggleButton.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggle.Button.textContent = 'Switch to Dark Mode';
    }
}

toggleButton.addEventListener('click', toggleMode);