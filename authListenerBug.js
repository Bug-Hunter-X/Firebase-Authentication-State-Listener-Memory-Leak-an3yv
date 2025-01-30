const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe from the listener when you are done with it.
// This prevents memory leaks
// unsubscribe();