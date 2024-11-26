import json

from urllib.parse import urlencode
from urllib.request import Request, urlopen

headers = {
    "origin": "https://www.estrelabet.com",
    "referer": "https://www.estrelabet.com/",
    "accept": "application/json, text/plain, */*",
    "content-type": "application/x-www-form-urlencoded",
    "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}

def login(emailId: str, password: str):
    global headers

    url = 'https://service.estrelabet.com/ajax/login'
    data = { "emailId" : emailId, "password" : password }

    req = Request(url, urlencode(data).encode(), headers=headers)
    response = urlopen(req).read().decode()
    return json.loads(response)

def get_user(id: str):
    global headers

    url = 'https://service.estrelabet.com/ajax/profile/getData'
    
    req = Request(url, headers=headers)
    req.add_header('Cookie', f'ci_session={id}')

    response = urlopen(req).read().decode()
    return json.loads(response)

# enter_site = login("vanderlinocalango@gmail.com", "Cassino@2487")
# user_id = enter_site["id"]

# user = get_user(user_id)

# balance_detail = user["balanceDetails"]

# print(balance_detail)