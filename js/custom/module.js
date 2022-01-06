const hostWhatsappApi = "http://192.168.10.240:8080/api/v1/whatsapp"
const hostEmailApi = ""

function httpGetRequest(urlPath = "") {
    return fetch(urlPath)
    .then(response => response.json())
    .then(data => data);
  
}

async function httpPostRequest(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

function convertDateTime(dateRFC3339 = "") {
    let splitT = dateRFC3339.split("T")
    let splitTime = splitT[1].split("+")

    return `${splitT[0]} ${splitTime[0]} ${splitTime[1]}`
}
  
export {
    hostWhatsappApi, 
    hostEmailApi,
    httpGetRequest,
    httpPostRequest,
    convertDateTime
}