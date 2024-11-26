from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .utils import fetch_data, results

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
def read_all(game = 'EST'):
    global results
    fetch_data(game)

    return results[game]["data"]

@app.get("/api/py/tipminer/last")
def read_last(game = 'EST'):
    global results
    fetch_data(game)

    return results[game]["data"][0] if len(results[game]["data"]) > 0 else {}