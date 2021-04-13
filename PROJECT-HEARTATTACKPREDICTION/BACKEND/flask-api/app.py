


"""from flask import Flask,request,jsonify,render_template
import numpy as np
import pickle

app=Flask(__name__)

@app.route('/hello')
def home():
    return render_template('index.html')
    #return "hello"""
from flask import Flask, request, jsonify, make_response
from flask_restplus import Api, Resource, fields
#from sklearn.externals import joblib
from flask_cors import CORS
import numpy as np
import sys
import pickle

flask_app = Flask(__name__)
#app=Flask(__name__)
CORS(flask_app)
#CORS(app)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "HeartAttack", 
		  description = "Predict the type of iris plant")

name_space = app.namespace('prediction', description='Prediction APIs')

"""model = app.model('Prediction params', 
				  {'sepalLength': fields.Float(required = True, 
				  							   description="Sepal Length", 
    					  				 	   help="Sepal Length cannot be blank"),
				  'sepalWidth': fields.Float(required = True, 
				  							   description="Sepal Width", 
    					  				 	   help="Sepal Width cannot be blank"),
				  'petalLength': fields.Float(required = True, 
				  							description="Petal Length", 
    					  				 	help="Petal Length cannot be blank"),
				  'petalWidth': fields.Float(required = True, 
				  							description="Petal Width", 
    					  				 	help="Petal Width cannot be blank")})"""

#classifier = joblib.load('classifier.joblib')
classifier=pickle.load(open('model.pkl','rb'))

@name_space.route('/prediction/',methods=['POST','GET'])
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	#@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			print("hello"+formData.age)
			data = [val for val in formData.values()]
			prediction = classifier.predict(np.array(data).reshape(1, -1))
			#types = { 0: "Iris Setosa", 1: "Iris Versicolour ", 2: "Iris Virginica"}
			response = jsonify({
				"result":"iris"+ 1                         #types[prediction[0]]
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response

		except Exception as error:
			print("hi")
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})


