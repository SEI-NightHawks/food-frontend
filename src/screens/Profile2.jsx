// import { useState, useEffect } from "react";
// import { getUserProfile } from "../services/user_profiles.js";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import user_profiles from '../components/Profile.jsx'

// function Profile(//{ setShowNav }
//   ) {
//   // setShowNav(true);
//   const [profile, setUserProfile] = useState({});

//   let { id } = useParams();
//   let navigate = useNavigate();

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   async function fetchProfile() {
//     const oneProfile = await getUserProfile(id);
//     setUserProfile(oneProfile);
//   }

//   // async function handleEdit() {
//   //   await editCharacter(characterId);
//   //   navigate("/characters");
//   // }
//   // async function handleDelete(){
//   //   await deleteCharacter(characterId)
//   //   navigate("/characters")
//   // }

//   return (
//     <div>
      
//     </div>
//   );
// }

// export default Profile;