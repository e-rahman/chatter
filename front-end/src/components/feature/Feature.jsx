import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div ClassName="vote4words__features-container__feature">
      <div ClassName="vote4words__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div ClassName="vote4words__features-container_feature-text">
        {text}
      </div>
    </div>
  )
}

export default Feature