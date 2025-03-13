from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# A simple test endpoint
@app.route("/")
def home():
    return jsonify({"message": "Welcome to EspritAssist API!"})

# Chatbot endpoint that forwards user messages to the Rasa server
@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    user_message = data.get("message")
    
    # Forward the message to Rasa (assuming Rasa is running on port 5005)
    rasa_response = requests.post(
        "http://127.0.0.1:5005/webhooks/rest/webhook",
        json={"message": user_message}
    )
    
    # Return the response from Rasa
    return jsonify(rasa_response.json())

if __name__ == "__main__":
    app.run(debug=True)
