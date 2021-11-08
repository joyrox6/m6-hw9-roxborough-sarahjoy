var btn = document.querySelector('button')
var forecastEl = document.getElementById('forecast')


btn.onclick = function() {
    // console.log('clicked')
    fetch('https://api.openweathermap.org/data/2.5/weather?q=YOURQUERY&units=imperial&appid=1f4b4a7690d5fdbf1db1b7cd9f01fdcb') // make the request
    .then(function(res) {
        return res.json() // when the request is received, convert to json
    })
    .then(function(res) {
        console.log(res) // when the json is converted, log it
        console.log('Here!') // note: this will log BEFORE fetch is finished
        })
}
//.catch(function(err) {
//    console.log(err)
// })

.catch(displayLocNotFound)

// reset form field
inputEl.value = ""

// ********************* }

// call the OpenWeather API and return weather information
function getWeather(query) {
    // place default to USA
    if(!query.includes(",")) query += ',us'
    // return fetch call
    // call function
    return fetch(
        'api.openweathermap.org/data/2.5/weather?q=' +
        query +
        ''
    )

    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        // location not found
        if (data.cod === "404") throw new Error('location not found')
        // place weather icon URL

    }

    
}
