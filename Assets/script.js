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
var ytKey = 'AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w'
var upper = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lower = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");
var newExercise = {};
var muscleGroup;
var youtubeUrls = [];

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
            instructions: data[ranNum].instructions
        };
        exerciseGroup.push(newExercise);
    };
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
    //         console.log(youtubeUrls);
    //         localStorage.setItem('videos', JSON.stringify(youtubeUrls));
    //     }
    // } catch (e) {
    //     console.log(e);
    // }

    populateCards();
};


// calls getExercise depending on which button is clicked

function generateCardEventHandler(event) {
    if (event.target.id === "upper") {
        getExercises(upper);
    } else {
        getExercises(lower);
    }
};

getExerciseData(lower);

function populateCards() {
    var exercises = JSON.parse(localStorage.getItem('exercises'));

    console.log(exercises);
    var videos = JSON.parse(localStorage.getItem('videos'));

    for (i = 0; i < 5; i++) {
        console.log(exercises[i].name);
        var title = document.querySelector(`#title-${i}`);
        console.log(title);
        title.innerHTML = exercises[i].name;

        // var video = document.querySelector(`#video-${i}`);
        // video.src = videos[i];

        var muscle = document.querySelector(`#muscle-${i}`);
        muscle.innerHTML = `<strong> Muscle Targeted: </strong> ${exercises[i].muscle}`;

        var instructions = document.querySelector(`#instructions-${i}`);
        console.log(exercises[i].instructions)
        instructions.innerHTML = `<strong> Instructions: </strong> ${exercises[i].instructions}`

    }
};
// Makes the dropdown work on the cards
var dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});



for(element of arr){
    document.querySelector("columns").innerHTML += 
    <div class="column is-one-half">
        <div class="card has-background-light " id="exercise-0">
            <card-header class="card-header-title is-centered is-underlined">
             <p class="is-size-4 has-text-weight-bold" id="title-0">Name of exercise</p>
            </card-header>
            <div class="card-content ">
            <figure class="image is-2by1 is-fullwidth ">
                <iframe class="has-ratio" id="video-0" src="https://www.youtube.com/embed/YE7VzlLtp-4" frameborder="0"
                 allowfullscreen></iframe>
             </figure>
                    <div>
                    <p class="mt-2 mb-2 has-text-centered is-size-2" id="muscle-0">Biceps</p>
                    </div>

                <div class="dropdown">
                    <div class="dropdown-trigger">
                        <button class="button2 mt-4" aria-haspopup="true" aria-controls="dropdown-menu3">
                        <h2 class="has-text-centered"> <strong>Instructions</strong></h2>
                        <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                     <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                        <div class="dropdown-content">
                        <p id="instructions-0">Instructions</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
   
}










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













