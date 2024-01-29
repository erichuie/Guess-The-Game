import os

from flask import Flask, render_template, jsonify, g
from flask_debugtoolbar import DebugToolbarExtension
# from forms import GuessGameForm
import random
import requests

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
toolbar = DebugToolbarExtension(app)

RAWG_API = "https://api.rawg.io/api"
API_KEY = os.environ['API_KEY']

#####################################################################


# @app.get('/')
# def homepage():
#     """displays homepage"""
#     form = GuessGameForm()
#     return render_template("guess_game.html", form=form)

@app.get('/new-game')
def create_new_game():
    """request game from RAWG API and return first image"""

    response_dict = {}
    game_images = []
    random_id = random.randint(1,1000)
    print("rand id is", random_id)
    #halo master chief collection is 857

    params = {
        "key": API_KEY
    }

    randomGameInfoResponse = requests.get(f"{RAWG_API}/games/{random_id}", params=params)
    randomGameImagesResponse = requests.get(f"{RAWG_API}/games/{random_id}/screenshots", params=params)

    randomGameInfoDict = randomGameInfoResponse.json()
    randomGameImagesDict = randomGameImagesResponse.json()

    for result in randomGameImagesDict["results"]:
        game_images.append(result["image"])

    g.game_name = randomGameInfoDict["name"]
    g.game_images = game_images

    response_dict["start_image"] = game_images[0]
    response_dict["image_num"] = 0

    return jsonify(response_dict)




# @app.route('/guess-game', methods=["GET","POST"])
# def display_game_images():
#     """request game from RAWG API and display info"""
#     form = GuessGameForm()
#     if form.validate_on_submit():
#         response_dict = {}
#         game_images = []

#         random_id = random.randint(1,1000)
#         print("rand id is", random_id)
#         #halo master chief collection is 857

#         params = {
#             "key": API_KEY
#         }

#         randomGameInfoResponse = requests.get(f"{RAWG_API}/games/{random_id}", params=params)
#         randomGameImagesResponse = requests.get(f"{RAWG_API}/games/{random_id}/screenshots", params=params)

#         randomGameInfoDict = randomGameInfoResponse.json()
#         randomGameImagesDict = randomGameImagesResponse.json()
#         print("rawg returns",randomGameInfoDict)

#         for result in randomGameImagesDict["results"]:
#             game_images.append(result["image"])

#         response_dict["name"] = randomGameInfoDict["name"]
#         response_dict["description"] = randomGameInfoDict["description"]
#         response_dict["images"] = game_images

#         print(response_dict)
#         return jsonify(response_dict)

#     else:
#         return render_template("guess_game.html", form=form)


