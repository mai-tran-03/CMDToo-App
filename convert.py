import csv
import json


def jsonify():
    """Parses a csv to create a JSON"""
    with open("Data.csv", "r") as csvfile:
        reader = csv.reader(csvfile)
        headers = next(reader)
        questions = []
        for row in reader:
            question = dict()
            for col, value in enumerate(row):
                question[headers[col]] = value
            questions.append(question)
    with open("questions.json", "w") as jsonfile:
        json.dump(questions, jsonfile, indent=2)


if __name__ == "__main__":
    jsonify()