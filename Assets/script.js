// variables for the generate workout card and modal button
var button = document.getElementById('button')
var HiddenCard = document.getElementById('Go-Card')
var PromptCard = document.getElementById('card1')
var Lower = document.getElementById('lower')
var Upper = document.getElementById('upper')


function loadIn(){
    
    HiddenCard.classList.add('is-hidden');
    
}
loadIn()

button.onclick = function() {
    PromptCard.style.display = "none",
    HiddenCard.classList.remove("is-hidden");
    HiddenCard.classList.add("is-block");
} 

Upper.addEventListener('click',remove)
Lower.addEventListener('click',remove)

function remove() {
        HiddenCard.classList.remove("is-block");
        HiddenCard.classList.add("is-hidden")
    }


// variables to be used with the following functions: getExercises, generateCardEventHandler, generateCard event listener
var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var upper = ["lats", "biceps", "chest", "triceps", "abdominals"];
var lower = ["calves", "quadriceps", "hamstrings", "quadriceps", "glutes"];
var workoutButton = document.querySelector("#generate-workout");
var generateCard = document.querySelector("#generate-card");
var newExercise = {};
var muscleGroup;

// function to get exercise API data
async function getExercises(group) {
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
};


// calls getExercies depending on which button is clicked
function generateCardEventHandler(event) {
    if (event.target.id === "upper") {
        getExercises(upper);
    } else {
        getExercises(lower);
    }
};

// event listener for modal with workout buttons
modal.addEventListener("click", generateCardEventHandler);





// If I'm able to get it working I may need to move the maps script back into the index file. Keeping my keys here for now.
{/* <script async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w&callback=initMap">
</script>
<script async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1NLcFYrWo6k1mKFD4rYqi4TGBhWGtK0w&callback=initMap">
</script> */}

// const successCallBack = (position) => {
// console.log(position);
// };

// const errorCallBack = (error) => {
// console.error(error);
// };

// navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
// </script>
