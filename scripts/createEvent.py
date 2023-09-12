import requests

"""
curl --location 'http://localhost:8080/v1/events' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJva0BnbWFpbC5jb20iLCJleHAiOjE2OTcwNDEzMzQsImlhdCI6MTY5NDQ0OTMzNH0.xEkfRJeAzjQEvK13FvwzsJyYZsKIN4VPB4Mt4koOPXA' \
--header 'Content-Type: application/json' \
--data '{
    "title": "dummy event grfdgdfgdf",
    "startDate": "2023-08-06T00:00:00.000",
    "endDate": "2023-08-06T00:00:00.000",
    "description": "dummy text details",
    "branch": "WIT",
    "venue": "l21"
}'
"""


def createEvent():
    print("-" * 25)
    print("\Create Event!\n")
    print("-" * 25)
    title = input("Enter name: ")
    description = input("Enter email: ")
    venue = input("Enter password: ")
    branch = input("Enter branch: ")
    startDate = ""  # TODO
    endDate = ""  # TODO
    authToken = ""  # fill

    url = f"https://acm.harshjohar.com/v1/events"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {authToken}",
    }

    data = {
        "title": title,
        "startDate": startDate,
        "endDate": endDate,
        "description": description,
        "branch": branch,
        "venue": venue,
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
    createEvent()
