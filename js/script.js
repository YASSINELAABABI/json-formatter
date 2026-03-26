function formatJSON() {
    const jsonInput = document.getElementById('json-input');
    const formatOutput = document.getElementById('format-output');

    try {
        const jsonData = JSON.parse(jsonInput.value);
        formatOutput.textContent = JSON.stringify(jsonData, null, 2);
    } catch (error) {
        formatOutput.textContent = 'Invalid JSON';
    }
}   
document.getElementById('format-btn').addEventListener('click', formatJSON);    

