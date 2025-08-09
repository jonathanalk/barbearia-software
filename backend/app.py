from flask import Flask, render_template, jsonify, session, request
from flask_cors import CORS # Importa o CORS
from functools import wraps
import pymongo

# Inicializa a aplicação Flask
app = Flask(__name__)
CORS(app) #Habilita o CORS para o Flask
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'

# Database
client = pymongo.MongoClient('localhost', 27017)
db = client.testDB

# Decorators
def login_required(f):
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/')
  
  return wrap


# Routes
from user import routes


# Rota Raiz
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Rota Home
@app.get("/home/")
def home():
    return render_template('home.html')

# Rota Dashboard
@app.get("/dashboard/")
def dashboard():
    return render_template('dashboard.html')

# Rota para retornar todos os projetos (GET)
@app.route('/projects', methods=['GET'])
def get_projects():
    return jsonify(projects), 200

# Rota para adicionar um novo projeto (POST)
@app.route('/projects', methods=['POST'])
def add_project():
    new_project = request.get_json() # Pega os dados enviados no corpo da requisição
    projects.append(new_project)
    return jsonify(new_project), 201

# Ponto de entrada para rodar a aplicação
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
