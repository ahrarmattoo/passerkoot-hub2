import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase';
import StoryUploader from './StoryUploader';
import StoryFeed from './StoryFeed';

function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>📸 Passerkoot Hub</h1>
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <StoryUploader user={user} />
          <StoryFeed />
        </>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;
