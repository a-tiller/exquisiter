import React from 'react';

import StoryLine from './StoryLine';
import { StoryBlock } from './Styled';

const Explore = (props) => {
  const { story } = props;
  return (
    <StoryBlock>
      {story.map((line) => (<StoryLine key={line.identity.toString()} line={line} />))}
    </StoryBlock>
  );
};

export default Explore;
