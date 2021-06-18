import React from 'react';
import styled from 'styled-components';

export const MainScene = () => {
  return (
    <Container>
      <h2>Welcome to my website.</h2>
      <hr />
      <p>My name is Garey. I am a software engineer. </p>
      <p>
        This site is meant to be a representation of myself and my work as it
        pertains to software. Anything strange or annoying that you encounter
        herein is likely intentional.
      </p>
      <p>Thank you for your time.</p>
      <hr />
      <p>
        Below you will find some relevant links, a small collection of my{' '}
        <i>operational*</i> side projects and old client work when I used to
        have the energy to keep working after work. There is also a guide to
        using this website since it is possible to get lost in its madness.
      </p>
      <h3>Links</h3>
      <hr />
      <ul className="horizontal-list">
        <li>
          <a href="https://github.com/gareys">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gareys">LinkedIn</a>
        </li>
      </ul>
      <h3>Side Projects</h3>
      <hr />
      <ul>
        <li>
          <a href="https://otcopus.com/" aria-label="OTCopus - Stock Scanner">
            OTCopus - OTC Stock Scanner
          </a>
          <pre>
            A stock scanner purpose built to filter and sort OTC stocks by a
            variety of criteria. The data is not up to date.
          </pre>
          <h5>Stack</h5>
          <ul>
            <li>
              Frontend - Next.js, React 16.x, TypeScript 4.1.x, AG Grid -
              deployed on Netlify
            </li>
            <li>Backend - Serverless, NodeJS, DynamoDB, S3</li>
          </ul>
        </li>
        <li>
          <a href="https://tesla-table.netlify.app/" aria-label="Tezz.la">
            Tezz.la
          </a>
          <pre>
            A Tesla inventory browser with filterable results. This site depends
            entirely on the state of Tesla's internal vehicle inventory API and
            is subject to the health of their endpoints.{' '}
            <strong>No longer maintained</strong>
          </pre>
          <h5>Stack</h5>
          <ul>
            <li>Frontend - Gatsby, React 16.x - deployed on Netlify</li>
            <li>Backend - Netlify Functions</li>
          </ul>
        </li>
        <li>
          Pressure
          <pre>
            A barometric pressure tracker and notification app. This app was
            meant to be used by people with chronic pain triggered by barometric
            pressure changes. I planned for this app to track pressure changes
            and user input about pain to notify users when they might experience
            pain based on forecasted pressure changes.{' '}
            <strong>No longer maintained.</strong>
          </pre>
          <h5>Stack</h5>
          <ul>
            <li>Frontend - React Native</li>
            <li>Backend - NodeJS, Express</li>
          </ul>
        </li>
      </ul>
      <h3>Client Work</h3>
      <hr />
      <p>Most of this is very old, but I'll leave it here to collect dust.</p>
      <ul>
        <li>
          <a href="https://the-frank.web.app/" aria-label="The Frank">
            The Frank
          </a>{' '}
          <pre>
            I built this site for a repeat customer of mine, Jason, who wanted
            to share a daily sports email with subscribers. This was just a
            landing page. Very basic work written in AngularJS, hosted on
            Firebase.
          </pre>
        </li>
        <li>
          <a
            href="https://designcue-staging.firebaseapp.com/"
            aria-label="The Frank"
          >
            DesignCue v1
          </a>{' '}
          <pre>
            I built this site for a another repeat customer of mine, Preston,
            who wanted to create a super-fast way for customers to generate a
            quote for design services. Try the quote generator on the homepage.
            Written in React, hosted on Firebase.
          </pre>
        </li>
        <li>
          <a
            href="https://designcue-3292d.firebaseapp.com/"
            aria-label="The Frank"
          >
            DesignCue v2
          </a>{' '}
          <pre>
            Preston came back with another business model and we built v2. He's
            an incredible designer. The talent page has a nice carousel if you
            scroll down. It could have been better. Written in React, hosted on
            Firebase.
          </pre>
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20031020111334/http://skynet2029.com/"
            aria-label="Skynet2029"
          >
            Skynet2029
          </a>{' '}
          <pre>
            I really just find it funny that the{' '}
            <a href="https://web.archive.org/">Wayback Machine</a> exists. So
            this is one of my very first paid client projects. I was
            commissioned to build a Terminator fan site by a guy I met on Xbox
            Live. I was 13 or 14 when I built it. He paid me in video games. Be
            careful clicking around the wayback calendar because it was an adult
            site before it was a Terminator fan site. Built in PHP Nuke, hosted
            somewhere cheap.
          </pre>
        </li>
      </ul>
      <h3>Visitor Guide</h3>
      <hr />
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
  padding: 20px;
  pre {
    white-space: normal;
    font-size: 14px;
    font-weight: normal;
    border: 1px solid ${(props) => props.theme.headerSubTitle};
    padding: 5px 8px;
  }
  .horizontal-list {
    padding-left: 20px;
    li {
      display: inline-block;
      margin-top: 0;
      &:not(:last-child):after {
        margin: auto 20px;
        content: '|';
      }
    }
  }
  ul,
  ol {
    max-width: 500px;
    li {
      font-weight: bold;
      font-size: 16px;
      margin-top: 20px;
      ul {
        padding-left: 17px;
        li {
          font-weight: normal;
          margin-top: 0px;
          font-size: 14px;
        }
      }
    }
  }
  h5 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
