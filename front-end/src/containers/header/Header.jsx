import React from 'react';
import './header.css';
import people from '../../assets/people/png';
import ai from '../../assets/ai/png';

const Header = () => {
  return (
    <div ClassName="vote4words__header section__padding" id="home">
      <div ClassName="vote4words__header-content">
        <h1 ClassName="gradient__text">Vote for Words You Care About</h1>
        <p>Make Your Voice Heard</p>
          
        <div ClassName="vote4words__header-content__input">
          <input type="email" placehiolder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div ClassName="vote4words__header-content__people">
          <img srg={people} alt="people"/>
          <p>7,894 people voted in the last 24 hours</p>
        </div>
      </div>
      <div ClassName="vote4words__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header