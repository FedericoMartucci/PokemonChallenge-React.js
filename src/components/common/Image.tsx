import styled from "styled-components";

interface ImgProps {
  width: string;
  height: string;
}

export const StyledImage = styled.img<ImgProps>`
  ${(props: ImgProps) => `
    width: ${props.width ?? "auto"};
    height: ${props.height ?? "auto"};
  `}
`;
