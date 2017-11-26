import flask
import pickle
import numpy as np
app = flask.Flask(__name__)

#Model
#with open('logisticRegression.pkl', 'r') as picklefile:
#    PREDICTOR = pickle.load(picklefile)

#Routes


#---------- CREATING AN API ----------------#

# This method takes input via an HTML page
@app.route('/picture')
def page():
   with open("picture.html", 'r') as viz_file:
       return viz_file.read()

@app.route('/result', methods=['POST', 'GET'])
def result():
    '''Gets prediction using the HTML form'''
    if flask.request.method == 'POST':

       inputs = flask.request.form

       picture = inputs['picture']



#       item = np.array()
#       item = item.reshape(1, -1)
#       score = PREDICTOR.predict_proba(item)
       results = {'gold':0.624}
       return flask.jsonify(results)


if __name__ == '__main__':
    HOST = '127.0.0.1'
    PORT = 4000

    app.run(HOST, PORT, debug =True)
