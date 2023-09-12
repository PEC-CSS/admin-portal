import requests

'''
curl --location 'http://localhost:8080/v1/events/1/end' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJva0BnbWFpbC5jb20iLCJleHAiOjE2OTcwNDEzMzQsImlhdCI6MTY5NDQ0OTMzNH0.xEkfRJeAzjQEvK13FvwzsJyYZsKIN4VPB4Mt4koOPXA' \
--data-raw '{
    "contributors": ["ok@gmail.com"],
    "publicity": ["ok@gmail.com"],
    "participants": ["harshpreetsinghjohar.btcse20@pec.edu.in"]
}'
'''


def endEvent():    
    contributors = [] # fill
    publicity = [] # fill
    participants = [] # fill
    eventId = 1 # fill
    authToken = '' # fill

    url = f"https://acm.harshjohar.com/v1/events/{eventId}/end"

    headers = {
        "Content-Type": "application/json",
        'Authorization': f"Bearer {authToken}"
    }

    data = {
        "contributors": contributors,
        "publicity": publicity,
        "participants": participants
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("Request successful")
        print(response.text)
        return response.text
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)


if __name__ == "__main__":
    endEvent()
