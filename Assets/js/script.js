var muscle = 'biceps';

// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//     headers: { 'X-Api-Key': '1eMy2DPRXxQxovuitinoNQ==uiM5SHEF0QyeCScD'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


// function testingAPI(){
//     let key = "1eMy2DPRXxQxovuitinoNQ==uiM5SHEF0QyeCScD";
//     let URL = "https://api.api-ninjas.com/v1/exercises?muscle";
//     console.log(httpGet(url,key));
// }
// testingAPI();

// Example POST method implementation:
// async function postData(url = "https://api.api-ninjas.com/v1/exercises?muscle", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "GET", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  


let url = "https://api.api-ninjas.com/v1/exercises?muscle";
function getAPI(event){
  return fetch(url, {
    mode: 'cors', 
    headers: {
      'x-api-key': "1eMy2DPRXxQxovuitinoNQ==uiM5SHEF0QyeCScD",
      'User-Agent' : 'My-App',
      'Accept': '*/*',
    },
    
  })
  .then(response => response.json())
  .catch(error => console.log('Error while fetching:', error))
}


function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.api-ninjas.com/v1/exercises?muscle';
  
    fetch(requestUrl, {
        mode: 'cors', 
        headers: {
      'x-api-key': "1eMy2DPRXxQxovuitinoNQ==uiM5SHEF0QyeCScD",
      'User-Agent' : 'My-App',
      'Accept': '*/*',
    },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        // for (var i = 0; i < data.length; i++) {
        //   var listItem = document.createElement('li');
        //   listItem.textContent = data[i].html_url;
        //   repoList.appendChild(listItem);
        // }
      });
  }

  getApi();

console.log("dumb_bell_noname".split("_"));