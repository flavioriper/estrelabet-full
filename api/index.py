from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .crawler import web_scraping

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/py/tipminer/all")
def read_all(game = 'estrelabet'):
    response = web_scraping(f"https://www.tipminer.com/historico/{game}/aviator?subject=highlight&limit=1000&t=1731206893098")
    new_collection = []

    while len(response) > 0:
        new_value = response.pop(0)

        if new_value["numericResult"] >= 10:
            new_value["distance"] = 1
            for value in response:
                if value["numericResult"] < 10:
                    new_value["distance"] = new_value["distance"] + 1
                else:
                    break

        new_collection.append(new_value)

    return new_collection

@app.get("/api/py/tipminer/last")
def read_last(game = 'estrelabet'):
    response = web_scraping(f"https://www.tipminer.com/historico/{game}/aviator?subject=highlight&limit=1000&t=1731206893098")
    new_value = response.pop(0)

    if new_value["numericResult"] >= 10:
        new_value["distance"] = 1
        for value in response:
            if value["numericResult"] < 10:
                new_value["distance"] = new_value["distance"] + 1
            else:
                break

    return new_value