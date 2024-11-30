from .crawler import web_scraping

results = {
    "EST": { "slug": "estrelabet", "data": [] },
    "FAIR": { "slug": "betfair", "data": [] },
    "NAC": { "slug": "betnacional", "data": [] },
    "PLAY": { "slug": "b2xbet", "data": [] },
}

def fetch_data(name: str):
    global results

    slug = results[name]["slug"]
    response = web_scraping(f"https://www.tipminer.com/historico/{slug}/aviator?subject=highlight&limit=1000&t=1731206893098")
    if len(results[name]["data"]) == 0 or results[name]["data"][0]["id"] != response[0]["id"]:
        results[name]["data"] = mutate_list(response)

def start_fetch_results():
    while True:
        fetch_data("EST")
        fetch_data("FAIR")
        fetch_data("NAC")
        fetch_data("PLAY")

def mutate_list(data):
    new_collection = []
    response_collection = []

    while len(data) > 0:
        new_value = data.pop(0)

        new_value["alarm"] = False
        new_value["green"] = False
        new_value["pink"] = False
        new_value["red"] = False

        if new_value["numericResult"] >= 10:
            new_value["distance"] = 1

            for value in data:
                if value["numericResult"] < 10:
                    new_value["distance"] = new_value["distance"] + 1
                else:
                    break

        new_collection.append(new_value)

    new_collection.reverse()
    rounds = 0
    red_rounds = 0

    while len(new_collection) > 0:
        new_value = new_collection.pop(0)
        
        if "distance" in new_value and new_value["distance"] <= 9 and rounds < 6:
            rounds = rounds + 1
            new_value["alarm"] = True
        elif rounds > 0 and rounds < 6:
            rounds = rounds + 1
            new_value["alarm"] = True
        else:
            rounds = 0

        if rounds > 1 or red_rounds > 0:
            if new_value["numericResult"] < 10:
                new_value["red"] = True
                red_rounds = red_rounds + 1

            if new_value["numericResult"] >= 10:
                new_value["green"] = True
                red_rounds = 0

            if red_rounds == 23:
                new_value["pink"] = True
                red_rounds = 0

        response_collection.append(new_value)

    response_collection.reverse()

    return response_collection