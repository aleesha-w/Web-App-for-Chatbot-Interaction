from flask import Flask, request, jsonify
from transformers import BertTokenizer, BertForQuestionAnswering
import torch
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model_name = "bert-large-uncased-whole-word-masking-finetuned-squad"
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForQuestionAnswering.from_pretrained(model_name)

def answer_question(question, context):
    inputs = tokenizer.encode_plus(question, context, return_tensors="pt")
    input_ids = inputs["input_ids"].tolist()[0]

    with torch.no_grad():
        outputs = model(**inputs)

    answer_start = torch.argmax(outputs.start_logits)
    answer_end = torch.argmax(outputs.end_logits) + 1

    answer = tokenizer.convert_tokens_to_string(tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end]))
    return answer

@app.route('/', methods=['GET', 'POST'])
def index():
 if request.method == 'POST':
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        print(data)
        question = data.get('question')
        context = data.get('modelNum')
        if not question or not context:
            return jsonify({'error': 'Missing question or context'}), 400
        with open('data.txt', 'r', encoding='utf-8') as file:
           file_content = file.read()
        answer = answer_question(question, context)
        print("answerr", answer)
        return jsonify({ 'answer': answer })


 elif request.method == 'GET':
        # Typically, GET requests should not process data submissions
        # This can just return some informational message or data
       return jsonify({'message': 'This is a GET request. Please use POST to submit data.'})

if __name__ == '__main__':
    app.run(debug=True, port=3000)

