# Firebase Authentication State Listener Memory Leak

This repository demonstrates a common error in Firebase web applications: forgetting to unsubscribe from authentication state change listeners.  Failing to do so can lead to memory leaks, particularly in long-running applications.

## Bug

The `authListenerBug.js` file shows how a listener is attached but never detached, resulting in a potential memory leak.  The listener continues to run even after the component is unmounted or the user navigates away from the page.

## Solution

The `authListenerSolution.js` file demonstrates the correct approach. The listener is attached using `onAuthStateChanged` and immediately assigned to a variable to enable later unsubscription.  An `useEffect` hook (in React) is used to properly unsubscribe when the component is unmounted or when the component is no longer needed.