var selectBox = document.getElementById("card1");
var Lower = document.getElementById('lower')
var Upper = document.getElementById('upper')



// variables to be used with the following functions: getExerciseData, generateCardEventHandler, generateCard event listener
var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var ytKey = 'AIzaSyAWHwk1CEaivU5yaXOeni7b65XTn6GCYWk'
var ytKey2 = 'AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w'
var upper = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lower = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");
var newExercise = {};
var muscleGroup;
var youtubeUrls = [];
var goBackDiv = document.getElementById("goBackDiv");

// function to get exercise API data
async function getExerciseData(group) {
    var exerciseGroup = [];
    // for each muscle in the upper or lower array, an API call with be made, saving a random exercise to the exerciseGroup variable
    // which is then stored to localStorage to be used by 'blank' function to render the exercise cards to the page
    try {
        for (muscle of group) {
            var url = new URL("https://api.api-ninjas.com/v1/exercises");
            url.searchParams.set("muscle", muscle);
            var response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
            var data = await response.json();
            let ranNum = Math.floor(Math.random() * 10);
            newExercise = {
                name: data[ranNum].name,
                muscle: data[ranNum].muscle,
                equipment: data[ranNum].equipment,
                instructions: data[ranNum].instructions
            };
            exerciseGroup.push(newExercise);
        };
    } catch (e) {
        console.log(e);
    }
    localStorage.setItem("exercises", JSON.stringify(exerciseGroup));
    console.log(exerciseGroup);

    //gets embedable youtube video URL via Youtube Data Api
    // try {
    //     for (var i = 0; i < exerciseGroup.length; i++) {
    //         var encoded = await encodeURIComponent(exerciseGroup[i].name);
    //         var ytSearch = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=1&q=how%20to%20${encoded}&type=video&videoEmbeddable=true&key=${ytKey}`
    //         var ytResponse = await fetch(ytSearch);
    //         var youtubeApi = await ytResponse.json();
    //         var videoId = youtubeApi.items[0].id.videoId;
    //         var newYoutubeUrl = `https://www.youtube.com/embed/${videoId}`
    //         youtubeUrls.push(newYoutubeUrl);
    //         localStorage.setItem('videos', JSON.stringify(youtubeUrls));
    //     }
    // } catch (e) {
    //     console.log(e);
    // }

    generateCards();
};


// calls getExerciseData depending on which button is clicked
function generateCardEventHandler(event) {
    if (event.target.id === "upper") {
        getExerciseData(upper);
        selectBox.classList.add('is-hidden')
    } else {
        getExerciseData(lower);
        selectBox.classList.add('is-hidden')
    }
    goBackDiv.classList.remove('is-hidden');
};

selectBox.addEventListener("click", generateCardEventHandler);



// takes the data from the APIs and uses it to create cards with exercises, video tutorial, muscle worked, and instructions
function generateCards() {
    var exercises = JSON.parse(localStorage.getItem('exercises'));

    console.log(exercises);
    var videos = JSON.parse(localStorage.getItem('videos'));

    for (i = 0; i < 5; i++) {
        var muscleName = capFirstLetter(exercises[i].muscle)
        var exerciseDiv = `<div class="column is-half">
        <div class="card has-background-light " id="exercise-0">
            <card-header class="card-header-title is-centered is-underlined">
                <p class="is-size-4 has-text-weight-bold" id="title-0">${exercises[i].name}</p>
            </card-header>
            <div class="card-content ">
                <figure class="image is-2by1 is-fullwidth ">
                    <iframe class="has-ratio" id="video-0" src="https://www.youtube.com/embed/eGo4IYlbE5g" frameborder="0"
                       allowfullscreen></iframe>
                </figure>
                <div>
                    <p class="mt-2 mb-2 has-text-centered is-size-2" id="muscle-0"><strong> Muscle Targeted: </strong></p>
                    <p class="mt-2 mb-2 has-text-centered is-size-2">${muscleName}</p>
                </div>
                <div class="dropdown">
                    <div class="dropdown-trigger">
                        <button class="button2 mt-4" aria-haspopup="true" aria-controls="dropdown-menu3">
                            <h2 class="has-text-centered"> <strong>Instructions:</strong></h2>
                            <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div class="dropdown-content">
                            <p>${exercises[i].instructions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

        //${videos[i]}

        if (i < 2) {
            document.querySelector("#exercise-container-0").innerHTML += exerciseDiv;
        } else if (i >= 2 && i < 4) {
            document.querySelector("#exercise-container-1").innerHTML += exerciseDiv;
        } else {
            document.querySelector("#exercise-container-2").innerHTML += exerciseDiv;
        }

    };
    var dropdown = document.getElementsByClassName('dropdown');
    console.log(dropdown);

    for (el of dropdown) {
        console.log(el);
        el.addEventListener("click", dropDownButton);
    }

};

// Makes the dropdown work on the cards
function dropDownButton(event) {
    event.stopPropagation();
    this.classList.toggle('is-active');
};

//function to capitilize the first letter of the string included as an argument
function capFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
};

//adds functionality to go back button


document.getElementById("goBack").addEventListener("click", function () {
    location.reload();
});







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













