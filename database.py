from contextlib import contextmanager
import mysql.connector
import os

@contextmanager
def get_db_connection():
    conn = mysql.connector.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASSWORD', 'admin'),
        database=os.getenv('DB_NAME', 'KolegijosDB')
    )
    try:
        yield conn
    finally:
        conn.close()
