import React, { useState } from 'react';
import {
  storage, ref, uploadBytes, getDownloadURL,
  db, collection, addDoc, serverTimestamp
} from './firebase';

function StoryUploader({ user }) {
  const [file, setFile] = useState(null);

  const uploadStory = async () => {
    if (!file) return;
    const fileRef = ref(storage, `stories/${user.uid}/${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    await addDoc(collection(db, 'stories'), {
      user: user.displayName,
      uid: user.uid,
      imageUrl: url,
      createdAt: serverTimestamp()
    });
    setFile(null);
    alert('Story uploaded!');
  };

  return (
    <div>
      <input type="file" accept="image/*,video/*" onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadStory}>Post Story</button>
    </div>
  );
}

export default StoryUploader;
