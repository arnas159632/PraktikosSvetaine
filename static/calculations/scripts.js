document.addEventListener('DOMContentLoaded', function() {
    // List of allowed field IDs, organized by rows
    const allowedFields = [
        // Existing fields
        ['fill7', 'fill8', 'fill9', 'fill10', 'fill11', 'fill12'],
        ['fill13', 'fill14', 'fill15', 'fill16', 'fill17', 'fill18'],
        ['fill19', 'fill20', 'fill21', 'fill22', 'fill23', 'fill24'],
        ['fill25', 'fill26', 'fill27', 'fill28', 'fill29', 'fill30'],
        ['fill31', 'fill32', 'fill33', 'fill34', 'fill35', 'fill36'],
        // New fields
        ['fills1', 'fills2', 'fills3', 'fills4', 'fills5', 'fills6'],
        ['fills7', 'fills8', 'fills9', 'fills10', 'fills11', 'fills12'],
        ['fills13', 'fills14', 'fills15', 'fills16', 'fills17', 'fills18'],
        ['fills19', 'fills20', 'fills21', 'fills22', 'fills23', 'fills24'],
        ['fills25', 'fills26', 'fills27', 'fills28', 'fills29', 'fills30'],
        ['fills31', 'fills32', 'fills33', 'fills34', 'fills35', 'fills36'],
        ['fills37', 'fills38', 'fills39', 'fills40', 'fills41', 'fills42'],
        ['fills43', 'fills44', 'fills45', 'fills46', 'fills47', 'fills48'],
        ['fills49', 'fills50', 'fills51', 'fills52', 'fills53', 'fills54'],
        ['fills55', 'fills56', 'fills57', 'fills58', 'fills59', 'fills60'],
        ['fills61', 'fills62', 'fills63', 'fills64', 'fills65', 'fills66'],
        ['fills67', 'fills68', 'fills69', 'fills70', 'fills71', 'fills72'],
        ['fills73', 'fills74', 'fills75', 'fills76', 'fills77', 'fills78'],
        ['fills79', 'fills80', 'fills81', 'fills82', 'fills83', 'fills84'],
        ['fills85', 'fills86', 'fills87', 'fills88', 'fills89', 'fills90'],
        ['fills91', 'fills92', 'fills93', 'fills94', 'fills95', 'fills96'],
        ['fills97', 'fills98', 'fills99', 'fills100', 'fills101', 'fills102'],
        ['fills103', 'fills104', 'fills105', 'fills106', 'fills107', 'fills108'],
        ['fills109', 'fills110', 'fills111', 'fills112', 'fills113', 'fills114'],
        ['fills115', 'fills116', 'fills117', 'fills118', 'fills119', 'fills120'],
        ['fills121', 'fills122', 'fills123', 'fills124', 'fills125', 'fills126'],
        ['fills127', 'fills128', 'fills129', 'fills130', 'fills131', 'fills132'],
        ['fills133', 'fills134', 'fills135', 'fills136', 'fills137', 'fills138'],
        ['fills139', 'fills140', 'fills141', 'fills142', 'fills143', 'fills144'],
        ['fills145', 'fills146', 'fills147', 'fills148', 'fills149', 'fills150'],
        ['fills151', 'fills152', 'fills153', 'fills154', 'fills155', 'fills156']
    ];

    // Function to get the currently active field (the one receiving the paste)
    function getActiveField() {
        return document.activeElement;
    }

    // Function to handle the paste data
    function handlePaste(pastedData) {
        const rows = pastedData.trim().split('\n');
        const isSingleCell = rows.length === 1 && rows[0].split('\t').length === 1;

        const activeField = getActiveField();
        const { rowIndex, colIndex } = getFieldPosition(activeField);

        if (isSingleCell) {
            if (activeField && allowedFields.flat().includes(activeField.id)) {
                activeField.value = rows[0].trim();
            }
        } else {
            // Multi-cell paste
            for (let i = 0; i < rows.length; i++) {
                const columns = rows[i].split('\t');

                // Prevent out-of-bounds for rows
                if (rowIndex + i >= allowedFields.length) break;

                const rowFields = allowedFields[rowIndex + i];

                for (let j = 0; j < columns.length; j++) {
                    // Prevent out-of-bounds for columns
                    if (colIndex + j >= rowFields.length) break;

                    const fieldId = rowFields[colIndex + j];
                    const inputField = document.getElementById(fieldId);
                    if (inputField) {
                        inputField.value = columns[j].trim(); // Set the cell value
                    }
                }
            }
        }
    }

    // Function to get the position (row and column) of a specific field
    function getFieldPosition(fieldElement) {
        const fieldId = fieldElement.id;
        for (let rowIndex = 0; rowIndex < allowedFields.length; rowIndex++) {
            const colIndex = allowedFields[rowIndex].indexOf(fieldId);
            if (colIndex !== -1) {
                return { rowIndex, colIndex };
            }
        }
        return { rowIndex: -1, colIndex: -1 }; // Default to invalid position if not found
    }

    // Event listener for paste event
    document.addEventListener('paste', function(event) {
        event.preventDefault(); // Prevent default paste behavior

        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('text');

        if (pastedData) {
            handlePaste(pastedData);
        } else {
            console.error('No data was pasted.');
        }
    });
});
