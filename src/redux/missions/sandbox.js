const apiresponse =
    [
        {
            mission_id: "1",
            mission_name: "Mission 1",
            "manufacturers": [
                "Orbital ATK"
            ],
            description: "This is the first mission",
            "wikipedia": "https://en.wikipedia.org/wiki/Thaicom",
            "website": "http://www.thaicom.net/en/satellites/overview",
            "twitter": "https://twitter.com/thaicomplc",
        },
        {
            mission_id: "2",
            mission_name: "Mission 2",
            "manufacturers": [
                "Orbital ATK"
            ],
            description: "This is the second mission",
            "wikipedia": "https://en.wikipedia.org/wiki/Thaicom",
            "website": "http://www.thaicom.net/en/satellites/overview",
            "twitter": "https://twitter.com/thaicomplc",
        },
    ];

const mapResponse = apiresponse.map(mission => {
    return {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
    }
});

console.log(apiResponseMapped);
