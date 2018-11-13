import * as functions from 'firebase-functions';
const {dialogflow} = require('actions-on-google');
const app = dialogflow({debug: true});
const Datastore = require('@google-cloud/datastore');


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript


 exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
 
 app.intent('comp', (conv, {version}) => {
    conv.close('Hi there! ☺️  Where is your company based? Select from below and enter.');
  
    
});
app.intent('home', (conv, {version}) => {
    conv.close('hi, i m frank, let start the chat each other');
    
    
});



