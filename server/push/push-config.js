var fs = require('fs');
var path = require('path');

exports.appId = 'taxi-app';
exports.appUserId = 'stephane';
exports.appName = 'TaxiApp'; // Replace with your unique name
exports.appDescription = 'Taxi Application';

// Use your own Server Key as generated by Google Developer Console
// For more details, see http://developer.android.com/google/gcm/gs.html
exports.gcmServerApiKey = 'AIzaSyBwWnWSKy97eibsAOKKL18i2SOMA3EWnIk';

// You may want to use your own credentials here
exports.apnsCertData = readCredentialsFile('apns_cert_dev.pem');
exports.apnsKeyData = readCredentialsFile('apns_key_dev.pem');


//--- Helper functions ---

function readCredentialsFile(name) {
  return fs.readFileSync(
    path.resolve(__dirname, 'credentials', name),
    'UTF-8'
  );
}
