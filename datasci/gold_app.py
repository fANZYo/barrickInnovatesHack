import flask
import pickle
import numpy as np
import json
app = flask.Flask(__name__)

#Model
#with open('logisticRegression.pkl', 'r') as picklefile:
#    PREDICTOR = pickle.load(picklefile)

#Routes


#---------- CREATING AN API ----------------#

# This method takes input via an HTML page
#@app.route('/picture')
#def page():
#   with open("picture.html", 'r') as viz_file:
#       return viz_file.read()

@app.route('/result')
def result():
    '''Gets prediction using the HTML form'''
    # if flask.request.method == 'POST':

    #    inputs = flask.request.form

    #    picture = inputs['picture']



#       item = np.array()
#       item = item.reshape(1, -1)
#       score = PREDICTOR.predict_proba(item)
    results = {'gold':0.624}
    # resp = flask.Response(flask.jsonify(results))
    # resp.headers['Cross-origin'] = '*'
    resp = app.response_class(
    response=json.dumps(results),
    status=200,
    mimetype='application/json'
    )
    resp.headers['Access-Control-Allow-Origin'] = '*'
    # return flask.jsonify(results)
    return resp


if __name__ == '__main__':
    HOST = '0.0.0.0'
    PORT = 4000

    app.run(HOST, PORT, debug =True)
