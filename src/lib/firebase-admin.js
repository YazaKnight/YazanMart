import admin from "firebase-admin"

import * as credential from "/Users/Yazan/.ssh/yazanmart-11255-firebase-adminsdk-i1peh-f7d5f93dc5.json"

admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: "https://yazanmart-11255-default-rtdb.europe-west1.firebasedatabase.app"
});

export const firebaseAuth = admin.auth