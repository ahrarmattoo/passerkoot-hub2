import React, { useEffect, useState } from 'react';
import {
  db, collection, query, onSnapshot,
  orderBy, where
} from './firebase';

function StoryFeed() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
    const q = query(
      collection(db, 'stories'),
      where('createdAt', '>=', threeDaysAgo),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const storyList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStories(storyList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h3>🕒 Latest Stories (Last 3 Days)</h3>
      {stories.map(story => (
        <div key={story.id} style={{ marginBottom: '10px' }}>
          <strong>{story.user}</strong>
          <div>
            <img src={story.imageUrl} alt="story" width="100%" style={{ borderRadius: '8px' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoryFeed;
