
// function to get exercise API data

var exerciseKey = '2qHB8VKEzSKFjKONqevhLw==6887eTADrOBvLuN8'
var muscle = "triceps"


async function exerciseApi() {
    const url = new URL("https://api.api-ninjas.com/v1/exercises");
    url.searchParams.set("muscle", muscle);
    const response = await fetch(url, { headers: { "X-API-Key": exerciseKey } });
    const data = await response.json();
    console.log(data);
};

exerciseApi();