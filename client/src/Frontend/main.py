import torch
from transformers import BertTokenizer, BertForQuestionAnswering
import joblib

# Load the model
model_path = 'bertfp.joblib'
model = joblib.load(model_path)


tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')


from flask import Flask, request, jsonify
from transformers import BertTokenizer, BertForQuestionAnswering
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def answer_question(question, model_name):
    joblib.load(model_name)
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
    model = BertForQuestionAnswering.from_pretrained('bert-base-uncased')


   # Tokenize the input 
    inputs = tokenizer(question, return_tensors='pt', add_special_tokens=True)
    input_ids = inputs['input_ids']
    attention_mask = inputs['attention_mask']

    # Predict the start and end positions of the answer
    with torch.no_grad():
       outputs = model(input_ids, attention_mask=attention_mask)
    start_scores, end_scores = outputs.start_logits, outputs.end_logits

    # Find the tokens with the highest `start` and `end` scores
    answer_start = torch.argmax(start_scores)
    answer_end = torch.argmax(end_scores) + 1  # Add 1 since end index is exclusive

    # Convert tokens to answer
    answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(input_ids[0][answer_start:answer_end]))

    print("Answer:", answer)
    return answer

@app.route('/', methods=['GET', 'POST'])
def index():
 if request.method == 'POST':
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        print(data)
        question = data.get('question')
        modelNum= data.get('modelNum')
        if not question:
            return jsonify({'error': 'Missing question'}), 400
        if modelNum==1:
            model_name = "bertfp.joblib"
        if modelNum==2:
            model_name = "bert.joblib"
        if modelNum==3:
            model_name = "bertdpt.joblib"
        answer = answer_question(question, model_name)
        print("answerr", answer)
        return jsonify({ 'answer': answer })


 elif request.method == 'GET':
       
       return jsonify({'message': 'This is a GET request. Please use POST to submit data.'})

if __name__ == '__main__':
    app.run(debug=True, port=3000)

