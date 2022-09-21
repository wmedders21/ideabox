import React from 'react';
import './Ideas.css';
import Card from './../card/Card';

const Ideas = ({ideas}) => {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })
  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
