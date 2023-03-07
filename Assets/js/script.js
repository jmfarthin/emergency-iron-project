


var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var upper = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lower = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");
var exerciseGroup = [];
var newExercise = {};
var muscleGroup;

// function to get exercise API data
async function getExercises(group) {
    console.log(typeof (group));
    for (muscle of group) {
        var url = new URL("https://api.api-ninjas.com/v1/exercises");
        url.searchParams.set("muscle", muscle);
        var response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
        var data = await response.json();
        let randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        console.log(data);
        console.log(data[randomNum].name);
    };
};

// var muscleGroup = upper;
// console.log(muscleGroup);
// getExercises(muscleGroup);

function generateCardEventHandler(event) {
    if (event.target.id === "upper") {
        getExercises(upper);
    } else {
        getExercises(lower);
    }
};

generateCard.addEventListener("click", generateCardEventHandler);

// var exercises = [
//     {
//         name: "tricep dips",
//         muscle: "triceps",
//         equipment: "dip_bars",
//     },
//     {
//         name: "dumbbell benchpress",
//         muscle: "chest",
//         equipment: "dumbbells"
//     }
// ]

// var armMuscle = "triceps"


// async function exerciseApi() {
//     const url = new URL("https://api.api-ninjas.com/v1/exercises");
//     url.searchParams.set("muscle", armMuscle);
//     const response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
//     const data = await response.json();
//     console.log(data);
// };

// exerciseApi();