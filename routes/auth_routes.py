from flask import Blueprint, render_template, request, redirect, url_for, session

auth_routes = Blueprint('auth', __name__)

# Dummy user data for simplicity
users = {
    'admin': 'password123',  # username: password
}

@auth_routes.route('/login', methods=['GET', 'POST'])
def login():
    """Render login page and handle login."""
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username exists and password matches
        if username in users and users[username] == password:
            session['username'] = username  # Store username in session
            return redirect(url_for('admin.admin_page'))  # Redirect to admin page
        else:
            return 'Invalid username or password', 401  # Unauthorized

    return render_template('login.html')  # Render login form

@auth_routes.route('/logout')
def logout():
    """Handle user logout."""
    session.pop('username', None)  # Remove username from session
    return redirect(url_for('auth.login'))  # Redirect to login page
