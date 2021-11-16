/*const apiresponse =
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

console.log(apiResponseMapped);*/

'use strict';



/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    const result = [];
    grades.forEach(element => {
        result.push(
            element < 0? 0 :
            element >100? 100 :
            element >= 38 && element % 5 >= 3 ? element + (5 - element % 5) :
            element
        );
    });
    return result;
}



let grades = [58, 45, 56, 78, 90, 100, 83, 52, 23, 12, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];



const result = gradingStudents(grades);
console.log(result);

