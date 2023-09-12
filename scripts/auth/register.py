import requests


def registerUser():
    print("-" * 25)
    print("\nRegister User!\n")
    print("-" * 25)
    name = input("Enter name: ")
    email = input("Enter email: ")
    password = input("Enter password: ")
    sid = int(input("Enter sid: "))
    branch = input("Enter branch: ")

    url = "https://acm.harshjohar.com/v1/user"

    headers = {
        "Content-Type": "application/json",
    }

    data = {
        "name": name,
        "email": email,
        "password": password,
        "sid": sid,
        "branch": branch,
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("Request successful")
        print("Verification Token:", response.text)
        print("-" * 25)
        print("\n\n")
        return response.text
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)


if __name__ == "__main__":
    registerUser()
