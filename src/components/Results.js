import React, { Children, useEffect } from 'react';
import { useContext } from 'react';
import { MyContext } from './ResultsContextProvider';
import { useLocation } from 'react-router-dom';
import CustomeLoader from './CustomeLoader';
import ReactPlayer from 'react-player';

const Results = () => {
  const location = useLocation();
  const {getResults, results, isLoading, searchTerm,setSearchTerm}= useContext(MyContext);
 

  useEffect(() => {
    getResults(location.pathname);
   
   
  
  }, [location.pathname]);


  if (isLoading) {
    return <CustomeLoader />;
  }

  switch (location.pathname) {
  
    case '/search':
     
      return (
        
        <div className='search-container'>
          {results.results &&Array.isArray(results.results) && results.results.map((result, index) => {
            
            return(
              <div className='search-element' key={index}>
                 <h2>{result.title}</h2>
                  <p>{result.description || 'for more details click the link'  }</p>
                 <a href={result.link} target='_blank'>{result.link.slice(0, 50)}</a>
              </div>
            )
          })}
          
        </div>
      );

    case '/news':
     
      return (

        <div className='news-container'>
          {results.entries && Array.isArray(results.entries) && results.entries.map((result,index) => {
            return (
              <div className='news-element' key={index}>
               
                <h3>{result.title}</h3>
                
                
                  <h4>source : {result.source.title}</h4>
                  <a href={result.source.href}>{result.source.href} </a>
                  
                
                
              </div>
            )
          })}
        </div>
      );

    case '/image':
      return (
        <div className='images-container'>
        
          {results.image_results&& Array.isArray(results.image_results) && results.image_results.map((result, index) => {
            return(
            <div className='image-element' key={index} >
               <img src={result.image.src} alt={result.image.alt}  className='image'/>
               <div className='source-container'>
               <p>{result.link.title}</p>
               <a href={result.link.href} target='_blank'>{result.link.href.slice(0, 50)}</a>
            </div>
            </div>
      )})}
        </div>
      );

    case '/video':
      return (
        <div className='videos-container'>
          {results.results && Array.isArray(results.results) && results.results.map((result, index) => {
            return(<>
              
              
              {result.additional_links[0].href.includes('youtube') && 
              <div className='video-element'>
              <p className='vidio-link'>  <a href={result.link}>{result.title}</a></p>
              <div className='video-content'>
              <p>{result.description}</p>
              <ReactPlayer url={result.additional_links[0].href} controls className='video'/>
              </div>
              </div>
            }</>)
          })}
        </div>
      );

    default:
      return null;
  }
}

export default Results;
