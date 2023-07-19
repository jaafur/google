import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import  {NavLink}  from 'react-router-dom'
import { MyContext } from './ResultsContextProvider'
import {useDebounce} from 'use-debounce'

const Search = () => {
  const {searchTerm,setSearchTerm}= useContext(MyContext)
  const deboncedValue = useDebounce(searchTerm,300)
  const handleChange = (e)=>{
        setSearchTerm(e.target.value)
  }
  const links = [
    {url:'/search' ,text :'search'},
    {url:'/news' ,text :'news'},
    {url:'/image' ,text :'images'},
    {url:'/video' ,text :'video'},
    
  ]
  return (
    <>
      <input className='search-input' type='text' onChange={handleChange}/>
      <div className='search-links'>
          {links.map(({url,text}, index) => {
    return(
      <div className='nav-links'>
       
           <NavLink 
           to={url}  
           key={index}
           className='nav-link'
           activeClassName="active-link"
           >{text}</NavLink>
      </div>
    )
  }
  
  )}
  </div>
      <Outlet />
    </>
  )
}

export default Search
