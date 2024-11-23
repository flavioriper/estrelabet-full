import requests
import json

from fake_useragent import UserAgent

useragent = UserAgent()

ua = useragent.random
headers = {
    "accept": "application/json, text/plain, /",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json;charset=UTF-8",
    "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    # "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/86.0.4240.198 Chrome/86.0.4240.198 Safari/537.36",  # noqa E501
    "User-Agent": ua
}

def web_scraping(path: str):
    response = requests.get(
        path,
        headers=headers,
        stream=True,
        timeout=None
    )

    for line in response.iter_lines():
        if line:
            line_decoded = line.decode("utf-8")
            line_decoded = line_decoded.split(r'\"rounds\":')[1].split(r',\"requestId\"')[0]
            line_decoded = r'{"rounds":' + line_decoded + r'}'
            line_decoded = line_decoded.replace('\\', '')
        else:
            continue

        if line_decoded:
            #### Calibrate text output
            # with open('test.txt', 'w') as f:
            #     f.write(line_decoded)

            #### Calibrate json output
            # with open('test.json', 'w') as f:
            #     f.write(line_decoded)

            data = json.loads(line_decoded)
            data = data["rounds"]

            if isinstance(data, list):
                return data
            else:
                continue