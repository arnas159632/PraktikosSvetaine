def replace_placeholders(doc, replacements):
    """Replace placeholders in the document with the provided replacements and return the replaced data."""
    replaced_data = {}
    
    def replace_in_text(text, replacement):
        for placeholder, replacement_texts in replacement.items():
            replacement_text = ' '.join(replacement_texts)
            if placeholder in text:
                text = text.replace(placeholder, replacement_text)
                replaced_data[placeholder] = replacement_text
        return text

    for paragraph in doc.paragraphs:
        original_text = paragraph.text
        paragraph.text = replace_in_text(paragraph.text, replacements)

    for table in doc.tables:
        for row in table.rows:
            for cell in row.cells:
                original_text = cell.text
                cell.text = replace_in_text(cell.text, replacements)

    return replaced_data

def extract_placeholders_and_data(doc):
    """Extract placeholders and their data from a document."""
    placeholders = {}

    def extract_from_text(text):
        for part in text.split():
            if part.startswith('{{') and part.endswith('}}'):
                placeholder = part
                if placeholder not in placeholders:
                    placeholders[placeholder] = []
                placeholders[placeholder].append(text)
        return text

    for paragraph in doc.paragraphs:
        extract_from_text(paragraph.text)

    for table in doc.tables:
        for row in table.rows:
            for cell in row.cells:
                extract_from_text(cell.text)

    return placeholders
