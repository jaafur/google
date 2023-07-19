import React, { useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass ,faMoon,faSun} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import Search from './Search'
import { useContext } from 'react'
import { MyContext } from './ResultsContextProvider'


const NavBar = ({darkTheme,setDarkTheme}) => {
   
  
  const { getResults, results, isLoading, searchTerm, setSearchTerm } = useContext(MyContext);
  
  return (
    <nav className='nav-bar'>
     <ul className='nav-bar-ul'>
      <li>
      <Link to='/' className='nav-link'>
        <span className='nav-bar-logo'>goggle <FontAwesomeIcon icon= {faMagnifyingGlass}/> </span>
        </Link>
      </li>
      <li>
        <Search />  
      </li>
      <li>
         <button className='nav-btn' onClick={()=>{setDarkTheme(!darkTheme)}}>
         {darkTheme? (<span>Dark <FontAwesomeIcon icon={faMoon} /></span>) :
                     (<span>Light <FontAwesomeIcon icon={faSun} /></span>)}
      </button>
      </li>
     </ul>
    </nav>

  )
}

export default NavBar
