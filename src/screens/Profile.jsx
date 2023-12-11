import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../services/user_profiles';
import { getPost } from '../services/posts.js';

function Profile() {
  const { profileId } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const profileData = await getUserProfile(profileId);
        setUserProfile(profileData);

        // Fetch user photos
        const photosData = await getPost(profileId);
        setUserPosts(photosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [profileId]);

  return (
    <div className="container mx-auto px-4">
      {/* Display user profile information */}
      <div className="w-40 h-40 overflow-hidden rounded-full border-4 border-white"></div>
      <h1 className="text-2xl font-bold">{userProfile.username} Profile</h1>
      
      {/* Display user photos */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {userPosts.slice(0, 9).map((photo) => (
          <img key={photo.id} src={photo.imageUrl} alt={`Photo ${photo.id}`} className="w-full h-auto" />
        ))}
      </div>
    </div>
  );
}

export default Profile;
