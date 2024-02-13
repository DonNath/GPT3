import React from 'react';

import{Blog, Features, Footer, Header, Possibiity, Possibility, WhatGPT3} from './containers';
import { Article, Brand, CTA, Feature, Navbar } from './components'; //NOTE FEATURE WAS NOT IMPORTED


const App = () => {
  return (
    <div className = "App">
      <div className='gradient__bg'>
       <Navbar/>
       <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App