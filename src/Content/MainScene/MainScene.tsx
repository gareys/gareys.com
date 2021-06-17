import React from 'react';
import styled from 'styled-components';

export const MainScene = () => {
  return (
    <Container>
      <h2>Welcome to my website.</h2>
      <p>
        If this isn't the worst thing you've seen, just keep your eyes open and
        click on things.
      </p>
      <h4>Things to click:</h4>
      <ol>
        <li>
          Dr. Snoogles, The Mischievous Chihuahua. Give him a click or six.
        </li>
        <li>Annoyed by the shaking text? Click it and forget it.</li>
        <li>
          Lost on a farm? Try clicking the massive hydrogen ball when it's not
          overcast.
        </li>
      </ol>
      As a side note, this entire site was built by me, Garey, using mostly my
      imagination... and also some knowledge of React, HTML, and CSS.
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
`;
