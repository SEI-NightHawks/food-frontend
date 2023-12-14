import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateUserProfile } from '../services/user_profiles.js';


function EditProfile({user}) {

    let navigate = useNavigate()
  
    useEffect(() => {
      fetchUserProfile()
    }, [])
  
    async function fetchUserProfile() {
      const user = await updateUserProfile(id)
      setUserPorfile(userProfile)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await editCharacter(id, character)
      navigate(`/characters/${id}`)
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target
  
      setCharacter((prevCharacter) => ({
        ...prevCharacter,
        [name]: value
      }))
    }
  
    return (
      <div>
        <h1>Edit the character in our Database!</h1>
        <form className="create-form" onSubmit={handleSubmit}>
            
             <input
              className='input-image_Link'
              placeholder='image-Link'
              value={character.image_Link}
              name='image_Link'
              required
              onChange={handleChange}
            />
          <button type="submit">Edit Your Character!</button>
        </form>
      </div>
    )
  }

export default EditProfile
