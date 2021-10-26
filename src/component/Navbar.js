import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
           <ul>
               <li><Link to="/">Home</Link></li>
               <br/>
               <li><Link to="/about">About</Link></li>
               <br/>
               <li><Link to="/contact">Contact</Link></li>
               <br/>
               <li><Link to="/post/mobile">Post</Link></li>
               <br/>
               <li><Link to="/post/mobile/1">Post ID</Link></li>

           </ul>
        </div>
    )
}

export default Navbar
