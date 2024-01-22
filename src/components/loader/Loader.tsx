import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}

93% {
    transform: rotateZ(355deg);
}

96% {
    transform: rotateZ(357deg);
}

99% {
    transform: rotateZ(359deg);
}

100% {
    transform: rotateZ(360deg);
}
`;

const StyledLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  animation: ${spinAnimation} 2s infinite;
`;

const StyledUpperHalfLoader = styled.div`
  width: 160px;
  height: 80px;
  border-radius: 120px 120px 0 0;
  outline: 8px solid black;
  background-color: red;
`;
const StyledCenterLoader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  outline: 4px solid black;
  z-index: 1;
  margin-top: -16px;
`;
const StyledLowerHalfLoader = styled.div`
  width: 160px;
  height: 80px;
  border-radius: 120px 120px 0 0;
  outline: 8px solid black;
  background-color: red;
  transform: rotate(180deg);
  background-color: white;
  margin-top: -20px;
`;

export default function Loader() {
  return (
    <StyledLoaderContainer>
      <StyledLoader>
        <StyledUpperHalfLoader />
        <StyledCenterLoader/>
        <StyledLowerHalfLoader />
      </StyledLoader>
    </StyledLoaderContainer>
  );
}
