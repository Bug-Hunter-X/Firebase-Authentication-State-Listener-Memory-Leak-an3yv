import { onAuthStateChanged, auth } from './firebase';
import { useEffect } from 'react';

function MyComponent() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe(); // Cleanup function
  }, []);

  // ... rest of your component
}

export default MyComponent;