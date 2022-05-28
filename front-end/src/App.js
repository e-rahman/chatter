import React from 'react'

import { Footer, Possibility, Features, Vote4words, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
    </div>
    <Brand />
    <Vote4words />
    <Features />
    <Possibility />
    <CTA />
    <Footer />
    </div>
  )
}

export default App