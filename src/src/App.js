import React, { useEffect, useState } from 'react';
import {
  auth, GoogleAuthProvider, signInWithPopup,
} from './firebase';
import StoryUploader from './StoryUploader';
import StoryFeed from './StoryFeed';

function App() {
  const [user, setUser] = useState(null);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>📸 Passerkoot Hub</h2>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <StoryUploader user={user} />
          <hr />
          <StoryFeed />
        </>
      ) : (
        <button onClick={signIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;
