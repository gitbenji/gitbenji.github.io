const form = document.getElementsByTagName('form')[0]
const inputs = document.getElementsByTagName('input')

form.onsubmit = (e) => {
	e.preventDefault()
	makeApiCall()
}

function clearInputFields() {
  Array.prototype.forEach.call(inputs, function(input) {
      if (input.name != 'farm-name') {
        input.value = null;
      }
  });
}

function displaySuccess() {
  Array.prototype.forEach.call(inputs, function(input) {
      input.style.borderBottom = '1px solid green'
      setTimeout(function() {
        input.style.borderBottom = '1px solid black'
      }, 800)
  });
}

function handleAppendResponse(response) {
  clearInputFields()
  displaySuccess()
}

function makeApiCall() {
  var params = {
    // The ID of the spreadsheet to update.
    spreadsheetId: '1ogrSRHQNYurJIBKNq8UZMY3IlfmN-U1q4TWFXs1INqE',

    // The A1 notation of a range to search for a logical table of data.
    // Values will be appended after the last row of the table.
    range: 'Sheet1!A:E',

    // How the input data should be interpreted.
    valueInputOption: 'USER_ENTERED',

    // How the input data should be inserted.
    insertDataOption: 'INSERT_ROWS',
  };

  var valueRangeBody = {
	  "majorDimension": "ROWS",
	  "values": [
	    [
	      inputs[0].value,
	      inputs[1].value,
	      inputs[2].value,
	      inputs[3].value,
	      inputs[4].value
	    ]
	  ]
  };

  var response = {}
  handleAppendResponse(response)

  // var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
  // request.then(function(response) {
  //   handleAppendResponse(response)
  // }, function(reason) {
  //   console.error('error: ' + reason.result.error.message);
  // });
}

function initClient() {
  console.log('init')
  var API_KEY = 'AIzaSyC9bc0SH066IHnzIKeXYHXV31IHotK8ONo';  // TODO: Update placeholder with desired API key.

  var CLIENT_ID = '471812939106-a90sjsv0qb8r6qflpfra7o8pqnv4kqlh.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

  var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

  console.log(API_KEY)

  gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    console.log('then', gapi.client)
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
    updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

function handleClientLoad() {
  console.log('here')
  // gapi.load('client:auth2', initClient);
}

function updateSignInStatus(isSignedIn) {
  console.log(isSignedIn)
  if (isSignedIn) {
    // makeApiCall();
  } else {
    gapi.auth2.getAuthInstance().signIn();
  }
}

function handleSignInClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

function handleSignOutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}