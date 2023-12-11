document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('command-input');

    inputElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of Enter key
            handleCommand(inputElement.innerText);
            inputElement.innerText = ''; // Clear the content for a new command
        }
    });
});

function handleCommand(command) {
    const contentElement = document.querySelector('.content');
    const newContent = document.createElement('p');
    newContent.innerText = `$ ${command}`; // Display the command in the content area
    switch (command.toLowerCase()) {
        case 'help':
            newContent.innerText = 'Available commands: help, about, projects';
            break;
        case 'courses':
            newContent.innerText = '1. SecurityTube Linux Assembly Expert.';
            break;
            
        case 'about':
            newContent.innerText = 'This is your portfolio. Customize it to showcase your skills and projects.';
            break;
        case 'projects':
            newContent.innerText = 'List of your projects goes here.';
            break;
        default:
            newContent.innerText = `Command not recognized: ${command}`;
    }
    contentElement.appendChild(newContent);
    // Add logic here to handle the command as needed
}
