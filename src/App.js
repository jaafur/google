import React, { useState } from 'react'
import NavigationPage from './components/NavigationPage'
import Footer from './components/Footer'
import NavBar from './components/NavBar'




 
const App = () => {
     
    const [darkTheme,setDarkTheme] = useState(false)
  return (<>
     <div className={darkTheme?'dark':'light'}>
       
       <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} /> 
       <NavigationPage />
       
     </div>
     <Footer className ={darkTheme  ?'footer-dark':'footer-light'}/>
     </> )
}

export default App
