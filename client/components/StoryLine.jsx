import React from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';

import { Button, PopoverBox, SLine } from './Styled';

class StoryLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: false,
    };

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover() {
    const { popover } = this.state;

    this.setState({
      popover: !popover,
    });
  }

  render() {
    const { popover } = this.state;
    const { line, changeStory, changeEdit } = this.props;

    return (
      <Popover
        isOpen={popover}
        position="left"
        padding={10}
        onClickOutside={this.togglePopover}
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer
            position={position}
            targetRect={targetRect}
            popoverRect={popoverRect}
            arrowColor="#d1e4cb"
            arrowSize={50}
            arrowStyle={{ opacity: 0.7 }}
          >
            <PopoverBox>
              <Button onClick={() => { changeStory(line.identity); }}>Explore</Button>
              <Button onClick={() => { changeEdit(line.identity); }}>Expand</Button>
            </PopoverBox>
          </ArrowContainer>
        )}
      >
        {(ref) => (
          <SLine ref={ref} onClick={this.togglePopover}>
            {line.properties.text}
          </SLine>
        )}
      </Popover>
    );
  }
}

export default StoryLine;
