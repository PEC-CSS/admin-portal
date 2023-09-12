import requests

"""
curl --location 'http://localhost:8080/v1/user/assign/role' \
--data '{
    "email": "",
    "newRole": ""
}'
"""

emails = [""]  # fill this
role = ""  # fill this
authToken = ""  # fill this

url = "https://acm.harshjohar.com/v1/user/assign/role"

headers = {"Content-Type": "application/json", "Authorization": f"Bearer ${authToken}"}


for email in emails:
    data = {"email": email, "newRole": role}
    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print(response.text, "for", email, "as", role)
        print("-" * 25)
        print("\n")
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)
