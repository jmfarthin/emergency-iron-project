


var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var upperMuscles = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lowerMuscles = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");

// function to get exercise API data
async function getExercises(group) {
    for (muscle of group) {
        var url = new URL("https://api.api-ninjas.com/v1/exercises");
        url.searchParams.set("muscle", muscle);
        var response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
        var data = await response.json();
        console.log(data);
    };
};


getExercises(upperMuscles);

// var armMuscle = "triceps"


// async function exerciseApi() {
//     const url = new URL("https://api.api-ninjas.com/v1/exercises");
//     url.searchParams.set("muscle", armMuscle);
//     const response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
//     const data = await response.json();
//     console.log(data);
// };

// exerciseApi();