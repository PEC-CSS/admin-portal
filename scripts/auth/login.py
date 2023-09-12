import requests


def loginUser():
    print("\nLogin User!\n")
    email = input("Enter email: ")
    password = input("Enter password: ")

    url = "https://acm.harshjohar.com/v1/user/login"

    headers = {
        "Content-Type": "application/json",
    }

    data = {
        "email": email,
        "password": password,
    }

    response = requests.post(url, json=data, headers=headers)

    if response.status_code == 200:
        print("\nLogin successful!")
        print("Access Token:", response.json()["jwtToken"])
        print("-" * 25)
        print("\n")
        return response.text
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)


if __name__ == "__main__":
    loginUser()
