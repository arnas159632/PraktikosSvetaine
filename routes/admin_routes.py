from flask import Blueprint, render_template, request, redirect, url_for, send_file
from io import BytesIO
from utils.db import get_db_connection

admin_routes = Blueprint('admin', __name__)

@admin_routes.route('/admin', methods=['GET', 'POST'])
def admin_page():
    """Render the admin page with document filtering."""
    with get_db_connection() as conn:
        cursor = conn.cursor()

        faculty_filter = request.args.get('faculty')
        name_filter = request.args.get('name')

        query = """
            SELECT id, name, date, faculty 
            FROM documents 
            WHERE (%s IS NULL OR faculty = %s) AND (%s IS NULL OR name LIKE %s)
        """
        cursor.execute(query, (faculty_filter, faculty_filter, name_filter, f"%{name_filter}%"))
        documents = cursor.fetchall()

    return render_template('admin.html', documents=documents)

@admin_routes.route('/replace/<int:doc_id>', methods=['POST'])
def replace_file(doc_id):
    """Replace a file in the database."""
    if 'file' not in request.files:
        return "No file uploaded", 400

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400

    if not file.filename.endswith('.docx'):
        return "Invalid file type", 400

    file_data = file.read()

    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("UPDATE documents SET data = %s WHERE id = %s", (file_data, doc_id))
        conn.commit()

    return redirect(url_for('admin.admin_page'))

@admin_routes.route('/download/<int:doc_id>')
def download_file(doc_id):
    """Download a file from the database."""
    with get_db_connection() as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT name, data FROM documents WHERE id = %s", (doc_id,))
        document = cursor.fetchone()

        if document:
            name, data = document
            return send_file(
                BytesIO(data), 
                as_attachment=True, 
                download_name=name, 
                mimetype='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            )
        else:
            return "Document not found", 404
