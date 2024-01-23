import styled, { keyframes } from "styled-components";

const fillBarAnimation = (props: ProgressBarProps) => keyframes`
    to {
        transform: translateX(${props.towidth}%);
    }
`;

interface ProgressBarProps {
    backgroundColor: string | undefined;
    towidth: number;
}

export const StyledProgressBar = styled.div<ProgressBarProps>`
    position: relative;
    width: 60%;
    height: 20px;
    border-radius: 64px;
    overflow: hidden;
    font-size: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ProgressBarProps) => props.backgroundColor};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    transform: translateX(-100%);
    animation: ${(props) => fillBarAnimation(props)} 0.8s 0.3s ease-in-out forwards;
  }

  &::after {
    position: absolute;
    color: #000;
    z-index: 1;
  }
`;
