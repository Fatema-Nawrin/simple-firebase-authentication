/* 1. Create a project in console.firebase.google.com
2. Install in project
3. Register web app in firebase
4. Copy firebase.init.js with config from firebase settings.
5. export default app
6. import app from firebase.init.js to app.js
7. import getAuth from firebase/auth and create outside of function (const auth = getAuth(app);) in app.js
8. Go back to home page and authentication and (firebase->authentication & enable google sign in)
9. Create google provider in app.js
10. Use  signInWithPopup(auth, provider)
11. .then (if successful) and .catch(if error)
*/
