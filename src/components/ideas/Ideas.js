import React from 'react';
import './Ideas.css';
import Card from './../card/Card';

const Ideas = ({ ideas, deleteIdea }) => {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
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
