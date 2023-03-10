// variables for the generate workout card and modal button
// var button = document.getElementById('button')
// var HiddenCard = document.getElementById('Go-Card')
// var PromptCard = document.getElementById('card1')
// var Lower = document.getElementById('lower')
// var Upper = document.getElementById('upper')


// function loadIn(){
//     HiddenCard.classList.add('is-hidden');
// }
// loadIn()

// button.onclick = function () {
//     PromptCard.style.display = "none",
//     HiddenCard.classList.remove("is-hidden");
//     HiddenCard.classList.add("is-block");
// }

// Upper.addEventListener('click', remove)
// Lower.addEventListener('click', remove)

// function remove() {
//         HiddenCard.classList.remove("is-block");g
//         HiddenCard.classList.add("is-hidden")
//     }


// variables to be used with the following functions: getExercises, generateCardEventHandler, generateCard event listener
var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var ytKey = 'AIzaSyAUx2V5v1ueDljnSz_13wrwUKrtveFzxfc'
var upper = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lower = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");
var newExercise = {};
var muscleGroup;

// function to get exercise API data
async function getExerciseData(group) {
    var exerciseGroup = [];
    // for each muscle in the upper or lower array, an API call with be made, saving a random exercise to the exerciseGroup variable
    // which is then stored to localStorage to be used by 'blank' function to render the exercise cards to the page
    for (muscle of group) {
        var url = new URL("https://api.api-ninjas.com/v1/exercises");
        url.searchParams.set("muscle", muscle);
        var response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
        var data = await response.json();
        let ranNum = Math.floor(Math.random() * 10);
        // console.log(data[ranNum].name);
        newExercise = {
            name: data[ranNum].name,
            muscle: data[ranNum].muscle,
            equipment: data[ranNum].equipment,
            intructions: data[ranNum].instructions
        };
        exerciseGroup.push(newExercise);
    };
    localStorage.setItem("exercises", JSON.stringify(exerciseGroup));
    console.log(exerciseGroup);

    //function to get embedable youtube video URL via Youtube Data Api
    // try {
    //     for (var i = 0; i < exerciseGroup.length; i++) {
    //         var encoded = await encodeURIComponent(exerciseGroup[i].name);
    //         var ytSearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=1&q=how%20to%20${encoded}&type=video&videoEmbeddable=true&key=${ytKey}`
    //         var ytResponse = await fetch(ytSearch);
    //         var youtubeApi = await ytResponse.json();
    //         var videoId = youtubeApi.items[0].id.videoId;
    //         var e = "Error, call did not complete."
    //         console.log(videoId);
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
};


// calls getExercies depending on which button is clicked
function generateCardEventHandler(event) {
    if (event.target.id === "upper") {
        getExercises(upper);
    } else {
        getExercises(lower);
    }
};

getExerciseData(lower);










//If I'm able to get it working I may need to move the maps script back into the index file. Keeping my keys here for now.
// {* <script async
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w&callback=initMap">
// </script>
// <script async
// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w&callback=initMap">
// </script> */
// }
// const successCallBack = (position) => {
// console.log(position);
// };

// const errorCallBack = (error) => {
// console.error(error);
// };

// navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
// </script>
// variables for the generate workout card and modal button














