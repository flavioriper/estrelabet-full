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

@app.get("/api/py/tipminer")
def read():
    response = web_scraping(f"https://www.tipminer.com/historico/estrelabet/aviator?subject=highlight&limit=1000&t=1731206893098")
    new_value = response.pop(0)

    if new_value["numericResult"] >= 10:
        new_value["distance"] = 1
        for value in response:
            if value["numericResult"] < 10:
                new_value["distance"] = new_value["distance"] + 1
            else:
                break

    return new_value