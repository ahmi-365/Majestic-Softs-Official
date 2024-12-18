import React, { useState, useEffect } from "react";
import styled from "styled-components";



const Typewriter: React.FC = () => {
  const [cmdText, setCmdText] = useState<string>("Execute Flawlessly");

  useEffect(() => {
    const words: string[] = ['Think Big', 'Plan Smart'];
    let i = 0;
    const interval = setInterval(() => {
      setCmdText(words[i]);
      i = (i + 1) % words.length;
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
      <StyledWrapper>
        <h2>
          <pre className="pre">
            {"          "}
            {"\n"}
            {"          "}
            <code></code>
            {"\n"}
            {"          "}
            <code data-cmd={cmdText} className="cmd" />
            {"\n"}
            {"        "}
          </pre>
        </h2>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    overflow-x: auto;
    padding: 1rem;
    color: white;
    background-color: black;
    white-space: nowrap;
  }
  .pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    overflow: hidden;
    box-sizing: border-box;
  }
  .pre code:nth-child(1) {
    color: #575757;
  }
  .pre code:nth-child(2) {
    color: #e34ba9;
  }
  .cmd {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    animation: inputs 5s steps(22) infinite;
  }
  .cmd::after {
    content: "_";
    position: relative;
    display: block;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #e34ba9;
    animation: cursor 0.5s step-end infinite alternate, blinking 0.4s infinite;
  }

  @keyframes blinking {
    20%,
    80% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
  }
  @keyframes cursor {
    50% {
      border-right-color: transparent;
    }
  }
  @keyframes inputs {
    0%,
    100% {
      width: 0;
    }
    10%,
    90% {
      width: 58px;
    }
    30%,
    70% {
      width: 215px;
      max-width: max-content;
    }
  }
`;


export default Typewriter;
