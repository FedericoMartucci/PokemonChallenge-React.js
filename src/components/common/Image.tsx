import styled from "styled-components";

interface ImgProps {
  width?: string;
  height?: string;
  maxWidth?: string;
  opacity?: number;
  padding?: string;
}

export const StyledImage = styled.img<ImgProps>`
  ${(props: ImgProps) => `
    width: ${props.width ?? "auto"};
    height: ${props.height ?? "auto"};
    max-width: ${props.maxWidth ?? "auto"};
    opacity: ${props.opacity ?? "1"};
    padding: ${props.padding ?? "0"};
  `}
`;
