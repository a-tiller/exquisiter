import React from 'react';

import StoryLine from './StoryLine';
import { StoryBlock } from './Styled';

const Explore = (props) => {
  const { story, changeStory, changeEdit } = props;
  return (
    <StoryBlock>
      {story.map((line) => (
        <StoryLine
          key={line.identity.toString()}
          line={line}
          changeStory={changeStory}
          changeEdit={changeEdit}
        />
      ))}
    </StoryBlock>
  );
};

export default Explore;
