import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({user}) { 
// either use {user} i.e destructuring or props as is
  return (
    <div className='nav'>
        <NavLink id="link"to ="/"><img src="https://www.themoviedb.org/t/p/original/rO11TGG5ZG1LlmSJX0Q1j1AWGZJ.png" id="nav-img" /></NavLink>
        <div></div>
        {user? <div className='nav-links'><NavLink to="/sign-out"><button className="bg-red-400">SIGN OUT</button></NavLink><NavLink to="/add-character"><img id="add-char-img" src="https://cdn0.iconfinder.com/data/icons/game-ui-casual-chunky/533/IconsByAndreaFryer_GameUI_Chunky_AddFriend-512.png"/></NavLink></div>
        :<div className='nav-links'><NavLink to="/sign-up"><img id="sign-up-img"src="https://static.vecteezy.com/system/resources/previews/019/552/601/original/sign-up-icon-signup-square-box-on-transparent-background-free-png.png" /></NavLink></div>}

    </div>
  )
}

export default Nav