// Function to calculate and update the sum
function updateSum() {
    // Retrieve the values from the input fields
    const fill11 = parseFloat(document.getElementById('fill11').value) || 0;
    const fill17 = parseFloat(document.getElementById('fill17').value) || 0;
    const fill23 = parseFloat(document.getElementById('fill23').value) || 0;
    const fill29 = parseFloat(document.getElementById('fill29').value) || 0;
    const fill35 = parseFloat(document.getElementById('fill35').value) || 0;

    // Calculate the sum
    const sum = fill11 + fill17 + fill23 + fill29 + fill35;

    // Display the sum in the fill37 field
    document.getElementById('fill37').value = sum;
}

// Add event listeners to the fields to update the sum when values change
document.addEventListener('DOMContentLoaded', function() {
    // Attach input event listeners to the fields
    document.getElementById('fill11').addEventListener('input', updateSum);
    document.getElementById('fill17').addEventListener('input', updateSum);
    document.getElementById('fill23').addEventListener('input', updateSum);
    document.getElementById('fill29').addEventListener('input', updateSum);
    document.getElementById('fill35').addEventListener('input', updateSum);
});
