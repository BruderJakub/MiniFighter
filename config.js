// Pirate Cove online settings.
// 1) Paste the firebaseConfig from your Firebase project (Project settings > Your apps > Web app) over the block below.
// 2) After your first visit, copy your 8-character Player ID from the profile into ownerCode
//    (and into database.rules.json), then upload this file again.
window.GAME_CONFIG = {
  firebase: {
    apiKey: "PASTE_YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000"
  },
  ownerCode: "YOURCODE"
};
