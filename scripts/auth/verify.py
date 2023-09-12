import requests

def registerUser():
    print("-"*25)
    print("\Verify User!\n")
    print("-"*25)
    token = input("Enter token: ")

    url = f"https://acm.harshjohar.com/v1/user?token={token}"

    headers = {
        "Content-Type": "application/json",
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        print("Response:", response.text)
        print("-"*25)
        print('\n\n')
        return response.text
    else:
        print(f"Request failed with status code: {response.status_code}")
        print("Response:", response.text)

if __name__=='__main__':
    registerUser()